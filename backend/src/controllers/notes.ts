import { RequestHandler } from "express";
import NoteModel from "../models/note";

export const getNotes: RequestHandler = async (req, res, next) => {
  try {
    // throw Error("Bazinga!");
    const notes = await NoteModel.find().exec();
    res.status(200).json(notes);
  } catch (error) {
    next(error);
  }
};

export const createNotes: RequestHandler = async (req, res, next) => {
  const title = req.body.title;
  const text = req.body.text;
  try {
    const newNote = NoteModel.create({
      title: title,
      text: text,
    }); // create returns a promise by itself and hence .exec() is not needed
    res.status(201).json(newNote);
  } catch (error) {
    next(error);
  }
};

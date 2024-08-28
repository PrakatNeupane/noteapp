import "dotenv/config";
import NoteModel from "./models/note";
import notesRoutes from "./routes/notes";

import express, { NextFunction, Request, Response } from "express";
const app = express(); // app is server

app.use(express.json());
app.use("/api/notes", notesRoutes);

app.use((req, res, next) => {
  next(Error("Endpoint not found"));
});

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  let errorMessage = "An unknown error occurred";
  if (error instanceof Error) errorMessage = error.message;
  res.status(500).json({
    error: errorMessage,
  });
});

export default app;

import styles from "../styles/Note.module.css";
import { Card } from "react-bootstrap";
import { Note as NoteModel } from "../models/note";
import { formatDate } from "../utils/formatDate";

interface NoteProps {
  note: NoteModel;
  className?: string;
}

const Note = ({ note }: NoteProps) => {
  const { title, text, createdAt, updatedAt } = note;

  let createdUpdatedText: string;
  if (updatedAt > createdAt) {
    createdUpdatedText = "Updated: " + formatDate(updatedAt);
  } else {
    createdUpdatedText = "Created: " + formatDate(createdAt);
  }
  return (
    <Card className={`${styles.noteCard}`}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className={styles.cardText}>{text}</Card.Text>
        <Card.Footer className="text-muted">{createdUpdatedText}</Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default Note;

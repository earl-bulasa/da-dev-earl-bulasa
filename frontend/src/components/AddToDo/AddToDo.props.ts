import ToDo from "../../types/ToDo";

export interface AddToDoPublicProps {
  addNewToDoToList: (toDo: ToDo) => void;
}

export interface AddToDoCalcedProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  details: string;
  setDetails: React.Dispatch<React.SetStateAction<string>>;
  addToDo: (e: React.FormEvent<HTMLFormElement>) => void;
}
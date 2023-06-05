import ToDo from "../../types/ToDo";

export interface ToDosPublicProps {
  toDos: ToDo[];
  updateCompleteToDos: (id: number) => void;
  removeToDoInList: (id: number) => void;
}

export interface ToDosCalcedProps {
  toDos: ToDo[];
  handleCompleteToDo: (id: number) => void;
  handleRemoveToDo: (id: number) => void;
}
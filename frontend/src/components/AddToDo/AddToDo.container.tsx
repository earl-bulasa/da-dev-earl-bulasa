import { useState } from "react";

import AddToDoView from "./AddToDo.view";
import ToDo from "../../types/ToDo";
import apiFetch, { AddNewToDo } from "../../services/apiFetch";
import { AddToDoCalcedProps, AddToDoPublicProps } from "./AddToDo.props";

const AddToDoContainer: React.FC<AddToDoPublicProps> = ({
  addNewToDoToList,
}) => {
  const [name, setName] = useState("");

  const clearForm = () => {
    setName("");
  };

  const addToDo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    apiFetch<{ to_do: ToDo }>(AddNewToDo({ name } as ToDo))
      .then((res) => {
        clearForm();
        addNewToDoToList(res.data.to_do);
      })
      .catch((err) => console.log(err));
  };

  const calcedProps: AddToDoCalcedProps = {
    name,
    setName,
    addToDo,
  };

  return <AddToDoView {...calcedProps} />;
};

export default AddToDoContainer;

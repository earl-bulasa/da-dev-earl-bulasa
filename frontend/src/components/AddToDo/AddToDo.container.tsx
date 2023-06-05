import { useState } from "react";

import AddToDoView from "./AddToDo.view";
import ToDo from "../../types/ToDo";
import apiFetch, { AddNewToDo } from "../../services/apiFetch";
import { AddToDoCalcedProps, AddToDoPublicProps } from "./AddToDo.props";

const AddToDoContainer: React.FC<AddToDoPublicProps> = ({
  addNewToDoToList,
}) => {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");

  const clearForm = () => {
    setName("");
    setDetails("");
  };

  const addToDo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    apiFetch<{ to_do: ToDo }>(AddNewToDo({ name, details } as ToDo))
      .then((res) => {
        clearForm();
        addNewToDoToList(res.data.to_do);
      })
      .catch((err) => console.log(err));
  };

  const calcedProps: AddToDoCalcedProps = {
    name,
    setName,
    details,
    setDetails,
    addToDo,
  };

  return <AddToDoView {...calcedProps} />;
};

export default AddToDoContainer;

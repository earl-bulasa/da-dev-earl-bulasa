import apiFetch, { CompleteToDo, DeleteToDo } from "../../services/apiFetch";
import { ToDosCalcedProps, ToDosPublicProps } from "./ToDos.props";
import ToDosView from "./ToDos.view";

const ToDosContainer: React.FC<ToDosPublicProps> = ({
  updateCompleteToDos,
  removeToDoInList,
  ...props
}) => {
  const handleCompleteToDo = (id: number) => {
    apiFetch(CompleteToDo(id))
      .then((res) => updateCompleteToDos(id))
      .catch((err) => console.log(err));
  };

  const handleRemoveToDo = (id: number) => {
    apiFetch(DeleteToDo(id))
      .then((res) => removeToDoInList(id))
      .catch((err) => console.log(err));
  };

  const calcedProps: ToDosCalcedProps = {
    ...props,
    handleCompleteToDo,
    handleRemoveToDo
  };

  return <ToDosView {...calcedProps} />;
};

export default ToDosContainer;

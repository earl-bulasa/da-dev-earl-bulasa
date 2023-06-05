import apiFetch, { CompleteToDo } from "../../services/apiFetch";
import { ToDosCalcedProps, ToDosPublicProps } from "./ToDos.props";
import ToDosView from "./ToDos.view";

const ToDosContainer: React.FC<ToDosPublicProps> = ({
  updateCompleteToDos,
  ...props
}) => {
  const handleCompleteToDo = (id: number) => {
    apiFetch(CompleteToDo(id))
      .then((res) => updateCompleteToDos(id))
      .catch((err) => console.log(err));
  };

  const calcedProps: ToDosCalcedProps = {
    ...props,
    handleCompleteToDo,
  };

  return <ToDosView {...calcedProps} />;
};

export default ToDosContainer;

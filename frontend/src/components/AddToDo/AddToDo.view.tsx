import { AddToDoCalcedProps } from "./AddToDo.props";

const AddToDoView: React.FC<AddToDoCalcedProps> = ({
  name,
  details,
  setName,
  setDetails,
  addToDo,
}) => {
  return (
    <div>
      <form onSubmit={addToDo} className="flex flex-col">
        <div className="flex gap-x-2">
          <span>Name: </span>
          <input
            className="border border-black"
            type="text"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </div>
        <div className="flex gap-x-2">
          <span>Details: </span>
          <textarea
            className="border border-black"
            rows={10}
            onChange={(e) => setDetails(e.currentTarget.value)}
            value={details}
          />
        </div>
        <button type="submit">Save To Do</button>
      </form>
    </div>
  );
};

export default AddToDoView;

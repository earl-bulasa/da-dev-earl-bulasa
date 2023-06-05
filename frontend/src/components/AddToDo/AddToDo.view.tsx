import { AddToDoCalcedProps } from "./AddToDo.props";

const AddToDoView: React.FC<AddToDoCalcedProps> = ({
  name,
  setName,
  addToDo,
}) => {
  return (
    <div>
      <form onSubmit={addToDo} className="flex flex-col gap-y-2">
        <div className="flex flex-col items-start gap-x-2">
          <label htmlFor="name">To Do</label>
          <input
            className="border border-black"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </div>
        <button className="border border-black" type="submit">Save To Do</button>
      </form>
    </div>
  );
};

export default AddToDoView;

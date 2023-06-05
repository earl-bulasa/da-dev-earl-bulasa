import { ToDosCalcedProps } from "./ToDos.props";

const ToDosView: React.FC<ToDosCalcedProps> = ({
  toDos,
  handleCompleteToDo,
  handleRemoveToDo,
}) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="w-40">To Do</th>
            <th className="w-40">Complete</th>
            <th className="w-40">Delete</th>
          </tr>
        </thead>
        <tbody>
          {toDos.map((toDo) => {
            return (
              <tr key={toDo.id}>
                <td>
                  <p>{toDo.name}</p>
                </td>
                <td>
                  <input
                    type="checkbox"
                    disabled={toDo.is_complete}
                    checked={toDo.is_complete}
                    onChange={() => handleCompleteToDo(toDo.id)}
                  />
                </td>
                <td>
                  <button className="border border-black px-2" onClick={() => handleRemoveToDo(toDo.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ToDosView;

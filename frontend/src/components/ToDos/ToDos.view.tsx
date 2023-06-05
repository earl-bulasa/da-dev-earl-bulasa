import { ToDosCalcedProps } from "./ToDos.props";

const ToDosView: React.FC<ToDosCalcedProps> = ({ toDos, handleCompleteToDo }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>To Do</th>
            <th>Complete</th>
          </tr>
        </thead>
        <tbody>
          {toDos.map((toDo) => {
            return (
              <tr key={toDo.id}>
                <td className="flex flex-col">
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ToDosView;

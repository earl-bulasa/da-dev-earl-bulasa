import { ToDosCalcedProps } from "./ToDos.props";

const ToDosView: React.FC<ToDosCalcedProps> = ({ toDos, handleCompleteToDo }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="justify-start w-40">To Do</th>
            <th className="w-40">Complete</th>
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ToDosView;

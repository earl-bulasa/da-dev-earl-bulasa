import { useState, useEffect } from "react";
import AddToDo from "./components/AddToDo";
import ToDos from "./components/ToDos";

import "./App.css";
import ToDo from "./types/ToDo";
import apiFetch, { GetToDos } from "./services/apiFetch";

const App: React.FC = () => {
  const [toDos, setToDos] = useState<ToDo[]>([]);

  useEffect(() => {
    apiFetch<{ to_dos: ToDo[] }>(GetToDos).then((res) => {
      setToDos(res.data.to_dos);
    });
  }, []);

  const updateCompleteToDos = (id: number) => {
    const newToDos = toDos.map((toDo) =>
      toDo.id === id ? { ...toDo, is_complete: true } : toDo
    );

    setToDos(newToDos);
  };

  const addNewToDoToList = (toDo: ToDo) => {
    setToDos([...toDos, toDo]);
  };

  const removeToDoInList = (id: number) => {
    setToDos([...toDos].filter((toDo) => toDo.id !== id));
  };

  return (
    <div className="flex gap-x-5">
      <AddToDo addNewToDoToList={addNewToDoToList} />
      <ToDos
        toDos={toDos}
        updateCompleteToDos={updateCompleteToDos}
        removeToDoInList={removeToDoInList}
      />
    </div>
  );
};

export default App;

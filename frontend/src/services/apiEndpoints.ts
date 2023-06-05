import Endpoint from "../types/EndPoint";
import ToDo from "../types/ToDo";


export const GetToDos: Partial<Endpoint> = {
  url: '/to-do',
  method: 'GET'
}

export const AddNewToDo = (toDo: ToDo): Partial<Endpoint> => ({
  url: '/to-do',
  method: 'POST',
  data: toDo
})

export const CompleteToDo = (id: number): Partial<Endpoint> => ({
  url: `/to-do/${id}`,
  method: 'PATCH'
})

export const DeleteToDo = (id: number): Partial<Endpoint> => ({
  url: `/to-do/${id}`,
  method: 'DELETE'
})
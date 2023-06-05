<?php

namespace App\Repositories;

use App\Http\Resources\ToDoResource;
use App\Interfaces\ToDoRepositoryInterface;
use App\Models\ToDo;

class ToDoRepository implements ToDoRepositoryInterface
{
  public function getAllToDos()
  {
    return ToDoResource::collection(ToDo::orderBy('created_at', 'desc')->get());
  }

  public function addToDo(array $request)
  {
    return ToDo::create($request);
  }

  public function removeToDo(int $id)
  {
    return ToDo::destroy($id);
  }

  public function completeToDo(int $id)
  {
    return ToDo::whereId($id)->update([
      'is_complete' => true
    ]);
  }
}

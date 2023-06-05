<?php

namespace App\Interfaces;


interface ToDoRepositoryInterface
{
  public function getAllToDos();

  public function addToDo(array $request);

  public function removeToDo(int $id);

  public function completeToDo(int $id);

}
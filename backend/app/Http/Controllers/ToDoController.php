<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddToDoRequest;
use App\Interfaces\ToDoRepositoryInterface;

class ToDoController extends Controller
{
    private ToDoRepositoryInterface $toDoRepository;

    public function __construct(ToDoRepositoryInterface $toDoRepository)
    {
        $this->toDoRepository = $toDoRepository;
    }

    /**
     * Gets all todos
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $to_dos = $this->toDoRepository->getAllToDos();

        return response()->json(['to_dos' => $to_dos], 200);
    }

    /**
     * Store new todo
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AddToDoRequest $request)
    {
        $to_do_request = [
            'name' => $request->name
        ];

        $to_do = $this->toDoRepository->addToDo($to_do_request);

        return response()->json(['to_do' => $to_do], 200);

    }

    /**
     * Update to do status to complete
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update($id)
    {
        $this->toDoRepository->completeToDo($id);

        return response()->json(['completed' => true], 200);
    }

    /**
     * Remove the to do
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $this->toDoRepository->removeToDo($id);

        return response()->json(['deleted' => true], 200);
    }
}

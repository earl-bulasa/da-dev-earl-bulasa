<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Interfaces\ToDoRepositoryInterface;
use App\Repositories\ToDoRepository;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(ToDoRepositoryInterface::class, ToDoRepository::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}

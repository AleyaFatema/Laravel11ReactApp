<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use function Laravel\Prompts\alert;

class UserController extends Controller
{
    public function loadUsers()
    {
        $users = User::all();
        return Inertia::render('Users/Index',['users'=>$users]);
    }

    public function loadEditForm($id) {
        $user = User::find($id); //dd($user);
        return Inertia::render('Users/Edit',['user'=>$user]);
    }

    public function updateUser(Request $request) {
        $request->validate([
            'name' => 'required',
            'email' => 'required',
        ]);

        $user = User::find($request->id);
        $user->update([
            'name' => $request->name,
            'email' => $request->email,
        ]);

        return to_route('users.index');

    }

    public function deleteUser($id) {
        $user = User::find($id);
        $user->delete();
        return to_route('users.index');
    }



}

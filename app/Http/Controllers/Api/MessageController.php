<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Message;
use App\Models\User;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function getAllMessages()
    {
        $messages = Message::with('user')->get();
     
        return response()->json($messages);
    }

    

    function changeMessageStatus($messageId, $newStatus)
    {
    $message = Message::find($messageId);

    if (!$message) {
        // Le message n'existe pas
        return false;
    }

    // Mettre à jour le statut du message
    $message->status = $newStatus;
    $message->save();

    return true;
    }

    public function orderByDate()
    {
        $messages = Message::orderBy('created_at')->get();
        return response()->json($messages);
    }

    public function getMessageOwner($id)
    {
        $message = Message::findOrFail($id);
        $ownerId = $message->user_id;

        $user = User::findOrFail($ownerId);
        $ownerName = $user->username;

    return response()->json(['owner_id' => $ownerId, 'owner_name' => $ownerName]);
    }

    public function getMessagesByTheme($themeId)
    {
        $messages = Message::where('theme_id', $themeId)->get();
        return response()->json($messages);
    }

    public function getMessagesBySubtheme($subthemeId)
    {
        $messages = Message::where('subtheme_id', $subthemeId)->get();
        return response()->json($messages);
    }

    public function getMessageAttributes($id)
    {
        $message = Message::findOrFail($id);
        $attributes = $message->toArray();
        return response()->json($attributes);
    }

    public function createMessage(Request $request)
    {
        $message = Message::create($request->all());
        return response()->json($message, 201);
    }

    public function filterMessages(Request $request)
    {
        $messages = Message::where($request->all())->get();
        return response()->json($messages);
    }

    public function updateMessage($id,Request $request )
    {
       // print_r($request->all());
        //var_dump($request->all());
        $message = Message::findOrFail($id);
        $message->update($request->all());
        //dd($id);
       
       return response()->json($message, 200);
    }

    public function deleteMessage($id)
    {
        $message = Message::findOrFail($id);
        $message->delete();
        return response()->json(['message' => 'Message deleted']);
    }
}
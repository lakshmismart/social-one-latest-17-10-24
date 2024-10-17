<?php

// app/Http/Controllers/MessageController.php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'recipient_user_id' => 'required|exists:users,id',
            'subject' => 'nullable|string|max:255',
            'message_content' => 'required|string',
            'attachment' => 'nullable|string|max:255',
            'read_status' => 'nullable|in:Read,Unread',
            'response_status' => 'nullable|in:Responded,No Response',
        ]);

        $message = Message::create([
            'sender_user_id' => auth()->id(),
            'recipient_user_id' => $request->input('recipient_user_id'),
            'subject' => $request->input('subject'),
            'message_content' => $request->input('message_content'),
            'attachment' => $request->input('attachment'),
            'read_status' => $request->input('read_status', 'Unread'),
            'response_status' => $request->input('response_status', 'No Response'),
        ]);

        return response()->json($message, 201);
    }

    public function index()
    {
        $messages = Message::where('sender_user_id', auth()->id())
            ->orWhere('recipient_user_id', auth()->id())
            ->orderBy('created_at', 'desc')
            ->get();

        return response()->json($messages);
    }

    public function show($id)
    {
        $message = Message::findOrFail($id);

        return response()->json($message);
    }
    
    public function update(Request $request, $id)
    {
        $message = Message::findOrFail($id);

        $request->validate([
            'read_status' => 'nullable|in:Read,Unread',
            'response_status' => 'nullable|in:Responded,No Response',
        ]);

        $message->update($request->only(['read_status', 'response_status']));

        return response()->json($message);
    }

    public function destroy($id)
    {
        $message = Message::findOrFail($id);
        $message->delete();

        return response()->json(null, 204);
    }
}

<?php

// app/Models/Message.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Message extends Model
{
    use SoftDeletes;

    protected $table = 'messages';

    protected $fillable = [
        'sender_user_id', 'recipient_user_id', 'subject', 'message_content', 'attachment',
        'read_status', 'response_status'
    ];

    protected $casts = [
        'read_status' => 'string',
        'response_status' => 'string',
    ];

    public $timestamps = true; // Ensure timestamps are managed by Laravel

    // Optional: Define any relationships here, e.g., User relationship
    public function sender()
    {
        return $this->belongsTo(User::class, 'sender_user_id');
    }

    public function recipient()
    {
        return $this->belongsTo(User::class, 'recipient_user_id');
    }
}


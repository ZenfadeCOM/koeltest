<?php

namespace App\Events;

use App\Models\Song;
use App\Models\User;
use Illuminate\Queue\SerializesModels;

class PlaybackStarted extends Event
{
    use SerializesModels;

    public function __construct(public Song $song, public User $user)
    {
    }
}

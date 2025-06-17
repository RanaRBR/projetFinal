<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Mail\ContactFormMail;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    // ... tes autres méthodes ...

    public function sendContactForm(Request $request)  // corrige ici la casse aussi
    {
        $validated = $request->validate([
            'name'    => 'required|string|max:255',
            'email'   => 'required|email|max:255',
            'message' => 'required|string',
        ]);

        Mail::to(config('mail.mail_from_address', 'boutrosrafaelrana@gmail.com'))
            ->send(new ContactFormMail($validated));

        return back()->with('success', 'Merci pour votre message, je vous répondrai bientôt.');
    }
}

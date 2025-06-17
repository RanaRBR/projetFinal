<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Mail\ContactFormMail;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $contacts = Contact::all();
        return Inertia::render('welcome', [
            'contacts' => $contacts
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('createContact');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $contact = new Contact();
        $contact->telephone = $request->telephone;
        $contact->localisation = $request->localisation;
        $contact->mail = $request->mail;
        $contact->about_id = $request->about_id;
        $contact->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(Contact $contact)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $contact = Contact::find($id);
        return Inertia::render('editContact', ['contact' => $contact]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($id, Request $request)
    {
        $contact = Contact::find($id);
        $contact->telephone = $request->telephone;
        $contact->localisation = $request->localisation;
        $contact->mail = $request->mail;
        $contact->about_id = $request->about_id;
        $contact->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $contact = Contact::find($id);
        $contact->delete();
    }

    /**
     * Handle contact form submission and send email
     */
    public function sendContactForm(Request $request)
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

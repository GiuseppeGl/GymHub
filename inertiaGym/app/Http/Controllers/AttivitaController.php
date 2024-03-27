<?php

namespace App\Http\Controllers;

use App\Models\attivita;
use App\Http\Requests\StoreattivitaRequest;
use App\Http\Requests\UpdateattivitaRequest;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AttivitaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Inertia::render('Attivita/AttivitaComponent', ['attivita' => attivita::with('oraris', 'prenotazionis', 'users')->get(), 'user' => Auth::user()]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('Attivita/CreateAttivitaComponent', ['user' => Auth::user()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreattivitaRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(attivita $attivita)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(attivita $attivita)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateattivitaRequest $request, attivita $attivita)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(attivita $attivita)
    {
        //
    }
}

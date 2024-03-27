import React from 'react'
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useState } from 'react';
import { router } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';






export default function CreateAttivitaComponent({user}) {

    const { data, setData, post, processing, errors } = useForm({
        name : "",
        description : "",
        start_date : "",
        end_date : "",
        orario_inizio : "",
        orario_fine : ""
      })


      function submit(e) {
        e.preventDefault()
        post('/login')
      }

  return (

    <AuthenticatedLayout user={user}
    header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Crea una nuova attività</h2>}
    >
     <form onSubmit={submit}>
        <div> 
            <p>Nome attività</p>
    <input type="text" value={data.name} onChange={e => setData('name', e.target.value)} />
    {errors.name && <div>{errors.name}</div>}
    </div>
 
 <div><p>Descizione Attività</p>
    <input type="text" value={data.description} onChange={e => setData('description', e.target.value)} />
    {errors.description && <div>{errors.description}</div>}
    </div>

    <div><p>Data inizio attività</p>
    <input type="text" value={data.start_date} onChange={e => setData('start_date', e.target.value)} />
    {errors.start_date && <div>{errors.start_date}</div>}
    </div>

    <div><p>Data fine attività</p>
    <input type="text" value={data.end_date} onChange={e => setData('end_date', e.target.value)} />
    {errors.end_date && <div>{errors.end_date}</div>}
    </div>
    
    <div><p>orario di inizio</p>
    <input type="text" value={data.orario_inizio} onChange={e => setData('orario_inizio', e.target.value)} />
    {errors.end_date && <div>{errors.end_date}</div>}
    </div>

    <div><p>orario di fine</p>
    <input type="text" value={data.orario_fine} onChange={e => setData('orario_fine', e.target.value)} />
    {errors.orario_fine && <div>{errors.orario_fine}</div>}
    </div>
    
  </form>


    </AuthenticatedLayout>
  )
}

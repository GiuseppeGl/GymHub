import React from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Table } from 'react-bootstrap';
import { PencilFill, Trash2Fill } from 'react-bootstrap-icons';
import { router } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';


export default function PrenotazioniComponent({ attivita, user, prenotazioni, orari }) {
    console.log(attivita);
    console.log(user);
    
    console.log(orari);

    let attivitaCorrispondente = null;

    attivita.forEach(function (attivitaSingola) {
        if (user.attivita_id === attivitaSingola.id) {
            attivitaCorrispondente = attivitaSingola;
        }
    });

    const [message, setMessage] = React.useState(null);

    function destroy(id) {
        if (confirm('Are you sure you want to delete this contact?')) {
            Inertia.delete(route('prenotazioni.destroy', id));
            router.reload({ only: ['prenotazioni'] })
            setMessage("Cancellazione avvenuta con successo.")
            setTimeout(() => setMessage(null), 5000);
        } else {
            setMessage("Cancellazione annullata.");
            setTimeout(() => setMessage(null), 5000);
        }
    }

    return (
        <AuthenticatedLayout user={user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Attività</h2>}
        >
            <div className='my-5'>
            {message && <div className="alert alert-warning">{message}</div>}
                {attivitaCorrispondente  ? (
                    prenotazioni && prenotazioni.length > 0 ? (
                    <Table striped>
                        <thead>
                            <tr>
                                <th>ID Prenotazione</th>
                                <th>Nome Attivita</th>
                                <th>Descrizione Attivita</th>
                                <th>Prenotato da:</th>
                                <th>Stato Prenotazione</th>
                                <th>Modifica Stato</th>
                                <th>Elimina</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{user.prenotazioni_id}</td>
                                <td>{attivitaCorrispondente.name}</td>
                                <td>{attivitaCorrispondente.description}</td>
                                <td>{user.name}</td>
                                <td>{attivitaCorrispondente.prenotazionis[0].stato}</td>
                                <td className='ps-5 text-warning'><PencilFill /></td>
                                <td className='ps-4 text-danger'> 
                                    <button
                                        type="button"
                                        className='btn btn-small btn-danger mx-2'
                                        onClick={() => destroy(prenotazioni[0].id)}>
                                        <Trash2Fill className='text-black' />
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
               ) : <h1>Non hai attività prenotate</h1>
               ) : <h1>Attività non trovata</h1>}
            </div>
        </AuthenticatedLayout>
    );
}

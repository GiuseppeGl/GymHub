import React from 'react';

export default function PrenotazioniComponent({ attivita, user }) {
    console.log(attivita);
    console.log(user);

    let attivitaCorrispondente = null;

    attivita.forEach(function(attivitaSingola) {
        if (user.attivita_id === attivitaSingola.id) {
            attivitaCorrispondente = attivitaSingola;
        }
    });

    return (
        <div>
            PrenotazioniComponent - 
            {attivitaCorrispondente ? (
                <div>
                    <h3>{attivitaCorrispondente.name}</h3>
                    <p>{attivitaCorrispondente.description}</p>
                </div>
            ) : (
                <p>Non sono uguali</p>
            )}
        </div>
    );
}

import React from 'react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Card from "react-bootstrap/Card";
import { Link } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';

export default function AttivitaComponent({ attivita, user, auth}) {

    console.log(attivita);
    console.log(user.name);
    console.log(auth); 
 

  return (

    <AuthenticatedLayout user={user}
    header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Attivita</h2>}
    >
         
         <div className="container">
            <div className='mx-2 my-2'>
                <Link method="get" href='/attivita/create' as="button" type="button" ><PrimaryButton >Crea Nuova Attività</PrimaryButton></Link> 
                </div>
                
                <div  class="row row-cols-1 row-cols-md-3 g-4">
                    {attivita.map((attivita) => (
                        <div key={attivita.id} class="col">
                            <Card  style={{ width: "18rem" }}>
                                <Card.Img
                                    variant="top"
                                    src="https://www.teahub.io/photos/full/28-284379_photo-wallpaper-man-workout-gym-working-gym-workout.jpg"
                                />
                                <Card.Body>
                                    <div class="row">
                                        <Card.Title>{attivita.title}</Card.Title>
                                        <Card.Text>
                                            {attivita.description}
                                        </Card.Text>
                                        <Card.Text>
                                            {attivita.oraris.map((orari) => (
                                                <li key={orari.id}>
                                                    {orari.name}
                                                </li>
                                            ))}
                                        </Card.Text>
                                        <Card.Text>{attivita.pages}</Card.Text>
                                        <Card.Text>{attivita.numcopies}</Card.Text>
                                        <Card.Text>
                                            {attivita.prenotazionis.map(
                                                (prenotazioni) => (
                                                    <li key={prenotazioni.id}>
                                                        {prenotazioni.stato}
                                                    </li>
                                                )
                                            )}
                                        </Card.Text>
                                        <Card.Text>
                                            {attivita.users.map((user) => (
                                                <li key={user.id}>
                                                    {user.name}
                                                </li>
                                            ))}
                                        </Card.Text>
                                        <div className='mx-2 my-2'>
                                        <PrimaryButton > Go somewhere</PrimaryButton>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
    </AuthenticatedLayout>
  )
}

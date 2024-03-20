<?php


var_dump($attivita)



?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>attivita</h1>

    @foreach($attivita as $key => $value)
<div class="col">
    <div class="card">
        <img src="" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Nome Attività :{{$value->name}}</h5>
            <p class="card-text">ID Attività :{{$value->id}}</p>
            <p class="card-text">Descrizione attivita :{{$value->description}}</p>
            <p class="card-text">Attivo nella nostra palestra dal : {{$value->created_at->format('Y-m-d')}}</p></p>

            @foreach ($value->oraris as $orariItem)
            <p class="card-text">Orari dal Lunedì al Venerdì : {{$orariItem->orario_inizio}} - {{$orariItem->orario_fine}}</p>
            
            @endforeach

            @foreach ($value->prenotazionis as $prenotazioni)
            <p class="card-text">Prenotazioni : {{$prenotazioni->id}}</p>
           
            @endforeach

            @foreach ($value->users as $user)
            <p class="card-text">Iscritti prenotati : {{$user->name}}</p>
           
            @endforeach
           

            
        </div>
    </div>
</div>
@endforeach




</body>
</html>


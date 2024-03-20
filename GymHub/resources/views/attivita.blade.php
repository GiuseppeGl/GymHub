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
            <p class="card-text">Attivo nella nostra palestra dal : {{$value->created_at}}</p>
           
        </div>
    </div>
</div>
@endforeach




</body>
</html>


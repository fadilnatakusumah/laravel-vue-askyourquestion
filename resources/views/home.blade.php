<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{csrf_token()}}">
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <title>Ask Your Question!</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
</head>

<body>
    <div id="app">
        <!-- <example-component></example-component> -->
        <home-component></home-component>
        <!-- <div class="container">
            <div class="notification">
                This container is <strong>centered</strong> on desktop.
            </div>
        </div> -->
    </div>
    <script src="{{asset('js/app.js')}}"></script>

</body>

</html>
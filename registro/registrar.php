<?php
    $conn = mysqli_connect("localhost", "root", "", "deportesDB");
    if($conn){
        $nombre = strtolower($_REQUEST[deporte]);
        $query = mysqli_query($conn, "insert into deportes(nombre, distancia) values('$nombre','$_REQUEST[distancia]')");
        if($query){
            header("Location: registro1.php");
            exit();
        }else{
            header("Location: registro2.php");
            exit();
        }
    }
    mysqli_close($conn);
?>
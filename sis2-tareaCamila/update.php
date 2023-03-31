<?php

include("conexion.php");
$con=conectar();

$id=$_POST['id'];
$deporte=$_POST['deporte'];
$valor=$_POST['valor'];

$sql="UPDATE deportes SET deporte='$deporte', valor='$valor' WHERE id ='$id'";
$query=mysqli_query($con,$sql);

    if($query){
        Header("Location: deporte.php");
    }
?>
<?php
include("conexion.php");
$con=conectar();

$id=$_POST['id'];
$deporte=$_POST['deporte'];
$valor=$_POST['valor'];


$sql="INSERT INTO deportes VALUES('$id','$deporte','$valor') ";
$query= mysqli_query($con,$sql);

if($query){
    Header("Location: deporte.php");
}else{
    echo"Datos Guardados Correctamente<br><a href='deporte.php'>Volver</a>";
}
?>
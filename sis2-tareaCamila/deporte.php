<?php
include("conexion.php");
$con=conectar();

$sql = "SELECT * FROM deportes WHERE valor > 0 ORDER BY valor ASC ";
$query= mysqli_query($con , $sql);

$row = mysqli_fetch_array($query);
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
  <title>Deportes</title>
</head>
<body>
   <div class="container mt-5">
    <div class="row">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores temporibus quaerat, alias cum neque mollitia quasi reprehenderit nulla nihil sunt maiores laboriosam! Explicabo quo at eligendi, perspiciatis minima soluta facilis?
      </p>
      <div class="col-md-8">
          <h1>Ingrese un deporte</h1>
          <form action="insertar.php" method="POST">
          
          <!-- Deporte -->
          <label for="deporte" class="form-label">Deporte</label>
          <input type="text" class="form-control mb-3" id="deporte" name="deporte" placeholder="Ingrese un deporte" required>

          <!-- valor -->
          <label for="deporte" class="form-label">Valor</label>
          <input type="number" class="form-control mb-3" id="valor" name="valor" placeholder="Ingrese un valor" min=0 required>

          <input type="submit" class="btn btn-primary">
          </form>
      </div>

      <div class="col-md-12">
        <h1>Lista de deportes</h1>
        <table class="table table-striped table-hover">
           <thead class="table-success table-striped" >
                <tr>
                     
                      <th>Deporte</th>
                      <th>Valor</th>
                      <th></th>  
                      <th></th>                  
                </tr>
            </thead>
          <tbody>
            <?php
              while($row=mysqli_fetch_array($query)){
            ?>
              <tr>
            
              <th><?php  echo $row['deporte']?></th>
              <th><?php  echo $row['valor']?> carrera(s) pedrestre(s)</th>
              <th><a href="actualizar.php?id=<?php echo $row['id'] ?>" class="btn btn-info">Editar</a></th>
              <th><a href="delete.php?id=<?php echo $row['id'] ?>" class="btn btn-danger">Eliminar</a></th>
              </tr>
              <?php 
                 }
              ?>
          </tbody>
        </table>

      </div>
    </div>
   </div>
</body>
</html>
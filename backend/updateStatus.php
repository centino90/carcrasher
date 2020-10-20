<?php
include "db.php";

session_start();
$userSession = $_SESSION['username'];

   
    // $cars = serialize($_POST['cars']);
    $star = $_POST['star'];
    $car = array($_POST['cars']);

    $ser = serialize($car[0]);
    
         $sql = "UPDATE users SET star = ? WHERE username = ?";
         $stmt = $conn->prepare($sql);
         $stmt->execute([$star, $userSession]);

         $sql2 = "UPDATE users SET cars = ? WHERE username = ?";
         $stmt = $conn->prepare($sql2);
         $stmt->execute([$ser, $userSession]);

?>
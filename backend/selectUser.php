<?php
session_start();

include 'db.php';

$userSession = '';
if(isset($_SESSION['username'])) {
$userSession = $_SESSION['username'];
}
else {
    header('Location://localhost/carCrasher/backend/login.php');
}
    $uname = $_POST['user'];
             $sql = "SELECT * FROM users WHERE username = ?";
             $stmt= $conn->prepare($sql);
             $stmt->execute([$uname]);
             $row = $stmt->fetch();
             
            //  $uncompressedCars = unserialize($row['cars']);
?>
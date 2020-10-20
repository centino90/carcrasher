<?php

error_reporting(0);

include "db.php";

session_start();

$username = $_POST['uname'];
$password = $_POST['pword'];


if(!empty($username) && !empty($password)) {

    $sql = "SELECT * FROM users WHERE username = ?";
    $stmt= $conn->prepare($sql);
    $stmt->execute([$username]);
    $row = $stmt->fetch();

    if($username == $row['username'] && password_verify($password, $row['password'])) {

        $_SESSION['username'] = $username; 

        echo "<script>
        alert('Account Successfuly Login');
        window.location.href='../?status=success';
        </script>";
        
    }
    else {
        echo "<script>
        alert('Error: Account Not Found!');
        window.location.href='login.php?status=accountNotFound';
        </script>";
    }

    

}
else {
    echo "<script>
    alert('Reminder: Username or Password is empty!');
    window.location.href='login.php?status=empty';
    </script>";
}


<?php

error_reporting(0);

include "db.php";

session_start();

$username = $_POST['uname'];
$password = $_POST['pword'];

    $hashed_pwd = password_hash($password, PASSWORD_DEFAULT);
if(!empty($username) && !empty($password)) 
{
    $sql = "SELECT * FROM users WHERE username = ?";
    $stmt= $conn->prepare($sql);
    $stmt->execute([$username]);
    $row = $stmt->fetch();

    if($username == $row['username'])
    {
        echo "<script>
        alert('Error: Account Username is already taken!');
        window.location.href='register.php?status=usernameTaken';
        </script>";
    }
    else 
    {
        $sql = "INSERT INTO users (username, password) VALUES (?,?)";
        $stmt= $conn->prepare($sql);
        $stmt->execute([$username, $hashed_pwd]);   

        echo "<script>
        alert('Account Successfuly Registered');
        window.location.href='login.php?status=success';
        </script>";
    }

}
else {
    echo "<script>
    alert('Reminder: Username or Password is empty!');
    window.location.href='register.php?status=empty';
    </script>";
}


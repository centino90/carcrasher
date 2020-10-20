<?php
session_start();
$userSession = '';
if(isset($_SESSION['username'])) {
$userSession = $_SESSION['username'];
}
else {
    header('Location://localhost/carCrasher/backend/login.php');
}

unset($_SESSION['username']);

session_destroy();

echo "<script>
alert('Account Logout Successfuly');
window.location.href='login.php?status=logout';
</script>";
?>
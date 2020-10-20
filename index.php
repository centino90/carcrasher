<?php

include 'backend/db.php';

session_start();
$userSession = '';
if(isset($_SESSION['username'])) {
$userSession = $_SESSION['username'];
}
else {
    header('Location://localhost/carCrasher2/backend/login.php');
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Car Crasher</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="viewport" content="minimal-ui">

    <!-- include phaser library -->
    <script src="js/library/phaser.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <!-- include game states -->
    <script src="js/game/states/Boot.js"></script>
    <script src="js/game/states/Preload.js"></script>
    <script src="js/game/states/Mainmenu.js"></script>
    <script src="js/game/states/Game.js"></script>
    <script src="js/game/states/Inventory.js"></script>
    <script src="js/game/states/Shop.js"></script>
    <script src="js/game/states/SelectMap.js"></script>

    <!-- include our prefabs -->
    <script src="js/game/prefabs/Booster.js"></script>
    <script src="js/game/prefabs/TimePoint.js"></script>
    <script src="js/game/prefabs/Police.js"></script>
    <script src="js/game/prefabs/Truck.js"></script>
    <script src="js/game/prefabs/Van.js"></script>
    <script src="js/game/prefabs/Car.js"></script>
    <script src="js/game/prefabs/HealthBar.js"></script>
    <script src="js/game/prefabs/HealthBox.js"></script>
    <script src="js/game/prefabs/Star.js"></script>
    <script src="js/game/prefabs/Scoreboard.js"></script>
    <!-- <script src="js/game/prefabs/Scoreboard.js"></script> -->
    
    <style>
        body {
            padding: 0px;
            margin:0px;
        }
        button {
            margin-top: 8%;
            position:absolute;
            padding:7px;
            border: none;
            background: #202020;
            color: #fff;
            cursor: pointer;
        }
        button:hover {
            background: rgba(0,0,0,0.5)
        }
        .logout {
            right:0;
            margin-top: 8%;
            position:absolute;
            padding:7px;
            border: none;
            background: #202020;
            color: #fff;
            cursor: pointer;
            text-decoration: none;
        }
        .logout:hover {
            background: rgba(0,0,0,0.5)
        }
    </style>
</head>
<body>
    
<button class ='save'>Save Game Data</button>
<a class ="logout" href="backend/logout.php" onclick="return confirmLogout()">Logout</a>
    <!--  include main game file -->
    <script>
    var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO,'');
        <?php
             $sql = "SELECT * FROM users WHERE username = ?";
             $stmt= $conn->prepare($sql);
             $stmt->execute([$userSession]);
             $row = $stmt->fetch();
        ?>
        <?php
        $cars = unserialize($row['cars']);
        $res = implode(",", $cars);
        ?>
        this.imp = '<?php echo $res ;?>';
        this.tra = this.imp.split(",");

    game.global = {
        star: <?php echo $row['star'];?>,
        cars: this.tra,
        carKey: 'black',
        bg: 'beach',
        user: "<?php echo $row['username']; ?>"
    }

    game.state.add('Boot', CarCrasher.Boot);
    game.state.add('Preloader', CarCrasher.Preload);
    game.state.add('MainMenu', CarCrasher.MainMenu);
    game.state.add('Shop', CarCrasher.Shop);
    game.state.add('Inventory', CarCrasher.Inventory);
    game.state.add('SelectMap', CarCrasher.SelectMap);
    game.state.add('Game', CarCrasher.Game);

    game.state.start('Boot');

    </script>

    <script>
    $(document).ready(function(){
    $(".save").click(function(){
        var newStar = game.global.star
        var newCar = game.global.cars
        $.post("backend/updateStatus.php",
        {
        star: newStar,
        cars: newCar
        },
        function(star, cars){
            alert("Data Successfully Saved");
        });
    });
    });

    function confirmLogout() {
        var c = confirm('Do you continue to logout');
        if(c) {
            return true
        }
        else {
            return false
        }
    }
    </script>

    <!-- <script src="js/main.js"></script> -->
</body>
</html>
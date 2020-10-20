<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/c838cfe894.js" crossorigin="anonymous"></script>
    <style>
        body{
            background: rgba(0,0,0,0.1);
        }
    </style>
</head>
<body>

    <div id="wrapper">
        <form action="processLogin.php" method="post">

            <div id="login_form" class="container">

                <div class="row">
                    <div class="col-md-5 text-center mt-5">
                        <h1 style="margin-top:23%;">Car <span style="font-size:45px" class="text text-danger">Crasher</span></h1>
                        <p class="text-muted ml-1">An exciting game with intense vibe</p>
                    </div>  
                    <!-- end col-md-6 -->

                    <div class="col-md-7" style="background: rgba(0,0,0,0.7);padding:25px;">

                        <div class="form-group row">
                            <h2 class="col-12 text text-success text-center">Login</h2>
                            <hr>
                        </div>

                        <div class="form-group">
                            <label class="text text-success" for="">Username</label>
                            <input class="form-control" type="text" placeholder="Enter Username" name="uname">
                        </div>
                        <!-- end form-group -->

                        <div class="form-group">
                            <label class="text text-success" for="">Password</label>
                            <input class="form-control" type="password" placeholder="Enter password" name="pword">
                        </div>
                        <!-- end form-group -->

                        <div class="form-group">
                            <input class="form-control btn btn-primary" type="submit" value="login">
                        </div>
                        <!-- end form-group -->

                        <div class="form-group">
                            <a href="register.php">Create Account</a>
                        </div>
                        <!-- end form-group -->
                    </div>
                    <!-- end col-md-6 -->
                </div>
            </div>
            <!-- end container -->
        </form>
    </div>
    <!-- end wrapper -->
   
</body>
</html>
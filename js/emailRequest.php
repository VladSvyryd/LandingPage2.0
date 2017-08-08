<?php
if(isset($_POST["name"]) && isset($_POST["email"])){
  console.log("now");
$name = $_POST["name"];
$email = $_POST["email"];
$to = "vladonius@gmail.com"
//$message = $_POST["message"];
$subject = "New Client";
$body = "<html>
          <body>

          <h2> Client + .$name<h2>
          <hr>
          <p> Name: <br> ".$name"</p>
          <p> Email: <br> ".$email"</p>
          <p> Describe: <br> ".$message"</p>
          <body>
          </html>"
//headers
$headers = "From: ".$name. " <".$email."> \r\n";
$headers = "Reply-To: ".$email." \r\n";
$headers = "MIME-Version: 1.0\r\n";
$headers = "Content-type: text/html; charset-utf-8";
//send
$send = mail($to,$subject,$body,$headers);
if($send){
  print("It works");
  echo"<br>";
  echo "Thanks for contacting me"
}else{
  echo "error;"
}
}
 ?>

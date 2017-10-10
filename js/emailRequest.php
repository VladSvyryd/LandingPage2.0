<?php
if(isset($_POST["name"])&&isset($_POST["email"])&&isset($_POST["secName"])&&isset($_POST["phNumber"])){
  console.log("now");
$name = $_POST["name"];
$email = $_POST["email"];
$secName = $_POST["secName"];
$phNumber = $_POST["phNumber"];
$skype = $_POST["skype"];
$to = "yulivex.info@gmail.com";
$message = $_POST["message"];
$subject = "Новый клиент  ".$name. " ".$secName."";
$body = "<html>
          <body>

          <h2> Наш Новый + .$name<h2>
          <hr>
          <p> Имя: <br> ".$name."</p>
          <p> Фамилия: <br> ".$secName."</p>
          <p> Телефон: <br> ".$phNumber."</p>
          <p> Skype: <br> ".$skype."</p>
          <p> Email: <br> ".$email."</p>
          <p> Проблема: <br> ".$message."</p>
          <body>
          </html>";
//headers
$headers = "From: ".$name. " <".$email."> \r\n";
$headers = "Reply-To: ".$email." \r\n";
$headers = "MIME-Version: 1.0\r\n";
$headers = "Content-type: text/html; charset-utf-8";
//send
$send = mail($to,$subject,$body,$headers);
/*if($send){
  print("It works");
  echo"<br>";
  echo "Thanks for contacting me";

}else{
  echo "error;";
}*/
}else{
  console.log("suka");
}
?>
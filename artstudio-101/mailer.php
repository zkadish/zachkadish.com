
<?php
	if(isset($_POST['submit'])) {
		//$to = "artstudio101@hotmail.com";
		$to = "zachkadish@gmail.com";
		//$subject = "www.artstudio-101.com has sent a message";
		$subject = "artstudio test email";
		$name_field = $_POST['name'];
		$email_field = $_POST['email'];
		$message = $_POST['message'];
		 
		$body = "\n From: $name_field \n E-Mail: $email_field \n Message: $message";
		 
		//echo "Data has been submitted to $to!";
		//echo "Data has been submitted to artstudio101@hotmail.com!";
		
		echo "<br /><br /><br /><span style='color: #555555;font-size: 16px;font-weight: bold;font-family: 'HelveticaNeue','Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif;>
				$name_field, thank you for sending us a message...<br />
				artsudio 101 will not give out or sell your email address under any circumstances!</span>";
		mail($to, $subject, $body);
	} 
	else {
		echo "ERROR: your message has not been sent!";
	}
?>

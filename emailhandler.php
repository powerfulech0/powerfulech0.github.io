<?php
if(!isset($_POST['submit']))
{
	// This page should not be accessed directly. Only through submit.
	echo "error; you need to submit the form!";
}
$name = $_POST['name'];
$sender_email = $_POST['email'];
$message = $_POST['message'];

// Validation
if(empty($name)||empty($sender_email))
{
	echo "Name and email are mandatory!"
	exit;
}

$email_from = 'powerfulech0development@gmail.com';
$email_subject = "New message from portfolio";
$email_body = "You have received a new message from $name. \n".
	"email address: $sender_email\n".
	"Here is the message:\n $message".

$to = "powerfulech0development@gmail.com";
$headers = "From: $email_from \r\n";

// Send email
mail($to,$email_subject,$email_body,$headers);
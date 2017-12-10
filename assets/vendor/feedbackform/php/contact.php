<?php

    //Check to make sure that the name field is not empty
    if(trim($_POST['name']) == '') {
        $hasError = true;
    } else {
        $name = trim($_POST['name']);
    }

    //Check to make sure sure that a valid email address is submitted
    if(trim($_POST['email']) == '')  {
        $hasError = true;
    } else if (!preg_match("/^[A-Z0-9._%-]+@[A-Z0-9._%-]+\.[A-Z]{2,4}$/i", trim($_POST['email']))) {
        $hasError = '<strong>Error!</strong> Please enter a valid email address';
    } else {
        $email = trim($_POST['email']);
    }

    //Check to make sure message were entered
    if(trim($_POST['message']) == '') {
        $hasError = true;
    } else {
        if(function_exists('stripslashes')) {
            $message = stripslashes(trim($_POST['message']));
        } else {
            $message = trim($_POST['message']);
        }
    }

    //If there is no error, send the email
    if(!$hasError) {
        $emailTo = 'yourname@yourcompany.com'; //Put your own email address here
        $subject = 'Message from your website'; //Put your own subject here
        $body = "Name: $name \n\nEmail: $email \n\nSubject: $subject \n\nComments:\n $message";
        $headers = "From: ".$name." <".$email.">\r\nReply-To: ".$email."";

        $sent = mail($emailTo, $subject, $body, $headers);
        if ($sent) {
                //If message is sent
                echo "SEND"; 
            } else {
                //If errors are found
                echo "Please check if you've filled all the fields with valid information and try again. Thank you."; 
            }
    } else {
        echo $hasError; //If errors are found
    }

?>
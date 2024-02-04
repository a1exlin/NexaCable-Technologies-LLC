<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: Application/JSON");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$data = json_decode(file_get_contents("php://input"), true);

if (!empty($data)) {

    $fname = $data["fname"];
    $lname = $data["lname"];
    $fullName = $fname . " " . $lname;
    $email = $data["email"];
    $phone = $data["phone"];
    $message = $data["message"];

    // Checks for valid email
    if(!preg_match("/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/", $email)) {
        // Quick exit, bad email
        echo json_encode(["message" => "Invalid Email"]);
        exit;
    }

    if(empty($phone)) {
        $phone = "Not Provided";
    }

    $body = "<html>Name: $fullName<br>Email: <a href='mailto:$email'>$email</a><br>Phone: <a href='tel:$phone'>$phone</a><br>Message: $message</html>";



    //sendMail(TO, FROM, FROM NAME, REPLY TO, SUBJECT, BODY);


    $sendToNC = sendMail('contact@nexacable.net', 'noreply@nexacable.net', 'Contact Form Mailer', $email, 'Contact from ' . $fullName, $body);

    $sendToSender = sendMail($email, 'noreply@nexacable.net', 'NexaCable Technologies LLC', 'contact@nexacable.net', 'We Recieved Your Message', $body);


    if ($sendToNC && $sendToSender) {
        echo json_encode(["message" => "Form submitted successfully!"]);
    } else {
        header("HTTP/1.1 500");
        echo json_encode(["message" => "Form failed to submit"]);
    }

} else {
    header("HTTP/1.1 400");
    echo json_encode(["message" => "Bad Request"]);
}



// Function to send the actual email
function sendMail($to, $from, $fromName, $replyTo, $subject, $body) {
    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host       = 'mail.nexacable.net';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'noreply@nexacable.net';
        $mail->Password   = '[REDACTED...DUHHHHH]';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        $mail->setFrom($from, $fromName);
        $mail->addAddress($to);
        $mail->addReplyTo($replyTo);

        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = $body;

        $mail->send();
        return true;
    } catch (Exception $e) {
        return false;
    }
}
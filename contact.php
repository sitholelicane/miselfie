<?php
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo "Please submit the contact form to send a message.";
    exit;
}

$name = trim(strip_tags($_POST["name"] ?? ""));
$email = filter_var(trim($_POST["email"] ?? ""), FILTER_SANITIZE_EMAIL);
$phone = trim(strip_tags($_POST["phone"] ?? ""));
$subjectInput = trim(strip_tags($_POST["subject"] ?? ""));
$message = trim(strip_tags($_POST["message"] ?? ""));

if ($name === "" || $email === "" || $message === "" || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo "Please provide your name, a valid email address, and a message.";
    exit;
}

$recipient = "sitholelicane0@gmail.com";
$subject = "New Portfolio Message: " . ($subjectInput !== "" ? $subjectInput : "General Enquiry");

$emailContent = "Name: {$name}\n";
$emailContent .= "Email: {$email}\n";
$emailContent .= "Phone: {$phone}\n\n";
$emailContent .= "Message:\n{$message}\n";

$headers = "From: Portfolio Website <noreply@example.com>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($recipient, $subject, $emailContent, $headers)) {
    echo "Thank you. Your message has been sent successfully.";
    exit;
}

http_response_code(500);
echo "Sorry, your message could not be sent right now. Please try again later.";
?>

var templateParams = {
    to_name: "Your Name",  // This will replace {{to_name}} in the email template
    from_name: "Website Visitor",  // This will replace {{from_name}} in the email template
    message: "Someone has viewed your profile!"  // This will replace {{message}} in the email template
};

emailjs.send("service_9d07own","template_wr859k8", templateParams)
    .then(function(response) {
        console.log("SUCCESS!", response.status, response.text);
    }, function(error) {
        console.error("FAILED...", error);
    });

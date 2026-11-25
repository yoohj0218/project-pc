(function() {
            // https://dashboard.emailjs.com/admin/account
            emailjs.init({
              publicKey: "-ZAP3NLyqOKrMMyTd",
            });
        })();

        document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_225au2q', 'template_6e119zw', this)
            .then(() => {
                console.log('SUCCESS!');
                alert('메일 전송에 성공하였습니다.');
            }, (error) => {
                console.log('FAILED...', error);
                alert('메일 전송에 실패하였습니다.');
            });
    });
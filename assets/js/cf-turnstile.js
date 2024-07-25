function generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#%@*&';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

function TurnstileURL {
        const randomString = generateRandomString(300);
        const newUrl = window.location.href.split('?')[0] + '?cf-turnstile-code=' + randomString;
        window.history.replaceState(null, null, newUrl);
}

    function onTurnstileSuccess(token) {  
        setTimeout(function() {
            window.history.replaceState(null, null, window.location.pathname);
            document.getElementById('captcha-container').classList.add('hidden');
            document.getElementById('original-content').classList.remove('hidden');
        }, 1869);
    }

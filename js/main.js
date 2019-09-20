(function() {
    const email = ['com', '.', 'gmail', '@', 'lofaso', '.', 'romain'].reverse().join('');
    const contactContainer = document.getElementById('contact-container');
    const contactLink = document.getElementById('contact-link');
    function replaceByEmail() {
        contactContainer.innerHTML = '<address>' + email + '</address>';
    }

    contactLink.addEventListener('click', replaceByEmail);
})();
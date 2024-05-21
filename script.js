document.getElementById('toggle-password').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);

    // Toggle the eye icon (you can customize it as per your preference)
    this.textContent = type === 'password' ? '\u{1F441}' : '\u{1F441}'; // Changing the Unicode icon for demo purposes
});
document.getElementById('toggle-password1').addEventListener('click', function () {
    const passwordField = document.getElementById('password1');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);

    // Toggle the eye icon (you can customize it as per your preference)
    this.textContent = type === 'password' ? '\u{1F441}' : '\u{1F441}'; // Changing the Unicode icon for demo purposes
});

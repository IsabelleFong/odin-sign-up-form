document.querySelector('button').addEventListener('click', checkPasswords)

function checkPasswords(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    if (password != confirmPassword) {
        console.log('Passwords do not match');
        document.getElementById('message').innerHTML = '<p>&ast;Passwords do not match</p>';
        document.getElementById('password').style.borderColor = 'red';
        document.getElementById('confirm-password').style.borderColor = 'red';
    }
}
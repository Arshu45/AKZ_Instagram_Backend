// app/static/js/login.js
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    axios.post('/api/user/login/', {
        email: email,
        password: password
    })
    .then(response => {
        if (response.data.success) {
            alert('Login successful');
            // You can redirect to another page or save the token here
        } else {
            alert(response.data.message);
        }
    })
    .catch(error => {
        console.error('There was an error!', error);
    });
});

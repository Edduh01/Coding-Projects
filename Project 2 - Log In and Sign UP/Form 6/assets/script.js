let password = document.getElementById('password');
let image = document.getElementById('image');

image.onclick = function(){
    if (password.type == "password") {
        password.type = 'text';
        image.src = 'images/eye-open.png';
    } else {
        password.type = 'password';
        image.src = 'images/eye-close.png';
    }
}
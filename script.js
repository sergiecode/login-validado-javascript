document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        validateForm();
    });

    emailInput.addEventListener('blur', function () {
        validateEmail();
    });

    emailInput.addEventListener('change', function () {
        clearError(emailError);
    });

    passwordInput.addEventListener('change', function () {
        clearError(passwordError);
    });

    confirmPasswordInput.addEventListener('change', function () {
        clearError(confirmPasswordError);
    });

    function validateForm() {
        const isValidEmail = validateEmail();
        const isValidPassword = validatePassword();
        const passwordsMatch = validatePasswordMatch();

        if (isValidEmail && isValidPassword && passwordsMatch) {
            saveToLocalStorage();
            alert('Has ingresado con éxito');
        }
    }

    function validateEmail() {
        const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
        const emailValue = emailInput.value.trim();

        if (!emailRegex.test(emailValue)) {
            showError(emailError, 'Ingresa un correo electrónico válido');
            return false;
        }

        return true;
    }

    function validatePassword() {
        const passwordValue = passwordInput.value.trim();

        if (passwordValue.length < 6) {
            showError(passwordError, 'La contraseña debe tener al menos 6 caracteres');
            return false;
        }

        return true;
    }

    function validatePasswordMatch() {
        const passwordValue = passwordInput.value.trim();
        const confirmPasswordValue = confirmPasswordInput.value.trim();

        if (passwordValue !== confirmPasswordValue) {
            showError(confirmPasswordError, 'Las contraseñas no coinciden');
            return false;
        }

        return true;
    }

    function showError(errorElement, message) {
        errorElement.innerHTML = message;
        errorElement.style.display = 'block';
    }

    function clearError(errorElement) {
        errorElement.innerHTML = '';
        errorElement.style.display = 'none';
    }

    function saveToLocalStorage() {
        const emailValue = emailInput.value.trim();
        localStorage.setItem('email', emailValue);
        const body = bodyBuilderJSON()
        console.log('JSON listo para enviar', body)
    }

    function bodyBuilderJSON() {
        
        return {
            "email": emailInput.value,
            "password": passwordInput.value 
        }
        
    }
});


document.addEventListener("DOMContentLoaded", function () {
    let passwordInput = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");
    let showHideButton = document.getElementById("show-hide");

    showHideButton.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            confirmPassword.type = "text";
        } else {
            passwordInput.type = "password";
            confirmPassword.type = "password";
        }
    });
});
// Sélectionner les éléments du DOM
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const genderSelect = document.getElementById('gender');

// Fonction pour afficher un message d'erreur
function showError(input, message) {
    const errorDiv = input.parentElement.querySelector('.text-danger');
    if (!errorDiv) {
        const newErrorDiv = document.createElement('div');
        newErrorDiv.className = 'text-danger mt-1';
        newErrorDiv.textContent = message;
        input.parentElement.appendChild(newErrorDiv);
    } else {
        errorDiv.textContent = message;
    }
}

// Fonction pour supprimer les messages d'erreur
function clearErrors() {
    document.querySelectorAll('.text-danger').forEach(error => error.remove());
}

// Fonction de validation des champs
function validateInputs() {
    clearErrors(); // Supprimer les erreurs précédentes
    let isValid = true;

    if (nameInput.value.trim() === '') {
        showError(nameInput, 'Le champ "Noms & Prénoms" est obligatoire.');
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        showError(emailInput, 'Veuillez entrer une adresse email valide.');
        isValid = false;
    }

    const phonePattern = /^\d{8,15}$/;
    if (!phonePattern.test(phoneInput.value.trim())) {
        showError(phoneInput, 'Veuillez entrer un numéro de téléphone valide (8 à 15 chiffres).');
        isValid = false;
    }

    if (genderSelect.value === 'Choississez...') {
        showError(genderSelect, 'Veuillez sélectionner votre sexe.');
        isValid = false;
    }

    return isValid;
}

// Gérer la soumission du formulaire
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Empêcher l'envoi par défaut

    if (validateInputs()) {
        alert('Inscription réussie !');
        form.reset(); // Réinitialiser le formulaire après succès
    }
});

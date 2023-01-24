function validateForm() {
    const adressInput = document.getElementById('deliveryAdress');
    const persDetailsInput = document.getElementById('PersDetails');
    const deliveryInput = document.getElementById('delivery');

    const errorAdresInput = document.getElementById('errordeliveryAddress');
    const errorPersDetailsInput = document.getElementById('errorPersDetails');
    const errorDeliveryInput = document.getElementById('errordelivery');

    const errorsSummary = document.getElementById('errorsSummary');

    resetErrors([adressInput, persDetailsInput, deliveryInput], [errorAdresInput, errorPersDetailsInput, errorDeliveryInput], errorsSummary);

    let valid = true;

    if (!checkRequired(adressInput.value)) {
        valid = false;
        adressInput.classList.add("error-input");
        errorAdresInput.innerText = "To pole jest wymagane";
    } else if (!checkTextLengthRange(adressInput.value, 10, 80)) {
        valid = false;
        adressInput.classList.add("error-input");
        errorAdresInput.innerText = "Pole powinno zawierac od 10 do 80 znaków";
    }

    if (!checkRequired(persDetailsInput.value)) {
        valid = false;
        persDetailsInput.classList.add("error-input");
        errorPersDetailsInput.innerText = "To pole jest wymagane";
    } else if (!checkTextLengthRange(persDetailsInput.value, 10, 80)) {
        valid = false;
        persDetailsInput.classList.add("error-input");
        errorPersDetailsInput.innerText = "Pole powinno zawierac od 10 do 80 znaków";
    }

    if (!checkRequired(deliveryInput.value)) {
        valid = false;
        deliveryInput.classList.add("error-input");
        errorDeliveryInput.innerText = "To pole jest wymagane";
    } else if (!checkTextLengthRange(deliveryInput.value, 5, 60)) {
        valid = false;
        deliveryInput.classList.add("error-input");
        errorDeliveryInput.innerText = "Pole powinno zawierac od 5 do 60 znaków";
    }

    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy!";
    }

    return valid;


}
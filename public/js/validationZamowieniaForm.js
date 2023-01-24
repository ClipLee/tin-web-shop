function validateForm() {

    const sprzetIDInput = document.getElementById('sprzet_id');
    const shipmentIDInput = document.getElementById('shipmentID');
    const specialPackagingInput = document.getElementById('special_packaging');
    const serialNumberInput = document.getElementById('SN');

    const errorSprzetID = document.getElementById('errorsprzet_id');
    const errorShipmentID = document.getElementById('errorshipmentID');
    const errorSpecialPackaging = document.getElementById('error_special_packaging');
    const errorSerialNumber = document.getElementById('error_SN');
    const errorsSummary = document.getElementById('errorsSummary');

    //Czyszczenie poprzednich komunikatow bledow formularza
    resetErrors([sprzetIDInput, shipmentIDInput, specialPackagingInput, serialNumberInput], [errorSprzetID, errorShipmentID, errorSpecialPackaging, errorSerialNumber], errorsSummary);

    //flaga poprawnosci pol formularza
    let valid = true;

    if (!checkRequired(sprzetIDInput.value)) {
        valid = false;
        sprzetIDInput.classList.add("error-input");
        errorSprzetID.innerText = "To pole jest wymagane";
    } else if (!checkTextLengthRange(sprzetIDInput.value, 5, 60)) { //klucz obcy
        valid = false;
        sprzetIDInput.classList.add("error-input");
        errorSprzetID.innerText = "Pole powinno zawierac od 5 do 60 znaków";
    }

    if (!checkRequired(shipmentIDInput.value)) {
        valid = false;
        shipmentIDInput.classList.add("error-input");
        errorShipmentID.innerText = "To pole jest wymagane";
    } else if (!checkTextLengthRange(shipmentIDInput.value, 5, 60)) { //klucz obcy, adres
        valid = false;
        shipmentIDInput.classList.add("error-input");
        errorShipmentID.innerText = "Pole powinno zawierac od 5 do 60 znaków";
    }

    if (!checkRequired(specialPackagingInput.value)) {
        valid = false;
        specialPackagingInput.classList.add("error-input");
        errorSpecialPackaging.innerText = "To pole jest wymagane";
    } else if (!checkTextLengthRange(specialPackagingInput.value, 1, 2)) {
        specialPackagingInput.classList.add("error-input");
        errorSpecialPackaging.innerText = "Pole powinno zawierac jeden znak";
    }

    if (!checkRequired(serialNumberInput.value)) {
        valid = false;
        serialNumberInput.classList.add("error-input");
        errorSerialNumber.innerText = "To pole jest wymagane";
    } else if (!checkTextLengthRange(serialNumberInput.value, 5, 20)) {
        valid = false;
        serialNumberInput.classList.add("error-input");
        errorSerialNumber.innerText = "Pole powinno zawierac od 5 do 20 znaków";
    }

    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy!";
    }

    return valid;
}
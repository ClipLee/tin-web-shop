function validateForm() {
    const producentInput = document.getElementById('Manufacturer');
    // const idProducentaIDInput = document.getElementById('manufacturerID');
    const nameInput = document.getElementById('name');
    const cenaInput = document.getElementById('Price');
    const wympiaryPaczkiInput = document.getElementById('Dimensions');
    // const dataPremieryIDInput = document.getElementById('ReleaseDate');

    const errorProducent = document.getElementById('errorManufacturer');
    // const errorIdProducentaID = document.getElementById('errormanufacturerID');
    const errorName = document.getElementById('error_name');
    const errorCena = document.getElementById('errorPrice');
    const errorWympiaryPaczki = document.getElementById('errorDimensions');
    // const errorDataPremieryID = document.getElementById('errorReleaseDate');
    const errorsSummary = document.getElementById('errorsSummary');

    resetErrors([producentInput, nameInput, cenaInput, wympiaryPaczkiInput], [errorProducent, errorName, errorCena, errorWympiaryPaczki], errorsSummary);

    let valid = true;

    if (!checkRequired(producentInput.value)) {
        valid = false;
        producentInput.classList.add("error-input");
        errorProducent.innerText = "To pole jest wymagane";
    } else if (!checkTextLengthRange(producentInput.value, 1, 50)) {
        valid = false;
        producentInput.classList.add("error-input");
        errorProducent.innerText = "Pole powinno zawierac od 1 do 50 znaków";
    }

    if (!checkRequired(nameInput.value)) {
        valid = false;
        nameInput.classList.add("error-input");
        errorName.innerText = "To pole jest wymagane";
    } else if (!checkTextLengthRange(nameInput.value, 4, 60)) {
        valid = false;
        nameInput.classList.add("error-input");
        errorName.innerText = "Pole powinno zawierac od 4 do 60 znaków";
    }

    if (!checkRequired(cenaInput.value)) {
        valid = false;
        cenaInput.classList.add("error-input");
        errorCena.innerText = "To pole jest wymagane";
    } else if (!checkNumber(cenaInput)) {
        valid = false;
        cenaInput.classList.add("error-input");
        errorCena.innerText = "Pole powinno być liczbą";
    } else if (!checkNumberRange(cenaInput.value, 1, 1_000_000)) {
        valid = false;
        cenaInput.classList.add("error-input");
        errorCena.innerText = "Pole powinno być liczbą od 1 do 1 000 000 PLN";
    }

    if (!checkRequired(wympiaryPaczkiInput.value)) {
        valid = false;
        wympiaryPaczkiInput.classList.add("error-input");
        errorWympiaryPaczki.innerText = "To pole jest wymagane";
    } else if (!checkTextLengthRange(wympiaryPaczkiInput.value, 5, 60)) {
        valid = false;
        wympiaryPaczkiInput.classList.add("error-input");
        errorWympiaryPaczki.innerText = "Pole powinno zawierac od 5 do 60 znaków";
    }

    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy!";
    }

    return valid;

}
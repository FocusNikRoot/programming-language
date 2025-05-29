output = document.getElementById("TwoOutput");
let countries = [];
let population = [];

function PrintCountriesAndPopulationFor() {
    let result = '';
    for (let i = 0; i < countries.length; i++) {
        result += `Страна: ${countries[i]}, Население: ${population[i]}<br>`;
    }
    return result;
}

function PrintCountriesAndPopulationForIn() {
    let result = '';
    let index = 0;
    for (const country of countries) {
        result += `Страна: ${country}, Население: ${population[index]}<br>`;
        index++;
    }
    return result;
}

function TwoAddCountriesAndPopulation() {
    countriesInput = document.getElementById("TwoInput1").value;
    populationInput = document.getElementById("TwoInput2").value;

    if (countriesInput == '' || populationInput == '') {
        output.innerHTML = `Ошибка! Заполните все поля!`;
    } else {
        countries.push(`${countriesInput}`);
        population.push(`${populationInput}`);

        document.getElementById("TwoInput1").value = '';
        document.getElementById("TwoInput2").value = '';

        output.innerHTML = `Данные добавлены!`;
    }
}

function TwoClear() {
    countries = [];
    population = [];
    output.innerHTML = `Списки очищены!`;
}

function TwoDisplayInfo() {
    output.innerHTML = ``;
    output.innerHTML += `Данные(for): <br>${PrintCountriesAndPopulationFor()}<br>`;
    output.innerHTML += `Данные(for in): <br> ${PrintCountriesAndPopulationForIn()}`;
}
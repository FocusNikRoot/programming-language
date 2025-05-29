const wellcomeText = document.getElementById('wellcome-massage');
const generateNameButton = document.getElementById('generate-name');
const continueButton = document.getElementById('continue');
const animalList = document.getElementById('animal-list');
const animalInfo = document.getElementById('animal-info');
const animalImage = document.getElementById('animal-image');
const animalFact = document.getElementById('animal-fact');
const userName = document.getElementById('user-name');

// Генерация случайного имени
async function generateRandomName() {
  try {
    const response = await fetch('https://api.randomdatatools.ru/');
    const data = await response.json();
    return data.EduSpecialty;
  } catch (error) {
    console.error('Ошибка при получении случайного имени:', error);
    return 'Гость';
  }
}

// Получение информации о животном
async function getAnimalInfo(animal) {
  try {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://some-random-api.ml/animal/${animal}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка при получении информации о животном:', error);
    return null;
  }
}

// Обработчик события клика на кнопку "Предложить другое имя"
generateNameButton.addEventListener('click', async () => {
  const name = await generateRandomName();
  wellcomeText.textContent = "Кажется тебе подойдёт, ";
  userName.textContent = name + '?';
});

// Обработчик события клика на кнопку "Далее"
continueButton.addEventListener('click', async () => {

    animalList.classList.remove('hidden');
    const selectedAnimal = document.querySelector('input[name="animal"]:checked')?.value;
    if (selectedAnimal) {
        animalList.classList.add('hidden');
        const animalData = await getAnimalInfo(selectedAnimal);
        if (animalData) {
        animalImage.src = animalData.image;
        animalFact.textContent = animalData.fact;
        animalInfo.classList.remove('hidden');
        }
    }
});

// Установка случайного имени при загрузке страницы
generateRandomName().then((name) => {
  userName.textContent = name + '!';
});

  const loaderSection = document.getElementById('loader');
  const textLoadSection = document.getElementById('load');
  const welcomeSection = document.getElementById('frame_1');
  const registrationOneSection = document.getElementById('registration-step-1')
  const registrationTwoSection = document.getElementById('registration-step-2')
  const registrationThreeSection = document.getElementById('registration-step-3')
  const registrationCompleteSection = document.getElementById('registration-complete')

window.addEventListener('DOMContentLoaded', () => {
  welcomeSection.classList.add('invisible');
  registrationOneSection.classList.add('invisible');
  registrationTwoSection.classList.add('invisible');
  registrationThreeSection.classList.add('invisible');
  registrationCompleteSection.classList.add('invisible');

  setTimeout(() => {
    loaderSection.style.display = 'none';
    textLoadSection.style.display = 'none';
    welcomeSection.classList.remove('invisible');
  }, 2000);
});

// Переход на следующие шаги
function refreshPage() {
  location.reload(); // Обновление страницы
}

function toRegistration() {
  welcomeSection.style.display = 'none';
  registrationOneSection.classList.remove('invisible');
}

function toSecondStep() {
  registrationOneSection.style.display = 'none';
  registrationTwoSection.classList.remove('invisible');
}

function toLastStep() {
  registrationTwoSection.style.display = 'none';
  registrationThreeSection.classList.remove('invisible');
}

function completeRegistration() {
  registrationThreeSection.style.display = 'none';
  registrationCompleteSection.classList.remove('invisible');
}

// Третий шаг регистрации
const cardNumberFields = document.querySelectorAll('.card-number-fields input');
const expirationDateInput = document.getElementById('expiration-date');
const cvvInput = document.getElementById('cvv');
const termsCheckbox = document.getElementById('terms-checkbox');
const submitButton = document.getElementById('btn-continue-3')

cardNumberFields.forEach((field, index) => {
  field.addEventListener('input', () => {
    field.value = field.value.replace(/[^0-9\/]/g, '').slice(0, 4);
    if (field.value.length === 4 && index < 3) {
      cardNumberFields[index + 1].focus();
    }
    toggleSubmitButton();
  });
});

expirationDateInput.addEventListener('input', () => {
  expirationDateInput.value = expirationDateInput.value.replace(/[^0-9\/]/g, '').replace(/(\d{2})(?=\d)/g, '$1/').slice(0, 5);
  toggleSubmitButton();
});

cvvInput.addEventListener('input', () => {
  cvvInput.value = cvvInput.value.replace(/[^0-9\/]/g, '').slice(0, 3);
  toggleSubmitButton();
});

termsCheckbox.addEventListener('change', toggleSubmitButton);

function toggleSubmitButton() {
  const cardNumber = Array.from(cardNumberFields).map(field => field.value).join('');
  submitButton.disabled = !(
    cardNumber.length === 16 &&
    expirationDateInput.value.length === 5 &&
    cvvInput.value.length === 3 &&
    termsCheckbox.checked
  );
}

// Второй шаг регистрации
const phoneNumberInput = document.getElementById('phone-number');
const verificationCodeInput = document.getElementById('verification-code');
const continueButton = document.getElementById('btn-continue-2')

phoneNumberInput.addEventListener('input', () => {
  phoneNumberInput.value = phoneNumberInput.value.replace(/[^0-9\/]/g, '').slice(0, 11);
  toggleContinueButton();
});

verificationCodeInput.addEventListener('input', () => {  
  verificationCodeInput.value = verificationCodeInput.value.replace(/[^0-9\/]/g, '').slice(0, 4);
  toggleContinueButton();
});

function toggleContinueButton() {
  continueButton.disabled = !(
    phoneNumberInput.value.length === 11 &&
    verificationCodeInput.value.length === 4
  );
}

// Первый шаг регистрации
const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const emailInput = document.getElementById('email');
const countryInput = document.getElementById('country');
const addressInput = document.getElementById('address');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const continueButtonOne = document.getElementById('btn-continue-1');

nameInput.addEventListener('input', () => {
  toggleContinueButtonOne();
});

surnameInput.addEventListener('input', () => {
  toggleContinueButtonOne();
});

emailInput.addEventListener('input', () => {
  toggleContinueButtonOne();
});

countryInput.addEventListener('input', () => {
  toggleContinueButtonOne();
});

addressInput.addEventListener('input', () => {
  toggleContinueButtonOne();
});

passwordInput.addEventListener('input', () => {
  toggleContinueButtonOne();
});

confirmPasswordInput.addEventListener('input', () => {
  toggleContinueButtonOne();
});

function toggleContinueButtonOne() {
  continueButtonOne.disabled = !(
    nameInput.value.length > 0 &&
    surnameInput.value.length > 0 &&
    emailInput.value.length > 0 &&
    countryInput.value.length > 0 &&
    addressInput.value.length > 0 &&
    passwordInput.value.length > 0 &&
    (passwordInput.value === confirmPasswordInput.value)
  );
}
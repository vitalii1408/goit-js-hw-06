const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Забороняє перезавантаження сторінки при відправці форми
  const formData = new FormData(loginForm);

  const formDataObject = {};
  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });

  if (!formDataObject.email || !formDataObject.password) {
    alert("Please fill in all fields");
    return;
  }

  console.log(formDataObject); // Виведення об'єкту в консоль
  loginForm.reset(); // Очистити значення полів форми
});


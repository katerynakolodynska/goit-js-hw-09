let formData = {
    email: "",
    message: ""
};
const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

form.addEventListener("input", (evt) => {
    formData['email'] = form.elements.email.value;
    formData['message'] = form.elements.message.value;
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener("submit", (evt) => {
    const email = form.elements.email.value;
    const message = form.elements.message.value;
    evt.preventDefault();

    if ((email.length == 0) || (message.length == 0)) {
        alert('Fill please all fields');
    } else {
        console.log(JSON.parse(localStorage.getItem(localStorageKey)));
        localStorage.removeItem(localStorageKey);

        formData = {
            email: "",
            message: ""
        };
        form.reset();
    }
});



document.addEventListener('DOMContentLoaded', function () {
    const localData = localStorage.getItem(localStorageKey);
    if (!Object.is(localData, null)) {
        formData = JSON.parse(localData);
        form.elements.email.value = formData['email'];
        form.elements.message.value = formData['message'];
    }
});


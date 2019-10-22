var link = document.querySelector(".btn_forma");

var popup = document.querySelector(".feedback");
var close = popup.querySelector(".close");

var form = popup.querySelector("form");
var nameInput = popup.querySelector(".feedback_name");
var email = popup.querySelector(".feedback_email");
var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("name");
} catch (err) {
    isStorageSupport = false;
}
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    if (storage) {
        nameInput.value = storage;
        email.focus();
    } else {
        nameInput.focus();
    }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    if (!nameInput.value || !email.value) {
        evt.preventDefault()
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {}
        localStorage.setItem("name", nameInput.value);
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
});
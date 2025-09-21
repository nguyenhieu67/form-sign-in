const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const form = $("#form");
const email = $("#email");
const thanks = $("#thanks");
const signIn = $("#sign-in");
const dismiss = $("#dismiss");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!email || !email.parentElement) {
        return;
    }

    if (!validateEmail(email.value)) {
        console.log(email.value);

        email.classList.add("form__input--error");
        return;
    }

    email.parentElement.classList.remove("form__input--error");
    signIn.classList.add("sign-in__hide");

    setTimeout(() => {
        thanks.classList.add("thanks__show");
    }, 700);

    dismiss.addEventListener("click", () => {
        form.reset();
        thanks.classList.remove("thanks__show");

        setTimeout(() => {
            signIn.classList.remove("sign-in__hide");
        }, 700);
    });
});

const validateEmail = (value) => {
    const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return emailRegex.test(String(value).toLowerCase());
};

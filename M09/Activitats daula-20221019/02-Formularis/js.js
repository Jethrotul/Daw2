import {Usuari} from "./Usuari.js";

const {} = document.querySelector('#usuariSubmit').elements;
const nouUsuari = document.querySelector('#usuariSubmit')
    .addEventListener('submit', function(event) {
    event.preventDefault()
    const nouUsuario = new Usuari(
        username.value,
        pwd.value,
        email.value,
        phone.value,
        mobile.value,
        birthday.value,
        home.checked,
        dona.checked,
        no_determinat.checked,
        no_binari.checked,
        gay.checked,
        lesbiana.checked,
        video_games.checked,
        esports.checked,
        llegir.checked,
    );
    console.log(nouUsuario);
});
console.log(nouUsuari);
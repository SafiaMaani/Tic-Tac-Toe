let btns = document.querySelectorAll('.btn')
let i = 0

//Pour recuperer l'index de la case à remplire :
function getId(btn) {
    //Pour savoir le role de qui ?
    while (i < 9) {
        if (i % 2 == 0) {
            btns[btn.id].innerHTML = "X"
            i++
            return;
        } else {
            btns[btn.id].innerHTML = "O"
            i++
            return;
        }
    }
}



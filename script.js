let btns = document.querySelectorAll('.btn')
let winner = ''
let i = 0


let joueur1 = document.getElementById('joueur1')
let joueur2 = document.getElementById('joueur2')

function stockPlayer() {
    localStorage.setItem('joueur1', joueur1.value)
    localStorage.setItem('joueur2', joueur2.value)
}



//Pour recuperer l'index de la case à remplire :
function getId(btn) {
    //WHO IS THE WINNER ?
    if (winner == '') {
        //lignes horizontales
        if (btns[0].innerHTML == btns[1].innerHTML && btns[0].innerHTML == btns[2].innerHTML && btns[0].innerHTML != '') {
            winner = btns[0].innerHTML
            if (winner == 'X') {
                winner = localStorage.getItem('joueur1')
            } else if (winner == 'O') {
                winner = localStorage.getItem('joueur2')
            }
            alert("the winner is : " + winner)
            console.log('ligne horizontale 1')
        } else if (btns[3].innerHTML == btns[4].innerHTML && btns[3].innerHTML == btns[5].innerHTML && btns[3].innerHTML != '') {
            winner = btns[3].innerHTML
            if (winner == 'X') {
                winner = localStorage.getItem('joueur1')
            } else if (winner == 'O') {
                winner = localStorage.getItem('joueur2')
            }
            alert("the winner is : " + winner)
            console.log('ligne horizontale 2')
        } else if (btns[6].innerHTML == btns[7].innerHTML && btns[6].innerHTML == btns[8].innerHTML && btns[6].innerHTML != '') {
            winner = btns[6].innerHTML
            if (winner == 'X') {
                winner = localStorage.getItem('joueur1')
            } else if (winner == 'O') {
                winner = localStorage.getItem('joueur2')
            }
            alert("the winner is : " + winner)
            console.log('ligne horizontale 3')
        }
        //lignes verticales
        else if (btns[0].innerHTML == btns[3].innerHTML && btns[0].innerHTML == btns[6].innerHTML && btns[0].innerHTML != '') {
            winner = btns[0].innerHTML
            if (winner == 'X') {
                winner = localStorage.getItem('joueur1')
            } else if (winner == 'O') {
                winner = localStorage.getItem('joueur2')
            }
            alert("the winner is : " + winner)
            console.log('ligne verticale 1')
        } else if (btns[1].innerHTML == btns[4].innerHTML && btns[1].innerHTML == btns[7].innerHTML && btns[1].innerHTML != '') {
            winner = btns[1].innerHTML
            if (winner == 'X') {
                winner = localStorage.getItem('joueur1')
            } else if (winner == 'O') {
                winner = localStorage.getItem('joueur2')
            }
            alert("the winner is : " + winner)
            console.log('ligne verticale 2')
        } else if (btns[2].innerHTML == btns[5].innerHTML && btns[2].innerHTML == btns[8].innerHTML && btns[2].innerHTML != '') {
            winner = btns[6].innerHTML
            if (winner == 'X') {
                winner = localStorage.getItem('joueur1')
            } else if (winner == 'O') {
                winner = localStorage.getItem('joueur2')
            }
            alert("the winner is : " + winner)
            console.log('ligne verticale 3')
        }
        //lignes croisées
        else if (btns[0].innerHTML == btns[4].innerHTML && btns[0].innerHTML == btns[8].innerHTML && btns[0].innerHTML != '') {
            winner = btns[0].innerHTML
            if (winner == 'X') {
                winner = localStorage.getItem('joueur1')
            } else if (winner == 'O') {
                winner = localStorage.getItem('joueur2')
            }
            alert("the winner is : " + winner)
            console.log('ligne croisée 1')
        } else if (btns[2].innerHTML == btns[4].innerHTML && btns[2].innerHTML == btns[6].innerHTML && btns[2].innerHTML != '') {
            winner = btns[2].innerHTML
            if (winner == 'X') {
                winner = localStorage.getItem('joueur1')
            } else if (winner == 'O') {
                winner = localStorage.getItem('joueur2')
            }
            alert("the winner is : " + winner)
            console.log('ligne croisée 2')
        }
        //No body wins
        else {
            console.log('No body wins')
        }
    } else {
        alert('The round finished')
        return
    }
    while (i < 9) {
        //I have to check first of all if it's empty 
        if (btns[btn.id].innerHTML == '') {
            //Then we have to know which one's round ?
            if (i % 2 == 0) {
                btns[btn.id].innerHTML = "X"
                i++
                return
            } else {
                btns[btn.id].innerHTML = "O"
                i++
                return
            }
        } else {
            btns[btn.id].innerHTML = btns[btn.id].innerHTML
            return
        }
    }
}
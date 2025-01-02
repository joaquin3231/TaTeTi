const turnoJugador = document.querySelector(".jugadorTurno")
const infoGanador = document.querySelector(".Ganador");
let ganador = false;

document.addEventListener("click", (e) => {
    if (e.target.parentElement.classList.contains("fila")) {
        if (e.target.classList.length == 1 && !ganador) {
            e.target.classList.add(turnoJugador.textContent)
            comprobarGanaddor();
            cambiarTurno();
        }
    }
})

function cambiarTurno() {
    if (turnoJugador.textContent == "X") {
        turnoJugador.textContent = "O"
        turnoJugador.classList = "jugadorO"
    } else {
        turnoJugador.textContent = "X"
        turnoJugador.classList = "jugadorX"
    }
}

function dibujarTablero() {
    const filas = document.querySelectorAll(".fila")

    const tablero = []

    for (let i = 0; i < filas.length; i++) {
        let fila = []
        for (let j = 0; j < filas[i].childElementCount; j++) {
            fila.push(filas[i].children[j].classList[1]);
        }
        tablero.push(fila);
    }

    return tablero
}

function comprobarGanaddor() {
    const tablero = dibujarTablero();
    let jugador = turnoJugador.textContent;
    let espaciosBlancos = 0;

    console.log(jugador)

    //Ganador Por Fila
    //Primera Fila
    if(tablero[0][0] == tablero[0][1] && tablero[0][1] == tablero[0][2] && tablero[0][2] == jugador ){
        infoGanador.textContent = "Gana El Jugador " + jugador;
        ganador = true; return;
    }

    //Segunda Fila
    if(tablero[1][0] == tablero[1][1] && tablero[1][1] == tablero[1][2] && tablero[1][2] == jugador ){
        infoGanador.textContent = "Gana El Jugador " + jugador;
        ganador = true; return;
    }

    //Tercera Fila
    if(tablero[2][0] == tablero[2][1] && tablero[2][1] == tablero[2][2] && tablero[2][2] == jugador ){
        infoGanador.textContent = "Gana El Jugador " + jugador;
        ganador = true; return;
    }

    //Ganador Por Columnaa
    //Primera Columna
    if(tablero[0][0] == tablero[1][0] && tablero[1][0] == tablero[2][0] && tablero[2][0] == jugador ){
        infoGanador.textContent = "Gana El Jugador " + jugador;
        ganador = true; return;
    }

    //Segunda Columna
    if(tablero[0][1] == tablero[1][1] && tablero[1][1] == tablero[2][1] && tablero[2][1] == jugador ){
        infoGanador.textContent = "Gana El Jugador " + jugador;
        ganador = true; return;
    }

    //Tercera Columna
    if(tablero[0][2] == tablero[1][2] && tablero[1][2] == tablero[2][2] && tablero[2][2] == jugador ){
        infoGanador.textContent = "Gana El Jugador " + jugador;
        ganador = true; return;
    }

    //Ganador Por Diagonal [\]
    if(tablero[0][0] == tablero[1][1] && tablero[1][1] == tablero[2][2] && tablero[2][2] == jugador ){
        infoGanador.textContent = "Gana El Jugador " + jugador;
        ganador = true; return;
    }
    
    //Ganador Por Diagonal [/]
    if(tablero[0][2] == tablero[1][1] && tablero[1][1] == tablero[2][0] && tablero[2][0] == jugador ){
        infoGanador.textContent = "Gana El Jugador " + jugador;
        ganador = true; return;
    }
    /*
        -   /   -   /   -
        -   /   -   /   -
        -   /   -   /   -
    */


    for (let i = 0; i < tablero.length; i++) {
        for (let j = 0; j < tablero[i].length; j++) {
            if (tablero[i][j] == undefined) {
                espaciosBlancos++;
            }
        }
    }
    if (espaciosBlancos == 0) {
        infoGanador.textContent = "Gana El Jugador Sin Espacios Para Jugar";

        ganador = true;
        return;
    }
}

//Reiniciar La Pagina
const btnReiniciar = document.querySelector(".reiniciar")

btnReiniciar.addEventListener("click", ()=>{
    location.reload();
})
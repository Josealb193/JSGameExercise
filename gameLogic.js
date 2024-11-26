// Definiendo la variable asociada al botón de inicio
let button1 = document.getElementById('startButton');
let buttonContext = button1.textContent || button1.innerText;
let matchesCounter = document.getElementById('matchesCounter')
let pendingMatches = document.getElementById('pendingMatches')
let pendientes = parseInt(pendingMatches.innerHTML);
const image1 = document.getElementById("image1")
const image2 = document.getElementById("image2")
const image3 = document.getElementById("image3")
const image4 = document.getElementById("image4")
const image5 = document.getElementById("image5")
const image6 = document.getElementById("image6")
const image7 = document.getElementById("image7")
const image8 = document.getElementById("image8")
const image9 = document.getElementById("image9")
const image10 = document.getElementById("image10")
const image11 = document.getElementById("image11")
const image12 = document.getElementById("image12")
const image13 = document.getElementById("image13")
const image14 = document.getElementById("image14")
const image15 = document.getElementById("image15")
const image16 = document.getElementById("image16")
let timer;
let checkMatchesInterval;
// Aleatorización de la posición de las imágenes
// Método Durstenfeld 
let PictureIDArray = ['1A','1B','2A','2B','3A','3B','4A','4B','5A','5B','6A','6B','7A','7B','8A','8B']
for (var i = PictureIDArray.length - 1; i>=0; i--) {
    var j = Math.floor(Math.random()*(i+1));
    var temp = PictureIDArray[i]
    PictureIDArray[i] = PictureIDArray[j]
    PictureIDArray[j] = temp;
}
// Asignando imágenes según determinación de aleatorización
function assignPicture(imageObject, shuffledArray, itemNumber) {
    switch (shuffledArray[itemNumber]) {
        case "1A": case "1B":
            imageObject.src = 'Images/chevrolet_icon.jpg';
            break;
        case "2A": case "2B":
            imageObject.src = 'Images/fiat_icon.jpg';
            break;
        case "3A": case "3B":
            imageObject.src = 'Images/maserati_icon.png';
            break;
        case "4A": case "4B":
            imageObject.src = 'Images/mazda_icon.png';
            break;
        case "5A": case "5B":
            imageObject.src = 'Images/mit_icon.png';
            break;
        case "6A": case "6B":
            imageObject.src = 'Images/nissan_icon.jpg';
            break;
        case "7A": case "7B":
            imageObject.src = 'Images/toyota_icon.png'
            break;
        case "8A": case "8B":
            imageObject.src = 'Images/bugatti_icon.png'
    }
}
// Etiqueta de desbloqueo del juego
let gameStarted = false;
// Ejecutar función cuando se active el botón
button1.addEventListener('click', (e) => {
    if (gameStarted == false) {
        // Desbloqueo de inicialización del juego
        gameStarted = true;
        console.log('Se ha activado el botón de inicio de juego.')
        // Cambiando estado del botón
        button1.innerHTML = "DETENER";
        // Iniciando contador de tiempo
        // Valores de representación de tiempo en DOM
        var minutesLabel = document.getElementById("minutes");
        var secondsLabel = document.getElementById("seconds");
        var totalSeconds = 0;
        // Inicialización de intervalo de tiempo
        timer = setInterval(setTime, 1000); 
        console.log('Tiempo iniciado')
        // Aumento progresivo de tiempo
        function setTime() {
          ++totalSeconds;
          // Actualizando el valor de la etiqueta en el DOM
          secondsLabel.innerHTML = pad(totalSeconds % 60);
          minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
        }
        // Agregando formato al contador para mostrar dos digitos por campo
        function pad(val) {
            var valString = val + "";
            if (valString.length < 2) {
              return "0" + valString;
            } else {
              return valString;
            }
          }
    } else {
        // Deteniendo el tiempo de ejecución del programa
        clearInterval(timer); 
        timer = null;
        console.log("Se ha finalizado el tiempo de ejecución del juego.")
        clearInterval(checkMatchesInterval)
        checkMatchesInterval = null;
        // Deteniendo etiqueta de juego iniciado
        gameStarted = false;
        button1.innerHTML = "INICIAR";
    }  
})
// Contador de parejas volteadas
let turnedPictures = 0;
// Registro de identificador de carta volteada (array de dos posiciones únicas)
let flippedCards = [];
image1.addEventListener('click', (e) => {
    if (gameStarted == true && turnedPictures <= 2) {
            assignPicture(image1, PictureIDArray, 0)
            turnedPictures += 1;
            console.log(turnedPictures)
            flippedCards.push(image1);
            // La verificación de pareja se ejecuta cada vez que se voltea una carta
            if (turnedPictures == 2) {
                checkMatches(flippedCards, turnedPictures)
                turnedPictures = 0;
            }
    }
})
image2.addEventListener('click', (e) => {
    if (gameStarted == true && turnedPictures <= 2) {
            assignPicture(image2, PictureIDArray, 1)
            turnedPictures += 1;
            console.log(turnedPictures)
            flippedCards.push(image2);
            // La verificación de pareja se ejecuta cada vez que se voltea una carta
            if (turnedPictures == 2) {
                checkMatches(flippedCards, turnedPictures)
                turnedPictures = 0;
            }
    }
})
image3.addEventListener('click', (e) => {
    if (gameStarted == true && turnedPictures <= 2) {
            assignPicture(image3, PictureIDArray, 2)
            turnedPictures += 1;
            console.log(turnedPictures)
            flippedCards.push(image3);
            // La verificación de pareja se ejecuta cada vez que se voltea una carta
            if (turnedPictures == 2) {
                checkMatches(flippedCards, turnedPictures)
                turnedPictures = 0;
            }
    }
})
image4.addEventListener('click', (e) => {
    if (gameStarted == true && turnedPictures <= 2) {
            assignPicture(image4, PictureIDArray, 3)
            turnedPictures += 1;
            console.log(turnedPictures)
            flippedCards.push(image4);
            // La verificación de pareja se ejecuta cada vez que se voltea una carta
            if (turnedPictures == 2) {
                checkMatches(flippedCards, turnedPictures)
                turnedPictures = 0;
            }
    }
})
image5.addEventListener('click', (e) => {
    if (gameStarted == true && turnedPictures <= 2) {
            assignPicture(image5, PictureIDArray, 4)
            turnedPictures += 1;
            console.log(turnedPictures)
            flippedCards.push(image5);
            // La verificación de pareja se ejecuta cada vez que se voltea una carta
            if (turnedPictures == 2) {
                checkMatches(flippedCards, turnedPictures)
                turnedPictures = 0;
            }
    }
})
image6.addEventListener('click', (e) => {
    if (gameStarted == true && turnedPictures <= 2) {
            assignPicture(image6, PictureIDArray, 5)
            turnedPictures += 1;
            console.log(turnedPictures)
            flippedCards.push(image6);
            // La verificación de pareja se ejecuta cada vez que se voltea una carta
            if (turnedPictures == 2) {
                checkMatches(flippedCards, turnedPictures)
                turnedPictures = 0;
            }
    }
})
image7.addEventListener('click', (e) => {
    if (gameStarted == true && turnedPictures <= 2) {
            assignPicture(image7, PictureIDArray, 6)
            turnedPictures += 1;
            console.log(turnedPictures)
            flippedCards.push(image7);
            // La verificación de pareja se ejecuta cada vez que se voltea una carta
            if (turnedPictures == 2) {
                checkMatches(flippedCards, turnedPictures)
                turnedPictures = 0;
            }
    }
})
image8.addEventListener('click', (e) => {
    if (gameStarted == true && turnedPictures <= 2) {
            assignPicture(image8, PictureIDArray, 7)
            turnedPictures += 1;
            console.log(turnedPictures)
            flippedCards.push(image8);
            // La verificación de pareja se ejecuta cada vez que se voltea una carta
            if (turnedPictures == 2) {
                checkMatches(flippedCards, turnedPictures)
                turnedPictures = 0;
            }
    }
})
image9.addEventListener('click', (e) => {
    if (gameStarted == true && turnedPictures <= 2) {
            assignPicture(image9, PictureIDArray, 8)
            turnedPictures += 1;
            console.log(turnedPictures)
            flippedCards.push(image9);
            // La verificación de pareja se ejecuta cada vez que se voltea una carta
            if (turnedPictures == 2) {
                checkMatches(flippedCards, turnedPictures)
                turnedPictures = 0;
            }
    }
})
image10.addEventListener('click', (e) => {
    if (gameStarted == true && turnedPictures <= 2) {
            assignPicture(image10, PictureIDArray, 9)
            turnedPictures += 1;
            console.log(turnedPictures)
            flippedCards.push(image10);
            // La verificación de pareja se ejecuta cada vez que se voltea una carta
            if (turnedPictures == 2) {
                checkMatches(flippedCards, turnedPictures)
                turnedPictures = 0;
            }
    }
})
image11.addEventListener('click', (e) => {
    if (gameStarted == true && turnedPictures <= 2) {
            assignPicture(image11, PictureIDArray, 10)
            turnedPictures += 1;
            console.log(turnedPictures)
            flippedCards.push(image11);
            // La verificación de pareja se ejecuta cada vez que se voltea una carta
            if (turnedPictures == 2) {
                checkMatches(flippedCards, turnedPictures)
                turnedPictures = 0;
            }
    }
})
image12.addEventListener('click', (e) => {
    if (gameStarted == true && turnedPictures <= 2) {
            assignPicture(image12, PictureIDArray, 11)
            turnedPictures += 1;
            console.log(turnedPictures)
            flippedCards.push(image12);
            // La verificación de pareja se ejecuta cada vez que se voltea una carta
            if (turnedPictures == 2) {
                checkMatches(flippedCards, turnedPictures)
                turnedPictures = 0;
            }
    }
})
image13.addEventListener('click', (e) => {
    if (gameStarted == true && turnedPictures <= 2) {
            assignPicture(image13, PictureIDArray, 12)
            turnedPictures += 1;
            console.log(turnedPictures)
            flippedCards.push(image13);
            // La verificación de pareja se ejecuta cada vez que se voltea una carta
            if (turnedPictures == 2) {
                checkMatches(flippedCards, turnedPictures)
                turnedPictures = 0;
            }
    }
})
image14.addEventListener('click', (e) => {
    if (gameStarted == true && turnedPictures <= 2) {
            assignPicture(image14, PictureIDArray, 13)
            turnedPictures += 1;
            console.log(turnedPictures)
            flippedCards.push(image14);
            // La verificación de pareja se ejecuta cada vez que se voltea una carta
            if (turnedPictures == 2) {
                checkMatches(flippedCards, turnedPictures)
                turnedPictures = 0;
            }
    }
})
image15.addEventListener('click', (e) => {
    if (gameStarted == true && turnedPictures <= 2) {
            assignPicture(image15, PictureIDArray, 14)
            turnedPictures += 1;
            console.log(turnedPictures)
            flippedCards.push(image15);
            // La verificación de pareja se ejecuta cada vez que se voltea una carta
            if (turnedPictures == 2) {
                checkMatches(flippedCards, turnedPictures)
                turnedPictures = 0;
            }
    }
})
image16.addEventListener('click', (e) => {
    if (gameStarted == true && turnedPictures <= 2) {
            assignPicture(image16, PictureIDArray, 15)
            turnedPictures += 1;
            console.log(turnedPictures)
            flippedCards.push(image16);
            // La verificación de pareja se ejecuta cada vez que se voltea una carta
            if (turnedPictures == 2) {
                checkMatches(flippedCards, turnedPictures)
                turnedPictures = 0;
            }
    }
})
function checkMatches(flippedCards, turnedPictures) {
    console.log("Evaluando igualdad de parejas")
    if (turnedPictures == 2) {
        console.log("Comparando valores")
        // Verificación de parejas mediante condicional AND
        console.log(flippedCards)
        if (flippedCards[0].src == flippedCards[1].src) {
            console.log("Las imágenes son iguales.")
            flippedCards.length = 0;
            // Actualizando contador
            matchesCounter.innerHTML = parseInt(matchesCounter.innerHTML) + 1
            pendingMatches.innerHTML = parseInt(pendingMatches.innerHTML) - 1
        } else {
            console.log('Las imágenes son diferentes, reiniciando valores')
            // Delay para visualización de imágenes incorrectas.
            var delayInMilliseconds = 1500; 
            setTimeout(function() {
                flippedCards[0].src = "Images/question_icon.png"
                flippedCards[1].src = "Images/question_icon.png"
                flippedCards.length = 0;
            }, delayInMilliseconds);
        }
        
    }
}
timer2 = setInterval(juegoTerminado, 1000);
function juegoTerminado() {
    let pendientes = parseInt(pendingMatches.innerHTML);
    console.log('Verificando finalización del juego')
    if (pendientes == 0) {
        clearInterval(timer); 
        timer = null;
        alert("¡Felicidades, has completado el juego!")
    }
}

function roulette(scommessa) {
    var colore;
    console.log(scommessa);
    var punteggio = parseInt(document.getElementById("punteggio").innerHTML);

    numero = Math.floor(Math.random() * 37);
    document.getElementById("estrazione").innerHTML = numero;
    if (numero == 32 || numero == 19 || numero == 21 || numero == 25 || numero == 34 || numero == 27 || numero == 36 || numero == 30 || numero == 23 || numero == 5 || numero == 16 || numero == 1 || numero == 14 || numero == 9 || numero == 18 || numero == 7 || numero == 12 || numero == 3) {
        colore = "rosso";
        document.getElementById("numero").style.backgroundColor = "red";
        document.getElementById("estrazione").style.color = "black";
    }
    else if (numero == 0) {
        colore = "verde";
        document.getElementById("numero").style.backgroundColor = "green";
        document.getElementById("estrazione").style.color = "black";
    }
    else {
        colore = "nero";
        document.getElementById("numero").style.backgroundColor = "black";
        document.getElementById("estrazione").style.color = "white";
    }
    console.log(numero, colore); 
    
    if (scommessa == "rosso" || scommessa == "nero"){
        if (colore == scommessa){
            punteggio += 2;
        }
        else {
            punteggio -= 1;
        }
    }
    else if (scommessa == "pari") {
        if (numero % 2 == 0){
            punteggio += 2;
        }
        else {
            punteggio -= 1;
        }
    }
    else if (scommessa == "dispari") {
        if (numero % 2 == 1){
            punteggio += 2;
        }
        else {
            punteggio -= 1;
        }
    }
    else {
        if (numero == parseInt(scommessa))
            punteggio += 35;
        else
            punteggio -= 17;
    }

    document.getElementById("punteggio").innerHTML = punteggio;
}
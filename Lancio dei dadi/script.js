function lancio(facce) {
    for (var i = 1; i <= 6; i++)
        document.getElementById("d" + i).style.display = "none";

    var ris = Math.floor(Math.random() * facce) + 1;
    console.log(ris);
    document.getElementById("d" + ris).style.display = "inline";
}
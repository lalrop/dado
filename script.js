let x = 0;

function lanzarDado () {
    $("#result").html("")
    let valCaras = parseInt($("#numCaras")[0].value);
    let numDados = parseInt($("#numDados")[0].value);
   
    while (x < numDados) {
        x += 1;
        let valRandom = Math.round(Math.random(0,valCaras)*10); 
        if (valRandom === 0) {
            valRandom = Math.round(Math.random(0,valCaras)*10);
        };
        var html = 
        `<div class="d-flex bg-secondary mx-4 px-4 shadow p-3 mb-5 rounded resultDado fs-3">${valRandom}</div>`;        
        $("#result").append(html);
    }
    x = 0 

    let array = [];
    array = $(".resultDado").each(p => p);
    let tirada = []
    let jackpots = 0;
    let camarones = 0;
    for (let ii = 0; ii < array.length; ii++) { 
        tirada.push(parseInt(array[ii].innerText));        
    }
    tirada.sort();
    jackpots = tirada.filter(val => val == 10).length;
    camarones = tirada.filter(val => val == 1).length;
    
    console.log(`jackpots: ${jackpots}`, `camarones: ${camarones}` , `tirada: ${tirada.filter(val =>val >=6).length}`);

    while (jackpots > 0) {
        tirada.push(6);
        jackpots -= 1
    }
    while (camarones > 0) {
        tirada.pop();
        camarones -= 1
    }
    tirada = tirada.filter(val => val >= 6).length

    console.log(`jackpots: ${jackpots}`, `camarones: ${camarones}` , `tirada: ${tirada}`);
    $('#conteo').removeClass('d-none');
    $('#nrSuccess').text(tirada);
}





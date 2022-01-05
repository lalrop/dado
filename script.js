let x = 0;

function lanzarDado () {
    $("#result").html("")
    let valCaras = parseInt($("#numCaras")[0].value);
    let numDados = parseInt($("#numDados")[0].value);
   
    while (x < numDados) {
        x += 1;
        let valRandom = Math.round(Math.random(0,valCaras)*10); 
        if (valRandom == 0) {
            valRandom = Math.round(Math.random(0,valCaras)*10);
        };
        var html = 
        `<div class="d-flex bg-secondary mx-4 px-4 shadow p-3 mb-5 rounded "><h3 id="vRandom${x}">${valRandom}</h3></div>`;        
        $("#result").append(html);
    }
    x = 0

 
}

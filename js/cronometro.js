let segundos = 0;
let minutos = 0;
// let cron

function segundo(){
    //incrementa os segundos
    segundos++;
    if(segundos==60){
        //incrementa os minutos
        minutos++;
        //Zerar os segundos
        segundos=0;
        //escreve os minutos
        document.getElementById('minuto').innerHTML=minutos
    }
    //escreve os segundos
    document.getElementById('segundo').innerHTML=segundos
    
}

function pause() {
    clearInterval(cron);
}

cron = setInterval(function(){ segundo() },1000)
// export function iniciando(){
//     let cron
//     cron = setInterval(function(){ segundo() },1000)
// }


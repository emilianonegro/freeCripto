export default function EventsJquery (cryptosGanadoras, cryptosPerdedoras,cripto2, cripto3) {    
    //Funcion que permite el intercambio (iteraccion con el usuario) de top 7 al 14 de criptomonedas con las de 93 a 100 con respecto al marketcap actual

    setTimeout(()=>{
        $(cripto3).hide();

        $(cryptosGanadoras).click(function () { 
            $(cripto3).hide();
            $(cripto2).show(0,()=>{
                                            $(cryptosGanadoras).addClass('disable')
                                            $(cryptosPerdedoras).removeClass('disable')
                                            });
            $(cripto3).hide();
        });
    
        $(cryptosPerdedoras).click(function () { 
            $(cripto2).hide();
            $(cripto3).show(0,()=>{
                                            $(cryptosPerdedoras).addClass('disable')
                                            $(cryptosGanadoras).removeClass('disable')
                                            });
        });
    }, 50);

 }
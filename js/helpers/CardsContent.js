import api from "../helpers/coingecko_api.js";

export function CardsContent(cripto1,cripto2,cripto3 ) {  
    //Funcion que consume API para renderizar valores de las criptomonedas a valor actual

    setTimeout(() => {
        $.get(api.API_WP, function (response, status) {
            if(status === 'success'){
                
                for (let i = 0; i < 7; i++) {
                    $(cripto1).append(`
                                                <ul id="${response[i]['id']}" class="tarjetasCriptoUl">
                                                    <li>${response[i]['market_cap_rank']}</li>
                                                    <li><img src="${response[i]['image']}"></li>
                                                    <li>${(response[i]['name'].split(' ',1))}</li>
                                                    <li>${response[i]['symbol']}</li>
                                                    <li>$${response[i]['current_price']}</li>
                                                </ul>`)                    
                }
    
                for (let i = 7; i < 14; i++) {
                    $(cripto2).append(`
                                                <ul id="${response[i]['id']}" class="tarjetasCriptoUl">
                                                    <li>${response[i]['market_cap_rank']}</li>
                                                    <li><img src="${response[i]['image']}"></li>
                                                    <li>${(response[i]['name'].split(' ',1))}</li>
                                                    <li>${response[i]['symbol']}</li>
                                                    <li>$${response[i]['current_price']}</li>
                                                </ul>`);   
                }
                
                for (let i = 93; i < 100; i++) {
                    $(cripto3).append(`
                                                <ul id="${response[i]['id']}" class="tarjetasCriptoUl">
                                                    <li>${response[i]['market_cap_rank']}</li>
                                                    <li><img src="${response[i]['image']}"></li>
                                                    <li>${(response[i]['name'].split(' ',1))}</li>
                                                    <li>${response[i]['symbol']}</li>
                                                    <li>$${response[i]['current_price']}</li>
                                                </ul>`);    
                }  
    
            }
        });
    }, 10); 
}
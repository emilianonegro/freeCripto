import api from "../helpers/coingecko_api.js";
import { cargarCryptos } from "./Billetera.js";


export function comprarCriptos() {     

const selectCripto = document.getElementById('criptoComprar');
const precioActual = document.getElementById('precioCritoElegida');
const criptoElegidaSimbolo = document.getElementById('criptoElegidaSimbolo');
const montoIngresado = document.getElementById('montoIngresado');
const montoComprar = document.getElementById('montoComprar');
const finalizarCompra = document.getElementById('finalizarCompra');
const formCompra = document.getElementById('formCompra');   

//Consumo de API para obtener valores, mostrarlos en TradePage y poder comprarlas
$.get(api.API_WP, function (response, status) {
    if(status === 'success'){  
    
        for (let i = 0; i < 100; i++){ 
                $(selectCripto).append(`                    
                    <option class='selectOption' value="${i}">${response[i]['id']}</option>
                `);              
        }       

        $(selectCripto).change(function (e) { 
            //funcion para capturar la criptomoneda elegida
            e.preventDefault();
            let cod = document.getElementById("criptoComprar").value;
            precioActual.textContent= '';
            $(precioActual).append(`
                $${response[cod]['current_price']}
            `);
            criptoElegidaSimbolo.textContent= '';
            $(criptoElegidaSimbolo).append(`
                ${response[cod]['symbol']}
            `);                
        });

        $(montoIngresado).keyup(function (e) {
            //Funcion para capturar el monto que desea comprar el usuario
            e.preventDefault();
            let cod = document.getElementById("criptoComprar").value;
            let monto = document.getElementById("montoIngresado").value;
        
            montoComprar.textContent= '';
            let totalMonto = monto/(response[cod]['current_price'])
            totalMonto = totalMonto.toFixed(3)
        
            $(montoComprar).append(`
                ${totalMonto}
            `);   

        });

        $(finalizarCompra).click(function (e) { 
            //Funcion para comprar criptomoneda
            e.preventDefault();     
            const pErrorCompra = document.querySelector('.hidden')
            let usuarioConectado = localStorage.getItem('usuario');
            if(usuarioConectado === null){
                pErrorCompra.classList.remove('hidden');
                setTimeout(() => {
                    pErrorCompra.classList.add('hidden');                               
                }, 1500);
            }else{
            
            let monto = Number(document.getElementById("montoComprar").innerHTML);
            let cod = document.getElementById("criptoComprar").value;                        
            let criptosYaCompradas = localStorage.getItem(`${response[cod]['symbol']}`);
            let infoBilletera2 = localStorage.getItem('infoBilletera');   
            let comprada = {
                symbol:`${response[cod]['symbol']}`,
                cantidad:`${monto}`
            };
        
            let miBilletera = [];
        
            if(infoBilletera2 === null){

                let infoBilletera =`${response[cod]['symbol']}`;
                miBilletera.push(infoBilletera);
                localStorage.setItem(`infoBilletera`, miBilletera);

            }else if(!infoBilletera2.includes(`${response[cod]['symbol']}`)){
                
                let infoBilletera3 = localStorage.getItem('infoBilletera');
                miBilletera.push(infoBilletera3);
                miBilletera.push(`${response[cod]['symbol']}`)
                localStorage.setItem(`infoBilletera`, miBilletera);
            }
        
            if(criptosYaCompradas === null){
            
                const montoJSON = JSON.stringify(comprada);                        
                localStorage.setItem(`${response[cod]['symbol']}`, montoJSON);
            
            }else{
                let criptosYaCompradasSinJson = JSON.parse(criptosYaCompradas);
                let sumaCriptos = (Number(criptosYaCompradasSinJson.cantidad) + monto);                        
                comprada.cantidad= `${sumaCriptos}`;
                const montoJSON = JSON.stringify(comprada);                        
                localStorage.setItem(`${response[cod]['symbol']}`, montoJSON);
            }
        
            montoComprar.textContent= 'Total a intercambiar'; 
            precioActual.textContent= 'Precio hoy';
            criptoElegidaSimbolo.textContent= 'Simbolo'
            formCompra.reset();
        
            cargarCryptos();}   
        });
        
    }
    cargarCryptos();         

});
}


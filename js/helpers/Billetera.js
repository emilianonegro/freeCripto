export function cargarCryptos() { 
    //Código para consumir API coingecko y renderizar criptomonedas compradas (Billetera del Usuario)
    setTimeout(() => {
        const lista = document.getElementById('lista');
        let billetera = localStorage.getItem('infoBilletera') || null;

        lista.textContent = '';
        
        if(billetera === null){

            $(lista).append(`
                <p id='listaTxtError' class='centrar'>Tú Billetera esta vacia 😢</p>
            `);

        }else{
            lista.textContent = ''
            billetera = billetera.split(',');

            $(lista).append(`
            <ul class='billeteraTabla'>
                <li class='billeteraTablaItem'>Cripto</li>
                <li class='billeteraTablaItem'>Monto</li>
            </ul>             
            `);           

            billetera.forEach(cripto => {
                //Recorriendo info billetera del localstorage para poder facilitar el encuentro de la info de las criptos compradas
                if(cripto !== ''){                
                    let memoriaBilletera = localStorage.getItem(cripto);
                    let memoriaBilleteraSinJSON = JSON.parse(memoriaBilletera);
                    $(lista).append(`
                    <ul id='${memoriaBilleteraSinJSON.symbol}' class='billeteraLista billeteraListaLinea'>
                        <li class='billeteraItem'>${memoriaBilleteraSinJSON.symbol}</li>
                        <li class='billeteraItem'>${memoriaBilleteraSinJSON.cantidad}</li>                    
                    </ul>
                    `);
                }                
            });  
        }

        const limpiarBilletera = document.getElementById('limpiarBilletera');

        function limpiarLocalCriptos(){
            //Funcion para eliminar "Vender" las criptomonedas de la billetera
            let billetera = localStorage.getItem('infoBilletera');
            if(billetera === null || billetera === ''){
                let listaTxtError = document.getElementById('listaTxtError');
                listaTxtError.innerHTML='No tienes nada para vender... 🙃'                    

                setTimeout(() => {
                    listaTxtError.innerHTML='Tú Billetera esta vacia 😢';
                }, 1500);

            }else{
                billetera = billetera.split(',');
              

                billetera.forEach(cripto => {
                    localStorage.removeItem(cripto);                  
                });
    
                billetera = '';
                localStorage.setItem('infoBilletera',billetera)
                cargarCryptos()
            }           
        }

        $(limpiarBilletera).click(limpiarLocalCriptos);        
    }, 100);
}
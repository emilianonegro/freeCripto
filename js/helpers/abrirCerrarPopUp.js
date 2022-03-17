export function AbrirPopUp() {
    //Funcion que permite que se abra el popUp de iniciar secion cuando se busca conectar la billetera
    setTimeout(() => {
    const alertaTxt = document.createElement('p');
    const conectarBilleteraNav = document.getElementById('conectarBilleteraNav');
    const conectarBilleteraMain = document.getElementById('conectarBilleteraMain');

        const abrirPopUp = (e) => {
            e.preventDefault();
            if(popupcontainer.className === 'none'){
                alertaTxt.innerHTML = '';
                popupcontainer.classList.toggle('none');
                
            }else{
                popupcontainer.classList.toggle('none');
                alertaTxt.innerHTML = '';
            }
        }
        $(conectarBilleteraNav).click(abrirPopUp);
        $(conectarBilleteraMain).click(abrirPopUp);       

        const CerrarPopUp = () => {
            if(popupcontainer.className !== 'none')popupcontainer.classList.toggle('none');
        }
        
        popUpContenedorCerrar.addEventListener('click', CerrarPopUp);
        
    }, 100);
}


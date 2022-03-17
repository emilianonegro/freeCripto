import { cargarCryptos } from "./Billetera.js";

export function ConectarUsuario() {
    //Funcion permite que el usuario inicie sesion
    setTimeout(() => {
        
        const navBilleteraBtn = document.getElementById('navBilleteraBtn');
        const conectarBilleteraNav = document.getElementById('conectarBilleteraNav');
        const popUpFormInputId = document.getElementById('popUpFormInputId');
        const popUpFormInputBtn = document.getElementById('popUpFormInputBtn');
        const popUpFormDiv = document.querySelector('#popUpFormDiv')
        const pAlerta = document.createElement('p');
        const $popUpDiv = document.getElementById('popupcontainer');
        const cerrarSesionDiv = document.getElementById('cerrarSesion');

        pAlerta.classList.add('none');

        const conectarUsuario = (e) =>{
            e.preventDefault();
            let nombreUsuario = popUpFormInputId.value;
            

            if((nombreUsuario.length > 8) || (nombreUsuario.length == 0)) {
                pAlerta.classList.remove('none');
                console.warn('La billetera debe ser menor a 8 caracteres');
                popUpFormInputId.value = '';
                pAlerta.innerHTML = '*Nombre debe tener entre 1 a 8 caracteres';
                popUpFormDiv.appendChild(pAlerta);
                setTimeout(() => {
                    popUpFormDiv.removeChild(pAlerta);

                }, 1500);            
            }else{
                conectarBilleteraNav.innerHTML = `${nombreUsuario}`;
                conectarBilleteraNav.disabled = true;
                pAlerta.innerHTML = '';
                $popUpDiv.classList.add('none');
                popUpFormInputId.value = '';

                if(cerrarSesionDiv.className != 'none') cerrarSesionDiv.classList.remove('none');           
            
                const nombreUsuarioJSON = JSON.stringify(nombreUsuario);
                localStorage.setItem('usuario', nombreUsuarioJSON);

            }    
        }

        popUpFormInputBtn.addEventListener('click', conectarUsuario);

        const cerrarSecion = (e) =>{
            //Funcion permite que el usuario cierre sesion y se limpien todos los datos almacenados.

            e.preventDefault();
            localStorage.clear();
            conectarBilleteraNav.innerHTML = `Conectar Billetera`;
            conectarBilleteraNav.disabled = false;
            cerrarSesionDiv.classList.add('none');
            cargarCryptos();
        }

        cerrarSesionDiv.addEventListener('click', cerrarSecion);
        let datosUsuario = localStorage.getItem('usuario');

        if(datosUsuario !== null){
            let datosUsuariosSinJSON = JSON.parse(datosUsuario);
            conectarBilleteraNav.innerHTML = `${datosUsuariosSinJSON}`;
            cerrarSesionDiv.classList.remove('none');
            conectarBilleteraNav.disabled = true;
            navBilleteraBtn.classList.toggle('none');
        }
        
    });

    
    
}
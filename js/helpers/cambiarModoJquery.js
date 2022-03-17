export default function darkTheme(btn, classDark,classDark2){
    //Funcion que permite el cambio de modo claro a oscuro y a su vez se guarda en el localStorage la opcion elegida
    setTimeout(() => {
    const   modoBtn = document.querySelector(btn),
            selectors = document.querySelectorAll('[data-dark]'),
            selectors2 = document.querySelectorAll('[data-dark2]');

        let moon = '🌙',
        sun = '☀️';        

        const lightMode = () => {
            selectors.forEach(el => el.classList.remove(classDark));
            modoBtn.textContent = moon;
            selectors2.forEach(el => el.classList.remove(classDark2));
            modoBtn.textContent = moon;
            localStorage.setItem('theme','light');
        };
        
        const darkMode = () => {
            selectors.forEach(el => el.classList.add(classDark));
            modoBtn.textContent = sun;
            selectors2.forEach(el => el.classList.add(classDark2));
            modoBtn.textContent = sun;
            selectors2.forEach(el => el.classList.add(classDark2));
            modoBtn.textContent = sun;
            localStorage.setItem('theme','dark');
        };  

        document.addEventListener('click', e => {

            if(e.target.matches(btn)){
                if(modoBtn.textContent === moon){
                    darkMode();
                }else{
                    lightMode();
                }                
            }
        });

        if(localStorage.getItem('theme') === null) localStorage.setItem('theme', 'light');
        if(localStorage.getItem('theme') === 'light') lightMode();
        if(localStorage.getItem('theme') === 'dark') darkMode();

    }, 120);  
    
}
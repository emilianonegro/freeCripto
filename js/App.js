import { AbrirPopUp } from "./helpers/abrirCerrarPopUp.js";
import { cargarCryptos } from "./helpers/Billetera.js";
import darkTheme from "./helpers/cambiarModoJquery.js";
import { CardsContent } from "./helpers/CardsContent.js";
import { comprarCriptos } from "./helpers/comprarCripto.js";
import { ConectarUsuario } from "./helpers/conectarUsuario.js";
import EventsJquery from "./helpers/eventsJquert.js";



CardsContent('#tarjetasCripto1','#tarjetasCripto2','#tarjetasCripto3');
EventsJquery('#cryptosGanadoras','#cryptosPerdedoras','#tarjetasCripto2','#tarjetasCripto3');
darkTheme('.dark-theme-btn','dark-mode','dark-mode2');
AbrirPopUp();
ConectarUsuario();
comprarCriptos()
cargarCryptos();
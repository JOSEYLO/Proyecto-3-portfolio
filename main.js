import './style.css'

// constantes
import { Header } from './src/components/Header/Header'
import { Footer } from './src/components/Footer/Footer'

// paginas
import { Home } from './src/pages/Home/Home'
import { AboutMe } from './src/pages/AboutMe/AboutMe'
import { Proyects } from './src/pages/Proyects/Proyects'

// funcionalidades
import { linkpages } from './src/utils/linkpages'
import { showContent } from "./src/components/Footer/Footer";


document.querySelector('header').innerHTML = Header()
document.querySelector('footer').innerHTML = Footer()

Home();
showContent();

// ejecucion de links
linkpages('#homelink', Home)
linkpages('#aboutmelink', AboutMe)
linkpages('#proyectslink', Proyects)



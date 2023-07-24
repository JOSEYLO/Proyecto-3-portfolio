import './Home.css'
import { Avatar } from "../../components/Avatar/Avatar";

export const Home = () => {
  const main = document.querySelector("main");

  main.innerHTML = `
    <section class="home">

      <div class="descrip">
        <h1 class="name">José Miguel Díaz</h1>
        <h2 class="dark-mode">Estudiante Full Stack Developer.</h2>

      </div>
      <div class="image">
        ${Avatar("./assets/imagen-jose.png", "Avatar José Miguel")}
      </div>
    </section>
    ` ;

};

import "./Proyects.css";

import { projectsData } from "../../utils/Proyects-data";
import { cardProject } from "../../components/Card-proyects/Cards-proyects";

export const Proyects = () => {
  const main = document.querySelector("main");

  main.innerHTML = `
    <section class="container">
      <h4>Proyectos</h4>
      <article class="container-project">
        ${projectsData.map((el) =>
    cardProject(el.img, el.title, el.goal, el.description, el.tech, el.link, el.github)).join("")
    }
      </article>
    </section>
    `;
};
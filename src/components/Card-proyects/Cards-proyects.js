import "./Cards-proyects.css";


export const cardProject = (img, title, goal, description, tech, link, github) => {
  return `
  <div class="card-project">

    <div class="card-left">

      <img class="img-project" src=${img} alt=${goal} />

      <a href=${link} target="_blank">
        <img class="link-icon" src="./assets/icons8-enlazar-50.png" alt="icon-link" />
        </a>

      <a href=${github} target="_blank">
        <img class="link-icon" src="./assets/icons8-github-50 (1).png" alt="icon-github" />
        </a>

      <div class="container-tech">
        ${tech.map((el) =>
    (`<img class="icon-tech" src=${el} alt="icon-tech" />`)).join(" ")
    }
      </div>

    </div>

    <div class="card-right">
      <h5>${title}</h5>
      <h6>${goal}</h6>
      <hr>
        <button class="info-project">Leer información</button>
        <p>${description}</p>

    </div>

  </div>
  `;
}
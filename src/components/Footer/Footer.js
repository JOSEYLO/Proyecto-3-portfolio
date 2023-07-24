import "./Footer.css";

export const Footer = () => {
  return `

    <section class="rrss background-change">
        <button id="rrssBtn"><img src="./assets/icons8-flecha-64.png" alt="icon-rrss" /></button>
        <a href="https://github.com/JOSEYLO" target="_blank" class="icon-rrss" ><img class="icon-footer" src="./assets/icons8-github-50 (1).png" alt="icon-github" /></a>
        <a href="https://www.linkedin.com/in/josele/?trk=public_profile-settings_edit-profile-content&originalSubdomain=es" target="_blank" class="icon-rrss"><img class="icon-footer" src="./assets/icons8-linkedin-50 (1).png" alt="icon-linkedin" /></a>
        <a href="mailto:joselee2011@hotmail.es" target="_blank"><img src="./assets/icons8-mensaje-50.png" alt="icon-email" /></a>
    </section>

    <section class="rrss-movil">
        <a href="https://github.com/JOSEYLO" target="_blank"><img src="./assets/icons8-github-50 (1).png" alt="icon-github" /></a>
        <a href="https://www.linkedin.com/in/jos%C3%A9-m-941872266" target="_blank"><img src="./assets/icons8-linkedin-50 (1).png" alt="icon-linkedin" /></a>
        <a href="mailto:joselee2011@hotmail.es" target="_blank"><img src="./assets/icons8-mensaje-50.png" alt="icon-email" /></a>
    </section>

    <section class="reserved"> 
        <p class="dark-mode">Created by <span class="gradient">José Miguel</span> 2023 at Rock {TheCode}</p>
    </section>
`
}


export const showContent = () => {
  const rrssList = document.querySelector(".rrss");
  const rrssBtn = document.querySelector("#rrssBtn");


  rrssBtn.addEventListener("click", () => {
    rrssList.classList.toggle("show-rrss");
  });
};
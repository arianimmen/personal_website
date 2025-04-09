function setVh() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
window.addEventListener("resize", setVh);
window.addEventListener("load", setVh);

import Storage from "./storage.js";

// reading the data for skills
const skillsData = Storage.getSkiilsData();

// selection
const skillsContainer = document.querySelector(".skills__body");

class Ui {
  // adding the skills data to the dom
  addToDom(skillsData) {
    skillsData.forEach((skill) => {
      skillsContainer.innerHTML += ` 
      <div class="skills__body__item">
            <div class="skills__body__item__text">
              <p class="skills__body__item__text__header">
               ${skill.title}
              </p>
              <p class="skills__body__item__text__body">
                ${skill.text}
              </p>
              <hr />
              <ul>
                ${this.makeTags(skill.tags)}
              </ul>
            </div>
            <img src="${skill.imgURL}" alt="network certificate" />
          </div>`;
    });
  }
  // generate the tags
  makeTags(tagList) {
    let tags = "";
    tagList.forEach((tag) => {
      tags += `<li>${tag}</li>`;
    });
    return tags;
  }
}

// initiate
document.addEventListener("DOMContentLoaded", () => {
  const ui = new Ui();
  ui.addToDom(skillsData);
});

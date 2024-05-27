"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

window.addEventListener("load", initApp); // When the page is loaded, run initApp function

// Function to initialize the Web App
async function initApp() {
  console.log("initApp: app.js is running 🎉"); // Log to the console that the app is running
  const teachers = await getTeachers();
  console.log(teachers);
  displayTeachers(teachers);
  displayTeachersGrid(teachers);
}

// fetch-teachers function
async function getTeachers() {
  const response = await fetch("https://cederdorff.com/race/data/users.json");
  const data = await response.json();
  return data;
}

//display teachers
function displayTeachers(teachers) {

  console.log(teachers);

  const teachersList = document.querySelector("#teachers-list");

  teachersList.insertAdjacentHTML(
    "beforeend", "<h2>Teachers</h2>");

  for (const teacher of teachers) {
    console.log(teachers);
    teachersList.insertAdjacentHTML(
      "beforeend",
      `
      <li>
        ${teacher.name}
      </li>
      `
    );
  }
}


function displayTeachersGrid(teachers) {
  const teachersGrid = document.querySelector("#teachers-grid");

  for (const teacher of teachers) {
    teachersGrid.insertAdjacentHTML (
      "beforeend", `

      <article class="grid-item">
        <img src="${teacher.image}" alt="${teacher.name}"  />
        <h2>${teacher.name}</h2>
        <p>${teacher.title}</p>
        <a href="mailto:${teacher.mail}">${teacher.mail}</a>
        </article>
        `
    );
  }
}
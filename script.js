function openModal() {
  document.getElementById("contactModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("contactModal").style.display = "none";
}

/* Load Skills */
fetch("skills.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("skills-container");
    container.innerHTML = ""; // clear before adding

    data.skills.forEach(skill => {
      const div = document.createElement("div");
      div.className = "card";
      div.textContent = skill;
      container.appendChild(div);
    });
  });

/* Load Projects */
fetch("project.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("projects-container");
    container.innerHTML = "";

    data.projects.forEach(project => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <p><strong>Technologies:</strong> ${project.tech}</p>
      `;
      container.appendChild(div);
    });
  });


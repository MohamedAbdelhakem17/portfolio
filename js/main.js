import { projects } from "../data/projects.js"
const selectOption = [...document.querySelectorAll(".content .select-option h2")]
const dataContainer = [...document.querySelectorAll(".content .container .data ")]

selectOption.forEach((option) => {
    option.addEventListener("click", () => {
        const activeOption = option.getAttribute("data-section")
        selectOption.forEach(option => option.classList.remove("active"));
        option.classList.add("active");
        dataContainer.forEach(container => {
            container.classList.remove("active")
            if (activeOption === container.id) container.classList.add("active")
        });
    })
})

function displayProjects() {
    const containner = document.getElementById("projects");
    let content = ""
    for (let i = 0; i < projects.length; i++) {
        content += `
        <div class="project" data-aos="fade-up">
            <div class="inner">
                <div class="img">
                    <img src="${projects[i].img}" alt="${projects[i].projectName}">
                </div>
                <div class="info">
                    <h3>${projects[i].projectName}</h3>
                    <div class="links">
                        <a href="${projects[i].link}" target="_blank" rel="noopener"><i
                                class="fa-solid fa-link"></i></a>
                        <a href="${projects[i].githubLink}" target="_blank" rel="noopener"><i
                                class="fa-brands fa-github"></i></a>
                    </div>
                </div>
            </div>
        </div>
        `
    }
    containner.innerHTML = content
}
displayProjects()




const darkBtn = document.getElementById("sombre");

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const icon = darkBtn.querySelector("i");

    if(document.body.classList.contains("light-mode")){
        icon.classList.replace("bx-moon", "bx-sun");
    }
    else{
        icon.classList.replace("bx-sun", "bx-moon");
    }

});

const btn = document.getElementById("btn");
const moreText = document.getElementById("moreText");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    moreText.classList.toggle("show");
    btn.textContent = moreText.classList.contains("show") ? "Read Less" : "Read More";
});

$(document).ready(function () {
    let animated = false;

    $(window).on('scroll', function () {
        const sectionPos = $('.progress-bar').offset().top;
        const screenPos = $(window).scrollTop() + $(window).height();

        if (screenPos > sectionPos && !animated) {
            $('.progress-fill').each(function () {
                const targetLevel = $(this).attr('data-level');
                $(this).animate({ width: targetLevel }, 1500);
            });
            animated = true;
        }
    });
});
//validation des champs 
$(".contact-form").on("submit", function(e) {

  const nom = $("#nom").val()
  const email = $("#email").val()
  const message = $("#message").val()
  const subject = $("#subject").val()

  if (nom === "" || email === "" || message === "" || subject === "") {

    e.preventDefault()

    $("#erreur")
      .text("Tous les champs sont obligatoires.")
      .css("color", "red")

    return
  }

  $("#erreur")
    .text("Message envoyé !")
    .css("color", "green")

})


// react pour les projets

function switchTab(tab) {
    document.getElementById("tab-academic").classList.remove("active");
    document.getElementById("tab-personal").classList.remove("active");
    document.getElementById("tab-" + tab).classList.add("active");
    document.getElementById("academic-root").style.display = tab === "academic" ? "block" : "none";
    document.getElementById("personal-root").style.display = tab === "personal" ? "block" : "none";
}


function ProjectPortfolio({ titre, description, technologies, lien, image }) {
    return (
        <div className="project-card">
            <img src={image} alt={titre} />
            <div className="project-info">
                <h3>{titre}</h3>
                <p>{description}</p>
                <div className="project-techs">
                    {technologies.map((tech) => (
                        <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                </div>
                {lien && (
                    <a href={lien} target="_blank" className="btn projet-btn">
                        <i className="bx bxl-github"></i> Voir le projet
                    </a>
                )}
            </div>
        </div>
    );
}

const projetsAcademiques = [
    {
        id: 1,
        titre: "Jeu 2D – SFML & C++",
        description: "Collaborative 2D game project built with SFML and C++.",
        technologies: ["C++", "SFML"],
        lien: "https://github.com/onagchi4057-arch/jeu-2D.git",
        image: "src/jeu2D (1).png",
    },
    {
        id: 2,
        titre: "Trip Maroc",
        description: "Web application for travel planning in Morocco, developed as a team project.",
        technologies: ["HTML", "CSS", "JavaScript"],
        lien: "https://github.com/onagchi4057-arch/trip-au-maroc.git",
        image: "src/tripMaroc.png",
    },
];

const projetsPersonnels = [
    {
        id: 1,
        titre: "Smart Automatic Parking System (In Progress)",
        description: "Development of an intelligent parking management system with automated vehicle access and parking space monitoring. Currently in progress, with upcoming AI camera integration for vehicle detection and recognition.",
        technologies: ["Arduino", "C++", "AI Camera"],
        lien: null,
        image: "src/parking.avif",
    },
];

const academicRoot = ReactDOM.createRoot(document.getElementById("academic-root"));
academicRoot.render(
    <>
        {projetsAcademiques.map((p) => <ProjectPortfolio key={p.id} {...p} />)}
    </>
);

const personalRoot = ReactDOM.createRoot(document.getElementById("personal-root"));
personalRoot.render(
    <>
        {projetsPersonnels.map((p) => <ProjectPortfolio key={p.id} {...p} />)}
    </>
);
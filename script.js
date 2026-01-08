/* ================= FEATURED PROJECT SLIDER (LEFT → RIGHT) ================= */

const projectSlider = document.getElementById("projectSlider");

let projectPosition = 0;
const projectSpeed = 1; // speed control

function slideProjects() {
    projectPosition -= projectSpeed;

    if (Math.abs(projectPosition) >= projectSlider.scrollWidth / 2) {
        projectPosition = 0;
    }

    projectSlider.style.transform = `translateX(${projectPosition}px)`;
    requestAnimationFrame(slideProjects);
}

slideProjects();


/* ================= REVIEW SLIDER (LEFT → RIGHT) ================= */

const reviewSection = document.querySelector(".reviews");
const reviewBoxes = document.querySelectorAll(".review-box");

const reviewContainer = document.createElement("div");
reviewContainer.style.display = "flex";
reviewContainer.style.gap = "40px";
reviewContainer.style.whiteSpace = "nowrap";
reviewContainer.style.transition = "none";

reviewBoxes.forEach(box => {
    box.style.display = "block";
    box.style.minWidth = "350px";
    reviewContainer.appendChild(box);
});

reviewSection.appendChild(reviewContainer);

let reviewPosition = 0;
const reviewSpeed = 0.6;

function slideReviews() {
    reviewPosition -= reviewSpeed;

    if (Math.abs(reviewPosition) >= reviewContainer.scrollWidth / 2) {
        reviewPosition = 0;
    }

    reviewContainer.style.transform = `translateX(${reviewPosition}px)`;
    requestAnimationFrame(slideReviews);
}

slideReviews();

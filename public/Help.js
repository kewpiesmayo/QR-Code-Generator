document.querySelectorAll(".question").forEach(q => {
    q.addEventListener("click", () => {
        const answer = q.nextElementSibling;
        answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
});


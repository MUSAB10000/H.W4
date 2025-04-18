// Add a "Toggle Skills" button using DOM
document.getElementById("toggleSkills").addEventListener("click", function() {
    let skillsSection = document.getElementById("skillsSection");
    if (skillsSection.style.display === "none" || skillsSection.style.display === "") {
      skillsSection.style.display = "block";
    } else {
      skillsSection.style.display = "none";
    }
  });
  

const sidebar = document.querySelector(".sidebar");

document.querySelector(".hamburger-container").addEventListener("click", () => {
    // document.querySelector(".hamburger-container").classList.toggle("change");
    if (sidebar.style.display === "block") {
      sidebar.style.display = "none";
    } else {
      sidebar.style.display = "block";
    }
});

document.querySelector(".sidebar-x i").addEventListener("click", () => {
  sidebar.style.display = "none";
});

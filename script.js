
document.querySelector(".hamburger-menu").addEventListener("click", () => {
    document.querySelector(".hamburger-container").classList.toggle("change");
    const sidebar = document.querySelector(".sidebar");
    if (sidebar.style.display === "block") {
      sidebar.style.display = "none";
    } else {
      sidebar.style.display = "block";
    }
});

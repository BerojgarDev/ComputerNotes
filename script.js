
function toggle(id, btn) {
    const content = document.getElementById(id);
    content.classList.toggle("show");

    if (content.classList.contains("show")) {
        btn.textContent = "Hide Notes";
    } else {
        btn.textContent = "View Notes";
    }
}

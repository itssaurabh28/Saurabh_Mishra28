function toggleDropdown(id) {
    var dropdown = document.getElementById(id);
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";


    
  

    var button = dropdown.previousElementSibling;
    button.classList.toggle("active");


    var listItem = dropdown.previousElementSibling;
    listItem.classList.toggle("highlight-background");
  }


  // on-clicking home side-bar get hidden
  function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('collapsed');
}





// to toogle the side-bar

function toggleSidebar() {
  var sidebar = document.querySelector('.sidebar');
  var content = document.querySelector('.grid-container'); // Adjust the selector if needed
  sidebar.classList.toggle('collapsed');
  content.classList.toggle('expanded');
  sidebar.classList.toggle('hidden');
  content.classList.toggle('full-width');
}

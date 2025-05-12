const dialog = document.getElementById("myDialog");
const toggleButton = document.getElementById("toggleButton");
const closeButton = document.getElementById("closeButton");

// Toggle the dialog visibility
toggleButton.addEventListener("click", function () {
  if (dialog.open) {
    dialog.close(); // Close the dialog
  } else {
    dialog.showModal(); // Open the dialog
  }
});

// Close the dialog when the close button is clicked
closeButton.addEventListener("click", function () {
  dialog.close(); // Close the dialog
});

// SEARCH BAR TOGGLE
document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("searchButton");
  const searchContainer = document.getElementById("searchContainer");

  searchButton.addEventListener("click", () => {
    // Toggle visibility of the search bar
    if (
      searchContainer.style.display === "none" ||
      searchContainer.style.display === ""
    ) {
      searchContainer.style.display = "block";
    } else {
      searchContainer.style.display = "none";
    }
  });
});

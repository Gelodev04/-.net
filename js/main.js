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

// PAGINATION
 const urlParams = new URLSearchParams(window.location.search);
  const currentPage = urlParams.get('page') || '1'; // default to 1 if not set

  // Highlight the current page
  const links = document.querySelectorAll('#pagination a');
  links.forEach(link => {
    if (link.dataset.page === currentPage) {
      link.classList.add('bg-[#c4c4c4]');
    } else {
      link.classList.remove('bg-gray-300');
    }
  });

// RICH EDITOR
//  ClassicEditor
//     .create(document.querySelector('#editor'), {
//       toolbar: [
//         'heading',
//         '|',
//         'imageUpload', 'mediaEmbed', 'link',
//         '|',
//         'bold', 'italic',
//          'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor',
//         'alignment',
//         'bulletedList', 'numberedList',
//         '|',
//         'blockQuote', 'insertTable',
//         'undo', 'redo',
//         'sourceEditing'
//       ],
      
//     })
//     .catch(error => {
//       console.error(error);
//     });


const {
     ClassicEditor,
    Essentials,
    Bold,
    Italic,
    Font,
    Paragraph,
    Heading,
    ImageUpload,
    MediaEmbed,
    Link,
    Alignment,
    List,
    BlockQuote,
    Table,
    Undo,
    Redo,
    SourceEditing,
    GeneralHtmlSupport
} = CKEDITOR;

ClassicEditor
    .create( document.querySelector( '#editor' ), {
        licenseKey: '<YOUR_LICENSE_KEY>',
        plugins: [ Essentials, Bold, Italic, Font, Paragraph, Heading ],
        toolbar: [
        'heading',
        '|',
        'imageUpload', 'mediaEmbed', 'link',
        '|',
        'bold', 'italic',
         'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor',
        'alignment',
        'bulletedList', 'numberedList',
        '|',
        'blockQuote', 'insertTable',
        'undo', 'redo',
        'sourceEditing'
      ]
    } )
    .then( /* ... */ )
    .catch( /* ... */ );

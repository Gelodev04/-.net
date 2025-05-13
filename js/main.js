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

// // RICH EDITOR
//  ClassicEditor
//     .create(document.querySelector('#editor'), {
//       htmlSupport: {
//       allow: [
//         {
//           name: 'div',
//           attributes: ['contenteditable', 'class'],
//           classes: true,
//           styles: true
//         }
//       ]
//     },
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

/**
 * This configuration was generated using the CKEditor 5 Builder. You can modify it anytime using this link:
 * https://ckeditor.com/ckeditor-5/builder/#installation/NoNgNARATAdArDADBSUDMAOKIAscQZwCMaAnGTmnHOkQOw4alx1FzmN1REZEgoQApgDsUiMMCJhx4qbIC6kIgEM6GOqToR5QA===
 */

const {
	ClassicEditor,
	Alignment,
	AutoImage,
	Autosave,
	BlockQuote,
	Bold,
	CKBox,
	CKBoxImageEdit,
	CloudServices,
	Essentials,
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,
	FullPage,
	GeneralHtmlSupport,
	Heading,
	HtmlComment,
	HtmlEmbed,
	ImageBlock,
	ImageCaption,
	ImageEditing,
	ImageInline,
	ImageInsert,
	ImageInsertViaUrl,
	ImageResize,
	ImageStyle,
	ImageTextAlternative,
	ImageToolbar,
	ImageUpload,
	ImageUtils,
	Italic,
	Link,
	LinkImage,
	List,
	ListProperties,
	Paragraph,
	PictureEditing,
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TableToolbar,
	Underline
} = window.CKEDITOR;
const { SourceEditingEnhanced } = window.CKEDITOR_PREMIUM_FEATURES;

const LICENSE_KEY =
	'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NDgzOTAzOTksImp0aSI6Ijk4OGU0YjA1LTNjZTEtNDRmYy1iMjY0LTAzNGRkMGNjOTk4MSIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6IjVjYjZmNzJlIn0.DIrbDjnAMk9bf8ilkp-CayziHTAzbCDa9yk190_V1MXSUxOLgmqXAdY5TNBL9z3K7ToC3pkCPGGlaMhWHPmsJw';

const CLOUD_SERVICES_TOKEN_URL =
	'https://8o00lebiaabv.cke-cs.com/token/dev/75c211d0621d5f65d42103055aea396630bc92f96622a10a8f0889eef97c?limit=10';

const editorConfig = {
	toolbar: {
		items: [
		
			'|',
			'heading',
			'|',
			'insertImage',
			'link',
      '|',
			'bold',
			'italic',
			'fontColor',
			'fontBackgroundColor',
			'alignment',
			'bulletedList',
			'numberedList',
			'|',
			'blockQuote',
			'insertTable',
			'|',
      	'sourceEditingEnhanced'

		],
		shouldNotGroupWhenFull: false
	},
	plugins: [
		Alignment,
		AutoImage,
		Autosave,
		BlockQuote,
		Bold,
		CKBox,
		CKBoxImageEdit,
		CloudServices,
		Essentials,
		FontBackgroundColor,
		FontColor,
		FontFamily,
		FontSize,
		FullPage,
		GeneralHtmlSupport,
		Heading,
		HtmlComment,
		HtmlEmbed,
		ImageBlock,
		ImageCaption,
		ImageEditing,
		ImageInline,
		ImageInsert,
		ImageInsertViaUrl,
		ImageResize,
		ImageStyle,
		ImageTextAlternative,
		ImageToolbar,
		ImageUpload,
		ImageUtils,
		Italic,
		Link,
		LinkImage,
		List,
		ListProperties,
		Paragraph,
		PictureEditing,
		SourceEditingEnhanced,
		Table,
		TableCaption,
		TableCellProperties,
		TableColumnResize,
		TableProperties,
		TableToolbar,
		Underline
	],
	cloudServices: {
		tokenUrl: CLOUD_SERVICES_TOKEN_URL
	},
	fontFamily: {
		supportAllValues: true
	},
	fontSize: {
		options: [10, 12, 14, 'default', 18, 20, 22],
		supportAllValues: true
	},
	heading: {
		options: [
			{
				model: 'paragraph',
				title: '문단',
				class: 'ck-heading_paragraph'
			},
			{
				model: 'heading1',
				view: 'h1',
				title: '문단 1',
				class: 'ck-heading_heading1'
			},
			{
				model: 'heading2',
				view: 'h2',
				title: '문단 2',
				class: 'ck-heading_heading2'
			},
		]
	},
	htmlSupport: {
		allow: [
			{
				name: /^.*$/,
				styles: true,
				attributes: true,
				classes: true
			}
		]
	},
	image: {
		toolbar: [
			'toggleImageCaption',
			'imageTextAlternative',
			'|',
			'imageStyle:inline',
			'imageStyle:wrapText',
			'imageStyle:breakText',
			'|',
			'resizeImage',
			'|',
			'ckboxImageEdit'
		]
	},
		
	licenseKey: LICENSE_KEY,
	link: {
		addTargetToExternalLinks: true,
		defaultProtocol: 'https://',
		decorators: {
			toggleDownloadable: {
				mode: 'manual',
				label: 'Downloadable',
				attributes: {
					download: 'file'
				}
			}
		}
	},
	list: {
		properties: {
			styles: true,
			startIndex: true,
			reversed: true
		}
	},
	table: {
		contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
	}
};

configUpdateAlert(editorConfig);

ClassicEditor.create(document.querySelector('#editor'), editorConfig)
.then(editor => {
    editor.editing.view.change(writer => {
      writer.setStyle('min-height', '400px', editor.editing.view.document.getRoot());
    });
  })
  .catch(error => {
    console.error(error);
  });

/**
 * This function exists to remind you to update the config needed for premium features.
 * The function can be safely removed. Make sure to also remove call to this function when doing so.
 */
function configUpdateAlert(config) {
	if (configUpdateAlert.configUpdateAlertShown) {
		return;
	}

	const isModifiedByUser = (currentValue, forbiddenValue) => {
		if (currentValue === forbiddenValue) {
			return false;
		}

		if (currentValue === undefined) {
			return false;
		}

		return true;
	};

	const valuesToUpdate = [];

	configUpdateAlert.configUpdateAlertShown = true;

	if (!isModifiedByUser(config.licenseKey, '<YOUR_LICENSE_KEY>')) {
		valuesToUpdate.push('LICENSE_KEY');
	}

	if (!isModifiedByUser(config.cloudServices?.tokenUrl, '<YOUR_CLOUD_SERVICES_TOKEN_URL>')) {
		valuesToUpdate.push('CLOUD_SERVICES_TOKEN_URL');
	}

	if (valuesToUpdate.length) {
		window.alert(
			[
				'Please update the following values in your editor config',
				'to receive full access to Premium Features:',
				'',
				...valuesToUpdate.map(value => ` - ${value}`)
			].join('\n')
		);
	}
}




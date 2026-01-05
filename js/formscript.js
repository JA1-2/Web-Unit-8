function myFormSubmits(event) {
    event.preventDefault(); // Prevent the defult form submission

    // Call the custom functions you want to execute before submitting the form
    //downloadFormData();
    thanks();
}

function downloadFormData() {
    const form = document.getElementById('myForm');
    const formData = new FormData(form);
    let dataString='';

    for(let [key, value] of formData.entries()) {
        dataString =+ `${key}: ${vlaue}\n`;
    }

// Create a blob from the data string
const blob = new blob([dataString], {
    type: 'text/plain'
});
const url = URL.createObjectURL(blob);

// Create a link to download the file
const a = document.createElement('a');
a.href = url;
a.download = 'form-data.txt';
document.body.appendChild(a);
a.click();
document.body.removeChild(a);

// Revoke the object URL after download
URL.revokeObjectURL(url);
}

function thanks() {
    // Redirect to another page after download
    window.location.href = 'thank-you.html';
}
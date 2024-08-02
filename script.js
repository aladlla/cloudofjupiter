const loginForm = document.getElementById('login-form');
const searchBar = document.getElementById('search-bar');
const uploadForm = document.getElementById('upload-form');
const darkModeToggle = document.getElementById('dark-mode-toggle');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation (you would add more robust authentication here)
    if (username === 'test' && password === 'password') {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('welcome-container').style.display = 'block';
        document.getElementById('welcome-username').innerText = username;
    } else {
        // Custom alert message
        alert(`ريحانة: معلوماتك المدخلة غير صحيحة`);
    }
});

searchBar.addEventListener('input', function() {
    const query = this.value;
    // Implement search functionality here
    // For example, filter files from a list based on query
});

uploadForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    
    if (file) {
        // Implement file upload functionality here
        // You would typically send this file to your server or a cloud storage service
        console.log('File ready to upload:', file.name);
    } else {
        alert('الرجاء اختيار ملف للتحميل');
    }
});

darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.classList.add('animate-hammer');
    setTimeout(() => {
        this.classList.remove('animate-hammer');
    }, 1000);
    
    // Store the preference
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Check and apply stored preference on page load
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

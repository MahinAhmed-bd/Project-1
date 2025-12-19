function loadHome() {
    document.getElementById("content").innerHTML = `
        <h1>Welcome to AITVET</h1>
        <p>This is our home page.</p>
    `;
}

function loadAbout() {
    document.getElementById("content").innerHTML = `
        <h1>About Us</h1>
        <p>AITVET is a technical and vocational institute.</p>
    `;
}

function loadCourses() {
    document.getElementById("content").innerHTML = `
        <h1>Our Courses</h1>
        <ul>
            <li>Business Studies</li>
            <li>Travel & Tourism</li>
            <li>Fashion Design</li>
        </ul>
    `;
}

function loadContact() {
    document.getElementById("content").innerHTML = `
        <h1>Contact Us</h1>
        <p>Email: info@aitvet.edu</p>
        <p>Phone: 01XXXXXXXXX</p>
    `;
}

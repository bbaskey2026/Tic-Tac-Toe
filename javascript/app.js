// Initialize the app and load the default view on page load
window.onload = () => {
    const route = window.location.hash.replace('#', '') || 'home';
    navigateTo(route); // Load the correct route or default to 'home'
};

// Function to render the appropriate view based on the route
function renderView(view) {
    const app = document.getElementById('app'); // Main content area
    app.innerHTML = ''; // Clear the existing content

    switch (view) {
        case 'home':
            app.innerHTML = `<h2>Welcome to the Home Page</h2>
                             <p>This is the home page of the production-grade JavaScript app.</p>`;
            break;
        case 'about':
            app.innerHTML = `<h2>About Us</h2>
                             <p>Learn more about our mission, vision, and team.</p>`;
            break;
        case 'contact':
            app.innerHTML = `<h2>Contact Us</h2>
                             <p>Feel free to reach out via email or phone.</p>`;
            break;
        default:
            app.innerHTML = `<h2>404 - Page Not Found</h2>
                             <p>The page you are looking for doesn't exist.</p>`;
            break;
    }
}

// Function to handle navigation without reloading the page
function navigateTo(route) {
    history.pushState({ route }, '', `#${route}`); // Update the URL without refreshing
    renderView(route); // Load the content dynamically
}

// Handle browser back/forward navigation using popstate
window.onpopstate = (event) => {
    const route = event.state ? event.state.route : 'home';
    renderView(route); // Render the correct view on back/forward
};

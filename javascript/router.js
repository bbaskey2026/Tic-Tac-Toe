// Router to handle URL changes without reloading the page
window.addEventListener('popstate', (event) => {
    const state = event.state;
    if (state) {
        renderView(state.route);
    }
});

// Challenge 4 Starter
// Get the form element
let form = document.querySelector("#save-me");

// localStorage prefix
let prefix = 'autosave_';

/**
 * Handle input events
 * @param  {Event} event The event object
 */
function inputHandler (event) {
    let field = event.target;

    if (!field.id) return;

    localStorage.setItem(prefix + field.id, field.value);
}

/**
 * Clear all the saved fields from storage
 */
function clearStorage () {
    let fields = form.elements;

    for (let field of fields) {
        localStorage.removeItem(prefix + field.id);
    }
}

/**
 * Load saved data from localStorage
 */
function loadSaved () {
    let fields = form.elements;

    for (let field of fields) {
        let saved = localStorage.getItem(prefix + field.id)
        if (!saved) continue;
        field.value = saved;
    }
}

// Load saved data from localStorage
loadSaved();

// Listen for DOM events
form.addEventListener("input", inputHandler);
form.addEventListener("submit", clearStorage);
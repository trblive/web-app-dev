// eventHandlers.js
// module: functions that handle events.

// Method to add alert when event occurs
export function addAlert(target, event, message) {
    const elem = document.getElementById(target);
    elem.addEventListener(event, function () {
        alert(message)
    });
}
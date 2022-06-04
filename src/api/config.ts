
const DEBUG = true

let Address = ""

if (DEBUG) {
    Address = `http://${document.location.hostname}:8000`;
} else {
    Address = `https://${document.location.hostname}/api`
}

export { Address }
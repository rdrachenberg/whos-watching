function sortById() {
    const id = document.getElementById('id').value;
    window.location = "/students/sort/id/" + id;
}

function sortByAddress() {
    const address = document.getElementById('address').value;
    window.location = "/students/sort/address/" + address;
}

function sortByZip() {
    const zip = document.getElementById('zip').value;
    window.location = "/students/sort/" + zip;
}

function sortByFristName() {
    const first_name = document.getElementById('first_name').value;
    window.location = "/students/sort/fname/" + first_name;
}

function sortByLasttName() {
    const last_name = document.getElementById('last_name').value;
    window.location = "/students/sort/lname/" + last_name;
}

function sortByState() {
    const stateSort = document.getElementById('state_sort').value;
    window.location = "/students/sort/state_sort/" + stateSort;
}

function sortByDob() {
    const dob = document.getElementById('dob').value;
    window.location = "/students/sort/dob/" + dob;
}

function sortByNotState() {
    const state = document.getElementById('state').value;
    window.location = "/students/sort/state/" + state;
}
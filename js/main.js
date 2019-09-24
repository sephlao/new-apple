
// toggle script for navigation menu
let expanded = false;
function toggleNav() {
    expanded = !expanded;
    document.getElementById('expanded').style.display = expanded ? 'block' : 'none';
    document.getElementById('collapsed').style.display = expanded ? 'none' : 'block';
}
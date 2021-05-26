import navBar from "./navBar.js";
import searchTable from "./searchTable.js";

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

const filterBtn = document.getElementById('filter');
const tableRecord = document.getElementById('tableRecord');

navBar(hamburger, navLinks, links);

filterBtn.addEventListener('keyup', () => {
    let filter = filterBtn.value.toUpperCase();
    searchTable(filter, tableRecord);
})

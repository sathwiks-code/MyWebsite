export default function searchTable(filter, tableRecord) {
  // let filter = document.getElementById('filter').value.toUpperCase();

  // let tableRecord = document.getElementById('tableRecord');

  let tr = tableRecord.getElementsByTagName("tr");
  
  for (let i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[1];

    if (td) {
      let textValue = td.textContent || td.innerHTML;

      if (textValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

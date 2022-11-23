
const pluralizeJS = (count, singular, plural) =>
`${count} ${count <= 1 ? singular : plural}`;


const initFilterTblBatches = () => {
    // Loop through all rows, and hide those that don't match criteria
    const table = document.getElementById("tblBatches");
    if (table) {

      const tr = table.getElementsByTagName("tr");
      let counter = 0;
      
      for (let i = 0; i < tr.length; i++) {
        const dateCell = tr[i].getElementsByTagName("td")[3]; // <==== ALTERAR COLUNA AQUI
        
        if (dateCell) {
          const dateValue = dateCell.textContent || dateCell.innerText;
          console.log(dateValue);
          if (dateValue === "") {
            tr[i].style.display = "";
            counter += 1;
          } else {
            tr[i].style.display = "none";
          }
        }
      }
      const caption = document.getElementById("counter");
      caption.innerHTML = `Total ${pluralizeJS(counter, 'remessa', 'remessas')}`;
    }
}  
    
const filterTblBatchesUnsent = () => {
  const tabReceived = document.getElementById('filterReceived');
  const tabUnsent = document.getElementById('filterUnsent');
  const tabSent = document.getElementById('filterSent');

  if (tabReceived && tabUnsent && tabSent) { 
    tabUnsent.addEventListener('click', () => {
      // add selected class to tab element
      tabReceived.classList.remove("selected");
      tabReceived.classList.remove("btn-secondary");
      tabUnsent.classList.add("selected");
      tabUnsent.classList.add("btn-secondary");
      tabSent.classList.remove("selected");
      tabSent.classList.remove("btn-secondary");
      // Loop through all rows, and hide those that don't match criteria
      const table = document.getElementById("tblBatches");
      const tr = table.getElementsByTagName("tr");
      let counter = 0;

      for (let i = 0; i < tr.length; i++) {
        const dateCell = tr[i].getElementsByTagName("td")[3]; // <==== ALTERAR COLUNA AQUI

        if (dateCell) {
          const dateValue = dateCell.textContent || dateCell.innerText;
          if (dateValue === "") {
            tr[i].style.display = "";
            counter += 1;
          } else {
            tr[i].style.display = "none";
          }
        }
      }
      const caption = document.getElementById("counter");
      caption.innerHTML = `Total ${pluralizeJS(counter, 'remessa', 'remessas')}`;
    });
  }
}

const filterTblBatchesReceived = () => {
  const tabReceived = document.getElementById('filterReceived');
  const tabUnsent = document.getElementById('filterUnsent')
  const tabSent = document.getElementById('filterSent')
  if (tabReceived && tabUnsent && tabSent) { 
    tabReceived.addEventListener('click', () => {
      // add selected class to tab element
      tabReceived.classList.add("selected");
      tabReceived.classList.add("btn-secondary");
      tabUnsent.classList.remove("selected");
      tabUnsent.classList.remove("btn-secondary");
      tabSent.classList.remove("selected");
      tabSent.classList.remove("btn-secondary");
      // Loop through all rows, and hide those that don't match criteria
      const table = document.getElementById("tblBatches");
      const tr = table.getElementsByTagName("tr");
      let counter = 0;

      for (let i = 0; i < tr.length; i++) {
        const dateCell = tr[i].getElementsByTagName("td")[4]; // <==== ALTERAR COLUNA AQUI

        if (dateCell) {
          const dateValue = dateCell.textContent || dateCell.innerText;
          if (dateValue !== "") {
            tr[i].style.display = "";
            counter += 1;
          } else {
            tr[i].style.display = "none";
          }
        }
      }
      const caption = document.getElementById("counter");
      caption.innerHTML = `Total ${pluralizeJS(counter, 'remessa', 'remessas')}`;
    });
  }
}

const filterTblBatchesSent = () => {
  const tabReceived = document.getElementById('filterReceived');
  const tabUnsent = document.getElementById('filterUnsent');
  const tabSent = document.getElementById('filterSent');
  if (tabReceived && tabUnsent && tabSent) {
    tabSent.addEventListener('click', () => {
      // add selected class to tab element
      tabReceived.classList.remove("selected");
      tabReceived.classList.remove("btn-secondary");
      tabUnsent.classList.remove("selected");
      tabUnsent.classList.remove("btn-secondary");
      tabSent.classList.add("selected");
      tabSent.classList.add("btn-secondary");
      // Loop through all rows, and hide those that don't match criteria
      const table = document.getElementById("tblBatches");
      const tr = table.getElementsByTagName("tr");
      let counter = 0;

      for (let i = 0; i < tr.length; i++) {
        const dateCellSent = tr[i].getElementsByTagName("td")[3];      // <==== ALTERAR COLUNA AQUI
        const dateCellReceived = tr[i].getElementsByTagName("td")[4];  // <==== ALTERAR COLUNA AQUI

        if (dateCellSent) {
          const dateValueSent = dateCellSent.textContent || dateCellSent.innerText;
          const dateValueReceived = dateCellReceived.textContent || dateCellReceived.innerText;
          if (dateValueSent !== "" && dateValueReceived === "") {
            tr[i].style.display = "";
            counter += 1;
          } else {
            tr[i].style.display = "none";
          }
        }
      }
      const caption = document.getElementById("counter");
      caption.innerHTML = `Total ${pluralizeJS(counter, 'remessa', 'remessas')}`;
    });
  }
}

export { initFilterTblBatches };
export { filterTblBatchesUnsent };
export { filterTblBatchesSent };
export { filterTblBatchesReceived };


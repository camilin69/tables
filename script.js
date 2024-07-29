



function calculate(){
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;

    const fromNumber = Number(from);
    const toNumber = Number(to);


    if (isNaN(fromNumber) || isNaN(toNumber)) {
        console.log("Please enter valid numbers.");
        return;
    }

   
    const tableContent = document.getElementById("table-content");

    
    tableContent.innerHTML = '';

    
    for (let i = 0; i < fromNumber; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < toNumber; j++) {
            const col = document.createElement("div");
            col.classList.add("col");
            col.textContent = "NIGGA"; // Ejemplo de contenido de celda
            row.appendChild(col);
        }

        tableContent.appendChild(row);
    }
    
}

function loadData(){
    const XHR = new XMLHttpRequest()

    XHR.open("GET", "resources/file.json", true)
    XHR.onreadystatechange = () => {
        if(XHR.readyState == 4 && XHR.status == 200){
            const data = JSON.parse(XHR.responseText)
            console.log(`Existen ${data.length} Rrgistros`)
            data.forEach(element => {
                console.log(`ID: ${element.id}`)
                console.log(`TRADEMARK:  ${element.tradeMark}`)
                console.log(`NUMBER:  ${element.number}`)
                console.log('\n')

            });
        }
    }
    XHR.send(null)
    console.log(XHR.readyState)

}



loadData()


console.log('FIN DEL PROGRAMA')

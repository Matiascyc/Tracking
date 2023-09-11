function agregarRegistro() {
    const cliente = document.getElementById("cliente").value;
    const Producto = document.getElementById("Producto").value;
    const fechaDespacho = document.getElementById("fechaDespacho").value;
    const fechaEntrega = document.getElementById("fechaEntrega").value;
    const estado = document.getElementById("estado").value;

    const table = document.getElementById("registroTable");
    const newRow = table.insertRow(table.rows.length);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);

    cell1.innerHTML = cliente;
    cell2.innerHTML = Producto;
    cell3.innerHTML = fechaDespacho;
    cell4.innerHTML = fechaEntrega;
    cell5.innerHTML = estado;

    // Aplicar la clase CSS según el estado seleccionado
    switch (estado) {
        case "pendiente":
            cell5.className = "pendiente";
            break;
        case "proceso":
            cell5.className = "proceso";
            break;
        case "completo":
            cell5.className = "completo";
            break;
        default:
            cell5.className = ""; // Puedes definir una clase de estilo predeterminada aquí
            break;
    }

    // Limpiar el formulario
    document.getElementById("cliente").value = "";
    document.getElementById("acuerdo").value = "";
    document.getElementById("fechaInicio").value = "";
    document.getElementById("fechaFin").value = "";
    document.getElementById("estado").value = "pendiente";
}


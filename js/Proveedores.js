function mostrarProveedores() {
    let request = sendRequest('Proveedores', 'GET', '');
    let table = document.getElementById('Proveedores-table');
    table.innerHTML = "";
    request.onload = function () {
        let data = request.response;
        //console.log(data);  //saber si esta trayendo los datos de la base de datos
        data.forEach(element => {
            table.innerHTML += `
        <tr class="table-dark">
            <td>${element.nombres}</td>
            <td>${element.apellidos}</td>
            <td>${element.documento}</td>
            <td>${element.correo}</td>
            <td>${element.telefono}</td>
            <td>${element.direccion}</td>
            <td>
                <button type="button" class="btn btn-primary w-auto" onclick="window.location ='/formClientes.html?id=${element._id}'">Editar</button>
                <button type="button" class="btn btn-danger w-auto" onclick='deleteClientes("${element._id}")'>Eliminar</button>
            </td>
        </tr>
        `   
    });
}
request.onerror = function () {
    table.innerHTML = `
    <tr>
    <td colspan="">Error al traer los datos</td>
    </tr>
    `
}
}
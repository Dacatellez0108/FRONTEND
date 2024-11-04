function mostrarProductos() {
    let request = sendRequest('Productos', 'GET', '');
    let table = document.getElementById('Productos-table');
    table.innerHTML = "";
    request.onload = function () {
        let data = request.response;
        //console.log(data);  //saber si esta trayendo los datos de la base de datos
        data.forEach(element => {
            table.innerHTML += `
        <tr class="table-dark">
            <td>${element.nombre}</td>
            <td>${element.cantidad}</td>
            <td>${element.precio}</td>
            <td>${element.descripcion}</td>
            <td>${element.categoria}</td>
           
            <td>
                <button type="button" class="btn btn-primary w-auto" onclick="window.location ='/formProductos.html?id=${element._id}'">Editar</button>
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
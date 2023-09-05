var formulario = document.getElementById("form")

var url = 'https://jsonplaceholder.typicode.com/users';


formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value; 
    const apellido = document.getElementById('apellido').value; 
    const nacimiento = document.getElementById('nacimiento').value; 

    const info = {
        nombre,
        apellido,
        nacimiento
    }

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(info),
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
    })
        .then(response => response.json())
        .then(data => {
            console.log('Respuesta al servidor', data);
        })
        .catch(error =>{
            console.error("Error:", error);
        })
})

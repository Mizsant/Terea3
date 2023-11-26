document.getElementById('alumno-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var nombre = document.getElementById('nombre').value;
    var edad = parseInt(document.getElementById('edad').value);
    var genero = document.getElementById('genero').value;
    
    var academia = asignarAcademia(nombre, edad, genero);
    mostrarResultado(academia);
  });
  
  function asignarAcademia(nombre, edad, genero) {
    if (genero === 'F' && edad > 14) {
      return 'Fuerza Aérea (Uniforme ROJO)';
    } else if (genero === 'M' && edad > 14) {
      return 'Marina de Guerra (Uniforme VERDE)';
    } else if (edad <= 13) {
      return 'Ejército Nacional (Uniforme MARRON)';
    } else {
      return 'No cumple los requisitos para ser asignado a una academia militar.';
    }
  }
  
  function mostrarResultado(academia) {
    document.getElementById('academia').textContent = academia;
    document.getElementById('resultado').style.display = 'block';
  }
  
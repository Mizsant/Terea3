document.getElementById('alumnos-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var cantidad = parseInt(document.getElementById('cantidad').value);
    
    if (cantidad >= 5 && cantidad <= 20) {
      mostrarFormularioAlumnos(cantidad);
    }
  });
  
  function mostrarFormularioAlumnos(cantidad) {
    var container = document.getElementById('alumnos-container');
    container.innerHTML = ''; // Limpiar el contenedor
    
    for (var i = 0; i < cantidad; i++) {
      var alumnoDiv = document.createElement('div');
      alumnoDiv.classList.add('alumno');
      
      var nombreLabel = document.createElement('label');
      nombreLabel.textContent = 'Nombre completo:';
      var nombreInput = document.createElement('input');
      nombreInput.type = 'text';
      nombreInput.required = true;
      
      var edadLabel = document.createElement('label');
      edadLabel.textContent = 'Edad:';
      var edadInput = document.createElement('input');
      edadInput.type = 'number';
      edadInput.min = 0;
      edadInput.required = true;
      
      var generoLabel = document.createElement('label');
      generoLabel.textContent = 'Género:';
      var generoInput = document.createElement('select');
      generoInput.required = true;
      var opcionesGenero = ['Masculino', 'Femenino', 'Otro'];
      for (var j = 0; j < opcionesGenero.length; j++) {
        var opcion = document.createElement('option');
        opcion.value = opcionesGenero[j];
        opcion.textContent = opcionesGenero[j];
        generoInput.appendChild(opcion);
      }
      
      alumnoDiv.appendChild(nombreLabel);
      alumnoDiv.appendChild(nombreInput);
      alumnoDiv.appendChild(edadLabel);
      alumnoDiv.appendChild(edadInput);
      alumnoDiv.appendChild(generoLabel);
      alumnoDiv.appendChild(generoInput);
      
      container.appendChild(alumnoDiv);
    }
    
    document.getElementById('registro').style.display = 'block';
    
    document.getElementById('calcular-btn').addEventListener('click', function() {
      var alumnos = obtenerDatosAlumnos();
      var alumnoMayorEdad = obtenerAlumnoMayorEdad(alumnos);
      mostrarResultado(alumnoMayorEdad);
    });
  }
  
  function obtenerDatosAlumnos() {
    var alumnos = [];
    
    var alumnoDivs = document.getElementsByClassName('alumno');
    for (var i = 0; i < alumnoDivs.length; i++) {
      var alumnoDiv = alumnoDivs[i];
      
      var nombre = alumnoDiv.querySelector('input[type="text"]').value;
      var edad = parseInt(alumnoDiv.querySelector('input[type="number"]').value);
      var genero = alumnoDiv.querySelector('select').value;
      
      var alumno = {
        nombre: nombre,
        edad: edad,
        genero: genero
      };
      
      alumnos.push(alumno);
    }
    
    return alumnos;
  }
  
  function obtenerAlumnoMayorEdad(alumnos) {
    var mayorEdad = 0;
    var alumnoMayorEdad = null;
    
    for (var i = 0; i < alumnos.length; i++) {
      var alumno = alumnos[i];
      
      if (alumno.edad > mayorEdad) {
        mayorEdad = alumno.edad;
        alumnoMayorEdad = alumno;
      }
    }
    
    return alumnoMayorEdad;
  }
  
  function mostrarResultado(alumnoMayorEdad) {
    if (alumnoMayorEdad !== null) {
      document.getElementById('mayor-edad').textContent = 'Nombre: ' + alumnoMayorEdad.nombre + ' | Genero: ' + alumnoMayorEdad.genero;
    } else {
      document.getElementById('mayor-edad').textContent = 'No se ingresaron alumnos.';
    }
    
    document.getElementById('resultado').style.display = 'block';
  }
  

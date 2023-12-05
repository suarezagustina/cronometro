let cronometro
    let tiempo = 0

    function iniciarCronometro() {
      cronometro = setInterval(function() {
        tiempo++
        actualizarCronometro()
      }, 1000)
    }

    function pausarCronometro() {
      clearInterval(cronometro)
    }

    function reiniciarCronometro() {
      tiempo = 0
      actualizarCronometro()
    }

    function actualizarCronometro() {
      let minutos = Math.floor(tiempo / 60)
      let segundos = tiempo % 60
      document.getElementById("minutos").innerHTML = minutos < 10 ? "0" + minutos : minutos
      document.getElementById("segundos").innerHTML = segundos < 10 ? "0" + segundos : segundos
    }
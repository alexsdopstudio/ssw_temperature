// Import stylesheets
import "./style.css";

// Funzione collegata ai bottoni
// "window" solitamente necessario in StackBlitz, 
// altrimenti può essere omesso
window.display = function(city) {
  var request = new XMLHttpRequest(); // Costruzione dell'oggetto "request"

  // Funzione callback invocata quando la request termina
  request.onload = function() {
    // funzione definita arrow
    if (request.status === 200) {
      var dataObject = JSON.parse(request.response);
      document.getElementById("risposta").innerText =
        "A " + city + " ci sono " + dataObject.main.temp + " gradi";
    } else {
      document.getElementById("risposta").innerText = "Errore";
    }
  };

  // Applico il metodo "open"
  request.open(
    "GET",
    "https://api.openweathermap.org/data/2.5/weather?APPID=d0fda39104b3c7c45fe031a5392964c1&units=metric&q=" +
      city,
    true
  );
  // Applico il metodo send (al termine chiamerà il callback "onload")
  request.send();
};

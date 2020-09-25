const interval = setInterval(() => {
  const header = document.querySelector("._1QUKR");
  if (header) {
    console.log(header);
    clearInterval(interval);

  
    var timesButton = document.createElement("input");
    timesButton.type = "number";
    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.value = "enviar";
    timesButton.classList.add("twoTimesButton");

    submitButton.addEventListener("click", () => {
      var value = timesButton.value;
      localStorage.setItem("audiovalue", value);
      const audios = document.querySelectorAll("audio");
      if (value >= 11) {
        alert("coloque um número menor");
        value -= 10;
      }
      audios.forEach((audio) => {
        audio.playbackRate = localStorage.getItem("audiovalue")
        
        // audio.playbackRate = value;
        console.log(value);
      });  
    });
    header.appendChild(timesButton);
    header.appendChild(submitButton);
  }
}, 500);

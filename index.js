const interval = setInterval(() => {
  const header = document.querySelector("._1QUKR");
  if (header) {
    console.log(header);
    clearInterval(interval);

    var timesButton = document.createElement("input");
    timesButton.type = "text";
    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.value = "enviar";
    timesButton.classList.add("twoTimesButton");

    submitButton.addEventListener("click", () => {
      var value = timesButton.value;
      const audios = document.querySelectorAll("audio");
      console.log(audios);
      audios.forEach((audio) => {
        console.log(audio);
        audio.playbackRate = value;
        console.log(value);
      });
    });
    header.appendChild(timesButton);
    header.appendChild(submitButton);
  }
}, 500);

document.addEventListener("DOMContentLoaded", function () {

    const playButtons = document.querySelectorAll(".play-pause");
  
    playButtons.forEach(button => {
      button.addEventListener("click", function () {
        const thisAudio = this.parentElement.querySelector("audio");
        const isPlaying = !thisAudio.paused;
  
        // document.querySelectorAll(".play-pause").forEach(btn => {
        //   const btnAudio = btn.parentElement.querySelector("audio");
  
        //   ///if btn not btn clicked and is playing
        //   if (btn !== this && !btnAudio.paused) {
        //     btnAudio.pause();
        //     btn.classList.remove("playing");
        //   }
        // });
  
        //for the current audio. if it playing, pause
        if (isPlaying) {
          thisAudio.pause();
          this.classList.remove("playing");
        } else {
          thisAudio.play();
          this.classList.add("playing");
        }
      });
    });
  });
  
document.addEventListener("DOMContentLoaded", () => {
    const widget = document.querySelector(".walking-grounds");
    const pet = document.getElementById("rue");
  
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
  
    function animate() {
      const speed = 0.05;
      currentX += (targetX - currentX) * speed;
      currentY += (targetY - currentY) * speed;
  
      pet.style.transform = `translate(${currentX}px, ${currentY}px)`;
      requestAnimationFrame(animate);
    }
  
    widget.addEventListener("mousemove", (e) => {
      const rect = widget.getBoundingClientRect();
      targetX = e.clientX - rect.left -20;
      targetY = e.clientY - rect.top -60;
    });
  
    widget.addEventListener("mouseleave", () => {
      targetX = 0;
      targetY = 0;
    });
  
    animate(); //start animation


    const petGif = 'images/rue.gif';
    const petPng = 'images/rue-standing.png';

    let idleTimeout;

    widget.addEventListener('mousemove', (e) => {
    pet.src = petGif;

    //reset idle timer
    clearTimeout(idleTimeout);
    idleTimeout = setTimeout(() => {
        pet.src = petPng;   //switch to png after1.5 sec
    }, 1500);
    });

    widget.addEventListener('mouseleave', () => {
    clearTimeout(idleTimeout);
    pet.src = petPng; //switch to png when exit
    });


    const stepCounter = document.getElementById("step-counter");
    let movementTimeout = null;

    function showStepCounter() {
        stepCounter.style.display = "block";

        if (movementTimeout) clearTimeout(movementTimeout);
        movementTimeout = setTimeout(() => {
            stepCounter.style.display = "none";
        }, 2000); //resent timer after 2
    }

    //when moue moveing
    document.querySelector(".walking-grounds").addEventListener("mousemove", () => {
        showStepCounter();
    });



    let steps = 0;
    let isMoving = false;
    let moveEndTimeout = null;

    function updateStepDisplay() {
        stepCounter.textContent = `steps: ${steps}`;
    }

    function showStepCounter() {
        stepCounter.style.opacity = 1;
    }

    function hideStepCounter() {
        stepCounter.style.opacity = 0;
    }

    function handleMouseMove() {
        
        if (!isMoving) { //if new movemnt
            isMoving = true;
            steps += Math.floor(Math.random() * 3) +1;
            updateStepDisplay();
            showStepCounter();
        }

        clearTimeout(moveEndTimeout);
        moveEndTimeout = setTimeout(() => {
            isMoving = false;
            hideStepCounter();
        }, 700); //wait b4 ending session
    }

    document.querySelector(".walking-grounds").addEventListener("mousemove", handleMouseMove);

  });
  
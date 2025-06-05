document.addEventListener("DOMContentLoaded", () => { //waits until page done loading
    const widget = document.querySelector(".walking-grounds");
    const pet = document.getElementById("rue");
    const stepCounter = document.getElementById("step-counter");
    
    const getRueLeft = () => `images/rue-left.gif?${Date.now()}`; //sets to first frame
    const getRueRight = () => `images/rue-right.gif?${Date.now()}`;

  
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    
    let isMouseInside = false;

    let lastX = 0;
    let lastY = 0;
    let steps = 0;
    let distance = 0;

    let direction = "standing";
  
    function animate() {
      const speed = 0.03;

        if(isMouseInside){
            change = targetX - currentX;
            if(Math.abs(change) < 5){

                if(direction !="standing"){
                    direction = "standing";
                    pet.src = 'images/rue-standing.png';
                }
            }
            else if(change > 0 && direction!=="r"){
                pet.src = getRueRight();
                direction = "r";
            }
            else if (change < 0 && direction!=="l"){
                pet.src = getRueLeft();
                direction = "l";
            }
        }

      currentX += (targetX - currentX) * speed;
      currentY += (targetY - currentY) * speed;

      const dx = currentX - lastX;
      const dy = currentY - lastY;
      distance += Math.floor(Math.sqrt(dx*dx + dy*dy));
      if(distance >8){
        steps++;
        stepCounter.textContent = `steps: ${steps}`;
        distance=0;
      }

      lastX=currentX;
      lastY=currentY;
  
      pet.style.transform = `translate(${currentX}px, ${currentY}px)`;
      requestAnimationFrame(animate);
    }
  
    widget.addEventListener("mousemove", (e) => {
      const rect = widget.getBoundingClientRect();
      targetX = e.clientX - rect.left -20 - 50;
      targetY = e.clientY - rect.top - 60;
      isMouseInside = true;
    });
  
    widget.addEventListener("mouseleave", () => {
      targetX = currentX;
      targetY = currentY;
      pet.src = 'images/rue-standing.png';
        direction = "standing";
      isMouseInside=false;
    });

    document.querySelector(".widget").addEventListener("mousemove", (e) =>{
        document.querySelector(".msg").classList.add("hidden");
        document.getElementById("step-counter").style.opacity="1";
    });

  
    animate();

    widget.addEventListener('mouseleave', () => {
        pet.src = 'images/rue-standing.png';
        direction ="standing";
    });


  });
  
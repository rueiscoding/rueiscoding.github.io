document.addEventListener("DOMContentLoaded", function () {
    const pageMap = {
      profile: "profile.html",
      loves: "loves.html",
      music: "music.html",
      chat: "chat.html"
    };
  
    document.querySelectorAll(".nav").forEach(button => {
      button.addEventListener("click", function () {
        const label = this.textContent.trim().toLowerCase();
        const targetPage = pageMap[label];
  
        if (targetPage) {
          window.location.href = targetPage;
        } else {
          console.warn(`No target page found for label: ${label}`);
        }
      });
    });
  });
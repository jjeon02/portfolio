// NAV
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("nav").innerHTML = `
        <div id="navbar" class="navbar">
            <h6><a href="../index.html">Jueun Jeon</a></h6>
            <p class="nav-link">
                <a href="../index.html" class="btn-text btn-text-default">Home</a>
                <a href="../about.html" class="btn-text btn-text-default">About</a>
                <a href="assets/pdf/jueun-jeon-resume.pdf" target="_blank" class="btn-text btn-text-default">
                  Resume 
                  <span class="icon icon-download"></span>
                </a>
            </p>
            <p class="nav-menu" id="menu-btn">Menu</p>
        </div>
        
        <div class="sidebar" id="sidebar">
            <p class="sidebar-link">
                <a href="../index.html" class="btn-text btn-text-default">Home</a>
                <a href="../about.html" class="btn-text btn-text-default">About</a>
                <a href="../assets/pdf/jueun-jeon-resume.pdf" target="_blank" class="btn-text btn-text-default">
                  Resume <span class="icon icon-download"></span>
                </a>
            </p>
        </div>
    `;
    const menuBtn = document.getElementById("menu-btn");
    const sidebar = document.getElementById("sidebar");

    menuBtn.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    })
});

// FOOTER
document.addEventListener("DOMContentLoaded", function () {
    const footer = document.getElementById("footer");
  
    footer.className = "footer";
    footer.innerHTML = `
      <main>
        <article>
          <h1 class="no-margin">Let's keep in touch!</h1>
          <div class="list-line list-line-light border-top-light">
            <p style="width:100%;"> june.jeon@gmail.com </p>
            <p class="btn-text-light btn-text" id= "email">
              Copy
            <span class="icon icon-copy"></p>
          </div>
          <div class="list-line list-line-light">
            <p style="width:100%;">LinkedIn</p>
            <a href="https://www.linkedin.com/in/jueun-jeon/" target="_blank" class="p-size btn-text-light btn-text"> Link </span><span class="icon icon-link"></a>
          </div>
        </article>
      </main>
    `;
  
});

//EMAIL TOAST
document.addEventListener("DOMContentLoaded", function () {
  const emailElement = document.getElementById("email");
  
  emailElement.addEventListener("click", function () {
    const email = emailElement.textContent;
    navigator.clipboard.writeText(email).then(() => {
      showToast("Email copied to clipboard!");
    });
  });

  function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "custom-toast"; 
    toast.textContent = message;
    document.body.appendChild(toast);
  
    requestAnimationFrame(() => {
      toast.classList.add("visible");
    });
  
    setTimeout(() => {
      toast.classList.remove("visible");
      toast.addEventListener("transitionend", () => toast.remove());
    }, 1600);
  }
  
});
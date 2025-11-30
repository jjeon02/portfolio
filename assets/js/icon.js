
// LOAD ARROWS
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".arrow-icon").forEach(icon => {
    icon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 21" fill="none">
        <path d="M4 10.3333H16M16 10.3333L10 4.33325M16 10.3333L10 16.3333"
              stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;
  });
});

// LOAD DOWNLOAD 
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".icon-download").forEach(icon => {
    icon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M18 12.6667V16.2222C18 16.6937 17.8127 17.1459 17.4793 17.4793C17.1459 17.8127 16.6937 18 16.2222 18H3.77778C3.30628 18 2.8541 17.8127 2.5207 17.4793C2.1873 17.1459 2 16.6937 2 16.2222V12.6667M5.55556 8.22222L10 12.6667M10 12.6667L14.4444 8.22222M10 12.6667V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;
  });
});


// LOAD COPY 
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".icon-copy").forEach(icon => {
    icon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3.33329 13.3334C2.41663 13.3334 1.66663 12.5834 1.66663 11.6667V3.33341C1.66663 2.41675 2.41663 1.66675 3.33329 1.66675H11.6666C12.5833 1.66675 13.3333 2.41675 13.3333 3.33341M8.33329 6.66675H16.6666C17.5871 6.66675 18.3333 7.41294 18.3333 8.33341V16.6667C18.3333 17.5872 17.5871 18.3334 16.6666 18.3334H8.33329C7.41282 18.3334 6.66663 17.5872 6.66663 16.6667V8.33341C6.66663 7.41294 7.41282 6.66675 8.33329 6.66675Z"stroke="currentColor"stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;
  });
});

// LOAD LINK
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".icon-link").forEach(icon => {
    icon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M12.5 2.5H17.5M17.5 2.5V7.5M17.5 2.5L8.33333 11.6667M15 10.8333V15.8333C15 16.2754 14.8244 16.6993 14.5118 17.0118C14.1993 17.3244 13.7754 17.5 13.3333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V6.66667C2.5 6.22464 2.67559 5.80072 2.98816 5.48816C3.30072 5.17559 3.72464 5 4.16667 5H9.16667" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;
  });
});
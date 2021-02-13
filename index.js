// NAVBAR
    // NAVBAR - DEFINING VARIABLE
    const navToggler = document.querySelector('.navbutton');
    const navMenu = document.querySelector('.navbar ul');
    const navLinks = document.querySelectorAll('.navbar a');

    //FUNCTION - ALL EVENT LISTENER
    allEventListners();

    function allEventListners() {
    navToggler.addEventListener('click', togglerClick);
    navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
    }

    // TOGGLE CLICK
    function togglerClick() {
    navToggler.classList.toggle('toggler-open');
    navMenu.classList.toggle('open');
    }

    // NAVLINKCLICK
    function navLinkClick() {
        if(navMenu.classList.contains('open')){
            navToggler.click();
        }
    }

// GOBACK BUTTON
    function goBack() {
        window.history.back();
    }


const hamburger = document.getElementsByClassName('hamburger');
const hamburgerMenu = document.getElementsByClassName('hamburgerMenu');
const croce = document.getElementsByClassName('croceHamburger');
const links = document.querySelectorAll(".hamburgerMenu a");


// cliccando sull'hamburger voglio aggiungere la classe .apriMenu al div con la classe hamburgerMenu
for (let i = 0; i < hamburger.length; i++) {
  hamburger[i].addEventListener('click', function() {

    for (let j = 0; j < hamburgerMenu.length; j++) {
      hamburgerMenu[j].classList.add('apriMenu');
    }
  });
}

// cliccando sulla X voglio togliere la classe .apriMenu al div con la classe hamburgerMenu
for (let i = 0; i < croce.length; i++) {
  croce[i].addEventListener('click', function() {

    for (let j = 0; j < hamburgerMenu.length; j++) {
      hamburgerMenu[j].classList.remove('apriMenu');
    }
  });
}


// cliccando sui link voglio togliere la classe .apriMenu al div con la classe hamburgerMenu
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function() {

    for (let j = 0; j < hamburgerMenu.length; j++) {
      hamburgerMenu[j].classList.remove('apriMenu');
    }
  });
}
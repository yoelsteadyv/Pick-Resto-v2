function setHomeButtonFunctionality() {
  // Declar Button
  const exploreButton = document.getElementById('btn_explore');
  // hero button
  exploreButton.addEventListener('click', () => { });
  exploreButton.addEventListener('keydown', (event) => {
    if (event.code === 'Space' || event.code === 'Enter') {
      event.preventDefault();
      exploreButton.click();
    }
  });
}

function setNavButtonFunctionality() {
  const logo = document.querySelector('.logo');
  const navbar = document.querySelector('.navbar');
  logo.addEventListener('click', () => { });

  logo.addEventListener('keydown', (event) => {
    if (event.code === 'Space' || event.code === 'Enter') {
      event.preventDefault();
      logo.click();
      logo.blur();
    }
  });

  navbar.addEventListener('keydown', (event) => {
    if (event.code === 'Enter' || event.code === 'Space') {
      event.preventDefault();
      event.target.click();
      event.target.blur();
    }
  });
}

export {
  setHomeButtonFunctionality,
  setNavButtonFunctionality,
};

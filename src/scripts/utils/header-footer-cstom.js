class HeaderElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <a href="" class="skip-link">Skip to content</a>
        <header class="header">
          <a href="/" class="logo" tabindex="0">
            <img src="/icons/icon-512x512.png" class="logo" id="logo" width="44" height="44" alt="Pick Resto.">
            Pick <span>Resto</span>.
          </a>
          <div class="icons">
            <button id="menu-btn" type="button" class="fas fa-bars fa-3x" tabindex="0" aria-label="tombol menu"></button>
          </div>
          <nav class="navbar" id="navigationDrawer" aria-label="Navigasi utama">
            <a href="#/home" tabindex="0" aria-label="navigasi home">home</a>
            <a href="#/favorite" tabindex="0" aria-label="navigasi favorite">Favorite</a>
            <a href="https://github.com/yoelsteadyv" tabindex="0" target="_blank" rel="noopener noreferrer"
              aria-label="navigasi about us">About Us</a>
          </nav>
        </header>
      `;
  }
}

class FooterElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer class="footer">
          <p>Copyright &copy; 2023 - Pick Resto.</p>
        </footer>
      `;
  }
}

customElements.define('custom-header', HeaderElement);
customElements.define('custom-footer', FooterElement);

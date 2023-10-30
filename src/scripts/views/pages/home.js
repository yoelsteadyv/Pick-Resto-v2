import RestauranSource from '../../data/restaurant-source';
import {
  setHomeButtonFunctionality,
} from '../../utils/button-func';
import {
  createRestoItemTemplate,
} from '../templates/template-creator';

const Home = {
  async render() {
    return `<section class="hero" id="home">
      <div class="content">
        <h3>Pick <span> Resto</span>.</h3>
        <h5>Pick Your <span>Best Resto</span>. For Got <span>Delicious Teste</span></h5>
        <a href="#resto" tabindex="0" role="button" id="btn_explore" class="btn" title="Click For Explore"
          aria-label="Tombol click for explore">
          click for explore </a>
      </div>
    </section>
    <!-- end -->

    <!-- resto -->
    <section class="list-resto" id="resto">
      <h1 class="heading"> Explore <span> Resto</span>. </h1>
      <div class="box-container" id="resto-content" >

      </div>
    </section>

    <!-- end -->
        `;
  },

  async afterRender() {
    const restos = await RestauranSource.daftarResto();
    const restoContainer = document.querySelector('#resto-content');
    restos.forEach((resto) => {
      restoContainer.innerHTML += createRestoItemTemplate(resto);
    });
    setHomeButtonFunctionality();
    const detailButtons = document.querySelectorAll('.btnd');
    detailButtons.forEach((button) => {
      button.addEventListener('keydown', (event) => {
        if (event.code === 'Enter' || event.code === 'Space') {
          event.preventDefault();
          const restoId = button.getAttribute('href').split('/').pop();
          window.location.href = `#/detail/${restoId}`;
        }
      });
    });
  },

};

export default Home;

import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
  <div class="box">
    <div class="image">
      <img class="lazyload" data-src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL_MEDIUM + resto.pictureId : 'https://picsum.photos/id/23/800/450'}" class="thumb-res" alt="${resto.name}" crossorigin="anonymous">
    </div>
    <div class="content">
      <h3 class="title-res">${resto.name} <i class="fas fa-star"></i>
      <span class="rate-res">${resto.rating}</span> </h3>
        <div class="icon">
          <i class="fas fa-map-marker-alt"></i>
          <span class="loc-res">${resto.city}, ${resto.address}</span>
        </div>
      <div class="category-container">
        <h2 class="category-heading">Categories</h2>
        <div class="categories">
          ${resto.categories.map((category) => `<span>${category.name}</span>`).join(', ')}
        </div>
      </div>
      <p class="desc-res">${resto.description}</p>
    </div>
  </div>
  <h1 class="heading"> Menu <span>Resto</span>.</h1> 
  <div class="menu-list"> 
      <div class="menu-container">
        <div class="food-menu">
          <h2 class="menu-heading">Foods</h2>
          <ul class="food-list">
            ${resto.menus.foods.map((food) => `<li class="food-item">${food.name}</li>`).join('')}
          </ul>
        </div>
        <div class="drink-menu">
          <h2 class="menu-heading">Drinks</h2>
          <ul class="drink-list">
            ${resto.menus.drinks.map((drink) => `<li class="drink-item">${drink.name}</li>`).join('')}
          </ul>
        </div>
      </div>
      </div>
`;

const createReviewTemplate = (resto) => `
    ${resto.customerReviews.map((review) => `
        <div class="swiper-slide slide">
        <div class="user-info">
        <div><img src="icons/profile.svg" alt="review people picture"></div>
        <h4>${review.name}</h4>
            <h6>${review.date}</h6>
        </div>
            <div class="user">
                    <h3>${review.review}</h3>
            </div>
        </div>
    `).join('')}`;

const createRestoItemTemplate = (resto) => `
<div class="box">
<div class="image">
  <img class="lazyload" data-src="${resto.pictureId ? CONFIG.BASE_IMAGE_URL_MEDIUM + resto.pictureId : 'https://picsum.photos/id/23/800/450'}" class="thumb-res" alt="${resto.name}" crossorigin="anonymous">
  <span class="locationList">
<i class="fas fa-map-marker-alt"></i>
  <span>${resto.city}</span>
  </span>
  <span class="rateresList">
<i class="fas fa-star"></i>
<span>${resto.rating}</span>
  </span>
  
  
</div>
<div class="content">
  <h3 class="title-res">${resto.name}</h3>
  <!--
  <div class="icons">
    <div class="icon">
      
      <span class="loc-res">${resto.city}</span>
    </div>
  </div>
  -->
  <!--
  <div class="stars">
  </div>
  -->
  <p class="desc-res">${resto.description.slice(0, 75)}...</p>
  <a class="btnd" href="#/detail/${resto.id}" tabindex="0" aria-label="Tombol details" title="Detail">
    <i class="fas fa-eye"></i>
    <span>Details</span>
  </a>
</div>
</div>

    `;
const createLikeButtonTemplate = () => `
  <button tabindex="0" aria-label="Tambahkan ke favorite?" id="likeButton" class="like-button" >
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button tabindex="0" aria-label="Hapus dari favorite?" id="likeButton" class="like-button-un" >
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createReviewTemplate,
};

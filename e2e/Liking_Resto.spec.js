Feature('Likeing Resto');

Scenario('Add and Delete Resto', async ({
  I,
}) => {
  I.amOnPage('/');
  await new Promise((resolve) => setTimeout(resolve, 5000));
  I.click('#btn_explore');
  I.seeElement('.title-res');
  const restaurantTitl = locate('.title-res').first();
  I.click(restaurantTitl);
  I.seeElement('.btnd');
  I.click('.btnd');
  I.seeElement('#likeButton');
  I.click('#likeButton');
  await new Promise((resolve) => setTimeout(resolve, 5000));
  I.amOnPage('/#/favorite');
  await new Promise((resolve) => setTimeout(resolve, 4000));
  I.seeElement('.title-res');
  const restaurantTitle = locate('.title-res').first();
  I.click(restaurantTitle);
  I.seeElement('.btnd');
  I.click('.btnd');
  I.seeElement('#likeButton');
  I.click('#likeButton');
  await new Promise((resolve) => setTimeout(resolve, 5000));
  I.seeElement('.swal2-confirm');
  I.click('.swal2-confirm');
  await new Promise((resolve) => setTimeout(resolve, 3000));
});
Scenario('Add a review', async ({
  I,
}) => {
  I.amOnPage('/');
  I.click('#btn_explore');
  await new Promise((resolve) => setTimeout(resolve, 5000));
  I.seeElement('.title-res');
  const restaurantTitle = locate('.title-res').first();
  I.click(restaurantTitle);
  I.seeElement('.btnd');
  I.click('.btnd');
  I.seeElement('#name-review');
  await new Promise((resolve) => setTimeout(resolve, 2000));
  I.fillField('#name-review', 'keke');
  I.seeElement('#review-isi');
  await new Promise((resolve) => setTimeout(resolve, 2000));
  I.fillField('#review-isi', 'Mantap');
  I.seeElement('.btn-review');
  I.click('.btn-review');
  await new Promise((resolve) => setTimeout(resolve, 5000));
});

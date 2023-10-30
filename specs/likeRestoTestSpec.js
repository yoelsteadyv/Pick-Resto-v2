import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';
import createLikeButtonPresenterWithResto from './helpers/testFactories';

describe('Liking A Resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the resto has not been liked before', async () => {
    await createLikeButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="Tambahkan ke favorite?"]')).toBeTruthy();
  });

  it('should not show the unlike button when the resto has not been liked before', async () => {
    await createLikeButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="Hapus dari favorite?"]')).toBeFalsy();
  });

  it('should be able to like the resto', async () => {
    await createLikeButtonPresenterWithResto({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const resto = await FavoriteRestoIdb.getResto(1);

    expect(resto).toEqual({
      id: 1,
    });

    FavoriteRestoIdb.deleteResto(1);
  });

  it('should not add a resto again when its already liked', async () => {
    await createLikeButtonPresenterWithResto({ id: 1 });

    await FavoriteRestoIdb.putResto({
      id: 1,
    });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([{
      id: 1,
    }]);

    FavoriteRestoIdb.deleteResto(1);
  });

  it('should not add a resto when it has no id', async () => {
    const resto = { id: 1 };
    await createLikeButtonPresenterWithResto({ resto });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });
});

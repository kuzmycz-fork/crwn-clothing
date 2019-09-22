import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
);

export const selectShopCollectionList = createSelector(
    [selectShop],
    (shop) => Object.keys(shop.collections).map((key) => shop.collections[key])
);


export const selectCollection = (collectionUrlParam) => createSelector(
    [selectShopCollections],
    (collections) => collections[collectionUrlParam]
);
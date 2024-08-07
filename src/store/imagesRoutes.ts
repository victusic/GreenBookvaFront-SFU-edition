import { ImagesRoutesState } from './types/imagesRoutes';

const defaultState: ImagesRoutesState = {
  avatar: 'https://db.greenbookva.shop/avatar/',
  product: 'https://db.greenbookva.shop/product/',
  apm: 'https://db.greenbookva.shop/',
  banner: 'https://db.greenbookva.shop/banner/',
  recommendation: 'https://db.greenbookva.shop/recommendations/',
};

export const imagesRoutesReducer = (state: ImagesRoutesState = defaultState): ImagesRoutesState => {
  return state;
};

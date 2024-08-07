import { TownsListState } from './types/townsListReducer';

const defaultState: TownsListState = {
  KZ: [
    'Алматы',
    'Астана',
    'Караганда',
    'Павлодар',
    'Шымкент',
    'Усть-Каменогорск',
    'Тараз',
    'Костанай',
    'Актау',
    'Актобе',
  ],
  RU: [
    'Санкт-Петербург',
    'Москва',
    'Краснодар',
    'Екатеринбург',
    'Нижний Новгород',
    'Ростов-На-Дону',
    'Казань',
    'Уфа',
    'Красноярск',
    'Владивосток',
  ],
};

export const townsListReducer = (state: TownsListState = defaultState): TownsListState => {
  return state;
};

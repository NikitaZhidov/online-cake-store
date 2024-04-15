import { createSlice } from '@reduxjs/toolkit';
import { Order } from '../mock-data/orders';
import { CardItem } from '../mock-data/card-item';
import { Cake } from '../mock-data/cakes';

export interface GlobalStore {
  orders: Order[];
  card: CardItem[];
}

const initialState: GlobalStore = {
  orders: [],
  card: []
};

export const globalSlice = createSlice({
  name: 'global-store',
  initialState,
  reducers: {
    addCakeToCard: (state: GlobalStore, action: { payload: Cake }) => {
      const existingItem = state.card.find(cardItem => cardItem.cake.name === action.payload.name);

      if (existingItem) {
        existingItem.count += 1
      } else {
        state.card.push({ count: 1, cake: action.payload })
      }
    },

    removeCardItem: (state: GlobalStore, action: { payload: CardItem }) => {
      state.card = state.card.filter(cardItem => cardItem !== action.payload);
    },

    decreaseCakeFromCard: (state: GlobalStore, action: { payload: Cake }) => {
      const existingItem = state.card.find(cardItem => cardItem.cake.name === action.payload.name);
      if (existingItem?.count === 1) {
        state.card = state.card.filter(cardItem => cardItem !== existingItem);
        globalSlice.actions.removeCardItem(existingItem);
      } else if (existingItem) {
        existingItem.count -= 1;
      }

    },

    orderCard: (state: GlobalStore) => {
      state.orders.unshift({ cardItems: state.card, date: new Date() });
      state.card = [];
    },

    clearCard: (state: GlobalStore) => {
      state.card = [];
    }
  },
});

export const { addCakeToCard, removeCardItem, decreaseCakeFromCard, orderCard, clearCard } = globalSlice.actions
export default globalSlice.reducer

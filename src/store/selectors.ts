import { Cake } from '../mock-data/cakes';
import { GlobalStore } from './global-store';

type Store = {
  globalStore: GlobalStore;
}

export const selectCard = (state: Store) => state.globalStore.card;
export const selectCardItemsCount = (state: Store) => state.globalStore.card.length;
export const selectCakeInCardCount = (cake: Cake) => (state: Store) => {
  const card = state.globalStore.card;
  const existingItem = card.find(ci => ci.cake.name === cake.name)

  if (existingItem) {
    return existingItem.count;
  }

  return 0;
}

export const selectOrders = (state: Store) => state.globalStore.orders;

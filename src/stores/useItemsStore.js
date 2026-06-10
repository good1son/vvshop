import { create } from 'zustand';
import itemsAPI from '@/api/items';

const useItemsStore = create((set, get) => ({
  items: [],
  loading: true,
  error: null,

  getItems: async () => {
    const { items } = get();
    if (items.length > 0) {
      return;
    }
    try {
      const data = await itemsAPI.getAll();
      set({ items: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  getItemById: (id) => {
    const { items } = get();
    return items.find((item) => item.id === Number(id));
  },

  getItemsBySubcategory: (subcategory) => {
    const { items } = get();
    return items.filter((item) => item.subcategory === subcategory);
  },

  getItemsByAuthor: (author) => {
    if (!author) return [];
    const { items } = get();
    return items.filter((item) => item.author === author);
  },
}));

export default useItemsStore;

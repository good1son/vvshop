import { items } from '@/data';
const URL = 'http://localhost:3000/vvshop/#/items';

const headers = { 'Content-Type': 'application/json' };

const itemsAPI = {
  getAll: () => {
    return Promise.resolve([...items]);
  },

  getById: (id) => {
    const item = items.find((item) => item.id === Number(id));
    return Promise.resolve(item || null);
  },

  // getAll: () => {
  //   return fetch(URL).then((response) => response.json());
  // },

  // getById: (id) => {
  //   return fetch(`${URL}/${id}`).then((response) => response.json());
  // },
};

export default itemsAPI;

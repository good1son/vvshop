export const getRandomItems = (items, limit = 10) => {
  if (!items.length) return [];
  const shuffled = [...items].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, limit);
};

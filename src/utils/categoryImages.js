const categoryImages = {
  Фарфор: '/vvshop/images/categories/farfor.png',
  Живопись: '/vvshop/images/categories/painting.png',
  Серебро: '/vvshop/images/categories/silver.png',
  Интерьер: '/vvshop/images/categories/interior.png',
  Книги: '/vvshop/images/categories/books.png',
  Фаянс: '/vvshop/images/categories/faince.png',
  default: '/vvshop/images/categories/default.png',
};

export const getCategoryImages = (category) => {
  return categoryImages[category] || categoryImages.default;
};

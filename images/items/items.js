const getPhotos = (id, count = 6) => {
  const photos = [];
  for (let i = 1; i <= count; i++) {
    photos.push(
      new URL(`@/assets/images/items/${id}/${i}.jpg`, import.meta.url)
        .href
    );
  }
  return photos;
};

export const items = [
  {
    id: 1,
    title: 'Статуэтка "Богдан Хмельницкий"',
    author: 'Пустыгин Н.П.',
    manufacture: 'Дулевский фарфоровый завод',
    year: '1950-е гг.',
    category: 'Фарфор',
    subcategory: 'Статуэтки',
    mark: 'без марки',
    condition: 'Хорошее',
    dimensions: '40.5 см',
    price: 15500,
    photos: [
      '/images/items/1/1.jpg',
      '/images/items/1/2.jpg',
      '/images/items/1/3.jpg',
      '/images/items/1/4.jpg',
      '/images/items/1/5.jpg',
      '/images/items/1/6.jpg',
    ],
    description: '',
  },
  {
    id: 2,
    title:
      'Федотов Сергей Геннадьевич. Большая картина "Орёл". 2012 г. Холст, масло.',
    author: 'Федотов С.Г.',
    manufacture: '',
    year: '2012 г.',
    category: 'Живопись',
    subcategory: 'Картины',
    mark: 'подпись автора в правом нижнем углу',
    condition: 'Хорошее',
    dimensions: '100x120 см',
    price: 110000,
    photos: getPhotos(2, 2),
    description: '',
  },
  {
    id: 3,
    title:
      'Нож для фруктов и масла. Россия, мастерская М. Ломбардо, 1880-90-е гг. Серебро 84 пр., перламутр.',
    author: 'М. Ломбардо',
    manufacture: 'мастерская Ломбардо',
    year: '1880-1890-е гг.',
    category: 'Серебро / Столовые приборы',
    subcategory: 'Ножи',
    mark: '84 пробы с гербом города Москвы',
    condition: 'Хорошее',
    dimensions: '16.5 см. 35 г',
    price: 27500,
    photos: getPhotos(3, 3),
    description: '',
  },
  {
    id: 4,
    title:
      'Большая шкатулка. Русский стиль. Маковский "Под венец". Россия, Сергиев Посад, Художественно-столярная мастерская Московского Губернского земства, начало ХХ века. Дерево, резьба, роспись; басма.',
    author: '',
    manufacture:
      'Художественно-столярная мастерская Московского Губернского земства',
    year: '1900-1910-е гг.',
    category: 'Декор / Предметы интерьера',
    subcategory: 'Шкатулки',
    mark: 'остатки дореволюционной магазинной этикетки Поставщика императорского двора',
    condition: 'Хорошее',
    dimensions: '33 х 22 х 8.5 см',
    price: 125000,
    photos: getPhotos(4, 6),
    description: '',
  },
  {
    id: 5,
    title:
      'Чайная пара формы "Чеснок". Т-во М. С. Кузнецова в Дулеве. Россия. 1864-1889 гг.',
    author: '',
    manufacture: 'Т-во М. С. Кузнецова в Дулеве',
    year: '1864-1889 гг.',
    category: 'Фарфор',
    subcategory: 'Чайные пары',
    mark: 'Марка голубым надглазурно “М. С. Кузнецова в Дулеве” под двуглавым орлом',
    condition: '',
    dimensions: '8 х 6.7 см',
    price: 18000,
    photos: getPhotos(5, 5),
    description: '',
  },
];

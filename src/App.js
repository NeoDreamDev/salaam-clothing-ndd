// import CategoryItem from './components/category-item/category-item.component';
import Directory from './components/directory/directory.component';

import './components/directory/directory.styles.scss';

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Hats',
      imageUrl: 'https://source.unsplash.com/random/?hat,hats',
    },
    {
      id: 2,
      title: 'Jackets',
      imageUrl: 'https://source.unsplash.com/random/?jackets,coat',
    },
    {
      id: 3,
      title: 'Sneakers',
      imageUrl: 'https://source.unsplash.com/random/?shoes,sneakers',
    },
    {
      id: 4,
      title: 'Womens',
      imageUrl: 'https://source.unsplash.com/random/?women,fashion',
    },
    {
      id: 5,
      title: 'Mens',
      imageUrl: 'https://source.unsplash.com/random/?men,fashion',
    },
  ];

  return (
    <Directory categories={categories} />
    // <div className='categories-container'>
    //   {categories.map((category) => (
    //     <CategoryItem key={category.id} category={category} />
    //   ))}
    // </div>
  );
};

export default App;

import React from 'react'


const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true)
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState(
    {
      name: 'популярности',
      sortProperty: 'rating'
    }
  );

  React.useEffect(() => {
    setIsLoading(true);

    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.sortProperty.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';

    fetch(
        `https://630a45113249910032837b93.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`,
    )
        .then((res) => res.json())
        .then((arr) => {
            setItems(arr)
            setIsLoading(false);
        });
    window.scrollTo(0, 0);
}, [categoryId, sortType]);

  return (
    <div></div>
  )
}

export default Home;
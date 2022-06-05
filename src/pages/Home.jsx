import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes, reset } from '../features/recipes/recipeSlice';
import RecipeCard from '../components/RecipeCard';
import Spinner from '../components/Spinner';

const Home = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');

  const { recipes, isError, isLoading, message } = useSelector(
    (state) => state.recipes
  );

  useEffect(() => {
    if (isError) console.log(message);

    dispatch(getRecipes('vegetarian'));
  }, [isError, message, dispatch]);

  const updateQuery = (e) => {
    e.preventDefault();
    dispatch(getRecipes(search));
    setSearch('');
  };

  if (isLoading) return <Spinner />;

  return (
    <>
      <div>
        <h1>Nutrition Planner</h1>
        <form className='search__form' onSubmit={updateQuery}>
          <input
            class='search__bar'
            required
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Vegetarian, Vegetable, Fruit... '
          />
          <button className='search__button' type='submit'>
            <i class='fas fa-search'></i>
          </button>
        </form>
      </div>
      <section className='wrapper'>
        {recipes.length > 0 ? (
          <div className='recipes'>
            {recipes.map((data, i) => {
              console.log(data);
              return <RecipeCard key={i} recipe={data.recipe} />;
            })}
          </div>
        ) : (
          <h3>There are no Recipes that match provided search criteria!</h3>
        )}
      </section>
    </>
  );
};
export default Home;

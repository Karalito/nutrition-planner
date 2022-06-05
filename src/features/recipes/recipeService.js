import axios from 'axios';

const getRecipes = async (query) => {
  /**
   * Would usually put api key into ENV variables
   * but to simplify launching process putting it this way.
   */
  const response = await axios.get(
    `https://api.edamam.com/search?q=${query}&app_id=74434a94&app_key=ba732821f6751332363b3c4e8d4e7895`
  );

  console.log(response.data.hits);
  return response.data.hits;
};

const recipeService = {
  getRecipes,
};

export default recipeService;

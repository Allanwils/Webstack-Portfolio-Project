import React from 'react';
import FryingPan from './FryingPan';
import Recipe from './Recipe';
import Spinner from './Spinner';

//This is the Home component. 
const Home = ({ recipes, loading, error }) => {
  return (
    <div className="home container mx-auto py-10 flex flex-wrap gap-10 justify-center">
      {/* condition for ideal position */}
      {!loading && !error && recipes.length === 0 ? (
        <div className="text-center">
          <p className="text-2xl lg:text-4xl font-semibold text-green-500 mb-4">
            Please, search for your recipe!
          </p>
          <FryingPan />
        </div>
      ) : null}

      {/* condition for loading position */}
      {loading && <p className="text-center">{error ? error : <Spinner />}</p>}

      {/* condition after getting the recipes */}
      {recipes?.length > 0 &&
        recipes.map((recipe) => <Recipe recipe={recipe} key={recipe.id} />)}
    </div>
  );
};

export default Home;

import { useRef, useState, useEffect } from 'react';
import './App.css';
import FavoritesArea from './components/FavoritesArea/FavoritesArea';
import FilterArea from './components/FilterArea/FilterArea';
import ResultArea from './components/ResultArea/ResultArea';
import RecipeArea from './components/RecipeArea/RecipeArea';

function App() {
  
  const [staples, setStaples] = useState(() => {
    try {
      const stored = localStorage.getItem('staples');
      const parsed = JSON.parse(stored);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  const [pantry, setPantry] = useState(() => {
    try {
      const stored = localStorage.getItem('pantry');
      const parsed = JSON.parse(stored);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  const [recipeResults, setRecipeResults] = useState(() => {
    try {
      const stored = localStorage.getItem('recipeResults');
      const parsed = JSON.parse(stored);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  const [showStaples, setShowStaples] = useState(() => {
    try {
      const stored = localStorage.getItem('showStaples');
      return stored !== null ? JSON.parse(stored) : true;
    } catch {
      return true;
    }
  });

  const [showPantry, setShowPantry] = useState(() => {
    try {
      const stored = localStorage.getItem('showPantry');
      return stored !== null ? JSON.parse(stored) : true;
    } catch {
      return true;
    }
  });

  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const [view, setView] = useState('search');

  const [useIngredients, setUseIngredients] = useState(true);

  const [favorites, setFavorites] = useState(() => {
    try {
      const stored = localStorage.getItem('favorites');
      const parsed = JSON.parse(stored);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  const keywordRef = useRef();

  useEffect(() => {
    localStorage.setItem('staples', JSON.stringify(staples));
  }, [staples]);

  useEffect(() => {
    localStorage.setItem('pantry', JSON.stringify(pantry));
    }, [pantry]);

  useEffect(() => {
    localStorage.setItem('recipeResults', JSON.stringify(recipeResults));
  }, [recipeResults]);

  useEffect(() => {
    localStorage.setItem('showStaples', JSON.stringify(showStaples));
  }, [showStaples]);

  useEffect(() => {
    localStorage.setItem('showPantry', JSON.stringify(showPantry));
  }, [showPantry]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);


  return (
    <>
    <main className="RecipeApp">
    <FilterArea
      staples={staples}
      setStaples={setStaples}
      pantry={pantry}
      setPantry={setPantry}
      showStaples={showStaples}
      setShowStaples={setShowStaples}
      showPantry={showPantry}
      setShowPantry={setShowPantry}
      recipeResults={recipeResults}
      setRecipeResults={setRecipeResults}
      keywordRef={keywordRef}
      useIngredients={useIngredients}
      setUseIngredients={setUseIngredients}>
    </FilterArea>

    <div className="divider" />
    <ResultArea
      recipeResults={recipeResults}
      selectedRecipe={selectedRecipe}
      setSelectedRecipe={setSelectedRecipe}
      staples={staples}
      favorites={favorites}
      setFavorites={setFavorites}>
    </ResultArea>
    <div className="divider" />
    <RecipeArea selectedRecipe={selectedRecipe}></RecipeArea>
    <div className="divider" />
    <FavoritesArea></FavoritesArea>
    </main> 
    </>
  )
}

export default App

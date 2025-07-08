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

  const [recipes, setRecipes] = useState(() => {
    try {
      const stored = localStorage.getItem('recipes');
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

  useEffect(() => {
    localStorage.setItem('staples', JSON.stringify(staples));
  }, [staples]);

  useEffect(() => {
    localStorage.setItem('pantry', JSON.stringify(pantry));
    }, [pantry]);

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  useEffect(() => {
    localStorage.setItem('showStaples', JSON.stringify(showStaples));
  }, [showStaples]);

  useEffect(() => {
    localStorage.setItem('showPantry', JSON.stringify(showPantry));
  }, [showPantry]);


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
      setShowPantry={setShowPantry}>
    </FilterArea>

    <div className="divider" />
    <ResultArea></ResultArea>
    <div className="divider" />
    <RecipeArea></RecipeArea>
    <div className="divider" />
    <FavoritesArea></FavoritesArea>
    </main> 
    </>
  )
}

export default App

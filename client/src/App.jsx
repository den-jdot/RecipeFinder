import { useRef, useState, useEffect } from 'react';
import './App.css';
import FavoritesArea from './components/FavoritesArea/FavoritesArea';
import FilterArea from './components/FilterArea/FilterArea';
import ResultArea from './components/ResultArea/ResultArea';
import RecipeArea from './components/RecipeArea/RecipeArea';

function App() {
  const staplesRef = useRef();
  const ingredientsRef = useRef();
  const recipesRef = useRef();
  
  const [staples, setStaples] = useState(() => {
    try {
      const stored = localStorage.getItem('staples');
      const parsed = JSON.parse(stored);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  const [ingredients, setIngredients] = useState(() => {
    try {
      const stored = localStorage.getItem('ingredients');
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


  return (
    <>
    <main className="RecipeApp">
    <FilterArea></FilterArea>
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

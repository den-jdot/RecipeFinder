import * as React from 'react';
import Button from '@mui/material/Button';
import { useRef, useState, useEffect } from 'react';
import SourceSelector from './FilterAreaButtons/SourceSelector';
import GenButton from './FilterAreaButtons/GenButton';
import IngredientsToggle from './FilterAreaButtons/IngredientsToggle';
import StapleToggle from './StapleList/StapleToggle';
import PantryToggle from './PantryList/PantryToggle';
import StapleList from './StapleList/StapleList';
import PantryList from './PantryList/PantryList';
import KeywordField from './FilterAreaButtons/keywordField';
import AddField from '../AddField';
import ScopeField from './FilterAreaButtons/ScopeField';
import DiffField from './FilterAreaButtons/DiffField';

const FilterArea = ({ 
    staples, setStaples,
    pantry, setPantry,
    showStaples, setShowStaples,
    showPantry, setShowPantry,
    recipeResults, setRecipeResults,
    keywordRef,
    useIngredients, setUseIngredients
 }) => {

    const [checked, setChecked] = React.useState(() => {
        try {
            const stored = localStorage.getItem('checked');
            const parsed = JSON.parse(stored);
            return Array.isArray(parsed) ? parsed : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('checked', JSON.stringify(checked));
    }, [checked]);

    const addStaple = (item) => setStaples((prev) => [...prev, item]);
    const addPantry = (item) => {
        setPantry((prev) => [...prev, item]);
        setChecked((prev) => [...prev, item]);
    };
    

return (
    <>
    <main className="FilterArea">

        <div className="FilterAreaButtons">
            <div className="FilterAreaButtonsLeft">
            <SourceSelector></SourceSelector>
            <KeywordField keywordRef={keywordRef}></KeywordField>
            {/* <div className="OptionalFields">
                <ScopeField></ScopeField>
                <DiffField></DiffField>
            </div> */}
            </div>
            <GenButton 
                pantry={pantry} 
                checked={checked} 
                keywordRef={keywordRef} 
                useIngredients={useIngredients} 
                setUseIngredients={setUseIngredients} 
                recipeResults={recipeResults} 
                setRecipeResults={setRecipeResults}>
            </GenButton>
            
        </div>

        <IngredientsToggle
            useIngredients={useIngredients}
            setUseIngredients={setUseIngredients}>
        </IngredientsToggle>

        <div className="IngredientsArea">
            
            <div className="StapleArea">
                <StapleToggle showStaples={showStaples} setShowStaples={setShowStaples}></StapleToggle>
                {/*if showStaples = true, then show list, otherwise null
                showStaples ? <StapleList : null*/}
                {showStaples && (
                    <>
                        <StapleList staples={staples} setStaples={setStaples}></StapleList>
                        <AddField onAdd={addStaple}></AddField>
                    </>
                )}
            </div>
        
            <div className="PantryArea">
                <PantryToggle 
                showPantry={showPantry} 
                setShowPantry={setShowPantry}>
                </PantryToggle>
                {/*if showPantry = true, then show list, otherwise null
                showPantry ? <PantryList : null*/}
                {showPantry && (
                    <>
                        <PantryList 
                        pantry={pantry} 
                        setPantry={setPantry} 
                        checked={checked}
                        setChecked={setChecked}> </PantryList>
                        <AddField onAdd={addPantry}></AddField>
                    </>
                )}
            </div>

        </div>
    </main>
    </>
)};

export default FilterArea;
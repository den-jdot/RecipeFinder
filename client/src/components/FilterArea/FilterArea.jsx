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
    showPantry, setShowPantry
 }) => {

    const addStaple = (item) => setStaples((prev) => [...prev, item]);
    const addPantry = (item) => setPantry((prev) => [...prev, item]);
    

return (
    <>
    <main className="FilterArea">

        <div className="FilterAreaButtons">
            <div className="FilterAreaButtonsLeft">
            <SourceSelector></SourceSelector>
            <KeywordField></KeywordField>
            <div className="OptionalFields">
                <ScopeField></ScopeField>
                <DiffField></DiffField>
            </div>
            </div>
            <GenButton></GenButton>
            
        </div>

        <div className="FilterAreaPantry">
            <IngredientsToggle></IngredientsToggle>
        </div>

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
                <PantryToggle showPantry={showPantry} setShowPantry={setShowPantry}></PantryToggle>
                {/*if showPantry = true, then show list, otherwise null
                showPantry ? <PantryList : null*/}
                {showPantry && (
                    <>
                        <PantryList pantry={pantry} setPantry={setPantry}></PantryList>
                        <AddField onAdd={addPantry}></AddField>
                    </>
                )}
            </div>

        </div>
    </main>
    </>
)};

export default FilterArea;
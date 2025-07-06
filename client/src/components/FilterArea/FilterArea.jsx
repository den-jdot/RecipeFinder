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

const FilterArea = () => {
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
        <StapleToggle></StapleToggle>
        <StapleList></StapleList>
        <AddField></AddField>

        <PantryToggle></PantryToggle>
        <PantryList></PantryList>
        <AddField></AddField>

        </div>
    </main>
    </>
)};

export default FilterArea;
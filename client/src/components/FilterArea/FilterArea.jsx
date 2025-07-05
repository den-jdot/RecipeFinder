import * as React from 'react';
import Button from '@mui/material/Button';
import { useRef, useState, useEffect } from 'react';
import SourceSelector from './FilterAreaButtons/SourceSelector';
import GenButton from './FilterAreaButtons/GenButton';
import IngredientsToggle from './FilterAreaButtons/IngredientsToggle';
import CustomizedSelects from './FilterAreaButtons/CustomizedSelects';
import StapleToggle from './StapleList/StapleToggle';
import PantryToggle from './PantryList/PantryToggle';
import StapleList from './StapleList/StapleList';
import PantryList from './PantryList/PantryList';

const FilterArea = () => {
return (
    <>
    <main className="FilterArea">

        <div className="FilterAreaButtons">
            <div className="FilterAreaButtonsLeft">
            <SourceSelector></SourceSelector>
            <CustomizedSelects></CustomizedSelects>
            </div>
            <GenButton></GenButton>
            
        </div>

        <div className="FilterAreaPantry">
            <IngredientsToggle></IngredientsToggle>
        </div>

        <div className="IngredientsArea">
        <StapleToggle></StapleToggle>
        <StapleList></StapleList>

        <PantryToggle></PantryToggle>
        <PantryList></PantryList>

        </div>
    

    <h1>Filter Area</h1>

    </main>
    </>
)};

export default FilterArea;
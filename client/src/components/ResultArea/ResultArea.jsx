import * as React from 'react';
import Button from '@mui/material/Button';
import { useRef, useState, useEffect } from 'react';
import ResultItem from './ResultItem';
import { HeroHeader } from '../HeroHeader';
// import PageviewTwoToneIcon from '@mui/icons-material/PageviewTwoTone';

const ResultArea = () => {
return (
    <>
    <div className="ResultArea">
        <div className="ResultAreaHeader">
            {/* <PageviewTwoToneIcon /> */}
            <HeroHeader text="Recipe Results" />
            
        </div>

        <ResultItem
        dish="Chicken Curry"
        itemAmount="16 items (6 staples)"
        details="A delicious chicken curry recipe with a blend of spices and herbs."
        ></ResultItem>

        <ResultItem
        dish="Chicken Curry"
        itemAmount="16 items (6 staples)"
        details="A delicious chicken curry recipe with a blend of spices and herbs."
        ></ResultItem>
               

    </div>
    </>
)}

export default ResultArea;
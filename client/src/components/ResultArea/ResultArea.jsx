import * as React from 'react';
import Button from '@mui/material/Button';
import { useRef, useState, useEffect } from 'react';
import ResultItem from './ResultItem';

const ResultArea = () => {
return (
    <>
    <div className="ResultArea">
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

    <h1>Result Area</h1>
    </div>
    </>
)}

export default ResultArea;
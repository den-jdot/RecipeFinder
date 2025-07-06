import * as React from 'react';

export const HeroHeader = (props) => {
  return (
    <div className="HeroHeader">
      <h1 className="headline">{props.text}</h1>
    </div>
  );
}
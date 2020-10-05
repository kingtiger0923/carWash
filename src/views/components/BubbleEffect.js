import React, { useEffect } from 'react';
import BubbleImage from './../../assets/bubble.png';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function BubbleEffect() {

  useEffect(() => {
    let bubbleDiv = document.getElementsByClassName('bubble-effect')[0];
    for( let i = 0; i < 15; i ++ ) {
      let ele = document.createElement('img');
      ele.classList.add('rotateme');
      ele.src = BubbleImage;
      ele.width = 1050 + getRandomInt(100) + '';
      ele.height = 750 + getRandomInt(100) + '';
      ele.style = `left: ${getRandomInt(1920) - 400}px; top: ${getRandomInt(2750)}px;`;
      bubbleDiv.appendChild(ele);
    }
  }, []);

  return (
    <div className="bubble-effect">
    </div>
  );
}

export default BubbleEffect;
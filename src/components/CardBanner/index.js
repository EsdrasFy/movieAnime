import React from 'react';
import './index.css';
import { FaAngleRight } from 'react-icons/fa';

function CardBanner({ imgEp, title, episodeo, id, sinopse }) {
  const bannerStyle = {
    flex: '0 0 auto',
    width: '100px',
    height: '100px',
    backgroundImage: `url(${imgEp})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  return (
    <div id="containerRandomCard">
      <div id="bannerCard" style={bannerStyle}></div>
      <div id="infoRandom">
        <div>
          <div id='titleRan'>
            <p className='clamp-line'>{title}</p>
          </div>
          <div id="synopse">
            <p className="clamp-line">{sinopse}</p>
          </div>
        </div>
        <div id='seeMoreRandom'>
          <button> <FaAngleRight/> </button>
        </div>
      </div>
    </div>
  );
}

export default CardBanner;

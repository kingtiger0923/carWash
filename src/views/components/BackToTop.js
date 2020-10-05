import React from 'react';

const ScrollToTop = () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function BackToTop() {
  return (
    <div id="back-top" onClick={ScrollToTop} style={{display: 'none'}}>
      <a title="Go to Top" href="#home"> <i className="fas fa-level-up-alt"></i></a>
    </div>
  );
}

export default BackToTop;
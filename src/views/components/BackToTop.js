import React from 'react';

const ScrollToTop = () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function BackToTop() {
  return (
    <div id="back-top" onClick={ScrollToTop} >
      <a title="Go to Top"> <i className="fas fa-level-up-alt"></i></a>
    </div>
  );
}

export default BackToTop;
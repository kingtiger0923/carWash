import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from './../../assets/mainLogo.png';

function Footer() {
  return (
    <footer>
      <div className="footer-wrappper section-bg" data-background="assets/img/gallery/footer-bg.png">
        <div className="footer-area footer-padding">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-4 col-lg-5 col-md-4 col-sm-6">
                <div className="single-footer-caption mb-50">
                  <div className="single-footer-caption mb-30">
                    <div className="footer-logo mb-25">
                      <Link to="/"><img src={LogoImage} alt="Faevaa Car Wash" height="60" /></Link>
                    </div>
                    <div className="footer-tittle">
                      <h4>Follow Our Social</h4>
                    </div>
                    <div className="footer-social">
                      <a href="https://twitter.com/faevaadetailgo"><i className="fab fa-twitter"></i></a>
                      <a href="https://m.facebook.com/faevaadetailgo/"><i className="fab fa-facebook-f"></i></a>
                      <a href="https://www.instagram.com/faevaadetailgo/"><i className="fab fa-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Address</h4>
                    <ul>
                      <li><span>11283 Homestead Rd Houston Texas 77016</span></li>
                      <li><a href="mailto: info@faevaadetailgo.com">info@faevaadetailgo.com</a></li>
                      <li><span>Phone: 281-741-9386</span></li>
                      <li><span>Fax: 281-372-6738</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Company</h4>
                    <ul>
                      <li><a href="#">Design &amp; creatives</a></li>
                      <li><a href="#">Telecommunication</a></li>
                      <li><a href="#">Restaurant</a></li>
                      <li><a href="#">Programing</a></li>
                      <li><a href="#">Architecture</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Support</h4>
                    <ul>
                      <li><a href="#">Design &amp; creatives</a></li>
                      <li><a href="#">Telecommunication</a></li>
                      <li><a href="#">Restaurant</a></li>
                      <li><a href="#">Programing</a></li>
                      <li><a href="#">Architecture</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
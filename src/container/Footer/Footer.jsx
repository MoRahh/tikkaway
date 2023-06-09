import React from 'react';

import { images } from '../../constants'
import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    Hello
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <p className="p__opensans">Phone Number</p>
        <p className="p__opensans">Phone Number</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.tikkaway} alt="Logo" />
        <p className='p__opensans'>The best way to find yourself is to lose yourself in the service of others</p>
        <img src={images.spoon} alt="spoon" className='spoon__img' style={{ marginTop: '15' }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />

          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Friday</p>
        <p className="p__opensans">08:00 AM - 12:00 AM</p>
        <p className="p__opensans">Saturday - Sunday</p>
        <p className="p__opensans">07:00 AM - 11:00 PM</p>

      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2021 Tikkaway, All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;

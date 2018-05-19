import React from 'react';
import ReactDOM from 'react-dom';

require('../css/announcement.css');

const AnnouncementBanner = () => (

    <div className="announcement-container">
      <div className="announcement-text">
        Give $20, Save $20
        <div className="announcement-sub-text">
          Share ShopPal with friends to give them $10 off their first two orders. After their first order, you get $20 too.
        </div>
      </div>
    </div>

)

module.exports = AnnouncementBanner

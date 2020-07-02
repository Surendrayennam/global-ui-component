import React from 'react';
// TODO: Convert static content to Sitecore components when ready
// import { Text } from '@sitecore-jss/sitecore-jss-react';
import stockImage from '../../assets/media/images/placeholder-credit-card.jpg';

// Layout Notes: Easily swap the content and image by swapping those divs in the markup
const HeroTier = () => (
    <div className="txt-n-img">
        {/* TODO: If CMS implements multiple background colors, this will need to be modified */}
        <div className="txt-n-img__item txt-n-img__item--content txt-n-img__item--blue">
            {/* TODO: If CMS implements content differently, this will need to be modified */}
            {/* Heading needs to change size with breakpoints to fit the limited space/height */}
            <h1 className="hdg hdg--1 hdg--inverse">
                Sign in to MyChart to pay your bills
            </h1>
            <div className="vr vr--6x"></div>
            {/* TODO: Add styles */}
            <p className="txt txt--lg">
                Tum dicere exorsus est laborum forti viris commemorandis
                eorumque factis non quoerte.
            </p>
        </div>
        <div className="txt-n-img__item txt-n-img__item--media">
            {/* TODO: Implement responsive images when integrating with CMS */}
            <img src={stockImage} alt="" />
        </div>
    </div>
);

export default HeroTier;

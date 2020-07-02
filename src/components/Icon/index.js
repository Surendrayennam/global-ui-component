import React from 'react';
import PropTypes from 'prop-types';

import PayBill from './icons/PayBill';
import FindProvider from './icons/FindProvider';
import GetCare from './icons/GetCare';
import Location from './icons/Location';
import MyChart from './icons/MyChart';
import Facebook from './icons/Facebook';
import Instagram from './icons/Instagram';
import Twitter from './icons/Twitter';
import YouTube from './icons/YouTube';

export const ICON_NAMES = {
    GET_CARE: 'get-care',
    FIND_LOCATION: 'find-location',
    FIND_PROVIDER: 'find-provider',
    PAY_BILL: 'pay-bill',
    MYCHART: 'mychart',
    FACEBOOK: 'facebook',
    INSTAGRAM: 'instagram',
    TWITTER: 'twitter',
    YOUTUBE: 'youtube',
};

const Icon = (props) => {
    switch (props.name) {
        case ICON_NAMES.GET_CARE:
            return <GetCare {...props} />;
        case ICON_NAMES.FIND_LOCATION:
            return <Location {...props} />;
        case ICON_NAMES.FIND_PROVIDER:
            return <FindProvider {...props} />;
        case ICON_NAMES.PAY_BILL:
            return <PayBill {...props} />;
        case ICON_NAMES.MYCHART:
            return <MyChart {...props} />;
        case ICON_NAMES.FACEBOOK:
            return <Facebook {...props} />;
        case ICON_NAMES.INSTAGRAM:
            return <Instagram {...props} />;
        case ICON_NAMES.TWITTER:
            return <Twitter {...props} />;
        case ICON_NAMES.YOUTUBE:
            return <YouTube {...props} />;
        default:
            return;
    }
};

Icon.propTypes = { name: PropTypes.string.isRequired };

Icon.defaultProps = {
    fill: 'currentColor',
    focusable: false,
    'aria-hidden': true,
};

export default Icon;

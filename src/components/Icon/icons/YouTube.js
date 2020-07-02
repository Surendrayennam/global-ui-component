import React from 'react';

const SVG = (props) => (
    <svg {...props} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <title>Facebook</title>
        <path
            fill={props.fill}
            d="M18.145 10.689v-3.05s0-2.915-2.923-2.915H4.102s-2.922 0-2.922 2.915v6.047s0 2.915 2.922 2.915h11.12s2.923 0 2.923-2.915v-2.997zm-5.189-.018l-5.554 3.252V7.418l5.554 3.253"
        />
    </svg>
);

export default SVG;

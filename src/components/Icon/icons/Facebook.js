import React from 'react';

const SVG = (props) => (
    <svg {...props} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <title>Facebook</title>
        <path
            fill={props.fill}
            d="M11.778 19.69H7.64V9.934H5.573V6.572H7.64V4.554C7.64 1.81 8.807.18 12.124.18h2.761v3.363h-1.726c-1.29 0-1.376.47-1.376 1.346l-.006 1.683h3.127l-.366 3.362h-2.76v9.756z"
        />
    </svg>
);

export default SVG;

import React from 'react';

const SVG = (props) => (
    <svg {...props} viewBox="0 0 17 15" xmlns="http://www.w3.org/2000/svg">
        <title>Log in to MyChart</title>
        <path
            fill={props.fill}
            d="M17 7v7.544c0 .804-.71 1.456-1.585 1.456H1.585C.71 16 0 15.348 0 14.544V7.886h6.513L7.789 7H17zm-1.297 1.191h-7.48l-1.275.886H1.297v5.467c0 .146.129.265.288.265h13.83c.16 0 .288-.119.288-.265V8.191zM10.67 10.19l.038.035.037.035a.8.8 0 01.04 1.134l-.04.04-1.53 1.483a.318.318 0 01-.403.023l-.026-.023-1.53-1.482a.8.8 0 01-.038-1.134l.039-.04.037-.036a.84.84 0 011.1-.034l.038.034.354.343.015.013c.11.092.276.094.388.01l.027-.023.354-.343.038-.035a.84.84 0 011.062 0zM15.415 1C16.29 1 17 1.672 17 2.5v3.525H7.347L6.07 7H0V2.5C0 1.672.71 1 1.585 1zm0 1.227H1.585l-.034.002a.279.279 0 00-.254.271v3.273h4.316l1.276-.975h8.814V2.5l-.002-.032a.283.283 0 00-.286-.24z"
        />
    </svg>
);

export default SVG;
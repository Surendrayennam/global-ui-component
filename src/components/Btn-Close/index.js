// import

import React from 'react';

const closeXicon = (
    <svg width="44" height="44" xmlns="http://www.w3.org/2000/svg">
        <title>Close</title>
        <g fill="none" fillRule="evenodd">
            <path d="M0 0h44v44H0z" fill="#FFF" />
            <path
                d="M14.884 12.48l.004.003 7.612 7.64 7.612-7.64a1.645 1.645 0 012.329 0c.643.646.643 1.691 0 2.337l-7.613 7.64 7.69 7.718c.643.646.643 1.69 0 2.336a1.643 1.643 0 01-2.33 0L22.5 24.797l-7.689 7.717-.002.003a1.644 1.644 0 01-2.326-.003 1.656 1.656 0 010-2.336l7.688-7.718-7.612-7.64a1.656 1.656 0 010-2.337 1.643 1.643 0 012.325-.004z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </g>
    </svg>
);

const BtnClose = (props) => {
    const { onClick } = props;
    return (
        <button
            aria-label="Close"
            onClick={onClick}
            className="btn btn--close-x"
            type="button">
            {closeXicon}
        </button>
    );
};

export default BtnClose;

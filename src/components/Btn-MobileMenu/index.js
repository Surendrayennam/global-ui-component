import React from 'react';

const burgerIcon = (
    <svg width="44" height="44" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FFF" d="M0 0h44v44H0z" />
        <path
            d="M34.04 28.01c1.084.002 1.961.881 1.96 1.964a1.979 1.979 0 01-1.972 1.977L19.624 32a1.963 1.963 0 01-1.968-1.964 1.979 1.979 0 011.972-1.977l14.404-.048zm0-8.006a1.963 1.963 0 011.959 1.966 1.978 1.978 0 01-1.973 1.975l-24.059.053A1.964 1.964 0 018 22.032a1.978 1.978 0 011.973-1.974l24.059-.054zM9.966 12l24.059.053a1.978 1.978 0 011.973 1.975 1.963 1.963 0 01-1.96 1.966h-.007L9.973 15.94A1.978 1.978 0 018 13.966 1.963 1.963 0 019.96 12h.007z"
            fill="currentColor"
            fillRule="nonzero"
        />
    </svg>
);

const BtnMobileMenu = (props) => {
    const { onClick } = props;
    return (
        <button
            onClick={onClick}
            className="btn btn--mobile-menu"
            type="button">
            {burgerIcon}
        </button>
    );
};

export default BtnMobileMenu;

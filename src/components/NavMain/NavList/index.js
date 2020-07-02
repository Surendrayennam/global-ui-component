import { NavLink } from 'react-router-dom';
import React from 'react';
import Icon, { ICON_NAMES } from '../../Icon';

// TODO: use something other than index for the keys.

const NavList = () => {
    const navLinks = [
        {
            title: 'Get Care',
            name: ICON_NAMES.GET_CARE,
            href: '/get-care',
        },
        {
            title: 'Find a Location',
            name: ICON_NAMES.FIND_LOCATION,
            href: '/find-location',
        },
        {
            title: 'Find a Provider',
            name: ICON_NAMES.FIND_PROVIDER,
            href: '/find-provider',
        },
        {
            title: 'Pay a Bill',
            name: ICON_NAMES.PAY_BILL,
            href: '/pay-bill',
        },
        {
            title: 'Sign in to MyChart',
            name: ICON_NAMES.MYCHART,
            href: '/mychart',
        },
    ];
    return (
        <ul className="nav-list">
            {navLinks.map((listItem, index) => (
                <li key={index}>
                    <NavLink
                        to={listItem.href}
                        className="nav-list__item"
                        activeClassName="nav-list__item--active"
                        width={listItem.width}
                        key={index}>
                        <Icon
                            name={listItem.name}
                            className="nav-list__item__icon"
                        />
                        {listItem.title}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default NavList;

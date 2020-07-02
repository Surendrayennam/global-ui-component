import React from 'react';
import LogoLink from '../LogoLink';
import NavList from './NavList';
import NavInfo from './NavInfo';
import classnames from 'classnames';

const NavMain = (props) => {
    const { cssClasses } = props;

    return (
        <div className={classnames('nav-main', cssClasses)}>
            <div className="nav-main__content">
                <div className="nav-main__content__logo">
                    <LogoLink />
                </div>
                <NavList />
            </div>
            <NavInfo />
        </div>
    );
};

export default NavMain;

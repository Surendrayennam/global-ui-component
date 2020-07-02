import React from 'react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';
import buildClassNames from 'classnames';

const FooterLanguagesNavList = (props) => (
    <ul
        className={buildClassNames(
            'footer__nav-list',
            'footer__nav-list--languages'
        )}>
        <Placeholder
            name="jss-footer-languagesnavlist-main"
            rendering={props.rendering}
            render={(components) => {
                return components.map((component) => {
                    return (
                        <li
                            key={component.props.rendering.uid}
                            className="footer__nav-list__item">
                            {component}
                        </li>
                    );
                });
            }}
        />
    </ul>
);

export default FooterLanguagesNavList;

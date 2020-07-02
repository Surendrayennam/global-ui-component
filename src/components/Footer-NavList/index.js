import React from 'react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';
import buildClassNames from 'classnames';

const FooterNavList = (props) => (
    <ul
        className={buildClassNames({
            'footer__nav-list': true,
            'footer__nav-list--primary': props.params.primary,
        })}>
        <Placeholder
            name="jss-footer-navlist-main"
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

export default FooterNavList;

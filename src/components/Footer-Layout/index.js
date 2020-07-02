import React from 'react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';
import buildClassNames from 'classnames';

const FooterLayout = (props) => (
    <footer className="footer">
        <div className="footer__inner">
            <nav
                className={buildClassNames(
                    'footer__inner__section',
                    'footer__inner__section--main'
                )}>
                <Placeholder
                    name="jss-footer-main"
                    rendering={props.rendering}
                />
            </nav>
            <div className="footer__inner__section footer__inner__section--footer">
                <Placeholder
                    name="jss-footer-footer"
                    rendering={props.rendering}
                />
            </div>
        </div>
    </footer>
);

export default FooterLayout;

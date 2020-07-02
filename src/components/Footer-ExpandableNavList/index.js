import React from 'react';
import { Text, Placeholder } from '@sitecore-jss/sitecore-jss-react';

const FooterExpandableNavList = (props) => (
    <div className="footer__expandable">
        <h3 className="footer__expandable__header">
            <Text field={props.fields.heading} />
        </h3>
        <div className="footer__expandable__content">
            <Placeholder
                name="jss-footer-expandablenavlist-main"
                rendering={props.rendering}
            />
        </div>
    </div>
);

export default FooterExpandableNavList;

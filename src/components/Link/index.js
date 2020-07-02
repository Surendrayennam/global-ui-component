import React from 'react';
import {
    Link as SitecoreLink,
    getFieldValue,
    withSitecoreContext,
} from '@sitecore-jss/sitecore-jss-react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

const Link = ({ sitecoreContext, ...props }) => {
    const { href, target, text } = getFieldValue(props.fields, 'link');
    const isExternal = target && target === '_blank';
    const cssClasses = classnames({
        'has-link-icon': isExternal,
    });

    // Render sitecore link component for editing state
    if (sitecoreContext.pageEditing || isExternal) {
        return (
            <SitecoreLink className={cssClasses} field={props.fields.link} />
        );
    }

    // Render react dom router nav link when we're not editing and think the href is internal link
    return <NavLink to={href}>{text}</NavLink>;
};

export default withSitecoreContext()(Link);

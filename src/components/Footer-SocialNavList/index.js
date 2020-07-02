import React from 'react';
import {
    Link,
    getFieldValue,
    withSitecoreContext,
} from '@sitecore-jss/sitecore-jss-react';
import Icon, { ICON_NAMES } from '../Icon';

const FooterSocialNavList = ({ sitecoreContext, ...props }) => {
    // Render sitecore link components when the page is being edited
    if (sitecoreContext.pageEditing) {
        return (
            <React.Fragment>
                <Link field={props.fields.facebook} />
                <Link field={props.fields.twitter} />
                <Link field={props.fields.youtube} />
                <Link field={props.fields.instagram} />
            </React.Fragment>
        );
    }

    const facebookFieldProps = getFieldValue(props.fields, 'facebook');
    const twitterFieldProps = getFieldValue(props.fields, 'twitter');
    const youtubeFieldProps = getFieldValue(props.fields, 'youtube');
    const instagramFieldProps = getFieldValue(props.fields, 'instagram');

    return (
        <ul className="footer__social-nav-list">
            <li className="footer__social-nav-list__item">
                <a
                    href={facebookFieldProps.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={facebookFieldProps.text}>
                    <Icon name={ICON_NAMES.FACEBOOK} />
                </a>
            </li>
            <li className="footer__social-nav-list__item">
                <a
                    href={twitterFieldProps.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={twitterFieldProps.text}>
                    <Icon name={ICON_NAMES.TWITTER} />
                </a>
            </li>
            <li className="footer__social-nav-list__item">
                <a
                    href={youtubeFieldProps.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={youtubeFieldProps.text}>
                    <Icon name={ICON_NAMES.YOUTUBE} />
                </a>
            </li>
            <li className="footer__social-nav-list__item">
                <a
                    href={instagramFieldProps.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={instagramFieldProps.text}>
                    <Icon name={ICON_NAMES.INSTAGRAM} />
                </a>
            </li>
        </ul>
    );
};

export default withSitecoreContext()(FooterSocialNavList);

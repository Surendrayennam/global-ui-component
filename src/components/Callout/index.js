import React from 'react';
import classnames from 'classnames';
import {
    RichText,
    Text,
    Link,
    getFieldValue,
} from '@sitecore-jss/sitecore-jss-react';
export const Callout = ({ fields, fourUp }) => {
    return (
        <div
            className={classnames('callout', {
                'callout--4': fourUp,
            })}>
            <div className="callout__content">
                <h2 className="callout__content__title">
                    <Text field={fields.title} />
                </h2>
                <RichText
                    className="callout__content__link"
                    field={fields.bodyContent}
                />
            </div>
            <div className="callout__cta">
                {getFieldValue(fields, 'callToActionLink').href && (
                    <Link
                        className="btn btn--primary"
                        field={fields.callToActionLink}
                    />
                )}
            </div>
        </div>
    );
};

export default Callout;

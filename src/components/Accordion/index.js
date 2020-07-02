import React, { useState } from 'react';
import {
    Text,
    RichText,
    Link,
    getFieldValue,
    withSitecoreContext,
} from '@sitecore-jss/sitecore-jss-react';
import buildClassNames from 'classnames';
import Accordion from './accordion';
import Tier from '../Tier';

// TODO: Might get some kind of theme config to alter accordion styles?
// TODO: Might need to switch over different item types for sitecore components or use placeholder
const SitecoreAccordion = ({ sitecoreContext, ...props }) => {
    const [activeEventKey, setActiveEventKey] = useState(null);
    return (
        <Tier>
            {getFieldValue(props.fields, 'heading') && (
                <Text
                    field={props.fields.heading}
                    className="accordion__heading"
                    tag="h2"
                />
            )}
            {/* Editing */}
            {sitecoreContext.pageEditing && (
                <div className="accordion">
                    {props.fields.items.map((item) => (
                        <div
                            key={item.id}
                            className={buildClassNames(
                                'accordion__item',
                                'accordion__item--open'
                            )}>
                            <div className="accordion__item__trigger">
                                <Text field={item.fields.question} />
                            </div>
                            <div className="accordion__item__main ">
                                <RichText
                                    field={item.fields.answer}
                                    className="rich-text"
                                />
                                {getFieldValue(item.fields, 'callToActionLink')
                                    .href && (
                                    <Link
                                        field={item.fields.callToActionLink}
                                        className="arrow-link"
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {/* Not Editing */}
            {!sitecoreContext.pageEditing && (
                <Accordion
                    className="accordion"
                    activeEventKey={activeEventKey}
                    onToggle={setActiveEventKey}>
                    {props.fields.items.map((item, index) => (
                        <div
                            key={item.id}
                            className={buildClassNames('accordion__item', {
                                'accordion__item--open':
                                    activeEventKey === index,
                            })}>
                            <Accordion.Toggle
                                id={`accordion-row-toggle-${item.id}`}
                                eventKey={index}
                                className="accordion__item__trigger"
                                type="button"
                                aria-expanded={activeEventKey === index}
                                aria-controls={`accordion-row-content-${item.id}`}>
                                <Text field={item.fields.question} />
                            </Accordion.Toggle>
                            <Accordion.Collapsible
                                id={`accordion-row-content-${item.id}`}
                                eventKey={index}
                                className="accordion__item__main"
                                aria-labelledby={`accordion-row-toggle-${item.id}`}>
                                <RichText
                                    field={item.fields.answer}
                                    className="rich-text"
                                />
                                {getFieldValue(item.fields, 'callToActionLink')
                                    .href && (
                                    <Link
                                        field={item.fields.callToActionLink}
                                        className="arrow-link"
                                    />
                                )}
                            </Accordion.Collapsible>
                        </div>
                    ))}
                </Accordion>
            )}
        </Tier>
    );
};

export default withSitecoreContext()(SitecoreAccordion);

import React, {
    useCallback,
    useContext,
    useLayoutEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import { useWindowResizeEvent } from '../../hooks/events';

const AccordionContext = React.createContext();

const useAccordionContext = () => {
    const context = useContext(AccordionContext);
    if (!context) {
        throw new Error(
            'Accordion components are compound component. Must be used inside Accordion.'
        );
    }
    return context;
};

const Accordion = ({
    render: Component,
    activeEventKey,
    onToggle,
    children,
    ...props
}) => {
    const context = useMemo(() => {
        return { activeEventKey, onToggle };
    }, [activeEventKey, onToggle]);

    return (
        <AccordionContext.Provider value={context}>
            <Component {...props}>{children}</Component>
        </AccordionContext.Provider>
    );
};

Accordion.propTypes = {
    // Element or Component to be rendered as a parent for accordion.
    render: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
        PropTypes.elementType,
    ]),

    // `eventKey` of the accordion/section which is active/open
    activeEventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    // onToggle callback. (eventKey) => void
    onToggle: PropTypes.func,
};

Accordion.defaultProps = {
    // default render as div
    render: 'div',
};

const useAccordionClick = (eventKey, onClick) => {
    const { onToggle, activeEventKey } = useAccordionContext();
    return (event) => {
        onToggle(eventKey === activeEventKey ? null : eventKey);
        if (onClick) {
            onClick(event);
        }
    };
};

const Toggle = ({
    render: Component,
    eventKey,
    onClick,
    children,
    ...props
}) => {
    const accordionClick = useAccordionClick(eventKey, onClick);

    return (
        <Component onClick={accordionClick} {...props}>
            {children}
        </Component>
    );
};

Toggle.propTypes = {
    // Element or Component to be rendered as a toggle.
    render: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
        PropTypes.elementType,
    ]),

    // `eventKey` of the content to be controlled.
    eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Toggle.defaultProps = {
    render: 'button',
};

const Collapsible = ({ render: Component, eventKey, children, ...props }) => {
    const contentRef = useRef(null);
    const { activeEventKey } = useAccordionContext();
    const [contentHeight, setContentHeight] = useState('auto');

    const setContentHeightCallback = useCallback(() => {
        if (!contentRef.current) {
            return;
        }
        setContentHeight(
            activeEventKey === eventKey ? contentRef.current.scrollHeight : 0
        );
    }, [activeEventKey, eventKey]);
    useLayoutEffect(setContentHeightCallback, [setContentHeightCallback]);

    const debounceSetContentHeight = useCallback(
        debounce(setContentHeightCallback, 500),
        [setContentHeightCallback]
    );
    useWindowResizeEvent(debounceSetContentHeight);

    // TODO: Using hidden doesn't allow out animation... figure another way?
    return (
        <Component
            ref={contentRef}
            style={{
                '--collapsible-height': `${contentHeight}${
                    Number.isInteger(contentHeight) ? 'px' : ''
                }`,
            }}
            hidden={activeEventKey !== eventKey}
            {...props}>
            {children}
        </Component>
    );
};

Collapsible.propTypes = {
    // Wrapper for target content.
    render: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
        PropTypes.elementType,
    ]),

    // Event key for the content.
    eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Collapsible.defaultProps = {
    render: 'div',
};

Accordion.Toggle = Toggle;
Accordion.Collapsible = Collapsible;

export default Accordion;

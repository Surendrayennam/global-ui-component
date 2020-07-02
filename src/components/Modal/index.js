import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import {
    actOnEscapePress,
    freezeBodyScrolling,
    unFreezeBodyScrolling,
    focusToElement,
} from '../../utilities/AccessibilityUtility';
import BtnClose from '../Btn-Close';

const Modal = (props) => {
    const { title, children, isOpen, onClose } = props;
    // TODO: Look into using state machines / reducers with keys instead
    const [isActive, setIsActive] = useState(false);
    const [isMounting, setIsMounting] = useState(false); // For the animation

    useEffect(() => {
        const onKeyUp = (event) => {
            actOnEscapePress(event, close);
        };

        isOpen ? open() : close();
        document.addEventListener('keyup', onKeyUp);

        return function cleanup() {
            document.removeEventListener('keyup', onKeyUp);
        };
    }, [isOpen]);

    const open = () => {
        setIsActive(true);
        setIsMounting(true);
        setTimeout(() => {
            freezeBodyScrolling();
            focusToElement(document.getElementById('close-btn'));
        }, 250); // Timing matches CSS animation to avoid jitter
    };

    const close = () => {
        setIsMounting(false);
        setTimeout(() => {
            setIsActive(false);
            unFreezeBodyScrolling();
        }, 250); // Timing matches CSS animation to avoid jitter
    };

    return (
        <div
            className={classNames('modal-root', {
                'is-active': isActive,
            })}>
            <div
                className={classNames('modal', {
                    'is-mounting': isMounting,
                    'is-unmounting': !isMounting,
                })}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title">
                <h1 id="modal-title" className="visually-hidden">
                    {title}
                </h1>
                <div className="modal__close">
                    <BtnClose onClick={onClose} />
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;

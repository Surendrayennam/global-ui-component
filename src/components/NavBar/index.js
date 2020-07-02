import React, { useState } from 'react';
import NavMain from '../NavMain';
import Modal from '../Modal';
import BtnMobileMenu from '../Btn-MobileMenu';
import LogoLink from '../LogoLink';

const NavBar = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <React.Fragment>
            <div className="navbar">
                <div className="navbar__logo">
                    <LogoLink />
                </div>
                <div className="navbar__menu">
                    <BtnMobileMenu onClick={openModal} />
                </div>
            </div>
            <Modal
                title={'Main Menu'}
                isOpen={modalIsOpen}
                onClose={closeModal}>
                <NavMain />
            </Modal>
        </React.Fragment>
    );
};

export default NavBar;

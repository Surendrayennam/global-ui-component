import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import buildClassNames from 'classnames';
import Accordion from '../Accordion/accordion';
import Icon, { ICON_NAMES } from '../Icon';

// TODO: Delete this component when we get sitecore static context added for footer
const FooterAccordion = (props) => {
    const [activeEventKey, setActiveEventKey] = useState(null);
    return (
        <Accordion
            className={buildClassNames('footer__expandable', {
                'footer__expandable--open': activeEventKey === 0,
            })}
            activeEventKey={activeEventKey}
            onToggle={setActiveEventKey}>
            <Accordion.Toggle
                id={`${props.id}-toggle`}
                className="footer__expandable__trigger is-hidden@large"
                type="button"
                eventKey={0}
                aria-expanded={activeEventKey === 0}
                aria-controls={`${props.id}-content`}>
                {props.heading}
            </Accordion.Toggle>
            <Accordion.Collapsible
                id={`${props.id}-content`}
                className="footer__expandable__content is-hidden@large"
                eventKey={0}
                aria-labelledby={`${props.id}-toggle`}>
                {props.children}
            </Accordion.Collapsible>

            {/* Always show heading and nav list at large breakpoint... */}
            <h3 className="footer__expandable__header is-hidden@max-large">
                {props.heading}
            </h3>
            <div className="footer__expandable__content is-hidden@max-large">
                {props.children}
            </div>
        </Accordion>
    );
};

// TODO: Delete this component when we get sitecore static context added for footer
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <nav
                    className={buildClassNames(
                        'footer__inner__section',
                        'footer__inner__section--main'
                    )}>
                    <ul
                        className={buildClassNames(
                            'footer__nav-list',
                            'footer__nav-list--primary'
                        )}>
                        <li className="footer__nav-list__item">
                            <a
                                className="has-link-icon"
                                href="https://www.fairview.org/blog#sort=%40fpublicationz32xdate41631%20descending"
                                target="_blank"
                                rel="noopener noreferrer">
                                News &amp; Stories
                            </a>
                        </li>
                        <li className="footer__nav-list__item">
                            <NavLink to="/for-medical-professionals">
                                For Medical Professionals
                            </NavLink>
                        </li>
                        <li className="footer__nav-list__item">
                            <NavLink to="/sitemap">Sitemap</NavLink>
                        </li>
                    </ul>
                    <FooterAccordion id="footer-contact" heading="Contact">
                        <ul className="footer__nav-list">
                            <li className="footer__nav-list__item">
                                <NavLink to="/patient-billing-and-financial-services">
                                    Patient Billing &amp; Financial Service
                                </NavLink>
                            </li>
                            <li className="footer__nav-list__item">
                                <a
                                    className="has-link-icon"
                                    href="https://www.fairview.org/patient-relations"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Provide Feedback
                                </a>
                            </li>
                            <li className="footer__nav-list__item">
                                <NavLink to="/privacy">Privacy</NavLink>
                            </li>
                        </ul>
                    </FooterAccordion>
                    <FooterAccordion
                        id="footer-get-involved"
                        heading="Get Involved">
                        <ul className="footer__nav-list">
                            <li className="footer__nav-list__item">
                                <a
                                    className="has-link-icon"
                                    href="https://giving.fairview.org/give/137326/#!/donation/checkout"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Give Now
                                </a>
                            </li>
                            <li className="footer__nav-list__item">
                                <a
                                    className="has-link-icon"
                                    href="https://www.fairview.org/volunteering"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Volunteer
                                </a>
                            </li>
                            <li className="footer__nav-list__item">
                                <a
                                    className="has-link-icon"
                                    href="https://www.mhealth.org/discover-our-difference/research"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Research
                                </a>
                            </li>
                        </ul>
                    </FooterAccordion>
                    <ul className="footer__social-nav-list">
                        <li className="footer__social-nav-list__item">
                            <a
                                href="https://www.facebook.com/mhealthfairview"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook">
                                <Icon name={ICON_NAMES.FACEBOOK} />
                            </a>
                        </li>
                        <li className="footer__social-nav-list__item">
                            <a
                                href="https://twitter.com/mhealthfairview"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter">
                                <Icon name={ICON_NAMES.TWITTER} />
                            </a>
                        </li>
                        <li className="footer__social-nav-list__item">
                            <a
                                href="https://www.youtube.com/user/HealthEast/featured"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="YouTube">
                                <Icon name={ICON_NAMES.YOUTUBE} />
                            </a>
                        </li>
                        <li className="footer__social-nav-list__item">
                            <a
                                href="https://instagram.com/mhealthfairview"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram">
                                <svg
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    focusable="false"
                                    role="img">
                                    <Icon name={ICON_NAMES.INSTAGRAM} />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div
                    className={buildClassNames(
                        'footer__inner__section',
                        'footer__inner__section--footer'
                    )}>
                    <ul
                        className={buildClassNames(
                            'footer__nav-list',
                            'footer__nav-list--languages'
                        )}>
                        <li className="footer__nav-list__item">
                            <a
                                href="http://www.fvfiles.com/544693.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                dir="ltr"
                                lang="es">
                                Español
                            </a>
                        </li>
                        <li className="footer__nav-list__item">
                            <a
                                href="http://www.fvfiles.com/544693.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                dir="ltr"
                                lang="so">
                                Soomaali
                            </a>
                        </li>
                        <li className="footer__nav-list__item">
                            <a
                                href="http://www.fvfiles.com/544693.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                dir="ltr"
                                lang="vi">
                                Tiếng Việt
                            </a>
                        </li>
                        <li className="footer__nav-list__item">
                            <a
                                href="http://www.fvfiles.com/544693.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                dir="rtl"
                                lang="ar">
                                العربية
                            </a>
                        </li>
                        <li className="footer__nav-list__item">
                            <a
                                href="http://www.fvfiles.com/544693.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                dir="ltr"
                                lang="ru">
                                Русский
                            </a>
                        </li>
                        <li className="footer__nav-list__item">
                            <a
                                href="http://www.fvfiles.com/544693.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                dir="ltr"
                                lang="om">
                                Oroomiffa
                            </a>
                        </li>
                        <li className="footer__nav-list__item">
                            <a
                                href="http://www.fvfiles.com/544693.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                dir="ltr"
                                lang="hmn">
                                Hmoob
                            </a>
                        </li>
                        <li className="footer__nav-list__item">
                            <a
                                href="http://www.fvfiles.com/544693.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                dir="ltr"
                                lang="zh">
                                繁體中文
                            </a>
                        </li>
                        <li className="footer__nav-list__item">
                            <a
                                href="http://www.fvfiles.com/544693.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                dir="ltr"
                                lang="am">
                                አማርኛ
                            </a>
                        </li>
                        <li className="footer__nav-list__item">
                            <a
                                href="http://www.fvfiles.com/544693.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                dir="ltr"
                                lang="km">
                                ខ្មែរ
                            </a>
                        </li>
                        <li className="footer__nav-list__item">
                            <a
                                href="http://www.fvfiles.com/544693.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                dir="ltr"
                                lang="lo">
                                ພາສາລາວ
                            </a>
                        </li>
                        <li className="footer__nav-list__item">
                            <a
                                href="http://www.fvfiles.com/544693.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                dir="ltr"
                                lang="ko">
                                한국어
                            </a>
                        </li>
                        <li className="footer__nav-list__item">
                            <a
                                href="http://www.fvfiles.com/544693.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                dir="ltr"
                                lang="fr">
                                Français
                            </a>
                        </li>
                        <li className="footer__nav-list__item">
                            <a
                                href="http://www.fvfiles.com/544693.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                dir="rtl"
                                lang="fa">
                                فارسی.
                            </a>
                        </li>
                        <li className="footer__nav-list__item">
                            <a
                                href="http://www.fvfiles.com/544693.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                dir="ltr"
                                lang="kar">
                                ကညီ
                            </a>
                        </li>
                    </ul>
                    <div className="footer__disclaimer">
                        <p>
                            We comply with applicable Federal civil rights laws
                            and Minnesota laws. We do not discriminate against,
                            exclude or treat people differently because of race,
                            color, national origin, age, disability, sex, sexual
                            orientation, gender, or gender identity. Please see
                            our{' '}
                            <a
                                href="http://www.fvfiles.com/524638.pdf"
                                target="_blank"
                                rel="noopener noreferrer">
                                Nondiscrimination &amp; Accessibility
                                Requirements
                            </a>{' '}
                            and{' '}
                            <a
                                href="http://www.fvfiles.com/5022kit.pdf"
                                target="_blank"
                                rel="noopener noreferrer">
                                Patients&apos; Bill of Rights.
                            </a>
                        </p>
                        <p>
                            Persons with hearing or speech disabilities may
                            contact us via their preferred Telecommunication
                            Relay Service.
                        </p>
                        <p>
                            If you speak another language, assistance services
                            are available to you free of charge. Call{' '}
                            <a href="tel:6122733780">612-273-3780</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

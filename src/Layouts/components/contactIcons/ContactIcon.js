import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import styles from './ContactIcon.module.scss';

const cx = classNames.bind(styles);

function ContactIcon({ className }) {
    const contactIcons = [
        {
            title: 'Facebook',
            icon: <FontAwesomeIcon icon={faFacebook} />,
            href: 'https://www.facebook.com/profile.php?id=100009278891754',
        },
        {
            title: 'Twitter',
            icon: <FontAwesomeIcon icon={faTwitter} />,
            href: '/',
        },
        {
            title: 'Email',
            icon: <FontAwesomeIcon icon={faEnvelope} />,
            href: 'https://mail.google.com/mail/u/0/?pc=vi-ha-em-glb-bk#inbox',
        },
        {
            title: 'Instagram',
            icon: <FontAwesomeIcon icon={faInstagram} />,
            href: 'https://www.instagram.com/__tienhung__/',
        },
        {
            title: 'Github',
            icon: <FontAwesomeIcon icon={faGithub} />,
            href: '/',
        },
        {
            title: 'Youtube',
            icon: <FontAwesomeIcon icon={faYoutube} />,
            href: 'https://www.youtube.com/channel/UCyk8ZjYCRayWgh0c8vXyguQ',
        },
    ];
    return (
        <ul
            className={cx('header__contact', ' gird__row ', {
                [className]: className,
            })}
        >
            {contactIcons.map((contactIcon, index) => (
                <Tippy key={index} content={contactIcon.title}>
                    <li>
                        <a
                            href={contactIcon.href}
                            className={cx('header-icon-contact')}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {contactIcon.icon}
                        </a>
                    </li>
                </Tippy>
            ))}
        </ul>
    );
}
ContactIcon.propTypes = {
    className: PropTypes.string,
};
export default ContactIcon;

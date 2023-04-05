import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import NavBarItems from '../NavBarItems';
import images from '~/assets/images';
import config from '~/config';
import ContactIcon from '~/Layouts/components/contactIcons';
import { useDispatch, useSelector } from 'react-redux';
import { changeTabLogin } from '~/components/store/action';
import { getUserinfo } from '~/untils/localStorage';
import avtDefault from '~/assets/images/login/avtDefault.png';
import { Avatar } from '@mui/material';

const cx = classNames.bind(styles);
function Header() {
    const ItemBars = [
        {
            title: 'gangs',
            children: [
                {
                    title: 'Introduce',
                    to: '/',
                },
                {
                    title: 'Members',
                    to: '/',
                },
                {
                    title: 'Journeys',
                    to: '/',
                },
            ],
        },
        {
            title: ' Anime&Comic',
            children: [
                {
                    title: 'Read Comic',
                    to: config.routes.Comic,
                },
                {
                    title: 'Watch anime',
                    to: config.routes.WatchAnime,
                },
                {
                    title: 'Battles in the journey',
                    to: '/',
                },
            ],
        },
        {
            title: ' Shop',
            children: [
                {
                    title: 'Model one piece',
                    to: config.routes.Shop,
                },
                {
                    title: 'Model anime',
                    to: config.routes.Shop,
                },
                {
                    title: 'Comic',
                    to: config.routes.Shop,
                },
                {
                    title: 'keychain one piece',
                    to: config.routes.Shop,
                },
                {
                    title: 'keychain anime',
                    to: config.routes.Shop,
                },
                {
                    title: 'sticker one piece',
                    to: config.routes.Shop,
                },
                {
                    title: 'sticker anime',
                    to: config.routes.Shop,
                },
            ],
        },
        {
            title: 'more',
            children: [
                {
                    title: '  Dark Fruit',
                    to: '/',
                },
                {
                    title: 'Contact',
                    to: '/',
                },
                {
                    title: 'About us',
                    to: '/',
                },
            ],
        },
    ];
    const userInfo = getUserinfo();
    const selector = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <header className={cx('header')}>
            <div className={cx('header__nav-bar', ' gird--full-screen')}>
                <ContactIcon />
                <ul className={cx('header__main', ' gird__row')}>
                    <li>
                        <Link to="/" className={cx('header__nav-bar')}>
                            Home
                        </Link>
                    </li>
                    {ItemBars.map((ItemBar, index) => (
                        <li key={index}>
                            <NavBarItems items={ItemBar.children}>
                                <button className={cx('header__nav-bar')}>
                                    {ItemBar.title}
                                    <i>
                                        <FontAwesomeIcon icon={faAngleDown} />
                                    </i>
                                </button>
                            </NavBarItems>
                        </li>
                    ))}
                </ul>
                <div className={cx('header__market', 'gird__row')}>
                    {!userInfo ? (
                        <>
                            <Link
                                onClick={() => {
                                    dispatch(changeTabLogin('login'));
                                }}
                                className={cx('header__market--item')}
                                to={config.routes.Login}
                            >
                                Login
                            </Link>
                            <Link
                                onClick={() => {
                                    dispatch(changeTabLogin('register'));
                                }}
                                className={cx('header__market--item')}
                                to={config.routes.Login}
                            >
                                Register
                            </Link>
                            <Tippy content={'Shop'}>
                                <Link className={cx('header__market--icon')} to={config.routes.Shop}>
                                    <FontAwesomeIcon icon={faShoppingCart} />

                                    {selector.numberShop > 0 && (
                                        <span className={cx('number-shop')}>{selector.numberShop}</span>
                                    )}
                                </Link>
                            </Tippy>
                        </>
                    ) : (
                        <div></div>
                    )}

                    {userInfo ? (
                        <div style={{ minWidth: 178 }}>
                            <div className={cx('avt')}>
                                <Avatar
                                    alt="avatar"
                                    src={avtDefault}
                                    sx={{ width: 65, height: 65, position: 'relative' }}
                                />
                                <FontAwesomeIcon icon={faAngleDown} />
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>

            <div className={cx('content-header')}>
                <img className={cx('header__logo')} src={images.logo} alt="" />
                <p className={cx('contain')}>World one piece</p>
            </div>
        </header>
    );
}

export default Header;

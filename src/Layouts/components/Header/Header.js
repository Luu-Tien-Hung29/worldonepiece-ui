import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faPersonRifle,
    faRightFromBracket,
    faScrewdriverWrench,
    faShoppingCart,
    faUnlock,
    faUser,
    faUserSecret,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import NavBarItems from '../NavBarItems';
import images from '~/assets/images';
import config from '~/config';
import ContactIcon from '~/Layouts/components/contactIcons';
import { useDispatch, useSelector } from 'react-redux';
import { changeTabLogin } from '~/components/store/action';
import { destroyUser, getUserinfo } from '~/untils/localStorage';
import avtDefault from '~/assets/images/login/avtDefault.png';
import { Avatar, Box, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import { useState } from 'react';

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
    const navbarSetting = [
        {
            label: 'Profile',
            icon: <FontAwesomeIcon icon={faUser} />,
        },
        {
            label: 'Setting',
            icon: <FontAwesomeIcon icon={faScrewdriverWrench} />,
        },
        {
            label: 'Shop',
            icon: <FontAwesomeIcon icon={faShoppingCart} />,
        },
        {
            label: 'Change Password',
            icon: <FontAwesomeIcon icon={faUnlock} />,
            boder: true,
        },
        {
            label: 'Logout',
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
        },
    ];
    const userInfo = getUserinfo();
    const selector = useSelector((state) => state);
    const dispatch = useDispatch();
    const [anchorElUser, setAnchorElUser] = useState(null);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleClickItem = (data) => {
        handleCloseUserMenu();
        switch (data.toLowerCase()) {
            case 'profile':
                return;
            case 'setting':
                return;
            case 'shop':
                return;
            case 'change password':
                return;
            case 'logout':
                destroyUser();
                return;

            default:
                break;
        }
    };

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
                    ) : null}

                    {userInfo ? (
                        <div style={{ minWidth: 178 }}>
                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip
                                    placement="left"
                                    title={<div style={{ fontSize: '1.2rem' }}> Open Setting</div>}
                                >
                                    <div className={cx('avt')} onClick={handleOpenUserMenu}>
                                        <Avatar
                                            alt="avatar"
                                            src={avtDefault}
                                            sx={{ width: 65, height: 65, position: 'relative' }}
                                        />
                                        <FontAwesomeIcon icon={faAngleDown} />
                                    </div>
                                </Tooltip>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    // transformOrigin={{
                                    //     vertical: 'top',
                                    //     horizontal: 'right',
                                    // }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                    className={cx('menu-header')}
                                >
                                    {navbarSetting.map((setting, index) => (
                                        <MenuItem
                                            className={cx(`${setting?.boder ? 'boder-bottom' : ''}`, 'item-menu')}
                                            key={index}
                                            onClick={() => handleClickItem(setting.label)}
                                        >
                                            <Typography textAlign="center">
                                                {setting.icon}
                                                {setting.label}
                                            </Typography>
                                            {selector.numberShop > 0 && setting.label.toLowerCase() === 'shop' && (
                                                <span className={cx('item-shop')}>{selector.numberShop}</span>
                                            )}
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
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

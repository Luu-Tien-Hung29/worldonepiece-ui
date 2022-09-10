import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

import images from '~/assets/images';
import ContactIcon from '~/Layouts/components/contactIcons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('footer')}>
            <img className={cx('footer-img')} src={images.footer} alt="" />

            <div className={cx('footer-section', 'gird ')}>
                <div className={cx('footer-form')}>
                    <div className={cx('footer-section__head', 'row', 'l-o-2')}>
                        <div className={cx('footer__message', 'col', 'l-4')}>
                            <h5>KEEP IN TOUCH</h5>
                            <h3>one piece with us</h3>
                        </div>
                        <div className={cx('footer__head--message', 'col', 'l-o-1', 'l-5 ')}>
                            <input type="text" placeholder="Message" className={cx('message__input')} />
                            <button className={cx('footer__btn')}>Send</button>
                        </div>
                    </div>
                    <div className={cx('footer-section__content', 'row')}>
                        <div className={cx('footer-section__content--left', 'col', 'l-6 ')}>
                            <div className={cx('footer__logo')}>
                                <img src={images.logo} alt="" />
                                <p className={cx('logo__content')}>World onpiece</p>
                            </div>
                            <p>
                                Xin hãy đóng góp với chúng tôi để chúng ta có một môi trường tốt nhất.Sự đóng góp của
                                bạn là vinh dự của chúng tôi và quan trọng bạn đã đóng góp một phần xây dựng nên môi
                                trường one piece hùng mạnh ở Việt Nam.
                            </p>
                            <ContactIcon className="width36" />
                        </div>
                        <div className={cx('footer-section__content--right', 'col', 'l-6')}>
                            <div className={cx('about-us')}>
                                <h3>OUR AGENCY</h3>
                                <ul className={cx('about-iteam')}>
                                    <li>Services</li>
                                    <li>Agency</li>
                                    <li>Anime</li>
                                    <li>comic</li>
                                    <li>Payment</li>
                                </ul>
                            </div>
                            <div className={cx('about-us')}>
                                <h3>PARTNERS</h3>
                                <ul className={cx('about-iteam')}>
                                    <li>Booking</li>
                                    <li>Model</li>
                                    <li>Read comic</li>
                                </ul>
                            </div>
                            <div className={cx('about-us')}>
                                <h3>LAST MINUTE</h3>
                                <ul className={cx('about-iteam')}>
                                    <li>Model Luffy</li>
                                    <li>Model Nami</li>
                                    <li>Model enel</li>
                                    <li>Model ace</li>
                                    <li>Model Sabo</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('footer__author')}>
                    <p>the best onepiece theme</p>
                    <p>copyright mr.Hưng themes 2021</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

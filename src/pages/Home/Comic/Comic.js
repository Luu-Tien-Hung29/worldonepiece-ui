import { useEffect, useRef, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Comic.module.scss';

import BoxHeadComponent from '~/components/BoxHeadComponent';
import images from '~/assets/images';
import ButtonFoot from '../ButtonFoot';
import config from '~/config';

const cx = classNames.bind(styles);

function Comic() {
    const comicRefs = {
        h5Ref1: useRef(),
        h6Ref1: useRef(),
        pRef1: useRef(),
        h5Ref2: useRef(),
        h6Ref2: useRef(),
        pRef2: useRef(),
        h5Ref3: useRef(),
        h6Ref3: useRef(),
        pRef3: useRef(),
        h5Ref4: useRef(),
        h6Ref4: useRef(),
        pRef4: useRef(),
    };
    const itemComics = [
        {
            title: 'Đảo trên trời',
            author: 'By eiichiro oda',
            description:
                ' Skypiea (スカイピア Sukaipia) là một hòn đảo nằm bầu trời phía trên cả thiên đường. Lớp dưới cùng cách mặt biển 7000 met, lớp phía trên cách 10.000 met. Người dân ở đây mang những đôi cánh nhỏ trên lưng rất độc đáo, giống như những thiên thần vậy, mặc dù tác dụng của nó đến nay vẫn chưa được tiết lộ. những thứ không có ở Biển Xanh. Hầu hết những người ở Biển Xanh đều tin rằng Skypiea thực chất chỉ có trong huyền thoại.',
            image: images.comic28,
            titleRef: comicRefs.h5Ref1,
            authorRef: comicRefs.h6Ref1,
            descriptionRef: comicRefs.pRef1,
        },
        {
            title: 'trận chiến thượng đỉnh',
            author: 'By eiichiro oda',
            description:
                'Monkey D. Luffy khi anh cố gắng cứu anh trai Portgas D. Ace, liên quan đến cuộc chiến giữa những tên cướp biển của Thủy quân lục chiến và Râu Trắng. Tập trung vào Luffy, Jimbei và những kẻ bị kết án vượt ngục từ Impel Down khi họ xâm nhập Marineford để cứu Ace. Ở đây tập trung nhiều người mạnh hơn rất nhiều cậu,những gương mặt ở tân thế giới với sức mạnh hơn hẳn. Cuối cùng, Luffy phải quyết định xem có nên tiếp tục tập luyện hay quay trở lại Sabaody để gặp lại bạn bè của mình không.',
            image: images.comic59,
            titleRef: comicRefs.h5Ref2,
            authorRef: comicRefs.h6Ref2,
            descriptionRef: comicRefs.pRef2,
        },
        {
            title: 'đụng độ băng big mom',
            author: 'By eiichiro oda',
            description:
                'Team đụng độ với team Big Mom để giải cứu Sanji , ở đây cũng biết được gia đình Sanji-gia tộc sát thủ quyền lực Vinsmoke . Băng Luffy đã rất vất vả để chiến đấu với băng Big mom tuy nhiên khi đối mặt với Big Mom hùng mạnh trong tình thế băng Mũ rơm đã bị thương nặng, Team chỉ còn đường chạy trốn.',
            image: images.comic87,
            titleRef: comicRefs.h5Ref3,
            authorRef: comicRefs.h6Ref3,
            descriptionRef: comicRefs.pRef3,
        },
        {
            title: 'Time skip',
            author: 'By eiichiro oda',
            description:
                ' Timeskip là khoảng thời gian bị bỏ qua, những câu chuyện trong khoảng thời gian này không ai biết đến. Là giai đoạn nằm vào khoảng thời gian nhóm Mủ Rơm kết thúc trận chiến lớn nhất tại Paradise. Trong khoảng thời gian này nhóm Mủ Rơm đã luyện tập tăng thêm sức mạnh để có thể sống sót và tiếp tục hành trình tại The New World.',
            image: images.comic61,
            titleRef: comicRefs.h5Ref4,
            authorRef: comicRefs.h6Ref4,
            descriptionRef: comicRefs.pRef4,
        },
    ];
    const [showAnimation, setShowAnimation] = useState(false);
    const objectArray = Object.entries(comicRefs);
    const arrayComicRefs = [];
    objectArray.forEach(([key, value]) => {
        arrayComicRefs.push(value);
    });
    useEffect(() => {
        const handleAnimation = () => {
            if (window.scrollY > 4200 && window.scrollY < 5500) {
                arrayComicRefs.map((arrayComicRef) => (arrayComicRef.current.style.animation = 'leftIn ease 2s'));
                setShowAnimation(true);
            } else {
                arrayComicRefs.map((arrayComicRef) => (arrayComicRef.current.style.animation = null));
                setShowAnimation(false);
            }
        };
        window.addEventListener('scroll', handleAnimation);
        return () => {
            window.removeEventListener('scroll', handleAnimation);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showAnimation]);
    return (
        <div className={cx('conten__comic')}>
            <BoxHeadComponent title="Read comic" />
            <div className={cx('comic__section', ' gird ')}>
                <div className={cx('comic__section--box', 'row')}>
                    {itemComics.map((itemComic, index) => (
                        <div key={index} className={cx('comic__iteam', 'l-6', 'col ')}>
                            <div className={cx('comic__iteam--section', 'row ')}>
                                <img
                                    className={cx('comic__img', ' l-4')}
                                    src={itemComic.image}
                                    alt=""
                                    height="301.83px"
                                />
                                <div className={cx('img__description', ' l-7')}>
                                    <h5 ref={itemComic.titleRef} className={cx('comic__head')}>
                                        {itemComic.title}
                                    </h5>
                                    <h6 ref={itemComic.authorRef} className={cx('comic__author')}>
                                        {itemComic.author}
                                    </h6>
                                    <p ref={itemComic.descriptionRef}>{itemComic.description}</p>
                                    <ButtonFoot title="read Comic" className="button-comic" to={config.routes.Comic} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <ButtonFoot title="More products" className="marginTop20" />
        </div>
    );
}

export default Comic;

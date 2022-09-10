import classNames from 'classnames/bind';
import styles from './Gang.module.scss';
import { Link } from 'react-router-dom';

import BoxHeadComponent from '~/components/BoxHeadComponent';
import images from '~/assets/images';

const cx = classNames.bind(styles);
function Gang() {
    const itemMembers = [
        {
            title: 'swordsman',
            name: 'Name: Roronoa Zoro',
            images: images.zoro,
            description:
                " Roronoa Zoro (ロロノア・ゾロ?) is the swordsman of the Straw Hat Pirates, the second member of the Straw Hat Pirates. Zoro follows the 'Three Swords Schools' and is nicknamed 'The Zoro Pirate Hunter' (海賊狩りのゾロ Kaizoku Gari no Zoro?), he is the owner of three swords among the precious swords of the One world. Piece, Zoro can use two types of normal Haki. Zoro's bounty is 320,000,000Berry.",
            to: '/',
        },
        {
            title: 'Navigator',
            name: 'Name: Nami',
            images: images.nami,
            description:
                "Nami (ナミ?) is the Navigator of the Straw Hat Pirates. She is the third member of the crew and nicknamed 'The Cat Thief' (The Thief Cat), the weapon Nami wields is the Clima-Tact (天候棒 Kurima Takuto?, Weather Staff) which has the ability. weather control. Nami is currently on a bounty for 66,000,000Berry.",
            to: '/',
        },
        {
            title: 'Archer',
            name: 'Name: Usopp',
            images: images.usopp,
            description:
                "Usopp (ウソップ Usoppu?) is the sniper of the Straw Hat Pirates and the fourth member of the crew. Usopp's current nickname is 'God' (ゴッド Goddo??, God). The other identity that Usopp used in the past and had on his bounty was 'Sogeking' (そげキング Sogekingu?) with the nickname 'Sniper King' (狙撃の王様 Sogeki no Ō-sama?). Currently Usopp is offered a bounty of 200,000,000Berry.",
            to: '/',
        },
        {
            title: 'chef',
            name: 'Name: Vinsmoke Sanji',
            images: images.sanji,
            description:
                "Sanji's real name is Vinsmoke Sanji (ヴィンスモーク・サンジ Vinsumōku Sanji?) and is the 3rd Prince of Germa Kingdom in North Blue. He is nicknamed Black Foot Sanji (黒脚のサンジ Kuro Ashi no Sanji?) and has knack for fighting on foot. Sanji is a talented chef and is good at both fighting and cooking. After the Whole Cake arc, Sanji was given a hidden Black armor by his family, with the ability to invisibility. Sanji is currently wanted for 330,000,000Berry.",
            to: '/',
        },
        {
            title: 'Doctor',
            name: 'Name: Tony Tony Chopper',
            images: images.chopper,
            description:
                "Tony Tony Chopper (トニートニー・チョッパー Tonī Tonī Choppā?) is the medic of the Straw Hat Pirates, the sixth and youngest member (15 years, 17 timeskip) of the crew. Chopper nicknamed 'Cotton Candy Lover' Chopper (わたあめ大好きのチョッパー Watāme Daisuki no Choppā?), he possesses a very powerful Zoan-type Devil Fruit Hito Hito (ヒトヒトの実 Hito Hito no Mi?) But when he fights, he transforms completely differently, so Chopper's bounty is 100Berry.",
            to: '/',
        },
        {
            title: 'archeologist',
            name: 'Name: Nico Robin',
            images: images.nicoRobin,
            description:
                "Nico Robin (ニコ・ロビン Niko Robin?) is the Archaeologist of the Straw Hat Pirates and the seventh member of the Straw Hat Pirates. Robin, nicknamed 'Demon Child' (悪魔の子 Akuma no Ko?), possesses the Paramecia-type Hana Hana (ハナハナの実 Hana Hana no Mi?) Devil Fruit, with the ability to grow arms from a distance. Robin is currently on a bounty for 130,000,000Berry.",
            to: '/',
        },
        {
            title: 'ship repairman',
            name: 'Name: Franky',
            images: images.franky,
            description:
                "Franky (フランキー Furankī?) is a shipwright of the Straw Hat Pirates and the eighth member of the crew. His nickname is 'The Robot' Franky (サイボーグ フランキー Saibōgu Furankī?), he is a talented shipbuilder and not only that Franky is good in many other ways. Franky is a cyborg after self-reconstructing his body and his current body is 'something beyond human understanding'. Franky is currently offered a bounty of 94,000,000Berry.",
            to: '/',
        },
        {
            title: 'musician',
            name: 'Name: Brook',
            images: images.brook,
            description:
                "Brook (ブルック Burukku?) is the Musician of the Straw Hat Pirates and the ninth member of the crew. Brook is nicknamed 'Brook Ngan Nga' and is a talented musician who can play a variety of instruments. Brook possesses the Yomi Yomi (ヨミヨミの実 Yomi Yomi no Mi?) Devil Fruit that allows Brook to resurrect once. Brook follows the sword style and wields a sword concealed in his staff. During two years of training, Brook became a worldwide famous One Piece singer under the stage name 'Soul King' Brook. Brook is currently wanted for 83,000,000 Berry.",
            to: '/',
        },
        {
            title: 'Ship driver',
            name: 'Name: Jinbei',
            images: images.jinbe,
            description:
                "Jinbe (ジンベエ Jinbē?) is the Sailor of the Straw Hat Pirates and the tenth member of the crew. He is nicknamed 'Knight of the Sea' Jinbe (海侠のジンベエ Kaikyō no Jinbē?). He was the captain of the Sun Pirates and a former Shichibukai of the government. Jinbe is a big blue whale shark with a body as tall as Japanese Sumo and is the tallest member of the crew. Jinbe's bounty after resigning from Shichibukai is 438,000,000 Berry.",
            to: '/',
        },
    ];
    return (
        <div className={cx('conten__gangs')}>
            <BoxHeadComponent title="member of Luffy's gang" />
            <div className={cx('member--section', 'gird')}>
                <div className={cx('member__luffy', 'gird', 'l-o-2', 'row', 'l-8')}>
                    <img className={cx('img__luffy')} src={images.luffy} alt="" />
                    <div className={cx('luffy__description')}>
                        <a href="/">
                            <h4 className={cx('luffy__head')}>captain</h4>
                        </a>
                        <h5 className={cx('luffy__name')}>Name: Monkey D. Luffy</h5>
                        <p>
                            Monkey D. Luffy (モンキー･D･ルフィ Monkī Dī Rufi?) is the main protagonist of One Piece and
                            the captain of the Straw Hat Pirates, nicknamed "Straw Hat Luffy" (麦わらのルフィ Mugiwara
                            no Rufi) ?). Luffy became a rubber man after accidentally eating the Paramecia-type Gomu
                            Gomu (ゴムゴムの実 Gomu Gomu no Mi?) Devil Fruit obtained by Shanks. Luffy's dream is to
                            become the Pirate King and the one who found the treasure "One Piece". This dream as well as
                            Luffy's desire to go to the sea and become a pirate was inspired by Shanks. Luffy is then
                            sent by Grandpa Garp to Dadan - a mountain bandit and 10 years later, Luffy sets out to find
                            teammates to form his own pirate crew, Luffy's journey begins and the name "Luffy Hat Luffy"
                            Straw" gradually became famous throughout the One Piece world. After the death of his sworn
                            brother Portgas D. Ace, Luffy felt that he was still too weak. He decided to send the entire
                            crew to practice and see you at Sabaody Archipelago after 2 years to enter the New World.
                            Under the tutelage and guidance of the legendary pirate Silver Rayleigh - former vice
                            captain of the Roger Pirates, in 2 years of training Luffy was able to control Conqueror
                            Haki and master all three types of Haki as well as perfect combat skills, create more new
                            moves. Luffy has a rather humorous and sometimes goofy personality, but at the same time he
                            is a genius when it comes to fighting, with a great ability to improvise. Luffy trusts,
                            loves and respects his teammates. After the fight with Yonko Big Mom, Luffy's bounty is
                            currently 1,500,000,000Berry.
                        </p>
                    </div>
                </div>
                <div className={cx('member_rest', 'gird', 'row')}>
                    {itemMembers.map((itemMember, index) => (
                        <div key={index} className={cx('member__item', 'col', 'l-4')}>
                            <img className={cx('img__members')} src={itemMember.images} alt="" />
                            <div className={cx('members__description')}>
                                <Link to={itemMember.to}>
                                    <h4 className={cx('member__head')}>{itemMember.title}</h4>
                                </Link>
                                <h5 className={cx('luffy__name')}>{itemMember.name}</h5>
                                <p>{itemMember.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Gang;

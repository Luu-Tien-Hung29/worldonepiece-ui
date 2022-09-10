import Slider from './Slider';
import Gang from './Gang';
import Shop from './Shop';
import Comic from './Comic';

function Home() {
    return (
        <div className="content">
            <Slider />
            <Gang />
            <Shop />
            <Comic />
        </div>
    );
}

export default Home;

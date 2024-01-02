import Carousel from 'react-bootstrap/Carousel';
import './MarketingHome.css';
import LJ from '../../pics/Marketing/Letter Jam/LJcover.JPEG';
import PaxU from '../../pics/Marketing/PaxU 22/PaxUCover.jpg';
import GenCon22 from '../../pics/Marketing/Gen Con 2022/GenConCover.jpg'

export default function Marketing(){
    return(
    <body className='MarketBody'>
        <h1 className="MarketHead"> Marketing and Event Marketing Projects</h1>
        <div className='MarketHeadBox'>
            <p>Below you'll find a portfolio of the projects I worked on as the Events Marketing Lead at Czech Games Edition. You can click though to each gallary to see more images of each event as well as marketing for events or products.</p>
        </div>
        <div className='MarketItem'>
            <Carousel>
                <Carousel.Item>
                    <img className='SlideImg' src={PaxU} alt='PaxUnplugged 2022' />
                    <Carousel.Caption>
                        <h2>PaxUnplugged 2022</h2>
                        <p>PaxUnplugged 2022 was a big convention for CGE where we had the US launch for two big box games,  Deal With the Devil and Starship Captians.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='SlideImg' src={GenCon22} alt='Gen Con 2022' />
                    <Carousel.Caption>
                        <h2>Gen Con 2022</h2>
                        <p>Gen Con 2022 gallerey</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='SlideImg' src={LJ} alt='Letter Jam' />
                    <Carousel.Caption>
                        <h2>Letter Jam</h2>
                        <p>Marketing materials for Letter Jam I created or contributed to.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    </body>
    )
}
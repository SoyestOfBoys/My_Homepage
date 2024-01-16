import './MarketingHome.css';
import { Link } from "react-router-dom";
import LJ from '../../pics/Marketing/letter_jam/ljcover.jpg'
import PaxU from '../../pics/Marketing/pax22/pax22cov.jpg'
import GenCon22 from '../../pics/Marketing/gen22/gen22cov.jpg'
import Carousel from 'react-bootstrap/Carousel';

export default function Marketing(){
    return(
    <body className='MarketBody'>
        <div className='MarketBorderTop' />
        <div className='MarketBorderBottom' />
        <h1> Marketing and Event Marketing Projects</h1>
        <p>Below you'll find a portfolio of the projects I worked on as the Events Marketing Lead at Czech Games Edition. You can click though to each gallary to see more images of each event as well as marketing for events or products.</p>
        <div className='MarketItem'>
            <Carousel fade>
                <Carousel.Item>
                    <img className='SlideImg' src={PaxU} alt='PaxUnplugged 2022' />
                    <Carousel.Caption>
                        <div className='SlideTB'>
                        <h2>PaxUnplugged 2022</h2>
                        <p>PaxUnplugged 2022 was a big convention for CGE where we had the US launch for two big box games,  Deal With the Devil and Starship Captians.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Link to='/GC22'>
                    <img className='SlideImg' src={GenCon22} alt='Gen Con 2022' />
                    <Carousel.Caption>
                    <div className='SlideTB'>
                        <h2>GenCon 2022</h2>
                        <p></p>
                    </ div>
                    </Carousel.Caption></Link>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='SlideImg' src={LJ} alt='Letter Jam' />
                    <Carousel.Caption>
                        <div className='SlideTB'>
                                <h2>Letter Jam</h2>
                                <p>Marketing materials for Letter Jam I created or contributed to.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    </body>
    )
}
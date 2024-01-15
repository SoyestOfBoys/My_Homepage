import Headshot from '../../pics/Headshot.jpg'
import './Home.css'
import Nav from '../../Nav'
import Project from '../Projects/Project'
import Marketing from '../Marketing/MarketingHome'

export default function Home(){
    return(
        <body className='Home'>
            <Nav />
            <div className='Headshot'>
                <img src={Headshot} alt='Tyler Goble' />
            </div>
            <div className='About'>
                <h2>About Me:</h2>
                <p>I'm a lifelong computer nerd, and have been learning how to code since teaching myself HTML to edit my MySpace page. After spending years in the board game industy, I decided to change my carrer path to one with less travel so I could spend less time traveling and more time with my wife and daughter.</p>
                <p>I have a passion for design, both on the technical and creative side. I'm proficient in CSS, HTML, Java, React, and I'm always excited to learn more and write my next chapter...<span className='blink'>|</span></p>
            </div>
            <div className='DividerTop' />
            <Project />
            <Marketing />
        </body>
    )
}
import './Projects.css'
import llPic from '../../pics/ll.png'


export default function Project(){
    return(
        <body className='projects'>
            <div className='projectsBorderTop' />
            <div className='littleLemon'>
                <h1 className='projectTitle'>Little Lemon: Capstone Project</h1>
                <div className='lemonImg'>
                    <a href='https://www.littlelemon.tylergoble.net/'>
                        <img src={llPic} alt='Little Lemon' />
                    </a>
                    <div className='projectText'>
                        <p>I made this site as a part of a Front-End Development course I took. It's a fairly simple site with a slideshow, login page, and reservation page.</p>
                    </div>
                </div>
            </div>
        </body>
    )
}
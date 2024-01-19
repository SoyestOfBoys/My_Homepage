import './GenCon22.css'
import gen22cov from '../../../pics/gen22cov.jpg'

export default function GenCon22(){

    return(
        <body className='GC22'>
            <div className='GC22topBorder' />
            <h1>Gen Con 2022</h1>
            <p>Gen Con 2022 was a unique one because we did not have a major release at the convention to build our marketing around. The only new product we had to sell was the <a href='https://czechgames.com/en/galaxy-trucker-keep-on-trucking/' rel='noreferrer'> Galaxy Trucker: Keep on Trucking expansion</ a>. However, due to one of the other co-sponsors dropping out, this year we were one of only two major sponsors of the show, leading to us having a bigger exhibit room and more locations available to us for advertising.</p>
            <p>As we didn't have a big release, I made the call to focus our convention on increasing our name recognition. Many people know games like Codenames, Lost Ruins of Arnak, and Galaxy Trucker; but not nearly as many knew that CGE were the people behind many of their favorite games.</p>
            <p>My first step for this was securing a new advertising location for us with 3 large banners right by the main entrance and behind the very popular "Cardhalla" atraction:</p>
            <div className="GC2pic">
                <div className='GCpic1o2' >
                    <img src='https://tylergoblebucket.s3.us-west-1.amazonaws.com/Gen+Con+2022/GC22+Banners+Above+Cardhalla+1.png' alt='Banners at Gen Con 2022 entrance' />
                </div>
                <div className='GCpic1o2' >
                    <img src='https://tylergoblebucket.s3.us-west-1.amazonaws.com/Gen+Con+2022/Cardhalla+with+banners+1.png' alt='Cardhalla with CGE banners. Credit to @role_dice on Twitter' />
                </div>
            </div>
            <p>These banners featured 3 of CGE's most popular titles help build the connection between them in people's mind and increase brand awareness of CGE. </p>
            <p>Gen Con also makes use of the field of Lucas Oil Stadium. I worked with Gen Con to open up the Jumbo-Tron for exhibitors to use for advertising:</p>
            <div className="GC1pic">
                <img src={gen22cov} alt='The Jumbotron at the Luc' />
            </ div>
            <p>The final new initiative we ran was a scanvenger hunt, were attendees could find clues hidden around the convention to help them solve puzzels in a web app with the chance to win games once completed. At registration every attendee receives a bag to put games and swag in, and we used these to advertise the hunt:</p>
            <div className="GC1pic">
                <img src='https://tylergoblebucket.s3.us-west-1.amazonaws.com/Gen+Con+2022/ARgcBag+1.png' alt='Scavenger hunt 2022 bags' />
            </div>
            <p>We also focused on our two upcoming big-box releases "Starship Captains" and "Deal With the Devil". I trained our demo staff to run previews for both titles which recieved a warm reception at the show, including Deal With the Devil winning the Gaming Trend 'Best of Show' award. </p>
            <div className="GC2pic">
                <div className='GCpic1o2' >
                    <img src='https://tylergoblebucket.s3.us-west-1.amazonaws.com/Gen+Con+2022/DWD+and+award.png' alt='Deal With the Devil and award' />
                </ div>
                <div className='GCpic1o2' >
                    <img src='https://tylergoblebucket.s3.us-west-1.amazonaws.com/Gen+Con+2022/SC+in+media+room.png' alt='Starship Captains being shown in our media room.' />
                </ div>
            </ div>
            <p>Along side these efforts we featured an improved Giant Galaxy Trucker to promote the expansion, as well as improvements to Giant Pictomania to further my Giant Games project I introduced the prior year</p>
            <div className="GC2pic">
                <div className='GCpic1o2' >
                    <img src='https://tylergoblebucket.s3.us-west-1.amazonaws.com/Gen+Con+2022/Giant+GT+die+roll.png' alt='Giant GT' />
                </ div>
                <div className='GCpic1o2' >
                    <img src='https://tylergoblebucket.s3.us-west-1.amazonaws.com/Gen+Con+2022/Giant+PM+reveal.png' alt='Giant PM' />
                </ div>
            </div>
        </body>
    )
}
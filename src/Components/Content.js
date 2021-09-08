import React from 'react'
import '../styles/content.css'

function Content() {
    return (
        <div className='content'>
            <div className="search">
                <h1 className='reaction'>No reactions to your reddit posts?</h1>
                <p className='great'>Great timing, great resutls! Find the best time to post on your subreddit.</p>
                <button className='best'>SHOW ME THE BEST TIME</button>
                <p className='subreddit'>r/javascript</p>
            </div>
            <div className="table">
                <div className="time"></div>
                <div className="col"></div>
                <div className="days">
                    <ul>
                       <li className='day-1'><hr/></li>
                       <li><hr/></li>
                       <li><hr/></li>
                       <li><hr/></li>
                       <li><hr/></li>
                       <li><hr/></li>
                       <li><hr/></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Content

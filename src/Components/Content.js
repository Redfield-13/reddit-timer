import React,{useEffect} from 'react'
import '../styles/content.css'
import {Link} from 'react-router-dom'
import  Axios from 'axios'

function Content() {
    const fetchposts = async ()=>{
        console.log('click')
        // var subreddit = document.getElementById('subreddit').value
        var link = 'https://www.reddit.com/r/javascript/top.json?limit=23&t=all&after='
        var posts = []
        var after = ''
        for (let index = 0; index < 20; index++) {
            await Axios.get(`${link}${after}`).then(res=>{
                console.log(index)
                after = res.data.data.after
                posts = [...posts,res.data.data.children]
            })
            
        }
        // console.log(posts[0][0].data.created_utc)
        var days = [[],[],[],[],[],[],[]]
        console.log(posts)
        for (let index = 0; index < posts.length; index++) {
            for(let i = 0; i < (posts[0].length)-2; i++ ){
                console.log('i : '+i)
                console.log('index : '+index)
                var timestamp = posts[index][i].data.created_utc
                var date = new Date(timestamp*1000)
                days[date.getDay()].push(timestamp)

            }
            
        }
        var spans = document.getElementsByClassName('spn')
        for(let i =0 ; i<spans.length;i++){
            // spans[i].classList.add('level-4')
        }
        for (let index = 0; index < days.length; index++) {
            console.log('days length : '+days[index].length)
            for(let i = 0; i <days[index].length-2;i++){
                var unix_t = days[index][i]*1000
                var d = new Date(unix_t)
                var hours = d.getHours()               
                console.log('i:'+i)
                console.log('iterate:'+((index*24)+hours-1))
                var mmj = parseInt( spans[((index*24)+hours)].childNodes[0].innerHTML)+1
                spans[((index*24)+hours)].childNodes[0].innerHTML =mmj
                
                // console.log(mmj)
            }
            
        }

        for (let index = 0; index < spans.length; index++) {
            var compare = parseInt(spans[index].childNodes[0].innerHTML)
            console.log('compare : '+compare)
            console.log('index:'+index)
            if (compare == 0) {
                // alert('level-1')
                spans[index].classList.add('level-1')
            }
            if (compare > 0 && compare < 4) {
                // alert('level-2')
                spans[index].classList.add('level-2')
                
            }
            if (compare>3 && compare < 6) {
                // alert('level-3')
                spans[index].classList.add('level-3')
                
            }
            if (compare>5 && compare < 10) {
                // alert('level-4')
                spans[index].classList.add('level-4')
                
            }
            if (compare>9) {
                // alert('level-5')
                spans[index].classList.add('level-5')
                
            }
        }
    }

    fetchposts()

    useEffect(()=>{
        
    })

    return (
        <div className='content'>
            <div className="search">
                <h1 className='reaction'>No reactions to your reddit posts?</h1>
                <p className='great'>Great timing, great resutls! Find the best time to post on your subreddit.</p>
                <Link to='/search'>
                <button className='best'>SHOW ME THE BEST TIME</button>
                </Link>
                
                <p className='subreddit'>r/javascript</p>
            </div>
            <div className="table">
                <div className="time">
                    <ul className='hours'><li>12:00am</li><li>2:00am</li><li>4:00am</li><li>6:00am</li><li>8:00am</li><li>10:00am</li><li>12:00pm</li><li>2:00pm</li><li>4:00pm</li><li>6:00pm</li><li>8:00pm</li><li>10:00pm</li></ul>
                </div>
                <div className="col">
                    <div className="sqr">
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                    </div>
                    <div className="sqr">
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                    </div>
                    <div className="sqr">
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                    </div>
                    <div className="sqr">
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                    </div>
                    <div className="sqr">
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                    </div>
                    <div className="sqr">
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                    </div>
                    <div className="sqr">
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                       <div className="spn"><p className='spn-textt'>1</p></div>
                    </div>
                </div>
                <div className="days">
                   <div className="says"><p>Sunday</p></div>
                   <div className="says"><p>Monday</p></div>
                   <div className="says"><p>Tuesday</p></div>
                   <div className="says"><p>Wednesday</p></div>
                   <div className="says"><p>Thursdays</p></div>
                   <div className="says"><p>Friday</p></div>
                   <div className="says"><p>Saturday</p></div>
                </div>
            </div>
            <div className="posts">
                <div className="text-block-1">
                    <h1 className='how-it'>How it works</h1>
                    <p className='dot'>We find the 500 top posts from the past year for a subreddit.</p>
                    <p className='dot'>The data is visualized in a heatmap grouped by weekday and hour of the day.</p>
                    <p className='dot'>See immediatley when to submit your reddit post.</p>
                </div>
                <div className="text-block-2">
                    <h1 className='about-it'>About</h1>
                    <div className="text-table">This app was created during a course on <strong>profy.dev</strong>  with the goal to implement a pixel-perfect real-world application with professional workflows and tools like Kanban, Asana, Zeplin, GitHub, pull requests and code reviews. <strong>Click here for more information.</strong></div>
                </div>
            </div>
        </div>
    )
}

export default Content

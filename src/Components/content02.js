
import '../styles/content02.css'
import React, {useEffect,useState} from 'react'
import  Axios from 'axios'
import Logo from '../images/signsgin.png'

function Content02() {
    const [remain,setRemain] = useState(20)
    const [loading,setLoading] = useState(true)
    const fetchposts = async ()=>{
        document.getElementById('search-02').style.marginBottom = 0
        console.log('serach started....')
        setLoading(true)
        setRemain(20)
        document.getElementById('load').style.display = 'block'
        var spans = document.getElementsByClassName('spn')
        for(let i =0 ; i<spans.length;i++){
            spans[i].childNodes[0].innerHTML=0
        }
        console.log('click')
        var subreddit = document.getElementById('subreddit').value
        var link = 'https://www.reddit.com/r/'+subreddit+'/top.json?limit=23&t=all&after='
        var posts = []
        var after = ''
        for (let index = 0; index < 20; index++) {
            await Axios.get(`${link}${after}`).then(res=>{
                console.log(index)
                setRemain(20-(index+1))
                after = res.data.data.after
                posts = [...posts,res.data.data.children]
            })
            
        }
        // setLoading(false)
        
        console.log(posts)
        var days = [[],[],[],[],[],[],[]]
        console.log(posts)
        for (let index = 0; index < posts.length; index++) {
            setLoading(false)
            for(let i = 0; i < (posts[0].length)-2; i++ ){
                console.log('i : '+i)
                console.log('index : '+index)
                var timestamp = posts[index][i].data.created_utc
                var date = new Date(timestamp*1000)
                days[date.getDay()].push(timestamp)

            }
            
        }
        for(let i =0 ; i<spans.length;i++){
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
                
            }
            
        }

        for (let index = 0; index < spans.length; index++) {
            var compare = parseInt(spans[index].childNodes[0].innerHTML)
            console.log('compare : '+compare)
            console.log('index:'+index)
            if (compare == 0) {
                spans[index].classList.add('level-1')
            }
            if (compare > 0 && compare < 4) {
                spans[index].classList.add('level-2')
                
            }
            if (compare>3 && compare < 6) {
                spans[index].classList.add('level-3')
                
            }
            if (compare>5 && compare < 10) {
                spans[index].classList.add('level-4')
                
            }
            if (compare>9) {
                spans[index].classList.add('level-5')
                
            }
        }
        var tops = document.getElementsByClassName('top')
            console.log(tops[0].childNodes[0].childNodes[0].innerHTML)
            for (let index = 1; index < 10; index++) {
                
                tops[0].childNodes[index].childNodes[0].innerHTML = posts[0][index].data.title
                var dat = new Date((posts[0][index].data.created_utc)*1000)
                tops[0].childNodes[index].childNodes[1].innerHTML = dat.getHours() + ':'+dat.getMinutes()+':'+dat.getSeconds()
                tops[0].childNodes[index].childNodes[2].innerHTML = posts[0][index].data.score
                tops[0].childNodes[index].childNodes[3].innerHTML = posts[0][index].data.num_comments
                tops[0].childNodes[index].childNodes[4].innerHTML = posts[0][index].data.author
             
                
            }
       
    }
    
    useEffect(()=>{
        var spans = document.getElementsByClassName('spn')
        for(let i =0 ; i<spans.length;i++){
            spans[i].childNodes[0].innerHTML=0
        }
    })

    
    return (
        <div className='content-02'>
            <div id='search-02' className="search-02">
                <h1 className='reaction-02'>Find the best time for a subreddit</h1>
                <p className='input'>r/ </p><input id='subreddit' type="text"/>
                <button className='best-02' onClick={fetchposts}>Search</button>
            </div>
            {loading?console.log('kk'):document.getElementById('search-02').style.marginBottom =''}
            <h1 id='load'>{loading?<div>
                <p>loading....wait for : {remain}</p>
                <div className='loader'>
            
            <img className='load' src={Logo} alt=""/>
             </div>
            </div>:<h2></h2>}</h1>
            
            <div className="table">
                <div className="time">
                    <ul className='hours'><li>12:00am</li><li>2:00am</li><li>4:00am</li><li>6:00am</li><li>8:00am</li><li>10:00am</li><li>12:00pm</li><li>2:00pm</li><li>4:00pm</li><li>6:00pm</li><li>8:00pm</li><li>10:00pm</li></ul>
                </div>
                <div className="col">
                    <div className="sqr">
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                    </div>
                    <div className="sqr">
                    <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                    </div>
                    <div className="sqr">
                    <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                    </div>
                    <div className="sqr">
                    <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                    </div>
                    <div className="sqr">
                    <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                    </div>
                    <div className="sqr">
                    <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                    </div>
                    <div className="sqr">
                    <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
                       <div className="spn"><p className='spn-text'>1</p></div>
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
            <div className="posts-02">
                <h1 className='reaction-02 pst'>Posts</h1>
                <div className="top">
                    <div className="row-1">
                        <span className='col-1'>Title</span>
                        <span className='col-2'>Time Posted</span>
                        <span className='col-3'>Score</span>
                        <span className='col-2'>Comments</span>
                        <span className='col-2'>Author</span>
                    </div>
                    <div className="row-2">
                    <span className='col-1'></span>
                        <span className='col-2'></span>
                        <span className='col-3'></span>
                        <span className='col-2'></span>
                        <span className='col-2'></span>
                    </div>
                    <div className="row-1">
                    <span className='col-1'></span>
                        <span className='col-2'></span>
                        <span className='col-3'></span>
                        <span className='col-2'></span>
                        <span className='col-2'></span>
                    </div>
                    <div className="row-2">
                    <span className='col-1'></span>
                        <span className='col-2'></span>
                        <span className='col-3'></span>
                        <span className='col-2'></span>
                        <span className='col-2'></span>
                    </div>
                    <div className="row-1">
                    <span className='col-1'></span>
                        <span className='col-2'></span>
                        <span className='col-3'></span>
                        <span className='col-2'></span>
                        <span className='col-2'></span>
                    </div>
                    <div className="row-2">
                    <span className='col-1'></span>
                        <span className='col-2'></span>
                        <span className='col-3'></span>
                        <span className='col-2'></span>
                        <span className='col-2'></span>
                    </div>
                    <div className="row-1">
                    <span className='col-1'></span>
                        <span className='col-2'></span>
                        <span className='col-3'></span>
                        <span className='col-2'></span>
                        <span className='col-2'></span>
                    </div>
                    <div className="row-2">
                    <span className='col-1'></span>
                        <span className='col-2'></span>
                        <span className='col-3'></span>
                        <span className='col-2'></span>
                        <span className='col-2'></span>
                    </div>
                    <div className="row-1">
                    <span className='col-1'></span>
                        <span className='col-2'></span>
                        <span className='col-3'></span>
                        <span className='col-2'></span>
                        <span className='col-2'></span>
                    </div>
                    <div className="row-2">
                    <span className='col-1'></span>
                        <span className='col-2'></span>
                        <span className='col-3'></span>
                        <span className='col-2'></span>
                        <span className='col-2'></span>
                    </div>
                </div>
            </div>
        </div>
    )

    
}

export default Content02
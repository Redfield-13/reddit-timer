import React, {useEffect} from 'react'
import Header from './Header'
import Content from './content02'
import Footer from './footer'
// import  Axios from 'axios'

function SearchPage() {

    // const fetchposts = async ()=>{
    //     var link = 'https://www.reddit.com/r/nosleep.json?limit=23&after='
    //     var posts = []
    //     var after = ''
    //     for (let index = 0; index < 20; index++) {
    //         await Axios.get(`${link}${after}`).then(res=>{
    //             console.log(index)
    //             after = res.data.data.after
    //             posts = [...posts,res.data.data.children]
    //         })
            
    //     }
    //     console.log(posts)
    // }

    // fetchposts()
   

useEffect(()=>{
    // var posts = []
    // var after = ''
    // var link = 'https://www.reddit.com/r/nosleep.json?limit=23&after='+after
    // fetch(link).then(function(res){
    //     return res.json()
    // }).then(function(data){
    //     console.log(data.data.children[0].data.author_fullname)
    //     // console.log(data.data.after)
    //     after = data.data.after
    //     link = link +after
    //     console.log(link)
    //     fetch(link).then(function(res){
    //         return res.json()
    //     }).then(function(data){
    //         console.log(data.data.children[0].data.author_fullname)
    //     })
    // })
    // for (let index = 0; index < 20; index++) {
    //     console.log(link)
    //     fetch(link).then(function(res){
    //         return res.json()
    //     }).then(function(data){
    //         console.log(data.data.after)
    //         posts = [...posts,...data.data.children]
    //         // console.log(posts)
    //         // console.log(index)
    //         after = data.data.after
    //         // link = link + after
    //         // console.log(link)
    //     })
        
        
    // }

},[])
    
   

    return (
        <div>
            <Header></Header>
            <Content></Content>  
            <Footer></Footer>          
        </div>
    )
}

export default SearchPage

import { useEffect, useState } from 'react'
import './friends.css'
import Friend from './friend'
export default function Friends(){
    const [friends,setFriend]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setFriend(data))
    },[])
        return (
        <div className="box">
        <h2>Friends: {friends.length}</h2>
        {
            friends.map(friend=><Friend friend={friend}></Friend>)
        }
        </div>
    )
}
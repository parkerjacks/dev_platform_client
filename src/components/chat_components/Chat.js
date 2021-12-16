import { Component } from "react";
import Title from './Title'
import ChatFeed from "./Feed";
import {NavLink} from 'react-router-dom'
class Chat extends Component {
    constructor(){
        super()
        this.state = {
            currentUser:localStorage.getItem('currentUser'),
            otherUser:localStorage.getItem('otherUser'),
            messages:''
        }
    }

    componentDidMount = () =>{
        console.log('we are going to find this chat')
        console.log(this.state.currentUser,this.state.otherUser)
        fetch(`http://localhost:3001/chat/${this.state.currentUser}/${this.state.otherUser}`)
        .then(response => response.json())
        .then(data =>{
            console.log(data.message)
        })
    }


    render() {

        return (

            <div>

               <Title/> 
                <ChatFeed/>
                <NavLink to="/profile">Back to Profile</NavLink>
            </div>
        )


    }
}

export default Chat;
import { Component } from "react";
import Title from './Title'
import ChatFeed from "./Feed";
class Chat extends Component {



    render() {

        return (

            <div>

               <Title/> 
                <ChatFeed/>

            </div>
        )


    }
}

export default Chat;
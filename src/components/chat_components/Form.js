import { Component } from "react";


class Form extends Component {
    _sendMessage = (e) => { 
        e.preventDefault()

    }
    render() {
        return (
            <div>
                <form> 
                    <input type="text" name="message" id="message"/> 
                    <button type="submit">send </button>
                </form>
            </div>
        )
    }
}

export default Form;
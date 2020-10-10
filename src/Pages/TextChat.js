import React, { Component } from 'react';
import './../Css/TextChat.css';

class TextChat extends Component {
    render() {
        return (
            <React.Fragment>
                <div id='bodybox'>
                    <div id='chatborder'>
                        <p id="chatlog7" class="chatlog">&nbsp;</p>
                        <p id="chatlog6" class="chatlog">&nbsp;</p>
                        <p id="chatlog5" class="chatlog">&nbsp;</p>
                        <p id="chatlog4" class="chatlog">&nbsp;</p>
                        <p id="chatlog3" class="chatlog">&nbsp;</p>
                        <p id="chatlog2" class="chatlog">&nbsp;</p>
                        <p id="chatlog1" class="chatlog">&nbsp;</p>
                        <input type="text" name="chat" id="chatbox" placeholder="Hi there! Type here to talk to me." onfocus="placeHolder()" />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default TextChat;
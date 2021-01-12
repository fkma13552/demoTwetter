import React, {useState} from 'react';
import './TweetAddForm.css';


function TweetAddForm({addTweet}) {

    const [text, setText] = useState('');

    function inputValueChanged(e) {
        const text = setText(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        addTweet(text);
        setText('');
    }
    return(
        <form action="" className="bottom-panel d-flex" onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="О чем вы думаете сейчас?"
                className="form-control new_post_label"
                onChange={inputValueChanged}
                value={text}
            />
            <button type="submit" className="btn btn-outline-secondary">
                Добавить
            </button>
        </form>
    )
}

export default TweetAddForm
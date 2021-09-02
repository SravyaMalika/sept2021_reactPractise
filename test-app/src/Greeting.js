import {useState} from 'react';

const Greeting = () => {
    const [changedText, setChangedText] = useState(false);

    const changeTextHandler = () => {
        setChangedText(true);
    }

    return (
    <div>
        <div>Hello World</div>
        {!changedText && <p>hi</p>}
        {changedText && <p>changed!</p>}
        <button onClick = {changeTextHandler}>Change text!</button>
    </div>


    );
    
}

export default Greeting;
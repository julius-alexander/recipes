import { useState } from 'react';

const Home = () => {
    // let name = 'mario';
    const [name, setName] = useState('Mario');
    const [age, setAge] = useState(30);

    const handleClick = () => {
        if (name === 'Mario') {
            setName('Luigi');
            setAge(25);
        }
        else {
            setName('Mario');
            setAge(30);
        }
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={ handleClick }>Click Me</button>
        </div>
    );
}
 
export default Home;

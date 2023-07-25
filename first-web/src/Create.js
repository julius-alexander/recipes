import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const sendSubmit = () => {
        navigate('/');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);
        
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false);
            sendSubmit();
        })
    };

    return (
        <div className="create">
            <h2>Add a New Recipe</h2>
            <form onSubmit={ handleSubmit }>
                <label>Recipe title:</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
                <label>Recipe body:</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Recipe author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                    <option value="Whitebeard">Whitebeard</option>
                </select>
                { !isPending && <button>Add Recipe</button>}
                { isPending && <button disabled>Adding Recipe...</button>}
            </form>
        </div>
    );
} 
 
export default Create;

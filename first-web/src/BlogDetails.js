import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);

    const navigate = useNavigate();

    const sendClick = () => {
        navigate('/');
    }

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            sendClick();
        })
    };

    const handleSave = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            sendClick();
        })
    };

    return (
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button className="delete" onClick={handleDelete}>Delete</button>
                    <button className="save" onClick={handleSave}>Save</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;

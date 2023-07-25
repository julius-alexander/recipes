import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={ blogs } title="Featured Recipes" />}
            {blogs && <BlogList blogs={ blogs } title="All Recipes" />}
        </div>
    );
}
 
export default Home;

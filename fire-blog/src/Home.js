
import BlogList from './BlogList';
import React from 'react'
import useFetch from './useFetch';

 

const Home = () => {
   /* const [name1,setName] = useState('mario')
    const [age,setAge] = useState(25)
    const handleClick = () =>{
        setName('kelvin')
        setAge(30)
    }*/
   // const handleClick = (e) => {
    //    console.log('helo,ninjas')
    //}

    //const handleClickAgain = (name) => {
    //    console.log('helo ' + name)

    //}

   /* const [blogs,setBlogs] = useState([
        {title:'My new website',body:'lorem ipsum...',author:'kojo',id:1},
        {title:'Welcome party',body:'lorem ipsum...',author:'ama',id:2},
        {title:'My new hobby',body:'lorem ipsum...',author:'joe',id:3}
    ]);*/
   /* The above code is fetching data from the API and displaying it on the browser. */
    /*const [blogs,setBlogs] = useState(null);
    const [isPending,setIsPending] = useState(true)
    const[error,setError] = useState(null)*/
    //const [name2,setName] = useState('kojo')
    /*
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }
    */
    /*
    useEffect(() => {
        console.log('use effect ran')
        console.log(name2)
        //console.log(blogs) //accessing the state
    },[name2])
    */

   
   
   /* Fetching data from the API and displaying it on the browser. */
     
   const {data:blogs,isPending,error} = useFetch('  http://localhost:8000/blogs')
   
    return (  
        <div className="home">
           {/* <h2>Homepage</h2>
            <p className='name'>{name1} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
            <br /> */} 
            
            {/*<button onClick={(e) => handleClickAgain('kofi',e)}>Click me again</button>*/}

          {/* <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
           <button onClick={() => setName('emma')}>Change name</button>
           <p>{name2}</p>
           <BlogList blogs={blogs.filter((blog) => blog.author === 'ama')} title="Ama's Blog"/> */} 
          {error && <div>{error}</div>}
          {isPending && <div>Loading.....</div>}
          {blogs && <BlogList blogs={blogs} title="All Blogs" />} 
        </div>
    );
}
 
export default Home;
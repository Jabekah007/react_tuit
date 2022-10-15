import React from 'react'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'
const Create  = () => {
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [author,setAuthor] = useState('chris')
    const [isPending,setIsPending] = useState(false)
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault(); //this prevent the page from refreshing when the button is clicked
        const blog = {title,body,author};
        setIsPending(true)
        //how to create a post request i react?

        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            //history.go(1)
            history.push('/') //redirect to the homepage
        })
    }
    return ( 
        <div className='create'>
           <form onSubmit={handleSubmit}>
            <label>Blog title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/>
            <label>Blog body</label>
            <textarea value={body} onChange={(e) => setBody(e.target.value)} required>

            </textarea>
            <label>Blog author</label>
            <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value="chris" >Chris</option>
            
            <option value="Ato">Ato</option>
            </select>

            {!isPending && <button>Add Blog</button>}
            {isPending && <button>Add Blog....</button>}
           </form>
           
           <br/>
           <h3>{title}</h3>
           <br/>
           <p>{body}</p>
           <p>{author}</p>
                                                    
        </div>
        

    );
    }


 
 export default Create ;


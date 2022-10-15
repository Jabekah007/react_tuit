import { useState,useEffect } from "react";


/**
 * It returns an object with three properties: data, isPending, and error. 
 * 
 * The data property is the data that is returned from the fetch request. 
 * 
 * The isPending property is a boolean that is true when the fetch request is pending and false when
 * the fetch request is complete. 
 * 
 * The error property is the error message that is returned from the fetch request. 
 * 
 * The useFetch function takes a url as an argument. 
 * 
 * The useFetch function uses the useState hook to create three state variables: data, isPending, and
 * error. 
 * 
 * The useFetch function uses the useEffect hook to make a fetch request to the url that is passed to
 * the useFetch function. 
 * 
 * The useEffect hook takes a function as an argument. 
 * 
 * The function that is passed to the
 * @param url - The URL to fetch.
 * @returns An object with three properties: data, isPending, and error.
 */
const useFetch = (url) =>{
    const [data,setData] = useState(null);
    const [isPending,setIsPending] = useState(true)
    const[error,setError] = useState(null)
    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout(() => {
         fetch(url,{signal:abortCont.signal})
         .then(res => {
             if(!res.ok){
                 throw Error('could not fetch the data for that resource')
             }
             
          return res.json();
         })
         .then(data => {
             setData(data);
             setIsPending(false)
             setError(null)
            })
         .catch(err => {
            if(err.name ==='AbortError'){
                console.log('fetch aborted')
            } else{
                setIsPending(false);
                setError(err.message);
            }
             
           
         })
 
        },1000)
        return () => abortCont.abort();
     },[url]);

     return {data,isPending,error}
 
}

export default useFetch;
    

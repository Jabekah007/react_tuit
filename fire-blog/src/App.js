import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./create"
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";
function App() {
  //const title = 'Welcome to the new blog'
  //const likes = 50
  /* Note:bolean and object cannot be displayed as component */
  //const person = {name:'yohsi',age:'30'}
  //const link = "http://www.google.com"
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
           <Home />
          </Route>

          <Route path="/create">
           <Create />
          </Route>

          <Route path="/blogs/:id">
           <BlogDetails />
          </Route>

          <Route path="*">
           <NotFound />
          </Route>
        
        {/*<h1>{title}</h1>
      <p>Liked {likes}</p>
      <p>{10}</p>
      <p>{"hello,John"}</p>
      <p>{[1,2,3,4,5]}</p>
      <p>{Math.random() * 10}</p>
      {/*<p>{person}</p>*/}
        {/*<a href={link}>Google site</a>*/}
     
        </Switch>
        </div>
    </div>
    </Router>
   
  );
}

export default App;

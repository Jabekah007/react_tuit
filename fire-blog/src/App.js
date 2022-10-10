

import Navbar from './Navbar'
import Home from './Home'
function App() {
  //const title = 'Welcome to the new blog'
  //const likes = 50
  /* Note:bolean and object cannot be displayed as component */
  //const person = {name:'yohsi',age:'30'}
  //const link = "http://www.google.com"
  return (
    <div className="App">
      <Navbar />
    <div className="content">
      <Home />
      {/*<h1>{title}</h1>
      <p>Liked {likes}</p>
      <p>{10}</p>
      <p>{"hello,John"}</p>
      <p>{[1,2,3,4,5]}</p>
      <p>{Math.random() * 10}</p>
      {/*<p>{person}</p>*/}
      {/*<a href={link}>Google site</a>*/}
    </div>
    </div>
  );
}

export default App;

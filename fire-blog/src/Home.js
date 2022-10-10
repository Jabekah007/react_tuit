const Home = () => {
    const handleClick = (e) => {
        console.log('helo,ninjas')
    }

    const handleClickAgain = (name) => {
        console.log('helo ' + name)

    }
    return (  
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('kofi',e)}>Click me again</button>
        </div>
    );
}
 
export default Home;
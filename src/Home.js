const Home = () => {

    let name = 'Bob';

    const handleClick = () => {
        console.log('hello, ninjas');
        console.log(name);
    }

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p>{ name }</p>
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;
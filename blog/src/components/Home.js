import {useState} from 'react';  

const Home = () => {

  // let name = 'Isha'; //not reactive

  const [name, setName] = useState('Isha');

  const handleClick = () => {
    setName('tom')
  };


  return (
    <div className="home">
      <h2>Homepage</h2> 
      <p>{name}</p>
      <button onClick={handleClick}>Click Me!</button>
      
    </div>
  );
};

export default Home;

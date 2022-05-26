import {useState} from "react"
import Card from "./components/Card";

function App() {
  const [images, setImages] = useState([
    {url: "http://source.unsplash.com/random/1" },
    {url: "http://source.unsplash.com/random/2" },
    {url: "http://source.unsplash.com/random/3" },    
    {url: "http://source.unsplash.com/random/4" },
    {url: "http://source.unsplash.com/random/5" },
    {url: "http://source.unsplash.com/random/6" },
  ]);


  const getNewImages = () => {
      //punkterna säger till react att inte skriva över gammalt värde, behålla images och lägga till nytt. 
    setImages([...images, {
      url: `http://source.unsplash.com/random/${Math.floor(Math.random() * 100)}`
    }])
  }

  const removeImage = () => {
    setImages(images.slice(0, -1))
  }


  return ( 
  <section className="hero">
    <div className="cardContainer">
     <Card images={images} />
    </div>
    <div className="btnContainer">
      <button onClick={getNewImages}>Add</button>
      <button onClick={removeImage}>Remove</button>

    </div>
  </section>
  )
}

export default App;


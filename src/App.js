import Carousel, { CarouselItem } from './Carousel';
import Articles from './Articles';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='category'>
        <h1 id='category-latest'>LATEST</h1>
        <Carousel>
          <CarouselItem>
            <Articles index={0}/>
          </CarouselItem>

          <CarouselItem>
            <Articles index={1}/>
          </CarouselItem>

          <CarouselItem>
            <Articles index={2}/>
          </CarouselItem>
          
        </Carousel>
      </div>
    </div>
  );
}

export default App;

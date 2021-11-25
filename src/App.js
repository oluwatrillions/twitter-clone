import './App.css';
import Header from './Components/Header'
import Content from './Components/Content'
import Trending from './Components/Trending'

function App() {
  return (
    <div className='container'>
      <Header/>
      <Content />
      <Trending/>
    </div>
  );
}

export default App;

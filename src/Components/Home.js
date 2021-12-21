import Content from './Content'
import Trending from './Trending'
import './Home.css'
import Header from './Header';

function Home() {
  return (
    <div className='container'>
      <Header/>
      <Content />
      <Trending />
    </div>
  );
}

export default Home;
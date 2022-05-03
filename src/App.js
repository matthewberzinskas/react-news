import './App.css';
import NewsFeed from './components/NewsFeed';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App bg-dark min-vh-100">
      <div className="container border p-2 bg-light">
        <Navbar/>
        <div className="main border p-2">
        <NewsFeed/>
        </div>
      </div>
    </div>
  );
}

export default App;
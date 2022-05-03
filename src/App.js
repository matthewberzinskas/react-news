import './App.css';
import NewsFeed from './components/NewsFeed';

function App() {
  return (
    <div classname="App">
      <div className="container border p-2">
        <header className="text-center p-2 border">
          React News
        </header>
        <div className="main border p-2">
        <NewsFeed/>
        </div>
      </div>
    </div>
  );
}

export default App;
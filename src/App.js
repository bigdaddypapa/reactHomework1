
import './App.css';
import Dashboard from './components/Dashboard';
import Reviews from './components/Reviews';
import AverageRating from './components/AverageRating';
import SentimentAnalysis from'./components/SentimentAnalysis';
import WebsiteVisitors from './components/WebsiteVisitors';

function App() {

  return (
    
    <div className="container">
      <Dashboard />
      <Reviews />
      <AverageRating />
      <SentimentAnalysis />
      <WebsiteVisitors />
      
    </div>
  )

}
  

export default App;

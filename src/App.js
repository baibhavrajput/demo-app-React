import './App.css';
import ProfileCard from './ProfileCard';

function App() {
  return (
    <div className="App">
      <ProfileCard title="Alexa" handle="alexa"></ProfileCard>
      <ProfileCard title="Cortana" handle="cortana"></ProfileCard>
      <ProfileCard title="Siri" handle="siri"></ProfileCard>
    </div>
  );
}

export default App;

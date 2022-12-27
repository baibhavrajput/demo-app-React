import "./App.css";
import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div className="App">

      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard title="Alexa" handle="@alexa" image={AlexaImage}/>
            </div>

            <div className="column is-4">
              <ProfileCard title="Cortana" handle="@cortana" image={CortanaImage}/>
            </div>

            <div className="column is-4">
              <ProfileCard title="Siri" handle="@siri" image={SiriImage}/>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;

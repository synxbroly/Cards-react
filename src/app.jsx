import "bulma/css/bulma.css";
import alexa from "./alexa.png";
import siri from "./siri.png";
import cortana from "./cortana.png";
import ProfileCard from "./components";

function App() {
  return (
    <div>
      <section class="hero is-primary">
        <div class="hero-body">
          <p class="title">Personal Assistants</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard title="Alexa" handle="Alexa@alexa" image={alexa} />
            </div>
            <div className="column is-3">
              <ProfileCard
                title="Cortana"
                handle="Cortana@cortana"
                image={cortana}
              />
            </div>
            <div className="column is-3">
              <ProfileCard title="Siri" handle="Siri@siri" image={siri} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default App;

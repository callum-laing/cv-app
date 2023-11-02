import "./App.css";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import ExperienceForm from "./components/Experience";

function App() {
  return (
    <>
      <main>
        <section>
          <GeneralInfo />
        </section>
        <section>
          <Education />
        </section>
        <section>
          <ExperienceForm />
        </section>
        <section>
          <p>Preview</p>
        </section>
      </main>
    </>
  );
}

export default App;

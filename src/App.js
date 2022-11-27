import logo from './logo.svg';
import './App.css';
import MyComponent from "./MyComponent";

function on(event, handler) {
  return (ctx) => {
    ctx.emitter.on(event, handler);
  }
}

function once(event, handler) {
  return (ctx) => {
    ctx.emitter.on(event, handler);
  }
}

var cb1 = () => console.log("cb1");
var cb2 = () => console.log("cb2");

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyComponent visitors={[
          on('click', cb1),
          once('submit', cb2),
          // inView({
            // onEntered() { console.log(1)}
            // onLeaved() {console.log(2)}
          //   delay: 1_000,
          //   entered: onEntered,
          //   leaved: onLeaved
          // })
        ]}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

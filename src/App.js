import React from 'react';
import './App.css';
import Result from "./components/Result";
import Scanner from "./components/Scanner";

function App() {
  const [state, setState] = React.useState({
    scanning: false,
    results: []
  })

  const _scan = () => {
    setState({scanning: !state.scanning, results: state.results})
  }

  const _onDetected = (result) => {
    setState(
      {
        scanning: state.scanning,
        results: state.results.concat([result])
      }
    )
  }

  return (
    <>
      <button onClick={_scan}>{state.scanning ? 'stop': 'start'}</button>
      <ul className="results">
        {state.results.map(result => {
          return <Result key={result.codeResult.code} result={result}/>
        })}
      </ul>
      {state.scanning && <Scanner onDetected={_onDetected}/>}
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Anywhere from './components/hello';
import {Text, SimpleText, TextWithChildren} from './components/phrase';
import CountDown from './components/count';
import SampleUseRef from './components/sampleUseRef';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* 
          <img src={logo} className="App-logo" alt="logo" />
        */}

        <SampleUseRef/>

        <CountDown/>

        <Anywhere/>

        <Text meuTexto="Olá"/>

        <SimpleText meuTexto="Olá Mundo"/>

        <TextWithChildren> Olá mundo, estamos aqui :D </TextWithChildren>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Leia mais sobre React
        </a>
      </header>
    </div>
  );
}

export default App;

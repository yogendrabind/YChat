//import socketIO from "socket.io-client";
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Join from "./component/Join/Join";
import Chat from "./component/Chat/Chat";

//const ENDPOINT='http://localhost:4500/';
//const socket=socketIO(ENDPOINT ,{transports:['websocket']});
function App() {
 // socket.on('connect', ()=>{
 //   console.log('New Connection')
 // })
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Join}/>
        <Route path="/chat" component={Chat}/>
      </Router>
    </div>
  );
}

export default App;

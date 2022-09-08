import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import './App.css';
import Header from './components/Header'
import NoteListPage from './pages/NoteListPage';
import NotePage from './pages/NotePage';

function App() {
  return (
    <Router>
      <div className="">
        <Header />
        <Route path="/" component={NoteListPage} exact />
        <Route path="/note/:id" component={NotePage} />
      </div>
    </Router>
  );
}

export default App;

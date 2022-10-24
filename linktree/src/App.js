import './App.css';
import jo from './img/Jonathan.jfif'
import github from './img/github.png'
import slack from './img/slack.png'
import zuri from './img/Zuri-Internship.svg'
import I4G from './img/I4G.svg'

function App() {
  return (
    <section className="linktree">
      <div className="profile">
      <img src={jo} alt="Logo" id="profile__img" /> 
      <img src="../public/img/Jonathan.jfif" alt="Logo" id="profile__img" /> 
      <h3>Jonathan Mmadu</h3>
      </div>

      <div className="links">
      <a href="">Twitter Link</a>
      <a href="">Zuri Team</a>
      <a href="">Zuri Books</a>
      <a href="">Background Check for Coders</a>
      <a href="">Design Books</a>
      </div>

      <div className="git-slack">
      <img src={github} alt="Logo" id="profile__img" />
      <img src={slack} alt="Logo" id="profile__img" />  
      </div>

      <footer>
      <img src={zuri} alt="Logo" id="profile__img" />
      <p>HNG Internship 9 Frontend Task</p>
      <img src={I4G} alt="Logo" id="profile__img" />
      </footer>
    </section>
  );
}

export default App;

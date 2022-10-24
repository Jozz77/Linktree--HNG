import './App.css';
import jo from './img/Jonathan.jfif'
import github from './img/github.png'
import slack from './img/slack.png'
import zuri from './img/Zuri-Internship.svg'
import I4G from './img/I4G.svg'
import share from './img/share (2).png'

function App() {
  return (
    <section className="linktree">
      <div className="profile">
      <img src={jo} alt="Logo" id="profile__img" /> 
      {/* <img src="../public/img/Jonathan.jfif" alt="Logo" id="profile__img" />  */}
      <h3>Jonathan Mmadu</h3>
      </div>

      <p id="slack">Jo_Na_Than</p>
      <div className="share">
        <img src={share} alt="Logo" id="profile__img" /> 
      </div>

      <div className="links">
      <a href="https://twitter.com/JonathanOnyedi3" target="_blank" id="twitter">Twitter Link</a>
      <a href="" id="btn_zuri" target="_blank">Zuri Team</a>
      <a href="" id="books" target="_blank">Zuri Books</a>
      <a href="" id="pitch" target="_blank">Background Check for Coders</a>
      <a href="" id="book_design" target="_blank">Design Books</a>
      </div>

      <div className="git-slack">
      <a href=""> <img src={github} alt="Logo" id="profile__img" /></a>
      <a href=""><img src={slack} alt="Logo" id="profile__img" /> </a>
      </div>

      <hr></hr>
      <footer>
      <a href=""><img src={zuri} alt="Logo" id="profile__img" /></a>
      <p>HNG Internship 9 Frontend Task</p>
      <a href=""><img src={I4G} alt="Logo" id="profile__img" /></a>
      </footer>
    </section>
  );
}

export default App;

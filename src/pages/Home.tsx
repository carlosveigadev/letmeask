import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleImg from '../assets/images/google-icon.svg';
import '../assets/styles/auth.scss';

export const Home = () => (
  <div id="page-auth">
    <aside>
      <img src={illustrationImg} alt="Illustration symbolizing questions and answers" />
      <strong>Create live Q&amp;A rooms</strong>
      <p>Answering your audience&apos;s questions in real-time </p>
    </aside>
    <main>
      <div className="main-content">
        <img src={logoImg} alt="Letmeask logo" />
        <button type="submit" className="create-room">
          <img src={googleImg} alt="Google logo" />
          Create your room with Google
        </button>
        <div className="separator">or join a room</div>
        <form>
          <input
            type="text"
            placeholder="Type the room code"
          />
          <button type="submit">
            Join the room
          </button>
        </form>
      </div>
    </main>
  </div>
);

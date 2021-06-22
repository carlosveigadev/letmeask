import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import '../assets/styles/auth.scss';

export const NewRoom = () => {
  return (
  <div id="page-auth">
    <aside>
      <img src={illustrationImg} alt="Illustration symbolizing questions and answers" />
      <strong>Create live Q&amp;A rooms</strong>
      <p>Answering your audience&apos;s questions in real-time </p>
    </aside>
    <main>
      <div className="main-content">
        <img src={logoImg} alt="Letmeask logo" />
        <h2>Create a new room</h2>
        <form>
          <input
            type="text"
            placeholder="Room's name"
          />
          <Button type="submit">
            Create Room
          </Button>
        </form>
        <p>
          Do you want to join an existing room?  
          <Link to="/">Click here</Link>
        </p>
      </div>
    </main>
  </div>
)};
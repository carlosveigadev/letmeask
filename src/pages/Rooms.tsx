import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';
import '../assets/styles/rooms.scss';

export const Room = (): JSX.Element => {
  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask logo" />
          <RoomCode /> 
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Room React</h1>
          <span>4 questions</span>
        </div>

        <form>
          <textarea
            placeholder="What is your question?"
          />

          <div className="form-footer">
            <span>Please <button>login</button> to send a question.</span>
            <Button type="submit">Send Question</Button>
          </div>
        </form>

      </main>
    </div>
  )
}
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleImg from '../assets/images/google-icon.svg';
import { useHistory } from 'react-router';
import { Button } from '../components/Button';
import '../assets/styles/auth.scss';
import { useAuth } from '../hooks/useAuth';
import { FormEvent } from 'react';
import { useState } from 'react';
import { database } from '../services/firebase';

export const Home = (): JSX.Element => {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState('');
  
  const handleCreateRoom = async () => {
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
  }

  const handleJoinRoom = async (event: FormEvent) => {
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert('Room does not exists.');
      return;
    }

    if (roomRef.val().endedAt) {
      alert('Room already closed');
      return;
    }

    history.push(`/rooms/${roomCode}`);
  }

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
        <button type="submit" onClick={handleCreateRoom} className="create-room">
          <img src={googleImg} alt="Google logo" />
          Create your room with Google
        </button>
        <div className="separator">or join a room</div>
        <form onSubmit={handleJoinRoom}>
          <input
            type="text"
            placeholder="Type the room code"
            onChange={event => setRoomCode(event.target.value)}
            value={roomCode}
          />
          <Button type="submit">
            Join the room
          </Button>
        </form>
      </div>
    </main>
  </div>
)};

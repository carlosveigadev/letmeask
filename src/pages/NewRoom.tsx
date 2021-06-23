import illustrationImg from '../assets/images/illustration.svg';
import { FormEvent, useState } from 'react';
import logoImg from '../assets/images/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '../components/Button';
import '../assets/styles/auth.scss';
import { database } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';

export const NewRoom = () => {
  const { user } = useAuth();
  const [newRoom, setNewRoom] = useState('')
  const history = useHistory();

  const handleCreateRoom = async (event: FormEvent) => {
    event.preventDefault();

    if (newRoom.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');
    console.log('here')
    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    })

    history.push(`/rooms/${firebaseRoom.key}`)
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
        <h2>Create a new room</h2>
        <form onSubmit={handleCreateRoom}>
          <input
            type="text"
            placeholder="Room's name"
            onChange={event => setNewRoom(event.target.value)}
            value={newRoom}
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
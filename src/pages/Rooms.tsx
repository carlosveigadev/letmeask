import { useParams } from 'react-router';
import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../hooks/useRoom';
import { FormEvent, useState } from 'react';
import { Button } from '../components/Button';
import { Question } from '../components/Question';
import { RoomCode } from '../components/RoomCode';
import { database } from '../services/firebase';
import logoImg from '../assets/images/logo.svg';
import '../assets/styles/rooms.scss';

type RoomParams = {
  id: string;
}

export const Room = (): JSX.Element => {
  const { user } = useAuth();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const [newQuestion, setNewQuestion] = useState('');
  const { title, questions } = useRoom(roomId);

  const handleCreateSendQuestion = async (event: FormEvent) => {
    event.preventDefault();

    if (newQuestion.trim() === '') {
      return;
    }

    if (!user) {
      alert('You need to be logged in');
    }

    const question = {
      content: newQuestion,
      author: {
        name: user?.name,
        avatar: user?.avatar,
      },
      isHighlighted: false, 
      isAnswered: false,
    }
    
    await database.ref(`rooms/${roomId}/questions`).push(question);

    setNewQuestion('');
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask logo" />
          <RoomCode code={roomId} /> 
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Room {title}</h1>
          { questions.length > 0 && questions.length !== 1 ? <span>{questions.length} questions</span> : <span>{questions.length} question</span>}
        </div>

        <form onSubmit={handleCreateSendQuestion}>
          <textarea
            placeholder="What is your question?"
            onChange={event => setNewQuestion(event.target.value)}
            value={newQuestion}
          />

          <div className="form-footer">
            { user ? (
              <div className="user-info">
                <img src={user.avatar} alt={user.name}/>
                <span>{user.name}</span>

              </div>
            ) : (
              <span>Please <button>login</button> to send a question.</span>
            )
            }
            <Button type="submit" disabled={!user}>Send Question</Button>
          </div>
        </form>

        <div className="question-list">
          {questions.map(question => {
            return (
              <Question 
                key={question.id}
                content={question.content}
                author={question.author}
              />
            )
          })}
        </div>
      </main>
    </div>
  )
}
import { useParams } from 'react-router';
import { useRoom } from '../hooks/useRoom';
import { useHistory } from 'react-router-dom';

import { Button } from '../components/Button';
import { Question } from '../components/Question';
import { RoomCode } from '../components/RoomCode';

import logoImg from '../assets/images/logo.svg';
import deleteImg from '../assets/images/delete.svg';
import checkImg from '../assets/images/check.svg';
import answerImg from '../assets/images/answer.svg';
import { database } from '../services/firebase';

import '../assets/styles/rooms.scss';


type RoomParams = {
  id: string;
}

export const AdminRoom = (): JSX.Element => {
  // const { user } = useAuth();
  const history = useHistory();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { title, questions } = useRoom(roomId);

  const handleDeleteQuestion = async (questionId: string) => {
    if (window.confirm('Are you sure you want to delete this question?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  const handleCheckQuestionAsAnswered = async (questionId: string) => {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    });
  }

  const handleHighlightQuestion = async (questionId: string) => {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    });
  }

  const handleEndRoom = async () => {
    database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });

    history.push('/');
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask logo" />
          <div>
            <RoomCode code={roomId} /> 
            <Button 
              isOutlined
              onClick={handleEndRoom}
            >End Room</Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Room {title}</h1>
          { questions.length > 0 && questions.length !== 1 ? <span>{questions.length} questions</span> : <span>{questions.length} question</span>}
        </div>

        <div className="question-list">
          {questions.map(question => {
            return (
              <Question 
                key={question.id}
                content={question.content}
                author={question.author}
                isAnswered={question.isAnswered}
                isHighlighted={question.isHighlighted}
              >
                {
                  !question.isAnswered && (
                    <>
                      <button
                        type="button"
                        onClick={() => handleCheckQuestionAsAnswered(question.id)}
                      >
                        <img src={checkImg} alt="Set question as already answered" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleHighlightQuestion(question.id)}
                      >
                        <img src={answerImg} alt="Highlight the question" />
                      </button>
                    </>
                  )
                }
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImg} alt="Delete question" />
                </button>
              </Question>
            )
          })}
        </div>
      </main>
    </div>
  )
}
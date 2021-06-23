import copyImg from '../assets/images/copy.svg';
import '../assets/styles/room-code.scss'

export const RoomCode = (): JSX.Element => (
  <button className="room-code">
    <div>
      <img src={copyImg} alt="Copy room code image" />
    </div>
    <span>
      Room #123123
    </span>
  </button>
)
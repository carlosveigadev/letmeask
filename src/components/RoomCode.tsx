import copyImg from '../assets/images/copy.svg';
import '../assets/styles/room-code.scss'

type RoomCodeProps = {
  code: string;
}

export const RoomCode = (props:RoomCodeProps): JSX.Element => {

  const copyRoomCodeToClipboard = () => {
    navigator.clipboard.writeText(props.code)
  }

  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code image" />
      </div>
      <span>
        Room #{props.code}
      </span>
    </button>
  )
}
 

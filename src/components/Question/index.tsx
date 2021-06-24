import './styles.scss';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  }
}

export const Question = ({
  content, 
  author
}: QuestionProps): JSX.Element => (
  <div className="question">
    <p>{content}</p>
    <footer>
      <div className="user-info">
        <img src={author.avatar} alt={author.name} />
      </div>
    </footer>
  </div>
)
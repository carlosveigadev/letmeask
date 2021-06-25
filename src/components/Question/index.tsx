import { ReactNode } from 'react';
import './styles.scss';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
}

export const Question = ({
  content, 
  author,
  isAnswered = false,
  isHighlighted = false,
  children
}: QuestionProps): JSX.Element => (
  <div className={`question ${isAnswered ? 'answered' : ''} ${isHighlighted ? 'highlighted' : ''}`}>
    <p>{content}</p>
    <footer>
      <div className="user-info">
        <img src={author.avatar} alt={author.name} />
        <span>{author.name}</span>
      </div>
      <div>
        {children}
      </div>
    </footer>
  </div>
)
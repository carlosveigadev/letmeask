import { ButtonHTMLAttributes } from 'react';
import '../assets/styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean,
};

export const Button = ({ isOutlined = false, ...props }: ButtonProps): JSX.Element => {
  return (
    <button className={`button ${isOutlined ? 'outlined' : ''}`} 
      {...props} 
    />
  )
}


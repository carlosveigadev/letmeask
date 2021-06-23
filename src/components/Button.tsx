import { ButtonHTMLAttributes } from 'react';
import '../assets/styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps): JSX.Element => {
  return (
    <button className="button" {...props} />
  )
}


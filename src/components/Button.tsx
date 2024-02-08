import './Button.css';

type ButtonProps = {
  children: React.ReactNode
  responsibility: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  validBtn?: boolean
};

function Button({ children, responsibility, validBtn = false }: ButtonProps) {
  return (
    <button
      onClick={ (e) => responsibility(e) }
      disabled={ validBtn }
    >
      {children}
    </button>
  );
}

export default Button;

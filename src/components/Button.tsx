type ButtonProps = {
  children: React.ReactNode
  responsibility: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

function Button({ children, responsibility }: ButtonProps) {
  return (
    <button onClick={ (e) => responsibility(e) }>
      {children}
    </button>
  );
}

export default Button;

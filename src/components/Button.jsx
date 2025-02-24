const Button = ({text, onClick}) => {

  return (
  <button onClick={onClick} className='drop-shadow-md text-xl text-white w-33 h-9 bg-[#36AAFF] rounded-sm'>{text}</button>
  );
};

export default Button;
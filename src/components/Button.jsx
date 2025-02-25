const Button = ({text, onClick}) => {

  return (
  <button onClick={onClick} className='drop-shadow-md text-xl text-white w-36 h-12 bg-[#36AAFF] rounded-sm'>{text}</button>
  );
};

export default Button;
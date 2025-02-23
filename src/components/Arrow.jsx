const Arrow = ({onClick}) => {

    return (
    <img src="/flecha-atras.png" alt="Fleacha atras" onClick={onClick} className="w-8 h-8 cursor-pointer absolute left-10 top-10"/>
    );
  };
  
  export default Arrow;
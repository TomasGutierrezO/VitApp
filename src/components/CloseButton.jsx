const CloseButton = ({onClick}) => {

    return (
    <img onClick={onClick} src="/CloseButton.png" alt="Close button"  className="w-8 h-8 cursor-pointer mt-5"/>
    );
  };
  
  export default CloseButton;
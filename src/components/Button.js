import { useDispatch } from "react-redux";
import { setAppoloObj } from "../utils/appoloSlice";

const Button = ({ actionType, children, className, btnData }) => {

    const dispatch = useDispatch();

  const handleClick = () => {
    console.log("clicked")
    if (actionType === "updateRedux") {
        dispatch(setAppoloObj(btnData));
    }
  };

  return (
    <button
      className={`rounded-lg font-bold ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;

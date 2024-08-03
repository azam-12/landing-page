import { useDispatch, useSelector } from "react-redux";
import { setImageContents } from "../../utils/headerSlice";
import { useState } from "react";


const SolutionItem = (props) => {

const { serviceData, showText } = props;

const [isHovered, setIsHovered] = useState(false);

console.log("serviceData", serviceData)

const dispatch = useDispatch();

  const handleOnClick = () => {
    let imgObj = {
        imagePath: serviceData.imagePath, 
        imageTitle: serviceData.title,
        imageDesc: serviceData.text,
        imageBgColor: serviceData.imageBgColor,
        titleBgColor: serviceData.titleBgColor,
        isClicked: true,
    }
      dispatch(setImageContents(imgObj));
  };

  const { imageContents } = useSelector((store)=> (store.head));

  
  return (
    <div
      onClick={handleOnClick}
      className={`flex gap-1 rounded-lg p-2 cursor-pointer`}
      style={{ 
        backgroundColor: isHovered ? serviceData.titleBgColor : "transparent",
       }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {serviceData?.icon}
      <div className="flex flex-col items-start">
        <span className="">{serviceData?.title}</span>
        {showText && <p>{serviceData?.text}</p>}
      </div>
    </div>
  );
};

export default SolutionItem;

import { useSelector } from "react-redux";
import { platformOptions } from "../../utils/constants";
import SolutionSubContainer from "./SolutionSubContainer";

const SolutionContainer = () => {
  //  we don't wan t to display the last element here
  const newPlatformOptions = platformOptions.slice(0, -1);

  const { imageContents } = useSelector((store) => (store.head));


  return (
    <div className="flex flex-col h-[130vh]">
      <div className="mx-[350px]">
        <h1 className="font-semibold text-[50px] leading-[1] text-center my-20">
          The only solution you need to run a world-class sales organization
        </h1>
      </div>
      <div className="flex h-4/6 mx-[125px]">
        <div className="flex flex-col" style={{ flex: 1.3 }}>
          {newPlatformOptions?.map((platform) => (
            <SolutionSubContainer key={platform.id} platformData={platform} />
          ))}
        </div>
        <div className="flex flex-col"  style={{ flex: 4 }}>
          <div 
            className="flex justify-between p-5 rounded-t-lg"
            style={{backgroundColor: imageContents.titleBgColor}}
            >
            <div className="flex gap-5">
              <span>Icon Path</span>
              <span className="font-semibold text-lg">{imageContents.imageTitle}</span>
            </div>
            <div className="flex gap-5">
              <span>{imageContents.imageDesc}</span>
              <span className="text-blue-600 text-xm">Learn More ...</span>
            </div>
          </div>
          <div 
            className="w-full" 
            style={{backgroundColor: imageContents.imageBgColor}}
            >
            <img className="w-full" alt="Image" src={imageContents.imagePath} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionContainer;

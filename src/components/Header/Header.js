import PlatformOptions from "./PlatformOptions";
import TeamsOptions from "./TeamsOptions";
import ResourcesOptions from "./ResourcesOptions";
import { useDispatch, useSelector } from "react-redux";
import { setHoverIndex } from "../../utils/headerSlice";
import Button from "../Button";

const Header = () => {

  const dispatch = useDispatch();

  const { hoverIndex } = useSelector((store) => (store.head));
  const { headerBgColor } = useSelector((store) => store.head);

  const handleMouseEnter = (index) => {
    dispatch(setHoverIndex(index))
  };

  const handleMouseLeave = () => {
    dispatch(setHoverIndex(null))
  };


  const optionList = ["Platform", "Teams", "Resources"];

  const renderHoveredOption = () => {
    switch (hoverIndex) {
      case 0:
        return <PlatformOptions handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>;

      case 1:
        return <TeamsOptions handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>;

      case 2:
        return <ResourcesOptions handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>;

      default:
        return null;
    }
  };

  return (
    <div className={`flex flex-col fixed w-full z-50 ${headerBgColor}`} style={{ backgroundColor: hoverIndex !== null ?  "white" : "" }}>
      <div className="flex mx-32 justify-between">
        <div className="flex items-center gap-4">
          <span className="font-bold text-2xl mr-[40px]">TECH LOGO</span>
          <ul className="flex items-center gap-10">
            {optionList.map((optionName, index) => (
              <li
                key={index}
                className="text-lg py-6 cursor-pointer hover:border-b-2 border-black "
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {optionName}
              </li>
            ))}
          </ul>
          <span className="text-lg ml-[40px] hover:underline decoration-yellow-600 decoration-2 cursor-pointer">Pricing</span>
        </div>
        <div className="flex gap-4 items-center">
          <Button className="mr-8 py-3 px-4 hover:bg-gray-100">Get a demo</Button>
          <Button className="py-3 px-4 border-black border-2 hover:bg-gray-100">
            Log in
          </Button>
          <Button className="py-3 bg-black text-white px-6">
            Sign up for free
          </Button>
        </div>
      </div>

      <div className="w-full">
        {hoverIndex !== null ? renderHoveredOption() : null}
      </div>

    </div>
  );
};

export default Header;

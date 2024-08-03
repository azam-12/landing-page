import { useSelector } from "react-redux";
import { platformOptions } from "../../utils/constants";
import ServiceItem from "./ServiceItem";

const PlatformOptions = (props) => {
  const { handleMouseEnter, handleMouseLeave } = props;

  const { hoverIndex } = useSelector((store) => store.head);

  return (
    <div
      className="grid grid-flow-col cursor-pointer py-12 border-t-[1px]"
      onMouseEnter={() => handleMouseEnter(hoverIndex)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="mx-auto flex gap-5">
        {platformOptions?.map((platform) => (
          <div key={platform.id} className="w-64">
            <h1 style={{ color: platform.color }} className="pb-2">
              {platform?.heading}
            </h1>
            <div className="flex flex-col">
              {platform.collection.map((service) => (
                <ServiceItem
                  key={service.title}
                  serviceData={service}
                  showText={true}
                  className={"mt-5 hover:bg-gray-100"}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlatformOptions;

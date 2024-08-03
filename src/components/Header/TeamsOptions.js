import { useSelector } from "react-redux";
import { teamOptions } from "../../utils/constants";
import ServiceItem from "./ServiceItem";

const TeamsOptions = (props) => {

    const { handleMouseEnter, handleMouseLeave} = props;
    const { hoverIndex } = useSelector((store) => store.head);

  return (
    <div
      className="grid grid-flow-col cursor-pointer py-12 border-t-[1px]"
      onMouseEnter={() => handleMouseEnter(hoverIndex)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="mx-auto flex">
        {teamOptions?.map((team) => (
          <div key={team.id} className="w-[640px]">
            <div className="flex flex-col">
              {team.collection.map((service) => (
                <ServiceItem key={service.title} serviceData={service} showText={true} className={"mt-10 hover:bg-gray-100"} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamsOptions;

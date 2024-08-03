import ServiceItem, { withNewFeature } from "./ServiceItem";
import { MAGAZINE_IMAGE } from "../../utils/constants";
import { resourceOptions } from "../../utils/constants";
import { useSelector } from "react-redux";


const ResourcesOptions = (props) => {
  const { handleMouseEnter, handleMouseLeave } = props;

  const { hoverIndex } = useSelector((store) => store.head);

  const ServiceItemWithNewFeature = withNewFeature(ServiceItem);

  return (
    <div
      className="grid grid-flow-col cursor-pointer py-12 border-t-[1px]"
      onMouseEnter={() => handleMouseEnter(hoverIndex)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="mx-auto flex gap-14">
        <div className="w-[300px]">
          <h1 className="font-bold ml-8 text-xl text-gray-400">
            Latest from Magazine
          </h1>
          <img className="mt-8 rounded-t-lg" alt="image" src={MAGAZINE_IMAGE} />
          <p className="bg-gray-100 rounded-b-lg py-2 px-2 font-bold decoration-yellow-600 decoration-2 hover:underline">
            Master Class: Social Selling for a Seven-Figure Income
          </p>
        </div>

        {resourceOptions?.map((resource) => (
          <div key={resource.id} className="w-[300px]">
            <div className="flex flex-col">
              <h1 className="font-bold ml-8 text-xl text-gray-400">
                {resource.heading}
              </h1>
              <div className="w-full h-[1px] bg-gray-200 mt-6"></div>
              <div className="ml-8">
                {resource.collection.map((service) =>
                  service.newFeature === true ? (
                    <ServiceItemWithNewFeature
                      key={service.title}
                      serviceData={service}
                    />
                  ) : (
                    <ServiceItem key={service.title} serviceData={service} className={"mt-7 hover:bg-gray-100"} />
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourcesOptions;

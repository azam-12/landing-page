import ServiceItem from "../Header/ServiceItem";
import SolutionItem from "./SolutionItem";


const SolutionSubContainer = (props) => {

    const { platformData } = props;

    return (
        <div key={platformData.id} className="">
              <h1 style={{ color: platformData.color }} className="pb-2">
                {platformData?.heading}
              </h1>
              <div className="flex flex-col mr-10">
                {platformData.collection.map((service) => (
                  <SolutionItem 
                    key={service.title}
                    serviceData={service} 
                    showText={false} 
                    />
                ))}
              </div>
            </div>
    );
}

export default SolutionSubContainer;
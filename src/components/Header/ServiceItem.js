import Button from "../Button";

const ServiceItem = (props) => {
  const { serviceData, className, showText } = props;


  const handleOnClick = () => {
    // actionType === navigate
    // To do navigate to that link
  };

  return (
    <div
      onClick={handleOnClick}
      className={`flex gap-1 rounded-lg p-2 ${className}`}
    >
      {serviceData?.icon}
      <div className="flex flex-col items-start">
        <span className="font-bold">{serviceData?.title}</span>
        {showText && <p>{serviceData?.text}</p>}
      </div>
    </div>
  );
};

export const withNewFeature = (ServiceItem) => {
  return (props) => {
    return (
      <div className={`mt-7 flex items-baseline rounded-lg hover:bg-gray-100`}>
        <Button className="text-white bg-black px-2 py-1 ml-1">
          New
        </Button>
        <div className="">
          <ServiceItem {...props} />
        </div>
      </div>
    );
  };
};

export default ServiceItem;

import { NETWORK_CONTAINER_IMAGE, NETWORK_LEARN_MORE_IMAGE } from "../../utils/constants";
import Button from "../Button";

const NetworkContainer = () => {

    return (
        <div className="h-[150vh] w-full relative">
            <div className="absolute w-full h-full flex flex-col gap-6 ">
                <div className="mt-24 leading-[1.1] mx-auto text-center flex flex-col items-center gap-6">
                        <h1 className="w-[50%] font-bold text-[50px]">Easily explore the most accurate B2B data.</h1>
                    <p className="w-[60%] text-xl">We invented a different way to deliver data and it’s changing the game. Our 2 million user Living Data Network ensures unparalleled freshness and depth.</p>
                    <Button className="py-3 bg-green-500 px-6">Learn more</Button>       
                </div>
                <div className="w-[80%] h-full mx-auto">
                    <img className="object-contain w-full h-full" alt="img" src={NETWORK_LEARN_MORE_IMAGE}/>
                </div>
            </div>
            <img 
                alt="img" 
                src={NETWORK_CONTAINER_IMAGE}
                className="w-full h-full object-cover"
            />
        </div>
    );
}

export default NetworkContainer;
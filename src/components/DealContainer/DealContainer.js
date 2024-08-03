import Header from "../Header/Header";
import { TOP_COVER_IMAGE } from "../../utils/constants";
import Button from "../Button";
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import DealFooter from "./DealFooter";

const DealContainer = () => {
  return (
    <div>
      <div className="h-[123vh] relative">
        <Header />
        <div className="z-10 flex gap-[100px] w-full absolute mt-[300px]">
          <div className="ml-32 flex flex-col flex-1 gap-8">
            <p className="text-[65px] font-sans font-semibold leading-[1.1]">Find and close your next deal</p>
            <p className="text-2xl">Power your go-to-market with one platform. Fueled by the most accurate data on 275M contacts and 73M companies.</p>
            <div className="flex flex-col gap-3">
                <div className="flex gap-5">
                    <Button className="py-3 bg-yellow-400 px-6 hover:bg-opacity-50">Sign up for free</Button>
                    <Button className="py-3 px-4 border-2 border-black hover:bg-gray-100">Get a demo</Button>
                </div>
                <div className="flex items-center">
                    <StarRateRoundedIcon />
                    <StarRateRoundedIcon />
                    <StarRateRoundedIcon />
                    <StarRateRoundedIcon />
                    <StarRateRoundedIcon />
                    <h1 className="font-bold text-lg ml-4">4.8</h1>
                    <span>/5 based on 7,039 reviews | GDPR Compliant</span>
                </div>
            </div>
          </div>
          <div className="font-bold text-5xl flex-1">
          </div>
        </div>
        <img
          className="h-[123vh] object-cover"
          alt="img"
          src={TOP_COVER_IMAGE}
        />
      </div>
      <DealFooter />
    </div>
  );
};

export default DealContainer;


import { useEffect } from "react";
import DealContainer from "./DealContainer/DealContainer";
import { useDispatch } from "react-redux";
import { setHeaderBgColor } from "../utils/headerSlice";
import SolutionContainer from "./SolutionContainer/SolutionContainer";
import NetworkContainer from "./NetworkContainer/NetworkContainer";
import AppoloContainer from "./AppoloContainer/AppoloContainer";

const MainContainer = () => {

    const dispatch = useDispatch();

    const handleScroll = () => {
        if(window.scrollY > 50){
            dispatch(setHeaderBgColor("bg-white"));
        }else{
            dispatch(setHeaderBgColor("bg-transparent"));
        }
    }

    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    },[])

    return (
        <div>
            <DealContainer />
            <SolutionContainer />
            <NetworkContainer />
            <AppoloContainer />
        </div>
    );
}

export default MainContainer;
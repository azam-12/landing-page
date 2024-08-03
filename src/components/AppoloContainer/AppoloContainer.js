import { appoloOption } from "../../utils/constants";
import Button from "../Button";
import { useSelector } from "react-redux";
import CheckList from "./CheckList";


const AppoloContainer = () => {

    const { appoloObj } = useSelector((store) => (store.appolo));

    const checkListItems = appoloObj.collection;

    return (
        <div className="h-[180vh] w-full">
            <div className="flex flex-col gap-5 ml-28">
                <div className="flex flex-col">
                    <h1 className="font-semibold text-[55px]">You share the revenue goal.</h1>
                    <h1 className="font-semibold text-[55px] -mt-5">Work better, smarter, together in Apollo.</h1>
                </div>
                <div className="flex flex-col gap-14">
                    <div className="flex gap-5">
                        {
                            appoloOption.map((btnData)=> (
                                <Button 
                                    key={btnData.id} 
                                    className="border-2 py-3 px-4 hover:bg-gray-100"
                                    actionType="updateRedux"
                                    btnData={btnData.data}
                                    >{btnData.category}
                                </Button>
                            ))
                        }
                    </div>
                    <div className="flex gap-12 w-[90%]">
                        <div className="flex flex-col gap-6"  style={{ flex:2.4 }}>
                            <h1 className="font-semibold text-[40px]">{appoloObj.title}</h1>
                            <p className="text-lg">{appoloObj.desc}</p>
                            <div className="flex flex-col gap-3">
                                {
                                    checkListItems.map((item)=> (<CheckList key={item.id} itemData={item} />))
                                }
                            </div>
                            <div>
                                <Button className="py-3 px-4 bg-black text-white text-xl">Learn More</Button>
                            </div>
                        </div>
                        <div className="flex w-full" style={{ flex:1.2 }}>
                            <img className="w-full" alt="img" src={appoloObj.image}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppoloContainer;
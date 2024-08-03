import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
import LinearScaleRoundedIcon from '@mui/icons-material/LinearScaleRounded';
import DonutSmallRoundedIcon from '@mui/icons-material/DonutSmallRounded';

const DealFooter = () => {

    return (
        <div className="flex flex-col gap-7 items-center h-[20vh] bg-[#DBE8FD]">
            <h1 className="text-xl mt-5 font-semibold">Millions of sellers at over 500,000 companies beat their number with Apollo</h1>
            <ul className="flex gap-24">
                <li className="font-sans font-bold text-4xl">stripe</li>
                <div className='flex items-center gap-1'>
                    <span><AcUnitRoundedIcon style={{ fontSize: 30 }}/></span>
                    <span className="font-sans font-bold text-4xl">Census</span>
                </div>
                <li className="font-sans font-bold text-4xl">customer.io</li>
                <li className="font-sans font-bold text-4xl">DocuSign</li>
                <div className='flex items-center gap-1'>
                    <span><DonutSmallRoundedIcon style={{ fontSize: 35 }}/></span>
                    <span className='font-sans font-bold text-4xl'>AUTODESK</span>
                </div>
                <LinearScaleRoundedIcon style={{ fontSize: 50 }} />
            </ul>
        </div>
    );
}

export default DealFooter;
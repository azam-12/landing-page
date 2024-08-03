import CheckIcon from '@mui/icons-material/Check';

const CheckList = (props) => {

    const { itemData } = props;

    return (
        <div>
            <span><CheckIcon/></span>
            <span className="font-bold text-lg"> {itemData.title}</span>
            <span className="text-lg"> {itemData.desc}</span>
        </div>
    );
}

export default CheckList;
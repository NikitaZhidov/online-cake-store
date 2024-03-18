import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';


const MainPanel = () => {
    return <div className="py-8 flex items-center justify-between">
        <div className="flex items-center gap-10">
            <div className="text-5xl font-bold">СУПЕР ТОРТ</div>

            <div>
                <span>Доставка тортов </span>
                <span className="text-blue-400 font-medium">Петрозаводск</span>
            </div>
        </div>

        <div>
        <Button className='flex flex-col' color="primary">
            <AccountCircleIcon />
            <span className='text-xs font-bold'>Кабинет</span>
        </Button>
        </div>
    </div>;
}
 
export default MainPanel;
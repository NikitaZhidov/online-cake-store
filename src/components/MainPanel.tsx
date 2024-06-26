import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { CoreRoutes } from '../routes';


const MainPanel = () => {
    return <div className="py-8 flex items-center justify-between">
        <div className="flex items-center gap-10">
            <NavLink className="text-5xl font-bold" to={'/'}>СУПЕР ТОРТ</NavLink>

            <div>
                <span>Доставка тортов </span>
                <span className="text-blue-400 font-medium">Петрозаводск</span>
            </div>
        </div>

        <div>
            <NavLink to={CoreRoutes.profile}>
                <Button className='flex flex-col' color="primary">
                    <AccountCircleIcon />
                    <span className='text-xs font-bold'>Кабинет</span>
                </Button>
            </NavLink>
        </div>
    </div>;
}

export default MainPanel;
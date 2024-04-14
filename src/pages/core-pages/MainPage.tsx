import CardButton from "../../components/CardButton";
import Navigation from "../../components/Navigation";
import { Outlet } from "react-router-dom";

const MainPage = () => {
    return <div>
        <div className='max-w-screen-xl mx-auto px-4'>
            <div className='flex justify-between items-center'>
                <Navigation />

                <CardButton />
            </div>

            <div className="py-12">
                <Outlet />
            </div>
        </div>
    </div>;
}

export default MainPage;
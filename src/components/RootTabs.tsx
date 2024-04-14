import { NavLink } from "react-router-dom";
import { MainRoutes } from "../routes";

const tabs = [
    { label: 'Новости', route: MainRoutes.news },
    { label: 'О нас', route: MainRoutes.aboutUs },
    { label: 'Доставка', route: MainRoutes.delivery },
];

const RootTabs = () => {
    return <div className="flex items-center gap-4 py-4 font-semibold">
        {tabs.map(t => <NavLink id={t.route} to={t.route} className={({ isActive }) => `${isActive ? 'text-blue-400' : ''}`}>{t.label}</NavLink>)}
    </div>;
}

export default RootTabs;
import { NavLink } from "react-router-dom";
import { CoreRoutes } from "../routes";

const tabs = [
    { label: 'Все торты', route: CoreRoutes.catalog },
    { label: 'Акции', route: CoreRoutes.promotions },
];

const Navigation = () => {
    return <div className="flex items-center gap-6 font-medium">
        {tabs.map(t =>
            <NavLink key={t.route} to={t.route} className={({ isActive }) => `py-4 ${isActive ? 'text-blue-400' : ''}`}>{t.label}</NavLink>
        )}
    </div>;
}

export default Navigation;
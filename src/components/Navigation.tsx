const tabs = [
    { label: 'Все торты' },
    { label: 'Акции' },
];

const Navigation = () => {
    return <div className="flex items-center gap-6 font-medium">
        {tabs.map(t => 
            <div className="py-4" key={t.label}>{t.label}</div>
        )}
    </div>;
}
 
export default Navigation;
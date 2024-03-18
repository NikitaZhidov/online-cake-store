const tabs = [
    { label: 'Новости' },
    { label: 'О нас' },
    { label: 'Доставка' },
];

const RootTabs = () => {
    return <div className="flex items-center gap-4 py-4 font-semibold">
        {tabs.map(t => <div key={t.label} className="">{t.label}</div>)}
    </div>;
}

export default RootTabs;
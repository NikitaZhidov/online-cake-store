import React from 'react';
import './styles/index.scss';
import RootTabs from './components/RootTabs';
import MainPanel from './components/MainPanel';
import Navigation from './components/Navigation';
import CardButton from './components/CardButton';
import PromotionsList from './features/Promotions/PromitionsList';
import PopularCakes from './features/PopularCakes/PopularCakes';
import CelebrationCakes from './features/CelebrationCakes/CelebrationCakes';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <div className='border-b'>
        <div className='max-w-screen-xl mx-auto px-4'>
          <RootTabs />
        </div>
      </div>

      <div className='max-w-screen-xl mx-auto px-4'>
        <MainPanel />

        <Outlet />
      </div>
    </div>
  );
}

export default App;

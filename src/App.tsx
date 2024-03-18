import React from 'react';
import './styles/index.scss';
import RootTabs from './components/RootTabs';
import MainPanel from './components/MainPanel';
import Navigation from './components/Navigation';
import CardButton from './components/CardButton';
import PromotionsList from './features/Promotions/PromitionsList';
import PopularCakes from './features/PopularCakes/PopularCakes';
import CelebrationCakes from './features/CelebrationCakes/CelebrationCakes';

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

        <div className='flex justify-between items-center'>
          <Navigation />

          <CardButton />
        </div>

        <div className='py-6'>
          <PromotionsList />
        </div>

        <div className='py-8'>
          <div className='ml-1 font-medium text-lg mb-4'>Часто заказывают:</div>

          <PopularCakes />
        </div>

        <div className='py-8'>
          <div className='ml-1 font-bold text-3xl mb-4'>На праздник:</div>

          <CelebrationCakes />
        </div>
      </div>
    </div>
  );
}

export default App;

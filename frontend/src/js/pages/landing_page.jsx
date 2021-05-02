import React from 'react';
import clsx from 'clsx';
import Video from '../components/landing_page/video';
import NewsFeed from '../components/landing_page/newsfeed';
import Forums from '../components/landing_page/forums';
import Profiles from '../components/landing_page/profiles';
import componentStyles from '../../styles/component.module.css';

export default function LandingPage() {
  return (
    <div className={clsx(componentStyles.fullScreen, 'flex')}>
      <div className="flex flex-col w-3/5">
        <section className="pr-2 pt-2 pb-2">
          <Video />
        </section>
        <div className="flex-grow pr-2">
          <NewsFeed />
        </div>
      </div>
      <div className="flex flex-col w-2/5">
        <section className="flex-grow px-4 mt-2 pb-2 bg-gray-200 border border-gray-300 overflow-y-auto">
          <Forums />
        </section>
        <div className="mt-2">
          <Profiles />
        </div>
      </div>
    </div>
  );
}

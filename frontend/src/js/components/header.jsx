import React from 'react';
import clsx from 'clsx';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import TuneIcon from '@material-ui/icons/Tune';
import styles from './layout.module.css';
import Logo from '../../images/logo.png';

export default function Header() {
  return (
    <div className={clsx(styles.header, 'flex items-center text-sm font-semibold text-gray-800')}>
      <div className="pl-8 pr-12">
        <img
          src={Logo}
          height={26}
          width={86}
          alt="invercio"
        />
      </div>

      <ul className="flex flex-grow">
        <li className="px-4"><a href="/about">About Us</a></li>
        <li className="px-4"><a href="/events">Events</a></li>
        <li className="px-4"><a href="/webinar">Webinar (Sample)</a></li>
        <li className="px-4"><a href="/builder">CMS</a></li>
      </ul>

      <span className="pr-4">
        <TuneIcon fontSize="small" />
      </span>

      <span className="pl-20 pr-4">
        <NotificationsIcon fontSize="small" />
      </span>

      <AccountCircleIcon />

      <span className="pl-2 pr-6">Admin</span>

    </div>
  );
}

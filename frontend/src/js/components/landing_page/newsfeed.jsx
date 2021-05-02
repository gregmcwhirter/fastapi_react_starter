import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import componentStyles from '../../../styles/component.module.css';

// Custom hook to dynamically manage timing intervals
function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
    return null;
  }, [delay]);
}

export default function NewsFeed() {
  const [containerHeight, setContainerHeight] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [countdown, setCountdown] = useState(30);
  const [headlines, setHeadlines] = useState([]);
  const containerRef = useRef(null);

  const updateNewsItems = () => {
    console.log('Updating News Items:', Math.floor(Math.random() * 2000));
  };

  useInterval(() => {
    if (countdown === 1) {
      updateNewsItems();
      setCountdown(30);
    } else {
      setCountdown(countdown - 1);
    }
  }, 1000);

  const getPosts = async () => {
    try {
      const apiResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log(apiResponse.data);
      setHeadlines(apiResponse.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getPosts();
    setContainerHeight(containerRef.current.offsetHeight);
    setContainerWidth(containerRef.current.offsetWidth);
    console.log('Container Ref:', containerRef.current ? containerRef.current.offsetWidth : 0);
  }, []);

  /*
  const headlines = [
    'Golden Minerals program will encompass approximately 2,000 meters of exploration drilling at selected ' +
      'near-surface targets located immediately adjacent to the current pit. The program has the potential ' +
      'to extend the life of the Rodeo mine well beyond the currently estimated life of around 2.5 years.',
    'The program will encompass approximately 2,000 meters of exploration drilling at selected near-surface ' +
      'targets located immediately adjacent to the current pit. The program has the potential to extend the ' +
      'life of the Rodeo mine well beyond the currently estimated life of around 2.5 years.',
    'Teck Coal guilty of Fisheries violations in BC, fined $47m under the Fisheries Act relating to 2012 ' +
      'discharges of selenium and calcite to a mine settling pond and to the Fording River from its Fording ' +
      'River and Greenhills steelmaking coal operations in the Elk Valley region of British Columbia.',
    'Vale executives investigated in Brazil over Simandou deal. The case goes back to 2010 when Vale agreed ' +
      'to buy 51% of the iron ore licenses belonging to BSG Resources, owned by the Israeli billionaire Beny ' +
      'Steinmetz',
  ];
  */

  return (
    <div ref={containerRef} className={componentStyles.newsfeed}>
      <div className="flex items-end pt-2 px-3">
        <h2 className="flex-grow text-gray-200 text-xl font-bold uppercase">Latest News</h2>
        <h2 className="text-gray-200 text-base font-semibold">Next in 00:</h2>
        <h2 className="w-16 text-gray-200 text-base font-semibold">{String(countdown).padStart(2, '0')}</h2>
      </div>

      <div className="px-4 py-2 overflow-hidden" style={{ width: containerWidth }}>
        <ul style={{ columnWidth: containerWidth, maxHeight: containerHeight - 50 }}>
          {headlines.map((headline) => (
            <li className="text-2xl text-white py-1" key={headline.id}>
              {headline.title}
            </li>
          ))}
        </ul>

        <div className="flex pt-2 px-2">
          <h3 className="text-yellow-500">
            <ArrowRightIcon />
          </h3>
          <h3 className={componentStyles.headline}>1</h3>
        </div>

        <div className="flex pt-2 px-2">
          <h3 className="text-yellow-500">
            <ArrowRightIcon />
          </h3>
          <h3 className={componentStyles.headline}>2</h3>
        </div>

        <div className="flex pt-2 px-2">
          <h3 className="text-yellow-500">
            <ArrowRightIcon />
          </h3>
          <h2 className={componentStyles.headline}>3</h2>
        </div>
      </div>
    </div>
  );
}

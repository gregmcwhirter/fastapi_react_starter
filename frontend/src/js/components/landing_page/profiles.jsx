import React, { useState } from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import StockChart from '../../../images/sbsw_graph.png';

export default function Profiles() {
  const [card, setCard] = useState(1);

  const handleCardUp = () => {
    if (card === 3) {
      setCard(1);
    } else {
      setCard(card + 1);
    }
  };

  const handleCardDown = () => {
    if (card === 1) {
      setCard(3);
    } else {
      setCard(card - 1);
    }
  };

  return (
    <div className="overflow-y-auto text-gray-200 h-64 px-3" style={{ backgroundColor: '#2b2b2b' }}>
      <div className="text-right">
        <button className="text-xl" aria-label="Next" type="button" onClick={() => handleCardDown()}>
          <ArrowLeftIcon />
        </button>
        <button className="text-xl" aria-label="Next" type="button" onClick={() => handleCardUp()}>
          <ArrowRightIcon />
        </button>
      </div>

      {card === 1 && (
        <div>
          <h2 className="flex-grow text-2xl font-bold">SBSW</h2>
          <h4 className="text-sm">SIBANYE STILLWATER LTD SPON SHSNYSE</h4>
          <div className="py-2">
            <span className="text-xl font-bold">17.44</span>
            <span className="text-sm px-2">USD</span>
            <span className="text-base font-semibold text-red-600 px-2">-0.96</span>
            <span className="text-base font-semibold text-red-600 px-2">(-5.22%)</span>
          </div>
          <h5 className="text-sm">
            <span className="text-green-300">
              <FiberManualRecordIcon style={{ fontSize: 12 }} />
            </span>
            <span className="text-green-300 font-semibold px-2">MARKET CLOSED</span>
            (APRIL 13 16:02 UTC-4)
          </h5>
          <div className="flex py-2">
            <div className="px-3 text-center">
              <h4>2.60</h4>
              <h5 className="text-xs">EPS</h5>
            </div>
            <div className="px-3 text-center">
              <h4>13.593B</h4>
              <h5 className="text-xs">MARKET CAP</h5>
            </div>
            <div className="px-3 text-center">
              <h4>4.26%</h4>
              <h5 className="text-xs">DIV YIELD</h5>
            </div>
            <div className="px-3 text-center">
              <h4>7.04</h4>
              <h5 className="text-xs">P/E</h5>
            </div>
          </div>
          <div className="py-2">
            <img width={425} height={192} src={StockChart} alt="SBSW" />
          </div>
          <h3 className="text-base py-1">
            <span className="font-semibold">Sector:</span>
            Non-Energy Minerals
          </h3>
          <h3 className="text-base py-1">
            <span className="font-semibold">Industry:</span>
            Precious Metals
          </h3>
          <p className="text-sm pt-1 pb-8">
            Sibanye Stillwater Ltd. engages in the provision of precious metals mining services. Its portfolio includes
            the platinum group metal (PGM) operations in the United States, South Africa, and Zimbabwe; gold operations
            and projects in South Africa; and copper, gold and PGM exploration properties in North and South America.
            The company was founded on November 7, 2014 and is headquartered in Weltevreden Park, South Africa.
          </p>
        </div>
      )}

      {card === 2 && (
        <div>
          <h2 className="flex-grow text-2xl font-bold">JRMO</h2>
          <h4 className="text-sm">JACKSON RIVER MINE OPERATIONS JRMO</h4>
          <div className="py-2">
            <span className="text-xl font-bold">27.20</span>
            <span className="text-sm px-2">USD</span>
            <span className="text-base font-semibold text-red-600 px-2">+3.34</span>
            <span className="text-base font-semibold text-red-600 px-2">(+2.5%)</span>
          </div>
          <h5 className="text-sm">
            <span className="text-green-300">
              <FiberManualRecordIcon style={{ fontSize: 12 }} />
            </span>
            <span className="text-green-300 font-semibold px-2">MARKET CLOSED</span>
            (APRIL 13 16:02 UTC-4)
          </h5>
          <div className="flex py-2">
            <div className="px-3 text-center">
              <h4>3.50</h4>
              <h5 className="text-xs">EPS</h5>
            </div>
            <div className="px-3 text-center">
              <h4>1.13B</h4>
              <h5 className="text-xs">MARKET CAP</h5>
            </div>
            <div className="px-3 text-center">
              <h4>0.96%</h4>
              <h5 className="text-xs">DIV YIELD</h5>
            </div>
            <div className="px-3 text-center">
              <h4>6.64</h4>
              <h5 className="text-xs">P/E</h5>
            </div>
          </div>
          <div className="py-2">
            <img width={425} height={192} src={StockChart} alt="SBSW" />
          </div>
          <h3 className="text-base py-1">
            <span className="font-semibold">Sector:</span>
            Non-Energy Minerals
          </h3>
          <h3 className="text-base py-1">
            <span className="font-semibold">Industry:</span>
            Precious Metals
          </h3>
          <p className="text-sm pt-1 pb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar, nisi a congue tincidunt, arcu dui
            consectetur leo, eu hendrerit augue elit in nunc. Ut eget urna sed felis fringilla rutrum laoreet non nisl.
            Morbi eget eleifend ex. Nam accumsan tellus felis, a dictum justo ornare quis. Nam euismod libero vel lorem
            imperdiet, at sollicitudin lacus mattis. Etiam lacinia arcu neque, sed interdum nunc pretium dapibus.
            Vivamus posuere gravida ipsum vitae condimentum. Suspendisse potenti.
          </p>
        </div>
      )}
      {card === 3 && (
        <div>
          <h2 className="flex-grow text-2xl font-bold">BTMO</h2>
          <h4 className="text-sm">BRIGHT MINERAL LOGISTICS BTMO</h4>
          <div className="py-2">
            <span className="text-xl font-bold">4.58</span>
            <span className="text-sm px-2">USD</span>
            <span className="text-base font-semibold text-red-600 px-2">+1.76</span>
            <span className="text-base font-semibold text-red-600 px-2">(+4.66%)</span>
          </div>
          <h5 className="text-sm">
            <span className="text-green-300">
              <FiberManualRecordIcon style={{ fontSize: 12 }} />
            </span>
            <span className="text-green-300 font-semibold px-2">MARKET CLOSED</span>
            (APRIL 13 16:02 UTC-4)
          </h5>
          <div className="flex py-2">
            <div className="px-3 text-center">
              <h4>2.40</h4>
              <h5 className="text-xs">EPS</h5>
            </div>
            <div className="px-3 text-center">
              <h4>0.4M</h4>
              <h5 className="text-xs">MARKET CAP</h5>
            </div>
            <div className="px-3 text-center">
              <h4>2.22%</h4>
              <h5 className="text-xs">DIV YIELD</h5>
            </div>
            <div className="px-3 text-center">
              <h4>3.02</h4>
              <h5 className="text-xs">P/E</h5>
            </div>
          </div>
          <div className="py-2">
            <img width={425} height={192} src={StockChart} alt="SBSW" />
          </div>
          <h3 className="text-base py-1">
            <span className="font-semibold">Sector:</span>
            Non-Energy Minerals
          </h3>
          <h3 className="text-base py-1">
            <span className="font-semibold">Industry:</span>
            Precious Metals
          </h3>
          <p className="text-sm pt-1 pb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar, nisi a congue tincidunt, arcu dui
            consectetur leo, eu hendrerit augue elit in nunc. Ut eget urna sed felis fringilla rutrum laoreet non nisl.
            Morbi eget eleifend ex. Nam accumsan tellus felis, a dictum justo ornare quis. Nam euismod libero vel lorem
            imperdiet, at sollicitudin lacus mattis. Etiam lacinia arcu neque, sed interdum nunc pretium dapibus.
            Vivamus posuere gravida ipsum vitae condimentum. Suspendisse potenti.
          </p>
        </div>
      )}
    </div>
  );
}

import React, { useState } from 'react';
import clsx from 'clsx';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers';
import Button from '@material-ui/core/Button';

export default function Builder() {
  const [view, setView] = useState('TODAY');
  const [programming] = useState([]);
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const renderProgramming = () => {
    console.log('programming:', programming);
    return (
      <div>
        <ul>
          {programming.map((item, index) => {
            const j = index;
            return (
              <li key={item + j} className="flex bg-gray-100 border px-4 py-1 my-1" style={{ color: '#484848' }}>
                <div style={{ width: '40%' }}>
                  <h2 className="pr-4">{item}</h2>
                </div>
                <div className="flex-1">
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardTimePicker
                      margin="normal"
                      id="time-picker"
                      label="Start Time"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change time',
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <div className="flex w-full overflow-y-hidden">
      <div className={clsx(view === 'TODAY' && 'w-2/5', view === 'WEEK' && 'w-3/5')}>
        <div className="flex px-6 py-3">
          <h1 className="pr-4">
            <Button
              variant="contained"
              size="small"
              color={view === 'TODAY' ? 'primary' : 'default'}
              onClick={() => {
                setView('TODAY');
              }}
            >
              Today
            </Button>
          </h1>
          <h1 className="pr-4">
            <Button
              variant="contained"
              size="small"
              color={view === 'WEEK' ? 'primary' : 'default'}
              onClick={() => {
                setView('WEEK');
              }}
            >
              This Week
            </Button>
          </h1>
        </div>

        {view === 'TODAY' && (
          <section className="flex overflow-y-auto" style={{ height: '85vh', backgroundColor: '#363435' }}>
            <div>
              <h1 className="text-gray-200 border-t border-r border-gray-500 px-2 py-2">00:00</h1>
              <h1 className="text-gray-200 border-t border-r border-gray-500 px-2 py-2">01:00</h1>
              <h1 className="text-gray-200 border-t border-r border-gray-500 px-2 py-2">02:00</h1>
              <h1 className="text-gray-200 border-t border-r border-gray-500 px-2 py-2">03:00</h1>
              <h1 className="text-gray-200 border-t border-r border-gray-500 px-2 py-2">04:00</h1>
              <h1 className="text-gray-200 border-t border-r border-gray-500 px-2 py-2">05:00</h1>
              <h1 className="text-gray-200 border-t border-r border-gray-500 px-2 py-2">06:00</h1>
              <h1 className="text-gray-200 border-t border-r border-gray-500 px-2 py-2">07:00</h1>
              <h1 className="text-gray-200 border-t border-r border-gray-500 px-2 py-2">08:00</h1>
              <h1 className="text-gray-200 border-t border-r border-gray-500 px-2 py-2">09:00</h1>
              <h1 className="text-gray-200 border-t border-r border-gray-500 px-2 py-2">10:00</h1>
              <h1 className="text-gray-200 border-t border-r border-gray-500 px-2 py-2">11:00</h1>
              <h1 className="text-gray-200 border-t border-r border-gray-500 px-2 py-2">12:00</h1>
              <h1 className="text-gray-200 border-t border-r border-gray-500 px-2 py-2">13:00</h1>
              <h1 className="text-gray-200 border-t border-r border-gray-500 px-2 py-2">14:00</h1>
              <h1 className="text-gray-200 border-t border-r border-gray-500 px-2 py-2">15:00</h1>
              <h1 className="text-gray-200 border-t border-r border-gray-500 px-2 py-2">16:00</h1>
              <h1 className="text-gray-200 border-t border-r border-gray-500 px-2 py-2">17:00</h1>
              <h1 className="text-gray-200 border-t border-r border-gray-500 px-2 py-2">18:00</h1>
              <h1 className="text-gray-200 border-t border-r border-gray-500 px-2 py-2">19:00</h1>
              <h1 className="text-gray-200 border-t border-r border-gray-500 px-2 py-2">20:00</h1>
              <h1 className="text-gray-200 border-t border-r border-gray-500 px-2 py-2">21:00</h1>
              <h1 className="text-gray-200 border-t border-r border-gray-500 px-2 py-2">22:00</h1>
              <h1 className="text-gray-200 border-t border-r border-gray-500 px-2 py-2">23:00</h1>
            </div>
            <div className="px-4 py-2">{renderProgramming()}</div>
          </section>
        )}
      </div>
      <div className="flex-1 overflow-y-auto p-4 text-gray-100" style={{ height: '95vh' }}>
        <div className="w-full pb-3" style={{ backgroundColor: '#363435' }}>
          <div className="flex py-2">
            <h1 className="p-2 pt-0 text-lg">Video</h1>
            <div className="flex-1 text-right pr-4">
              <Button variant="contained" color="primary" size="small">
                New
              </Button>
            </div>
          </div>
          <div className="mx-20 my-4">
            <div className="border border-dashed border-gray-400 py-8 text-center">Empty</div>
          </div>
        </div>

        <div className="h-4" />

        <div className="w-full pb-3" style={{ backgroundColor: '#363435' }}>
          <div className="flex py-2">
            <h1 className="p-2 pt-0 text-lg">NewsFeed</h1>
            <div className="flex-1 text-right pr-4">
              <Button variant="contained" color="primary" size="small">
                New
              </Button>
            </div>
          </div>
          <div className="mx-20 my-4">
            <div className="border border-dashed border-gray-400 py-8 text-center">Empty</div>
          </div>
        </div>

        <div className="h-4" />

        <div className="w-full pb-3" style={{ backgroundColor: '#363435' }}>
          <div className="flex py-2">
            <h1 className="p-2 pt-0 text-lg">Discussion Threads</h1>
            <div className="flex-1 text-right pr-4">
              <Button variant="contained" color="primary" size="small">
                New
              </Button>
            </div>
          </div>
          <div className="mx-20 my-4">
            <div className="border border-dashed border-gray-400 py-8 text-center">Empty</div>
          </div>
        </div>

        <div className="h-4" />

        <div className="w-full pb-3" style={{ backgroundColor: '#363435' }}>
          <div className="flex py-2">
            <h1 className="p-2 pt-0 text-lg">Profile</h1>
            <div className="flex-1 text-right pr-4">
              <Button variant="contained" color="primary" size="small">
                New
              </Button>
            </div>
          </div>
          <div className="mx-20 my-4">
            <div className="border border-dashed border-gray-400 py-8 text-center">Empty...</div>
          </div>
        </div>
        <div className="h-4" />
        <div className="w-full pb-3" style={{ backgroundColor: '#363435' }}>
          <h1 className="p-2 pt-0 text-lg">Tags</h1>
          <div className="flex px-8 py-2">
            <div
              style={{
                backgroundColor: 'goldenrod',
                padding: '2px 8px',
                marginRight: 6,
                fontSize: 14,
              }}
            >
              Gold
            </div>
            <div
              style={{
                backgroundColor: '#6495ED',
                padding: '2px 8px',
                marginRight: 6,
                fontSize: 14,
              }}
            >
              Silver
            </div>
            <div
              style={{
                backgroundColor: '#6960EC',
                padding: '2px 8px',
                marginRight: 6,
                fontSize: 14,
              }}
            >
              Copper
            </div>
            <div
              style={{
                backgroundColor: '#307D7E',
                padding: '2px 8px',
                marginRight: 6,
                fontSize: 14,
              }}
            >
              Iron
            </div>
            <div
              style={{
                backgroundColor: '#FFA500',
                padding: '2px 8px',
                marginRight: 6,
                fontSize: 14,
              }}
            >
              South America
            </div>
            <div
              style={{
                backgroundColor: '#347C17',
                padding: '2px 8px',
                marginRight: 6,
                fontSize: 14,
              }}
            >
              Africa
            </div>
            <div
              style={{
                backgroundColor: '#E56717',
                padding: '2px 8px',
                marginRight: 6,
                fontSize: 14,
              }}
            >
              Metals Inc.
            </div>
            <div
              style={{
                backgroundColor: '#8C001A',
                padding: '2px 8px',
                marginRight: 6,
                fontSize: 14,
              }}
            >
              Sovereign Fund
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

type ClockProps = {
  className?: string;
}


const Clock = ({ className }: ClockProps) => {
  const [currentTime, setCurrentTime] = useState('');
  const path = usePathname();

  useEffect(() => {
    // Function to update current time
    const updateTime = () => {
      setCurrentTime(getCurrentTimeInLosAngeles());
    };

    // Update time every second
    const intervalId = setInterval(updateTime, 1000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once

  // Function to get current time in Los Angeles
  function getCurrentTimeInLosAngeles() {
    const losAngelesTime = new Date().toLocaleTimeString('en-US', {
      timeZone: 'America/Los_Angeles'
    });
    return losAngelesTime;
  }

  // Update time immediately after component mounts to avoid initial rendering without time
  useEffect(() => {
    setCurrentTime(getCurrentTimeInLosAngeles());
  }, []);

  return (
    <div>
      {currentTime && (
        <div>
          <p className={`text-p-lg lg:text-head ${path === '/contact' ? 'text-slate' : 'text-stone'}`}>{currentTime}</p>
          <p className={`text-p lg:text-p-lg ${path === '/contact' ? 'text-white' : ''}`}>
            in Los Angeles, California
          </p>
        </div>
      )}
    </div>
  );
};

export default Clock;

;


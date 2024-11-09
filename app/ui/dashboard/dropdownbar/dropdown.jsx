'use client'
import React, { useState } from 'react';
import styles from './dropdown.module.css';

const Dropdown = () => {
  const [timeframe, setTimeframe] = useState('All-time');
  const [people, setPeople] = useState('All');
  const [topic, setTopic] = useState('All');

  const handleTimeframeChange = (event) => {
    setTimeframe(event.target.value);
  };

  const handlePeopleChange = (event) => {
    setPeople(event.target.value);
  };

  const handleTopicChange = (event) => {
    setTopic(event.target.value);
  };

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdownWrapper}>
        <select id="timeframe" className={styles.dropdown} value={timeframe} onChange={handleTimeframeChange}>
          <option value="All-time"><p>Timeframe:</p>All-time</option>
          <option value="Past Week">Past Week</option>
          <option value="Past Month">Past Month</option>
        </select>
      </div>

      <div className={styles.dropdownWrapper}>
        <select id="people" className={styles.dropdown} value={people} onChange={handlePeopleChange}>
          <option value="All"><p>People:</p>All</option>
          <option value="Someone">Someone</option>
          <option value="Another">Another</option>
        </select>
      </div>

      <div className={styles.dropdownWrapper}>
        <select id="topic" className={styles.dropdown} value={topic} onChange={handleTopicChange}>
          <option value="All"><p>Topic:</p>All</option>
          <option value="Technology">Technology</option>
          <option value="Science">Science</option>
        </select>
      </div>
    </div>
  );
};

export default Dropdown;

import React from 'react';

function StatsCard({ stat, index }) {
  return (
    <article className={`stat-card ${index % 2 === 0 ? 'accent' : ''}`}>
      <div className="stat-card-top">
        <span>{stat.title}</span>
        <span className={`trend ${stat.growth.startsWith('+') ? 'up' : 'down'}`}>{stat.growth}</span>
      </div>
      <h3>{stat.value}</h3>
      {stat.progress ? (
        <div className="progress-wrapper">
          <div className="progress-bar">
            <div style={{ width: `${stat.progress}%` }}></div>
          </div>
          <small>{stat.progress}% of target</small>
        </div>
      ) : null}
    </article>
  );
}

export default StatsCard;

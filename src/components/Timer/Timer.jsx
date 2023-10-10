const Timer = () => {
  return (
    <div>
      <div className="stats stats-vertical md:stats-horizontal lg:stats-horizontal shadow">
  
  <div className="stat">
    <div className="stat-title">Purchases</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">Sept 1st - Oct 1st</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">New Users</div>
    <div className="stat-value">4,200</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat">
    <div className="stat-title">New Registers</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
    </div>
  );
};

export default Timer;

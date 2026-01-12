import StatCard from "./StatCard";
import Charts from "./Charts";
import { stats } from "../data/dashboardData";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Analytics Dashboard</h2>

      <div className="stats-grid">
        {stats.map((item, index) => (
          <StatCard key={index} title={item.title} value={item.value} />
        ))}
      </div>

      <Charts />
    </div>
  );
};

export default Dashboard;

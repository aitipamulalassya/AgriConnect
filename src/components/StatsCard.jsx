import React from 'react';

const StatsCard = ({ title, value, icon, color = 'bg-blue-100', textColor = 'text-blue-800' }) => {
  return (
    <div className={`${color} p-6 rounded-lg shadow`}>
      <div className="flex items-center">
        {icon && <div className="mr-4">{icon}</div>}
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className={`text-2xl font-semibold ${textColor}`}>{value}</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
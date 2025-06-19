
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Zap } from 'lucide-react';

const LiveActivity = () => {
  const [currentCount, setCurrentCount] = useState(1045);
  const [recentActivities] = useState([
    { name: "Rahul", city: "Chennai", time: "2m ago" },
    { name: "Priya", city: "Mumbai", time: "4m ago" },
    { name: "Arjun", city: "Delhi", time: "6m ago" },
    { name: "Sneha", city: "Bangalore", time: "8m ago" },
    { name: "Vikram", city: "Pune", time: "10m ago" },
  ]);

  // Simulate live counter updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      {/* Live Counter */}
      <Card className="border border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
        <CardContent className="p-4">
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <Users className="w-5 h-5 text-green-600" />
            <span className="text-lg font-semibold text-green-800">
              {currentCount.toLocaleString()} people joined today!
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity Ticker */}
      <Card className="border border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-800">Recent Activity</span>
          </div>
          
          <div className="space-y-2 max-h-32 overflow-hidden">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                  {activity.name[0]}
                </div>
                <div className="flex-1">
                  <span className="text-gray-700">
                    <strong>{activity.name}</strong> from {activity.city} just entered
                  </span>
                  <div className="text-xs text-gray-500">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LiveActivity;

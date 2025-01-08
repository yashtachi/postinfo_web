import React from 'react';
import { Activity } from 'lucide-react';
import { BarChart as BarChartIcon } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, ResponsiveContainer } from 'recharts';
import type { PerformanceData } from '../types';

const performanceData: PerformanceData[] = [
  {
    region: "North Zone",
    metrics: {
      deliveryTime: 92,
      customerSatisfaction: 88,
      complaintResolution: 95,
      waitTime: 85
    }
  },
  {
    region: "South Zone",
    metrics: {
      deliveryTime: 94,
      customerSatisfaction: 90,
      complaintResolution: 93,
      waitTime: 88
    }
  },
  {
    region: "East Zone",
    metrics: {
      deliveryTime: 89,
      customerSatisfaction: 87,
      complaintResolution: 91,
      waitTime: 82
    }
  },
  {
    region: "West Zone",
    metrics: {
      deliveryTime: 91,
      customerSatisfaction: 89,
      complaintResolution: 94,
      waitTime: 86
    }
  }
];

const monthlyTrends = [
  { month: 'Jan', deliveryTime: 90, satisfaction: 85 },
  { month: 'Feb', deliveryTime: 88, satisfaction: 87 },
  { month: 'Mar', deliveryTime: 92, satisfaction: 89 },
  { month: 'Apr', deliveryTime: 91, satisfaction: 88 },
  { month: 'May', deliveryTime: 93, satisfaction: 90 },
  { month: 'Jun', deliveryTime: 95, satisfaction: 92 }
];

export function PerformanceDashboard() {
  const chartData = performanceData.map(region => ({
    name: region.region,
    ...region.metrics
  }));

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-2 mb-6">
          <BarChartIcon className="text-blue-600" />
          <h2 className="text-2xl font-semibold">Regional Performance Metrics</h2>
        </div>
        
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="deliveryTime" fill="#3B82F6" name="Delivery Time" />
              <Bar dataKey="customerSatisfaction" fill="#10B981" name="Customer Satisfaction" />
              <Bar dataKey="complaintResolution" fill="#6366F1" name="Complaint Resolution" />
              <Bar dataKey="waitTime" fill="#F59E0B" name="Wait Time" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Activity className="text-green-600" />
          <h2 className="text-2xl font-semibold">Monthly Trends</h2>
        </div>
        
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="deliveryTime" stroke="#3B82F6" name="Delivery Time" />
              <Line type="monotone" dataKey="satisfaction" stroke="#10B981" name="Satisfaction" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
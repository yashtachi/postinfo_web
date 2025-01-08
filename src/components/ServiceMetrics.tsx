import React from 'react';
import { Clock, Users, MessageSquare, Timer } from 'lucide-react';
import type { ServiceMetric } from '../types';

const metrics: ServiceMetric[] = [
  {
    id: '1',
    name: 'Average Delivery Time',
    target: 48,
    current: 45,
    unit: 'hours'
  },
  {
    id: '2',
    name: 'Customer Satisfaction',
    target: 90,
    current: 88,
    unit: '%'
  },
  {
    id: '3',
    name: 'Complaint Resolution',
    target: 24,
    current: 22,
    unit: 'hours'
  },
  {
    id: '4',
    name: 'Average Wait Time',
    target: 15,
    current: 12,
    unit: 'minutes'
  }
];

const getIcon = (name: string) => {
  switch (name) {
    case 'Average Delivery Time':
      return <Clock className="text-blue-600" />;
    case 'Customer Satisfaction':
      return <Users className="text-green-600" />;
    case 'Complaint Resolution':
      return <MessageSquare className="text-purple-600" />;
    case 'Average Wait Time':
      return <Timer className="text-orange-600" />;
    default:
      return null;
  }
};

export function ServiceMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => (
        <div key={metric.id} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-2 mb-4">
            {getIcon(metric.name)}
            <h3 className="font-semibold">{metric.name}</h3>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold">
              {metric.current}
              <span className="text-sm text-gray-500 ml-1">{metric.unit}</span>
            </div>
            <p className="text-sm text-gray-500">
              Target: {metric.target} {metric.unit}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
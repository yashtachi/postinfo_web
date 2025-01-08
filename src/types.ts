export interface ServiceMetric {
  id: string;
  name: string;
  target: number;
  current: number;
  unit: string;
}

export interface TrackingStatus {
  id: string;
  status: 'processing' | 'in-transit' | 'delivered' | 'delayed';
  location: string;
  timestamp: string;
  expectedDelivery: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface PerformanceData {
  region: string;
  metrics: {
    deliveryTime: number;
    customerSatisfaction: number;
    complaintResolution: number;
    waitTime: number;
  };
}

export interface ComplaintData {
  type: string;
  description: string;
  trackingId: string;
  contactPreference: 'email' | 'sms';
}
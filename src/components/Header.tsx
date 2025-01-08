import React from 'react';
import { Mail } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-blue-700 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Mail size={24} />
            <h1 className="text-xl font-bold">Department of Posts</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#dashboard" className="hover:text-blue-200">Dashboard</a></li>
              <li><a href="#track" className="hover:text-blue-200">Track Service</a></li>
              <li><a href="#performance" className="hover:text-blue-200">Performance</a></li>
              <li><a href="#complaints" className="hover:text-blue-200">File Complaint</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
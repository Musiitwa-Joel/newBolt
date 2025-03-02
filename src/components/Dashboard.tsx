import React from 'react';
import { Users, Calendar, TrendingUp, BookOpen } from 'lucide-react';

const Dashboard = () => {
  return (
    <section id="dashboard" className="section-padding bg-black relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-24">
          <span className="text-sm font-medium tracking-widest text-white/60 uppercase">Dashboard</span>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mt-4 tracking-tight">
            Beautiful analytics.
            <br />
            At your fingertips.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute -inset-x-20 -inset-y-20 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-cyan-500/30 blur-3xl opacity-20 rounded-[3rem]"></div>
          
          <div className="relative bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 p-8 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="stats-card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white/80 font-medium">Students</h3>
                  <Users className="h-5 w-5 text-white/60" />
                </div>
                <p className="text-3xl font-semibold text-white mb-2">1,234</p>
                <p className="text-white/60 text-sm flex items-center">
                  <TrendingUp className="h-4 w-4 mr-1" /> +12% this month
                </p>
              </div>

              <div className="stats-card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white/80 font-medium">Courses</h3>
                  <BookOpen className="h-5 w-5 text-white/60" />
                </div>
                <p className="text-3xl font-semibold text-white mb-2">86</p>
                <p className="text-white/60 text-sm">Active sessions</p>
              </div>

              <div className="stats-card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white/80 font-medium">Revenue</h3>
                  <span className="text-2xl text-white/60">$</span>
                </div>
                <p className="text-3xl font-semibold text-white mb-2">284.5k</p>
                <p className="text-white/60 text-sm flex items-center">
                  <TrendingUp className="h-4 w-4 mr-1" /> +8% this month
                </p>
              </div>

              <div className="stats-card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white/80 font-medium">Events</h3>
                  <Calendar className="h-5 w-5 text-white/60" />
                </div>
                <p className="text-3xl font-semibold text-white mb-2">12</p>
                <p className="text-white/60 text-sm">Next 7 days</p>
              </div>
            </div>

            <div className="mt-8">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                alt="Analytics Dashboard"
                className="rounded-2xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
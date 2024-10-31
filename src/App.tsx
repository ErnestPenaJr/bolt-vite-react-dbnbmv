import React, { useState } from 'react';
import { Menu, X, Home, Bell, FileText, Settings, Target, LogOut } from 'lucide-react';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0F3F9] to-[#DAEDE4] dark:from-[#393939] dark:to-[#393939] flex">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-white dark:bg-gray-800 transition-all duration-300 shadow-lg fixed h-full`}>
        <div className="p-4 flex justify-between items-center">
          {isSidebarOpen && (
            <h2 className="text-2xl font-bold text-[#2EBCBC]">Dashboard</h2>
          )}
          <button onClick={toggleSidebar} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
            {isSidebarOpen ? <X className="w-6 h-6 text-gray-500" /> : <Menu className="w-6 h-6 text-gray-500" />}
          </button>
        </div>
        
        <nav className="mt-8">
          <NavItem icon={<Home />} text="Home" isOpen={isSidebarOpen} isActive={true} />
          <NavItem icon={<Bell />} text="Notices" isOpen={isSidebarOpen} />
          <NavItem icon={<FileText />} text="Requests" isOpen={isSidebarOpen} />
          <NavItem icon={<Settings />} text="Settings" isOpen={isSidebarOpen} />
          <NavItem icon={<Target />} text="Goals" isOpen={isSidebarOpen} />
          
          <div className="absolute bottom-8 w-full">
            <NavItem icon={<LogOut />} text="Logout" isOpen={isSidebarOpen} />
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 ${isSidebarOpen ? 'ml-64' : 'ml-20'} transition-all duration-300 p-8`}>
        <div className="max-w-7xl mx-auto">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Welcome Back, User!</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Here's what's happening with your projects today.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Stats Cards */}
            <StatsCard title="Total Projects" value="12" change="+2.5%" />
            <StatsCard title="Active Tasks" value="25" change="+5.0%" />
            <StatsCard title="Completed" value="18" change="+3.2%" />
          </div>

          {/* Recent Activity */}
          <section className="mt-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Recent Activity</h2>
            <div className="space-y-4">
              <ActivityItem 
                title="New Project Created"
                description="Project X has been created by Team Alpha"
                time="2 hours ago"
              />
              <ActivityItem 
                title="Task Completed"
                description="Homepage redesign has been completed"
                time="5 hours ago"
              />
              <ActivityItem 
                title="New Comment"
                description="John left a comment on Project Y"
                time="1 day ago"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

interface NavItemProps {
  icon: React.ReactNode;
  text: string;
  isOpen: boolean;
  isActive?: boolean;
}

function NavItem({ icon, text, isOpen, isActive }: NavItemProps) {
  return (
    <a
      href="#"
      className={`flex items-center px-4 py-3 ${
        isActive 
          ? 'bg-[#2EBCBC] text-white' 
          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
      } transition-colors duration-200`}
    >
      <span className="w-6 h-6">{icon}</span>
      {isOpen && <span className="ml-4 font-medium">{text}</span>}
    </a>
  );
}

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
}

function StatsCard({ title, value, change }: StatsCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">{title}</h3>
      <div className="mt-2 flex items-baseline">
        <p className="text-2xl font-semibold text-gray-900 dark:text-white">{value}</p>
        <span className="ml-2 text-sm font-medium text-green-600">{change}</span>
      </div>
    </div>
  );
}

interface ActivityItemProps {
  title: string;
  description: string;
  time: string;
}

function ActivityItem({ title, description, time }: ActivityItemProps) {
  return (
    <div className="flex items-start space-x-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200">
      <div className="flex-1">
        <h4 className="text-sm font-medium text-gray-900 dark:text-white">{title}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
      </div>
      <span className="text-xs text-gray-400">{time}</span>
    </div>
  );
}

export default App;
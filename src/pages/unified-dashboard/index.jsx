import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header.jsx';
 
import WelcomeHeader from './components/WelcomeHeader.jsx';
import QuickStatsGrid from './components/QuickStatsGrid';
import QuickActionsPanel from './components/QuickActionsPanel';
import RecentActivityFeed from './components/RecentActivityFeed';
 
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";

const UnifiedDashboard = () => {


  const loggedUser = useSelector(state => state?.user?.loggedUser);
  const userRole = loggedUser?.role // Default to 'patient' if not set
  const [currentTime, setCurrentTime] = useState('');

  // console.log(loggedUser)


  // Mock stats data
  const mockStats = {
    patient: {
      upcomingAppointments: '3',
      pendingResults: '2',
      prescriptionsDue: '1',
      healthScore: '85%'
    },
    doctor: {
      todaysPatients: '12',
      pendingReviews: '8',
      teleconsultations: '5',
      satisfaction: '4.8'
    },
    admin: {
      bedOccupancy: '78%',
      staffOnDuty: '145',
      inventoryAlerts: '6',
      revenueToday: '$24.5K'
    },
    government: {
      activeFacilities: '127',
      diseaseAlerts: '3',
      resourceUtilization: '82%',
      policyCompliance: '94%'
    }
  };

  useEffect(() => {
    // Update current time
    const updateTime = () => {
      const now = new Date();
      const timeString = now?.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);



  const handleActionClick = (action) => {
    if (action?.id === 'emergency' || action?.id === 'emergency-coord') {
      alert(`Emergency protocol activated for ${userData?.[userRole]?.name}. Emergency services have been notified.`);
    }
  };

  const handleSidebarToggle = (collapsed) => {
    setSidebarCollapsed(collapsed);
  };


  return (
    <div className="min-h-screen bg-slate-50">



      <Header />
   {userRole!='admin' &&  <div className='w-full relative h-screen '>
   

<div className='w-full absolute top-16 h-screen z-40 flex justify-start px-8 items-center gap-5 py-2 flex-col text-3xl'>

  <motion.div 
    className='w-full mt-40'
    initial={{ opacity: 0, x: 80 }}   // slide from left
    animate={{ opacity: 1, x: 0 }}     // move to normal
    transition={{ duration: 0.5, delay: 0.1 }}
  >
    <p className='text-black'>Arogya Mitra</p>
    <div className='w-[80%] h-1 bg-black/50 rounded-full'></div>
  </motion.div>

  {/* TEXT SECTION */}
  <motion.div 
    className='w-full flex flex-col gap-5'
    initial={{ opacity: 0, x: 120 }}   // deeper slide from left
    animate={{ opacity: 1, x: 0 }}      // slide into place
    transition={{ duration: 0.6, delay: 0.3 }}
  >
    <p className='text-7xl font-serif text-white'>
      Your Health, Our Priority.
    </p>

    <p className='text-3xl font-serif text-white'>
      Simplifying Care with Trusted Care.
    </p>
  </motion.div>

</div>

        <motion.img
    className='object-cover z-10 w-full h-full filter brightness-75'
    src="/assets/images/hospitall.jpg"
    alt="hospital"
    initial={{ scale: 1.3 }}      // start zoomed in
    animate={{ scale: 1 }}        // zoom out to normal
    transition={{ duration: 1.5 }}  // smooth slow effect
  />

    </div>}
      {/* <Sidebar isCollapsed={sidebarCollapsed} onToggle={handleSidebarToggle} /> */}
      <main className={`pt-16 healthcare-transition `}>
        <div className="p-6 space-y-6">
          {/* Role Switcher - Demo Purpose */}
          {/* <div className="bg-white p-4 rounded-lg border border-slate-200 healthcare-shadow">

            {userRole}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-text-secondary">Demo: Switch User Role</span>
              <div className="flex space-x-2">
                {['patient', 'doctor', 'admin', 'government']?.map((role) => (
                  <button
                    key={role}
                    onClick={() => handleRoleChange(role)}
                    className={`px-3 py-1 text-xs font-medium rounded-full healthcare-transition ${userRole === role
                        ? 'bg-primary text-white' : 'bg-muted text-text-secondary hover:bg-slate-200'
                      }`}
                  >
                    {role?.charAt(0)?.toUpperCase() + role?.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div> */}

          {/* Welcome Header */}
          <WelcomeHeader
            userRole={userRole}
            userName={loggedUser?.name || 'User'}
            currentTime={currentTime}
          />

          {/* Quick Stats and Actions Panel */}
          <div className=' flex flex-col  gap-6'>
            <QuickStatsGrid
              userRole={userRole}
              stats={loggedUser?.user?.[userRole]}
            />


            <QuickActionsPanel
              userRole={userRole}
              onActionClick={handleActionClick}
            />
          </div>


          {/* Main Content Grid */}
          <div className="w-full">




            {/* Recent Activity */}
            <RecentActivityFeed
              userRole={userRole}
              activities={[]}
            />

            {/* System Status */}
            {/* <SystemStatusPanel
                userRole={userRole}
                systemStatus={{}}
              /> */}


            {/* Right Column */}
            {/* <div className="space-y-6"> */}
            {/* Upcoming Schedule */}
            {/* <UpcomingSchedule
                userRole={userRole}
                scheduleItems={[]}
              /> */}

            {/* Notification Center */}
            {/* <NotificationCenter
                userRole={userRole}
                notifications={[]}
              /> */}
            {/* </div> */}
          </div>

          {/* Emergency Contact Bar */}
          {/* <div className="bg-gradient-to-r from-destructive to-red-700 p-4 rounded-xl text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-lg font-bold">911</span>
                </div>
                <div>
                  <h3 className="font-semibold">Emergency Services</h3>
                  <p className="text-sm opacity-90">24/7 immediate assistance available</p>
                </div>
              </div>
              <button className="bg-white text-destructive px-6 py-2 rounded-lg font-medium hover:bg-white/90 healthcare-transition">
                Call Now
              </button>
            </div>
          </div> */}
        </div>
      </main>
    </div>
  );
};

export default UnifiedDashboard;
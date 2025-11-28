import React from 'react';
import { LayoutDashboard, Settings, Activity, CreditCard, Bell, Search } from 'lucide-react';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-slate-200 fixed h-full z-20 hidden md:flex flex-col">
                <div className="h-16 flex items-center px-6 border-b border-slate-200">
                    <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold shadow-indigo-200 shadow-lg mr-3">
                        <Activity size={20} />
                    </div>
                    <span className="font-bold text-lg text-slate-800 tracking-tight">Retry<span className="text-indigo-600">Flow</span></span>
                </div>

                <nav className="flex-1 px-4 py-6 space-y-1">
                    <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg bg-indigo-50 text-indigo-700">
                        <LayoutDashboard size={18} />
                        Dashboard
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                        <Settings size={18} />
                        Configuration
                    </a>
                    <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                        <CreditCard size={18} />
                        Transactions
                    </a>
                </nav>

                <div className="p-4 border-t border-slate-200">
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" className="w-9 h-9 rounded-full border border-slate-200" />
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-slate-900 truncate">Felix Admin</p>
                            <p className="text-xs text-slate-500 truncate">felix@merchant.com</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
                <header className="h-16 bg-white border-b border-slate-200 sticky top-0 z-10 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    <div className="flex items-center md:hidden">
                        {/* Mobile menu button placeholder */}
                        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold mr-2">R</div>
                        <span className="font-bold text-lg text-slate-800">RetryFlow</span>
                    </div>

                    <div className="hidden md:flex items-center max-w-md w-full">
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search size={16} className="text-slate-400" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors"
                                placeholder="Search transactions, rules..."
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="p-2 text-slate-400 hover:text-slate-600 relative">
                            <Bell size={20} />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>
                    </div>
                </header>

                <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
                    <div className="max-w-6xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Layout;

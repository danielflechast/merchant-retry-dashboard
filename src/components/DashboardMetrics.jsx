import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, RefreshCw, Activity, CheckCircle } from 'lucide-react';

const MetricCard = ({ title, value, change, trend, icon: Icon, color }) => (
    <div className="card p-5 flex items-start justify-between">
        <div>
            <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{value}</h3>
            <div className={`flex items-center mt-2 text-xs font-medium ${trend === 'up' ? 'text-emerald-600' : 'text-rose-600'}`}>
                {trend === 'up' ? <TrendingUp size={14} className="mr-1" /> : <TrendingDown size={14} className="mr-1" />}
                <span>{change}</span>
                <span className="text-slate-400 font-normal ml-1">vs last month</span>
            </div>
        </div>
        <div className={`p-3 rounded-xl ${color}`}>
            <Icon size={22} className="text-white" />
        </div>
    </div>
);

const DashboardMetrics = ({ metrics }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <MetricCard
                title="Recovered Revenue"
                value={`$${metrics.recoveredRevenue.toLocaleString()}`}
                change="+12.5%"
                trend="up"
                icon={DollarSign}
                color="bg-indigo-500 shadow-lg shadow-indigo-100"
            />
            <MetricCard
                title="Recovery Rate"
                value={`${metrics.recoveryRate.toFixed(1)}%`}
                change="+5.2%"
                trend="up"
                icon={Activity}
                color="bg-emerald-500 shadow-lg shadow-emerald-100"
            />
            <MetricCard
                title="Total Retries"
                value={metrics.totalRetries}
                change="-8.1%"
                trend="down"
                icon={RefreshCw}
                color="bg-blue-500 shadow-lg shadow-blue-100"
            />
            <MetricCard
                title="Projected Success"
                value={`${metrics.projectedSuccessRate.toFixed(1)}%`}
                change="+2.1%"
                trend="up"
                icon={CheckCircle}
                color="bg-violet-500 shadow-lg shadow-violet-100"
            />
        </div>
    );
};

export default DashboardMetrics;

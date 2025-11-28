import React from 'react';
import { PAYMENT_FAILURE_TYPES } from '../data/mockData';
import { AlertCircle, Clock, Zap, BarChart2, ShieldAlert, WifiOff, ServerOff } from 'lucide-react';

const getIconForType = (typeId) => {
    switch (typeId) {
        case 'insufficient_funds': return <AlertCircle className="text-amber-500" />;
        case 'gateway_timeout': return <ServerOff className="text-rose-500" />;
        case 'network_error': return <WifiOff className="text-slate-500" />;
        case 'fraud_suspicion': return <ShieldAlert className="text-purple-500" />;
        default: return <AlertCircle className="text-slate-500" />;
    }
};

const RetryConfigForm = ({ config, onConfigChange }) => {
    const handleChange = (typeId, field, value) => {
        onConfigChange({
            ...config,
            [typeId]: {
                ...config[typeId],
                [field]: value,
            },
        });
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold text-slate-900">Retry Rules</h2>
                    <p className="text-sm text-slate-500">Configure how your system handles payment failures.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {PAYMENT_FAILURE_TYPES.map((type) => {
                    const rule = config[type.id];
                    const isEnabled = rule.enabled;

                    return (
                        <div key={type.id} className={`card overflow-hidden transition-all duration-300 ${isEnabled ? 'border-indigo-200 shadow-indigo-50/50' : 'opacity-80'}`}>
                            <div className="p-6">
                                <div className="flex items-start justify-between">
                                    <div className="flex items-start gap-4">
                                        <div className={`p-3 rounded-xl ${isEnabled ? 'bg-indigo-50' : 'bg-slate-100'}`}>
                                            {getIconForType(type.id)}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-slate-900">{type.label}</h3>
                                            <p className="text-sm text-slate-500 max-w-md">{type.description}</p>
                                        </div>
                                    </div>

                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={isEnabled}
                                            onChange={(e) => handleChange(type.id, 'enabled', e.target.checked)}
                                        />
                                        <div className="w-14 h-7 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-indigo-600"></div>
                                    </label>
                                </div>

                                {isEnabled && (
                                    <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
                                        <div className="space-y-2">
                                            <label className="flex items-center text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                                <Zap size={14} className="mr-1.5" /> Max Retries
                                            </label>
                                            <div className="relative">
                                                <select
                                                    value={rule.maxRetries}
                                                    onChange={(e) => handleChange(type.id, 'maxRetries', parseInt(e.target.value))}
                                                    className="block w-full pl-3 pr-10 py-2.5 text-sm border-slate-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg bg-slate-50 hover:bg-white transition-colors cursor-pointer"
                                                >
                                                    {[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n} attempts</option>)}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="flex items-center text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                                <Clock size={14} className="mr-1.5" /> Interval
                                            </label>
                                            <div className="relative flex items-center">
                                                <input
                                                    type="number"
                                                    value={rule.interval}
                                                    onChange={(e) => handleChange(type.id, 'interval', parseInt(e.target.value))}
                                                    className="block w-full pl-3 pr-12 py-2.5 text-sm border-slate-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-lg bg-slate-50 hover:bg-white transition-colors"
                                                />
                                                <span className="absolute right-3 text-xs text-slate-400 font-medium">hours</span>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="flex items-center text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                                <BarChart2 size={14} className="mr-1.5" /> Strategy
                                            </label>
                                            <div className="relative">
                                                <select
                                                    value={rule.strategy}
                                                    onChange={(e) => handleChange(type.id, 'strategy', e.target.value)}
                                                    className="block w-full pl-3 pr-10 py-2.5 text-sm border-slate-200 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg bg-slate-50 hover:bg-white transition-colors cursor-pointer"
                                                >
                                                    <option value="immediate">Immediate Retry</option>
                                                    <option value="exponential">Exponential Backoff</option>
                                                    <option value="smart">Smart Retry (AI)</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RetryConfigForm;

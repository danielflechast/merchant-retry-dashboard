import React from 'react';
import { Sparkles, ArrowRight, PieChart } from 'lucide-react';

const SimulationWidget = ({ metrics }) => {
    const totalPotential = metrics.recoveredRevenue * (100 / metrics.recoveryRate || 1);
    const lostRevenue = totalPotential - metrics.recoveredRevenue;

    const recoveredPercent = metrics.recoveryRate || 0;
    const lostPercent = 100 - recoveredPercent;

    return (
        <div className="card h-full flex flex-col">
            <div className="p-6 border-b border-slate-100">
                <div className="flex items-center gap-2 mb-1">
                    <PieChart size={20} className="text-indigo-600" />
                    <h3 className="text-lg font-bold text-slate-900">Impact Simulation</h3>
                </div>
                <p className="text-sm text-slate-500">Projected outcome based on current rules.</p>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-8">
                <div>
                    <div className="flex justify-between items-end mb-4">
                        <div>
                            <span className="text-sm font-medium text-slate-500 block mb-1">Revenue Recovery</span>
                            <span className="text-3xl font-bold text-slate-900">{metrics.recoveryRate.toFixed(1)}%</span>
                        </div>
                        <div className="text-right">
                            <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
                                +${metrics.recoveredRevenue.toLocaleString()}
                            </span>
                        </div>
                    </div>

                    <div className="relative h-6 bg-slate-100 rounded-full overflow-hidden flex mb-3">
                        <div
                            className="bg-gradient-to-r from-indigo-500 to-indigo-600 h-full shadow-sm transition-all duration-700 ease-out relative group"
                            style={{ width: `${recoveredPercent}%` }}
                        >
                            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                        <div
                            className="bg-slate-200 h-full transition-all duration-700 ease-out"
                            style={{ width: `${lostPercent}%` }}
                        ></div>
                    </div>

                    <div className="flex justify-between text-xs font-medium text-slate-500">
                        <div className="flex items-center gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
                            Recovered
                        </div>
                        <div className="flex items-center gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                            Lost Opportunity
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-xl p-5 border border-indigo-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-3 opacity-10">
                        <Sparkles size={48} className="text-indigo-600" />
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                        <Sparkles size={16} className="text-indigo-600" />
                        <h4 className="text-sm font-bold text-indigo-900 uppercase tracking-wide">AI Insight</h4>
                    </div>

                    <p className="text-sm text-indigo-800 leading-relaxed mb-3">
                        Switching <strong>Insufficient Funds</strong> to <span className="font-semibold text-indigo-700">Smart Retry</span> could recover an additional <span className="font-bold text-emerald-600">$1,240</span> this month.
                    </p>

                    <button className="text-xs font-semibold text-indigo-600 flex items-center hover:text-indigo-800 transition-colors group">
                        Apply Recommendation <ArrowRight size={12} className="ml-1 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SimulationWidget;

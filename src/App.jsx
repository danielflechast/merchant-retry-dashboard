import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import RetryConfigForm from './components/RetryConfigForm';
import DashboardMetrics from './components/DashboardMetrics';
import SimulationWidget from './components/SimulationWidget';
import { DEFAULT_RETRY_CONFIG } from './data/mockData';
import { calculateImpact } from './data/simulationUtils';

function App() {
  const [config, setConfig] = useState(DEFAULT_RETRY_CONFIG);
  const [metrics, setMetrics] = useState(calculateImpact(DEFAULT_RETRY_CONFIG));

  useEffect(() => {
    const newMetrics = calculateImpact(config);
    setMetrics(newMetrics);
  }, [config]);

  const handleConfigChange = (newConfig) => {
    setConfig(newConfig);
  };

  return (
    <Layout>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
        <p className="text-gray-500">Real-time impact analysis of your retry strategies.</p>
      </div>

      <DashboardMetrics metrics={metrics} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <RetryConfigForm config={config} onConfigChange={handleConfigChange} />
        </div>
        <div className="lg:col-span-1">
          <SimulationWidget metrics={metrics} />
        </div>
      </div>
    </Layout>
  );
}

export default App;

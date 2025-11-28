import { MOCK_TRANSACTIONS } from './mockData';

export const calculateImpact = (config) => {
    let recoveredRevenue = 0;
    let totalRetries = 0;
    let successRateImprovement = 0;

    const failedTransactions = MOCK_TRANSACTIONS.filter(t => t.status === 'failed');
    const totalFailedValue = failedTransactions.reduce((acc, t) => acc + t.amount, 0);

    failedTransactions.forEach(txn => {
        const rule = config[txn.failureReason];
        if (rule && rule.enabled) {
            // Simulation logic:
            // Simple probability model based on retry strategy and count
            let recoveryProbability = 0;

            if (rule.strategy === 'immediate') recoveryProbability = 0.1 * rule.maxRetries;
            if (rule.strategy === 'exponential') recoveryProbability = 0.15 * rule.maxRetries;
            if (rule.strategy === 'smart') recoveryProbability = 0.25 * rule.maxRetries;

            // Cap probability
            recoveryProbability = Math.min(recoveryProbability, 0.8);

            // Random chance of recovery for simulation variance
            if (Math.random() < recoveryProbability) {
                recoveredRevenue += txn.amount;
                totalRetries += Math.ceil(Math.random() * rule.maxRetries);
            } else {
                totalRetries += rule.maxRetries;
            }
        }
    });

    const recoveryRate = totalFailedValue > 0 ? (recoveredRevenue / totalFailedValue) * 100 : 0;

    return {
        recoveredRevenue,
        totalRetries,
        recoveryRate,
        projectedSuccessRate: 95 + (recoveryRate * 0.05), // Base 95% + improvement
    };
};

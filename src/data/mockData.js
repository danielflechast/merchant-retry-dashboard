export const PAYMENT_FAILURE_TYPES = [
    { id: 'insufficient_funds', label: 'Insufficient Funds', description: 'Customer account has not enough balance.' },
    { id: 'gateway_timeout', label: 'Gateway Timeout', description: 'No response from the payment gateway.' },
    { id: 'network_error', label: 'Network Error', description: 'Connectivity issues during transaction.' },
    { id: 'fraud_suspicion', label: 'Fraud Suspicion', description: 'Transaction flagged as potentially fraudulent.' },
];

export const DEFAULT_RETRY_CONFIG = {
    insufficient_funds: { enabled: true, maxRetries: 2, interval: 24, strategy: 'smart' },
    gateway_timeout: { enabled: true, maxRetries: 3, interval: 5, strategy: 'immediate' },
    network_error: { enabled: true, maxRetries: 3, interval: 10, strategy: 'exponential' },
    fraud_suspicion: { enabled: false, maxRetries: 0, interval: 0, strategy: 'none' },
};

export const MOCK_TRANSACTIONS = Array.from({ length: 100 }, (_, i) => {
    const types = ['insufficient_funds', 'gateway_timeout', 'network_error', 'fraud_suspicion', 'success'];
    const type = types[Math.floor(Math.random() * types.length)];
    return {
        id: `txn_${i + 1}`,
        amount: Math.floor(Math.random() * 500) + 10,
        status: type === 'success' ? 'success' : 'failed',
        failureReason: type === 'success' ? null : type,
        timestamp: new Date(Date.now() - Math.floor(Math.random() * 1000000000)).toISOString(),
    };
});

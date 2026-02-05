import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/auth';
const TEST_USER = {
    email: `test_${Date.now()}@example.com`, // Unique email each time
    password: 'password123'
};

async function testAuth() {
    console.log('--- Testing Authentication Flow ---');
    console.log(`Using credentials: ${TEST_USER.email} / ${TEST_USER.password}`);

    // 1. Register
    try {
        console.log('\n1. Attempting Registration...');
        const regRes = await axios.post(`${BASE_URL}/register`, TEST_USER);
        console.log('✅ Registration Successful:', regRes.data);
    } catch (err) {
        console.error('❌ Registration Failed:', err.response ? err.response.data : err.message);
        return; // Stop if registration fails
    }

    // 2. Login
    try {
        console.log('\n2. Attempting Login...');
        const loginRes = await axios.post(`${BASE_URL}/login`, TEST_USER);
        console.log('✅ Login Successful:', loginRes.data);
    } catch (err) {
        console.error('❌ Login Failed:', err.response ? err.response.data : err.message);
    }
}

testAuth();

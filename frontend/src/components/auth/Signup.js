import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../../redux/slice/authSlice';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Initialize useNavigate hook
    const { loading, error } = useSelector((state) => state.auth);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(signupUser({ email, password })).then((result) => {
            if (!result.error) {
                // Navigate to homepage on successful signup
                navigate('/');
            }
        });
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="w-full max-w-md p-6 bg-white rounded shadow">
                <h2 className="text-2xl mb-4">Signup</h2>
                {error && <div className="text-red-500 mb-4">{error.message}</div>}
                <div className="mb-4">
                    <label className="block mb-1" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1" htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                    />
                </div>
                <button type="submit" className={`w-full py-2 rounded ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white'}`} disabled={loading}>
                    {loading ? 'Signing up...' : 'Signup'}
                </button>
            </form>
        </div>
    );
};

export default Signup;

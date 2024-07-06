import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// Async thunk for logging in user
export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await api.post('/users/login', userData);
            const { token } = response.data; // Assuming response.data is { token: '...' }
            localStorage.setItem('token', token); // Store token in localStorage
            return { token };
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Async thunk for signing up user
export const signupUser = createAsyncThunk(
    'auth/signupUser',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await api.post('/users/signup', userData);
            const { token } = response.data; // Assuming response.data is { token: '...' }
            localStorage.setItem('token', token); // Store token in localStorage
            return { token };
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Action creator to set token in Redux state
export const setToken = (token) => (dispatch) => {
    dispatch(authSlice.actions.setToken(token));
    const navigate = useNavigate();
    navigate('/'); // Redirect to homepage after setting token
};

// Create slice for authentication
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        loading: false,
        error: null,
        token: localStorage.getItem('token'), // Initialize token from localStorage
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        logout: (state) => {
            localStorage.removeItem('token'); // Remove token from localStorage on logout
            state.token = null;
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.token; // Store token in state upon successful login
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(signupUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(signupUser.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.token; // Store token in state upon successful signup
            })
            .addCase(signupUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../../redux/slice/taskSlice';
import TaskItem from './TaskItem';
import { useNavigate } from 'react-router-dom';

const TaskList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { tasks, loading, error } = useSelector((state) => state.tasks);
    const isAuthenticated = useSelector((state) => state.auth.token !== null);

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        } else {
            dispatch(fetchTasks());
        }
    }, [dispatch, navigate, isAuthenticated]);

    return (
        <div>
            <h1 className="text-2xl mb-4">Tasks</h1>
            {loading && <div>Loading...</div>}
            {error && <div className="text-red-500">{error}</div>}
            {/* Only render tasks if authenticated to prevent brief display */}
            {isAuthenticated && (
                <div>
                    {tasks.map((task) => (
                        <TaskItem key={task._id} task={task} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default TaskList;

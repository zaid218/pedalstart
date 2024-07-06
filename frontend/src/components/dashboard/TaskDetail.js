import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchTasks, updateTask, deleteTask, createTask } from '../../redux/slice/taskSlice';
import TaskForm from './TaskForm';

const TaskDetail = () => {
    const { taskId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { tasks, loading, error } = useSelector((state) => state.tasks);
    const isAuthenticated = useSelector((state) => state.auth.token !== null);

    const [isNewTask, setIsNewTask] = useState(false);

    useEffect(() => {
        if (taskId === 'new') {
            setIsNewTask(true);
            if (!isAuthenticated) {
                navigate('/login');
            }
        } else if (!tasks.some(task => task._id === taskId)) {
            dispatch(fetchTasks());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, taskId, isAuthenticated, navigate]);

    const handleSave = async (taskData) => {
        try {
            if (isNewTask) {
                await dispatch(createTask(taskData));
            } else {
                await dispatch(updateTask({ id: taskId, taskData }));
            }
            navigate('/');
        } catch (error) {
            console.error('Error saving task:', error);
        }
    };

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            try {
                await dispatch(deleteTask(taskId));
                navigate('/');
            } catch (error) {
                console.error('Error deleting task:', error);
            }
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="text-red-500">{error}</div>;
    if (!isNewTask && !tasks.some(task => task._id === taskId)) return <div>Task not found</div>;

    const task = tasks.find(task => task._id === taskId);

    return (
        <div>
            <h1 className="text-2xl mb-4">{isNewTask ? 'Create Task' : 'Task Detail'}</h1>
            <TaskForm task={isNewTask ? null : task} onSave={handleSave} />
            {!isNewTask && (
                <button onClick={handleDelete} className="mt-4 bg-red-500 text-white py-2 px-4 rounded">Delete Task</button>
            )}
        </div>
    );
};

export default TaskDetail;


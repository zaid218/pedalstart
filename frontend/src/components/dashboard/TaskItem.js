import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../redux/slice/taskSlice';

const TaskItem = ({ task }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            dispatch(deleteTask(task._id));
        }
    };

    return (
        <div className="border p-4 mb-4">
            <h2 className="text-xl font-semibold">{task.title}</h2>
            <p className="mb-2">{task.description}</p>
            <p className="text-sm text-gray-500">Due Date: {task.dueDate}</p>
            <div className="mt-2">
                <Link to={`/tasks/${task._id}`} className="mr-2 text-blue-500">View</Link>
                <Link to={`/tasks/${task._id}/edit`} className="mr-2 text-green-500">Edit</Link>
                <button onClick={handleDelete} className="text-red-500">Delete</button>
            </div>
        </div>
    );
};

export default TaskItem;

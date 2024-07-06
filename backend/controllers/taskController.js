import Task from '../models/taskModel.js'; // Adjust path as necessary

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user });
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

export const createTask = async (req, res) => {
    const { title, description, dueDate } = req.body;
    const userId = req.user;

    console.log('User ID:', userId); // Debugging step

    try {
        const newTask = new Task({
            title,
            description,
            dueDate,
            user: userId,
        });

        const task = await newTask.save();
        res.json(task);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

export const getTaskById = async (req, res) => {
    try {
        console.log('below is the task ')
        console.log(req.params.id)
        const task = await Task.findById(req.params.id);
        console.log(task)
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.json(task);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

export const updateTask = async (req, res) => {
    const { title, description, dueDate } = req.body;
    try {
        let task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' });

        task.title = title;
        task.description = description;
        task.dueDate = dueDate;
        await task.save();
        res.json(task);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' });

        await Task.findByIdAndDelete(req.params.id); // Use findByIdAndDelete method
        res.json({ message: 'Task removed' });
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

import express from "express";
import { getTasks, getTaskById, createTask, updateTask, deleteTask, deleteAllTask } from "../controllers/UserController.js";


const router = express.Router();

router.get('/tasks', getTasks);
router.get('/tasks/:id', getTaskById);

router.post('/tasks', createTask);
router.patch('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);
router.delete('/tasks',deleteAllTask);
export default router;
import { Injectable } from "@angular/core";
import { dummyTasks } from "../dummy-tasks";
import { newTaskData } from "./new-task/new-task.model";

@Injectable({providedIn: 'root'})
export class TasksService {
    private tasks = dummyTasks;

    getUserTasks(userId: string){
        return this.tasks.filter((task) => task.userId === userId);
    }

    addTask(taskData: newTaskData, userId: string){
        this.tasks.push({
            id: `t${this.tasks.length + 1}`,
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.dueDate
        })
    }

    removeTask(taskId: string){
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
    }
}
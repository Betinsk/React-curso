import type { TaskModel } from "./taskModel";

export type TaskStateModel = {
    tasks: TaskModel[];
    secondsRemaning: number;
    formatedSecondsRemaining: string;
    activeTask: TaskModel | null;
    currentCyle: number;
    config: {
        workTime: number;
        shortBreakTime: number;
        longBreakTime:number;

    }
}
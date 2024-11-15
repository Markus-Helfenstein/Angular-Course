export interface ITask {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

export interface ITaskFormData {
  title: string;
  summary: string;
  date: string;
}

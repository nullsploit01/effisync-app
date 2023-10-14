export type ITask = {
  id: string
  title: string
  description?: string
  createdAt: string
  updatedAt: string
  tags?: string[]
  reminderId?: string
  status?: string
}

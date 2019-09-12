export default interface ITodoListItemsProps {
    id: number,
    title: string,
    completed: boolean,
    onToggleComplete: (id: number) => void,
    onDelete: (id: number) => void,
}
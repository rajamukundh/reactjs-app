let nextTodoId = 0
export const addPlayer = (player) => {
     return {
        id: nextTodoId++,
        type: 'ADD_PLAYER',
        player
    }
}

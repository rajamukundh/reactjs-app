export const selectPlayer = (player) => {
    console.log("You clicked on player: ", player.firstName);
    return {
        type: 'PLAYER_SELECTED',
        payload: player
    }
};

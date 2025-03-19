/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const adjList = {}
    const visited = {}
    for(let i = 0; i < rooms.length; i++) {
        adjList[i] = rooms[i]
    }
    const dfs = node => {
        visited[node] = true
        adjList[node].forEach(item => {
            if(!visited[item]) {
                dfs(item)
            }
        })
    }
    dfs(0)
    return Object.values(visited).filter(i => i).length === rooms.length


};

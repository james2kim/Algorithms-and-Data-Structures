/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let count = 0

    const isInBound = (i, j) => {
        return i >=0 && i < rows && j >=0 && j < cols
    }
    const dfs  = (i, j) => {
        if(!isInBound(i, j) || grid[i][j] === '0') {
            return
        }
        grid[i][j] = '0'
        dfs(i, j+1)
        dfs(i, j -1)
        dfs(i - 1, j)
        dfs(i+1, j)
    }

    for(let i = 0 ; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(grid[i][j] === '1') {
                dfs(i ,j)
                count++
            }
        }
    }
    return count

};

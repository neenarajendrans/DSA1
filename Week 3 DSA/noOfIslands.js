var numIslands = function(grid) {
    const m= grid.length,n=grid[0].length
    let lands=0
    const dfs=(r,c)=>{
        if(r<0 || c<0 || r>=m || c>= n || grid[r][c]!=='1') return
        grid[r][c] = 0 // marking visited;
        dfs(r+1,c)//down
        dfs(r-1,c)//up
        dfs(r,c+1)//right
        dfs(r,c-1)//left

    }
    for(let r=0;r<m;r++){
        for(let c=0;c<n;c++){
            if(grid[r][c]=='1'){
                dfs(r,c);
                lands++
            }
        }
    }
    return lands
};


function noI (grid){
    let land = 0;
    m = grid.length;
    n = grid[0].length;
    const dfs=(r,c)=>{
        if(r<0||c<0||r>=m || c>=n || grid[r][c] !==1 )return;
        grid[r][c]= 0;
        dfs(r+1,c);
        dfs(r-1,c);
        dfs(r,c+1);
        dfs(r,c-1);
    }

    for(let r=0;r<m; r++){
        for(let c=0;c<n; c++){
            if(grid[r][c]=="1"){
                dfs(r,c);
                land++
            }
        }
    }
    return land;
}

   
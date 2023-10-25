function convertToAdjList(adjMatrix) {
    a = []
    if(adjMatrix == []){ return []}
    for(i = 0; i < adjMatrix.length; i++){
        a[i] = []
        for(j = 0; j < adjMatrix.length; j++){
            if(adjMatrix[i][j] != 0){
                a[i].push(j)
            }
        }
    }
    return a;
}

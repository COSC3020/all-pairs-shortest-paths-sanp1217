function allPairsShortestPaths(graph) {
  let vertices = graph.length;
  let dist = [];

  //The adjacency matrix already has Infinity
  //if there is no path between two vertices
  //meaning that theres no need to initialize it
  //to all infinitys.
  for (let i = 0; i < vertices; i++) {
    dist[i] = [];
    for (let j = 0; j < vertices; j++) {
      if (i == j) {
        dist[i][j] = 0;
      } else {
        dist[i][j] = graph[i][j];
      }
    }
  }

  for (let k = 0; k < vertices; k++) {
    for (let i = 0; i < vertices; i++) {
      for (let j = 0; j < vertices; j++) {
        if (dist[i][j] > dist[i][k] + dist[k][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  return dist;
}

#include<queue>
#include<iostream>
using namespace std;

int dy[4] = {-1,0,1,0};
int dx[4] = {0,-1,0,1};

int map[5][5];
int visited[5][5];

void dfs(int y, int x, int cnt){
    map[y][x] = cnt;
    visited[y][x] = 1;
    for(int i = 0; i<4; i++){
        int ny = y+dy[i];
        int nx = x+dx[i];
        if(ny>=0 && ny<5 && nx>=0 && nx<5 && !visited[ny][nx]){
            dfs(ny, nx, cnt+1);
        }
    }
}

void dfsAll(){
    for(int i = 0; i<5; i++){
        for(int j = 0; j<5; j++){
            if(!visited[i][j]){
                dfs(i,j,1);
            }
        }
    }
}
void bfs(int y, int x){
    queue<pair<int,int>> q;
    q.push(make_pair(y,x));
    visited[y][x] = 1;
    while(!q.empty()){
        pair<int,int> front = q.front();
        q.pop();
        for(int i = 0; i<4; i++){
            int ny = front.first + dy[i];
            int nx = front.second + dx[i];
            if(ny>=0&& ny<5 && nx>=0 && nx<5 && !visited[ny][nx]){
                visited[ny][nx] = 1;
                q.push(make_pair(ny, nx));
            }
        }
    }
    
}

int main(){
    for(int i = 0; i<5; i++){
        visited[2][i] = 2;
    }
    
    for(int i = 0; i<5; i++){
        for(int j = 0; j<5; j++){
            if(!visited[i][j]){
                bfs(i,j);
            }
        }
    }
    //dfsAll();
    for(int i = 0; i<5; i++){
        for(int j = 0; j<5; j++){
            cout<<visited[i][j]<<" ";
        }
        cout<<endl;
    }
    return 0;
}
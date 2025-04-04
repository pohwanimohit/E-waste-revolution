#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX 50

typedef struct {
    int x, y, steps, keys;
} State;

int n, m;
char grid[MAX][MAX];
int visited[MAX][MAX][1024];

int dx[] = {1, -1, 0, 0};
int dy[] = {0, 0, 1, -1};

int isValid(int x, int y) {
    return x >= 0 && x < n && y >= 0 && y < m;
}

int bfs(int startX, int startY, int totalKeys) {
    State queue[MAX * MAX * 1024];
    int front = 0, rear = 0;

    queue[rear++] = (State){startX, startY, 0, 0};
    visited[startX][startY][0] = 1;

    while (front < rear) {
        State current = queue[front++];

        if (grid[current.x][current.y] == 'C' && current.keys == (1 << totalKeys) - 1) {
            return current.steps;
        }

        for (int i = 0; i < 4; i++) {
            int nx = current.x + dx[i];
            int ny = current.y + dy[i];
            int newKeys = current.keys;

            if (!isValid(nx, ny) || grid[nx][ny] == 'O') continue;

            if (grid[nx][ny] >= 'a' && grid[nx][ny] <= 'z') {
                newKeys |= (1 << (grid[nx][ny] - 'a'));
            }

            if (grid[nx][ny] >= 'A' && grid[nx][ny] <= 'Z') {
                if (!(newKeys & (1 << (grid[nx][ny] - 'A')))) continue;
            }

            if (!visited[nx][ny][newKeys]) {
                visited[nx][ny][newKeys] = 1;
                queue[rear++] = (State){nx, ny, current.steps + 1, newKeys};
            }
        }
    }

    return -1;
}

int main() {
    scanf("%d %d", &n, &m);
    int startX, startY, totalKeys = 0;

    for (int i = 0; i < n; i++) {
        scanf("%s", grid[i]);
        for (int j = 0; j < m; j++) {
            if (grid[i][j] == 'H') {
                startX = i;
                startY = j;
            } else if (grid[i][j] == 'K') {
                totalKeys++;
                grid[i][j] = 'a' + totalKeys - 1;
            }
        }
    }

    int result = bfs(startX, startY, totalKeys);
    if (result == -1)
        printf("Impossible\n");
    else
        printf("%d\n", result);

    return 0;
}

function uniquePaths(m, n) {
    // 初始化一个二维数组
    let arr = []
    for (let i = 0; i < m; i++) {
        let temp = []
        arr.push(temp)
    }

    // 遍历计算出所有arr的值
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 0 || j == 0) {
                arr[i][j] = 1
            } else {
                arr[i][j] = arr[i - 1][j] + arr[i][j - 1]
            }
        }
    }
    return arr[m - 1][n - 1]
}
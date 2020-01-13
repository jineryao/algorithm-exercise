/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
	let dp = []
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (!dp[i]) dp[i] = []
			if (i == 0 || j == 0) dp[i][j] = 1
			else {
				dp[i][j] = dp[i][j - 1] + dp[i - 1][j]
			}
		}
	}
	return dp[m - 1][n - 1]
}

var uniquePaths2 = function(m, n) {
}

console.log(uniquePaths2(2, 2))

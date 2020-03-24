/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    if (n === 0) return tasks.length
	let tem = {}
    let maxCount = 0 // 任务最高重复次数
    let remainder = 0 // 最后一次需要执行的任务数
	tasks.forEach(task => {
        tem[task] = tem[task] ? tem[task] + 1 : 1
		maxCount = Math.max(tem[task], maxCount)
    })
    for(let k in tem) {
        if (tem[k] === maxCount) {
            remainder++
        }
    }
    let result = (maxCount - 1) * (n + 1) + remainder
	return Math.max(result, tasks.length)
}

console.log(leastInterval(["A","B","C","D","A","B","V"], 3))
// console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2))

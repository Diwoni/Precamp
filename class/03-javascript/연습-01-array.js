let classmate = ["철수", "영희", "훈이"]

classmate
// (3) ['철수', '영희', '훈이']
classmate[0]
// '철수'
classmate[1]
// '영희'
classmate[2]
// '훈이'
classmate.includes("훈이")
// true
classmate.includes("맹구")
// false
classmate.length
// 3
classmate.push("맹구")
// 4
classmate.includes("맹구")
// true
classmate.pop()
// '맹구'
classmate
// (3) ['철수', '영희', '훈이']
let a1 = ["a","b","c"]
// undefined
let b1 = ["d","e","f"]
// undefined
let result = a1.concat(b1)
// undefined
result
// (6) ['a', 'b', 'c', 'd', 'e', 'f']
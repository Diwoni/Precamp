Math.floor(Math.random() * 100000) // 랜덤 수를 생성

String(Math.floor(Math.random() * 100000))  // 문자열로 변환

String(Math.floor(Math.random() * 100000)).padStart(6,'0')

// → 랜덤한 수를 생성 후, 문자열이 6자리가 되지 않으면 앞에서부터 0으로 채워줘라

let result = String(Math.floor(Math.random() * 100000)).padStart(6,'0')

// result

// result 를 반복해서 호출하게 되면,

// 같은 숫자 6자리만 나오게 될 것임

// (해결법 : DOM)
const profile={
    name : "철수",
    age : 12,
    school : "경북대학교"
}
// undefined
if(profile.age >= 20){
    console.log("성인입니다")
}else if(profile.age >= 8){
    console.log("학생입니다")
}else{
    console.log("어린이입니다")
}
// 8세 이상 19세 이하 인 경우 코드 최적화를 위해, 8살 이상 조건문만 기록, 위 조건문에서 이미 걸림 
// VM1071:4 학생입니다
// 1. 키값 기준으로 쿠키에 저장된 값을 가져오는 함수
const getCookie = (name) => {
    // value 변수에 document.cookie를 할당함.
    // 세미콜론(;)을 기준으로 파싱할 것이므로 document.cookie 제일 앞에
    // ; 을 하나 더 추가함으로 가장 앞의 쿠키 값도 파싱할 수 있게 만들어 줌.
    // document.cookie 예시: (;) id=아이디; pwd=비밀번호; etc=기타
    let value = "; " + document.cookie;
    // 먼저, 쿠키 Name 필드(키 값) 기준으로 파싱하여 parts 변수에 할당 함.
    // 매개변수 name 예시: pwd
    // >> ; id=아이디(; pwd=)비밀번호; etc=기타 | 괄호()범위를 기준으로 파싱함.
    let parts = value.split(`; ${name}=`);
    // parts 배열의 원소가 2개라면, 즉 document.cookie가 두개로 쪼개졌다면,
    // (만약 document.cookie내에 name 매개변수가 존재하지 않으면 실행하지 않겠다는 뜻)
    if (parts.length === 2) { 
        // parts 배열의 뒷 부분을 뽑아내어(pop),    >> parts = [; id=아이디, (비밀번호; etc=기타)]
        // 배열의 ; 을 기준으로 파싱하여(split),    >> [비밀번호(; )etc=기타]
        // 배열의 앞 부분을 뽑아내어(shift) retrun  >> [(비밀번호), etc=기타]
        return parts.pop().split(";").shift();
        // shift는 스플릿 되는 키워드를 기준으로 앞, pop은 뒤의 원소를 뽑아낸다.
    }
};

// 2. 쿠키에 저장하는 함수
const setCookie = (name, value, exp = 5) => {
    let date = new Date();
    // 날짜 생성 (1시간)
    date.setTime(date.getTime() + exp * 1000 * 60 * 60 * 24);
    // 쿠키 저장
    document.cookie = `${name}=${value};expires=${date.toUTCString()}`;
};

// 3. 만료일을 과거로 설정해 쿠키를 삭제하는 함수
const deleteCookie = (name) => {
    let date = new Date("2021-07-05").toUTCString();
    // 매개변수를 name만 가져왔으므로, 
    document.cookie = `${name}=; expires=${date}`;
}

export { getCookie, setCookie, deleteCookie };
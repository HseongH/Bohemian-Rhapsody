# Bohemian Rhapsody

[사이트 링크 바로가기](http://bohemianrhapsody.shop/) / [시연 영상 보기](https://www.youtube.com/watch?v=lUjD6D7hPKA&feature=youtu.be)

## 목차

1. [프로젝트 개요](#프로젝트-개요)
2. [사용 패키지](#-package)
3. [역할 분담](#-역할-분담)
4. [배운점](#-배운점)

***

## 프로젝트 개요

이미지형 음악 정보 공유 커뮤니티

***

## 🛠 Package

- State Management: redux, react-redux
- Style Work: styled-components
- Route: react-router-dom, connected-react-router
- Middleware: redux-thunk, redux-logger
- History: history

***

## 💪 역할 분담

- 홍성훈: 게시글 작성, 수정, 삭제, 댓글 작성, 수정, 삭제, 즐겨찾기 기능
- 주재인: 로그인, 회원가입, 게시글 조회, 검색 기능

***

## 🔎 배운점

### axios를 이용한 서버 통신

- axios의 interceptors를 이용해 서버에 정보 요청 이전에 헤더에 토큰을 담아 보낼 수 있다. interceptors는 서버 요청 이전에 동작을 가로채서 다른 동작을 수행하게 해준다.

```javascript
instance.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/json; charset=utf-8';
  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  config.headers['Accept'] = '*/*';
  config.headers['authorization'] = `Bearer ${getToken()}`;
  return config;
});
```

### 이미지 로딩

- 이미지의 크기에 따라 레이아웃이 결정되는 경우 이미지 로딩 이전에 요소가 화면에 렌더링되면 부모 요소가 해당 요소의 크기를 제대로 인식하지 못해 레이아웃이 깨지는 현상이 발생한다. 이를 방지하기 위해 lazy loading(게으른 로딩) 방식을 사용해 이미지가 로드되고 난 뒤 화면에 렌더링 해주는 방식을 사용해야 한다. 이 부분은 다음 프로젝트 때 확실히 알고 넘어가자 이번엔 제대로 적용하지 못했다.

[lazy-load-image](https://www.npmjs.com/package/react-lazy-load-image-component)

### 백엔드 파트와의 협업 (API 주소로 통신하는 방법)

- 기존 주특기 기초/심화 주차에서는 BaaS를 이용하여(Firebase) 과제를 수행하였는데, 백엔드 담당자와 협업을 통해 API를 설계하고 약속된 주소를 통해 데이터를 주고 받는 방식을 코딩해보고 배울 수 있었다.

```javascript
// MIDDLEWARE
const getPostListDB = (limit = 6) => {
  return function (dispatch) {
    instance
      .get(`/api/post/posts?start=0&limit=${limit + 1}`)
      .then((res) => {
        if (res.data.result.length < limit + 1) {
          dispatch(getPostList(res.data.result, null));
          return;
        }

        if (res.data.result.length >= limit + 1) res.data.result.pop();

        dispatch(getPostList(res.data.result, limit));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
```

### useState와 같은 React Hook을 활용하여 분기를 나누는 방법

- useState를 사용하여 컴포넌트의 속성값에 분기를 주는 방식에 대해 자세히 배울 수 있었다.

```javascript
const [id, setId] = React.useState('');
  const [pwd, setPwd] = React.useState('');
  const [pwdCheck, setPwdCheck] = React.useState('');
  const [idConfirm, setIdConfirm] = React.useState('');
  const [pwdConfirm, setPwdConfirm] = React.useState('');
  const [pwdCheckConfirm, setPwdCheckConfirm] = React.useState('');
  const [idWarning, setIdWarColor] = React.useState('red');
  const [pwdWarning, setPwdWarColor] = React.useState('red');
  const [pwdCheckWarning, setPwdCheckWarColor] = React.useState('red');

  const checkID = (val) => {
    if (val === '') {
      setIdWarColor('red');
      setIdConfirm('아이디가 입력되지 않았습니다.');
      return;
    }
    if (!idVal(val)) {
      setIdWarColor('red');
      setIdConfirm('아이디가 형식에 맞지 않습니다. (영어, 알파벳 4~20자)');
      return;
    }

    setIdWarColor('green');
    setIdConfirm('중복 검사를 해주세요');
  };
  
  ...
  
          <Grid padding="16px 0px 0px">
            <Text fontSize="12px" color={idWarning} lineHeight="2" textIndent="15px">
              {idConfirm}
            </Text>
          </Grid>
```

### 각종 CSS 기법
- Styled Components를 활용하여 깔끔하고 멋진 뷰를 구성하는 법을 비롯해 여러가지 CSS기법을 활용해보고 배울 수 있는 기회였다.

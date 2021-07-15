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

- axios의 interceptors를 이용해 서버에 정보 요청 이전에 헤더에 토큰을 담아 보냉 수 있다. interceptors는 서버 요청 이전에 동작을 가로채서 다른 동작을 하도록 수행하게 해준다.

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

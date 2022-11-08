# 2조 CRA 환경 초기 세팅!!

- CRA (npm)
- ESLint, Prettier
- react-router-dom
- styled-components
- axios

## 1. ESLint

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "overrides": [],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react"],
  "rules": {
    // var 키워드 사용 금지
    "no-var": "error",
    // async 함수 안에 반드시 await 키워드 사용하기
    "require-await": "error",
    // 강한 비교 사용하기 ===
    "eqeqeq": "error",
    // props 타입 검사 무시
    "react/prop-types": 0
  }
}
```

- 개발속도를 빠르게 하기 위해서 널널하게 세팅했어요.
- 그렇지만, 최소한의 규칙은 설정했어요. 더 추가하고 싶은게 있다면 같이 의논해도 좋고, 의견을 제시해줘도 좋을 것 같아요.

## 2. Prettier

```json
{
  "singleQuote": true,
  "semi": true,
  "bracketSpacing": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 100,
  "arrowParens": "always",
  "overrides": [
    {
      "files": "*.json",
      "options": {
        "printWidth": 200
      }
    }
  ]
}
```

- Prettier에서 핵심적인 세팅은 tab 간격이예요. 들여쓰기가 심해져서 가독성이 떨어지지 않도록 2칸 간격으로 설정했어요.
- 호이스팅이 발생하는 `function` 키워드를 지양하기 위해서 화살표함수를 사용하도록 강제했어요.
- 더 좋은 의견이 있거나, 추가가 필요하다 싶으면 말씀해주시면 좋을 것 같아요.

## 3. 설치 라이브러리

1. `react-router-dom`
2. `axios`
3. `styled-components`

## 4. 파일 디렉토리 구조

- public

  - index.html

- src

  - api - 서버 통신 관련 코드가 들어가는 폴더
  - components - 여러 페이지에 사용되는 컴포넌트가 들어가는 폴더
  - hooks - 자주 반복되는 로직을 줄이기 위해 만든 Custom Hook이 들어가는 폴더
  - pages - 페이지 관련 컴포넌트가 들어가는 폴더

    - Router.jsx - 모든 페이지를 `react-router-dom`으로 관리하는 파일

    ```javascript
    import React from 'react';
    import { BrowserRouter, Routes, Route } from 'react-router-dom';

    import Home from './Home';

    export default function Router() {
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      );
    }
    ```

  - App.jsx
  - index.js

## 5. 더 논의하면 좋을 것 같은 사항들

### 1. 상태 관리 라이브러리

- 상태 관리 라이브러리를 사용할 것인가? (`Redux`, `Recoil`, `Jotai`, `Zustand`) - Client Side
- 라이브러리 없이 Context를 활용할 것인가? - Client Side
- React-query 혹은 swr을 활용할 것인가? - Server Side

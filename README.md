# DORGH — GitHub Pages (React + Vite)

## 가장 흔한 문제(지금 너가 겪는 증상)
배포된 `index.html`에 아래가 그대로 보이면 **빌드 결과(dist)가 아니라 소스가 서빙**되는 중입니다.

```html
<script type="module" src="/src/main.jsx"></script>
```

GitHub Pages는 Vite dev 서버가 아니라서, 이렇게 배포하면 React가 렌더링되지 않습니다.

## 정답 설정 (추천)
1) Settings → Pages → **Source: GitHub Actions**
2) main에 push  
→ `.github/workflows/deploy.yml` 이 `npm run build` 후 `dist`를 배포합니다.

## 확인
view-source에서 `./assets/index-xxxx.js` 같은 번들 파일이 보이면 정상입니다.

## Anchor(목차) 관련
HashRouter를 쓰므로 `#about` 같은 해시 앵커를 쓰면 라우팅이 깨집니다.  
이 템플릿은 `#/?s=about` 형태(query)로 처리했습니다.

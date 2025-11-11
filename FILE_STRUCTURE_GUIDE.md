# 📁 ファイル構造ガイド

GitHub にアップロードするファイルの正しい配置を示します。

## WEBアプリとしてリリースするための完全なファイル構造

```
koten-transcriber/
│
├── 📄 package.json                 ← 必須（依存関係の定義）
├── 📄 next.config.js               ← 必須（Next.js設定）
├── 📄 tailwind.config.js           ← 必須（CSS設定）
├── 📄 postcss.config.js            ← 必須（スタイル設定）
├── 📄 .env.example                 ← 必須（環境変数テンプレート）
├── 📄 .gitignore                   ← 必須（除外ファイル）
├── 📄 README.md                    ← 推奨（プロジェクト説明）
├── 📄 GUIDE.md                     ← 推奨（使用ガイド）
├── 📄 WEB_RELEASE_GUIDE.md         ← 推奨（公開手順ガイド）
│
├── 📁 pages/
│   ├── 📄 _app.js                  ← Next.js共通設定
│   ├── 📄 _document.js             ← HTML設定
│   └── 📄 index.jsx                ← メインページ（翻刻アプリ）
│
├── 📁 styles/
│   └── 📄 globals.css              ← グローバルスタイル
│
├── 📁 public/
│   └── 📄 favicon.ico              ← ファビコン（オプション）
│
└── 📄 transcribe_ndl.py            ← Python版スクリプト（参考用）
```

---

## ✅ WEBアプリ化の準備チェックリスト

GitHub にアップロード前に、以下をすべてチェックしてください。

### ▶️ 必須ファイル（これがないと動作しません）

- [ ] ✅ `package.json` をコピー
- [ ] ✅ `next.config.js` をコピー
- [ ] ✅ `tailwind.config.js` をコピー
- [ ] ✅ `postcss.config.js` をコピー
- [ ] ✅ `.env.example` をコピー
- [ ] ✅ `.gitignore` をコピー

### ▶️ ページファイル（アプリの本体）

- [ ] ✅ `pages/` フォルダを作成
- [ ] ✅ `pages/index.jsx` をコピー（メインアプリ）
- [ ] ✅ `pages/_app.js` を作成（以下のコードをコピー）
- [ ] ✅ `pages/_document.js` を作成（以下のコードをコピー）

### ▶️ スタイル設定

- [ ] ✅ `styles/` フォルダを作成
- [ ] ✅ `styles/globals.css` をコピー

### ▶️ ドキュメント

- [ ] ✅ `README.md` をコピー
- [ ] ✅ `GUIDE.md` をコピー
- [ ] ✅ `WEB_RELEASE_GUIDE.md` をコピー

---

## 📝 必要な追加ファイルのコード

### pages/_app.js（Next.js 共通設定）

GitHub でリポジトリを開いて、**「Add file」→「Create new file」** をクリック

ファイル名：
```
pages/_app.js
```

内容：
```javascript
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```

---

### pages/_document.js（HTML メタ設定）

ファイル名：
```
pages/_document.js
```

内容：
```javascript
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="NDL古文書自動翻刻ツール - Claude Vision を使った明治時代の地誌自動翻刻システム" />
        <meta name="theme-color" content="#f59e0b" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
```

---

## 🚀 GitHub へのアップロード手順

### 方法1: GitHub Web UI（最も簡単）

1. GitHub でリポジトリを開く

2. **「Add file」** → **「Create new file」** をクリック

3. 上記のファイルを1つずつ作成
   - ファイル名を入力
   - コードをコピー＆ペースト
   - 「Commit changes」をクリック

### 方法2: GitHub Desktop（推奨）

1. GitHub Desktop でリポジトリを clone

2. フォルダをエクスプローラーで開く

3. 上記のファイルを配置
   - 階層構造を作成
   - 各ファイルをコピー

4. GitHub Desktop で「Changes」を確認

5. 「Commit to main」→「Publish」をクリック

---

## 🔍 ファイル構造の確認

GitHub でリポジトリを開いて、以下のような構造が見えるか確認：

```
✅ package.json
✅ next.config.js
✅ README.md
✅ 📁 pages
   ✅ index.jsx
   ✅ _app.js
   ✅ _document.js
✅ 📁 styles
   ✅ globals.css
```

すべてが表示されていれば、準備完了！

---

## ❌ よくある間違い

### ❌ 誤り1: ファイルが別々の場所にある

```
❌ 誤: pages/index.jsx が pages/pages/index.jsx になっている
✅ 正: pages/index.jsx
```

GitHub で確認：
- リポジトリトップから `pages` フォルダが見える
- その中に `index.jsx` がある

---

### ❌ 誤り2: `.env.example` がない

```
❌ API キーがハードコードされている
✅ .env.example でテンプレート化している
```

確認方法：
- GitHub で `.env.example` が見える
- 内容に `NEXT_PUBLIC_ANTHROPIC_API_KEY=sk-ant-xxxxx` が書いてある

---

### ❌ 誤り3: `node_modules/` が commit されている

```
❌ 約 500MB の余分なファイルがアップロードされている
✅ .gitignore で除外されている
```

`.gitignore` の内容：
```
node_modules/
.next/
.env.local
.DS_Store
```

---

## 📊 チェックリスト最終確認

### アップロード後の確認項目

- [ ] GitHub ですべてのファイルが見える
- [ ] `pages/index.jsx` にアプリコードが入っている
- [ ] `.env.example` に`NEXT_PUBLIC_ANTHROPIC_API_KEY` が書いてある
- [ ] `README.md` にプロジェクト説明が書いてある
- [ ] `package.json` に依存関係が列挙されている

---

## 🎉 準備完了！

すべてのチェックが入ったら、**WEB_RELEASE_GUIDE.md** の「ステップ3: Vercel で自動公開」に進んでください。

---

## 🆘 トラブルシューティング

### Q. Vercel でビルドエラーが出る

**A.** 確認事項：
1. ✅ `package.json` が存在するか
2. ✅ `pages/index.jsx` が存在するか
3. ✅ Vercel で Environment Variables が設定されているか

---

### Q. アプリが真っ白で何も表示されない

**A.** 確認事項：
1. ✅ `pages/_app.js` と `pages/_document.js` が存在するか
2. ✅ `styles/globals.css` が存在するか
3. ✅ Vercel のビルドログでエラーを確認

---

## 📞 さらに詳しく知りたい場合

- **Next.js 公式ドキュメント**: https://nextjs.org/docs
- **Vercel デプロイガイド**: https://vercel.com/docs
- **Tailwind CSS**: https://tailwindcss.com/docs


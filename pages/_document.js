import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="NDL古文書自動翻刻ツール - Claude Vision を使った明治時代の地誌自動翻刻システム" />
        <meta name="keywords" content="古文書,翻刻,AI,Claude,NDL,国立国会図書館" />
        <meta name="theme-color" content="#f59e0b" />
        <meta property="og:title" content="古文書翻刻ツール" />
        <meta property="og:description" content="Claude Vision を使って江戸時代の古文書を自動翻刻します" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
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

## 🛠️ 使い方

1. **上のコードをすべてコピー**

2. **テキストエディタを開く**

3. **貼り付け**

4. **重要：以下の場所に保存**
```
   C:\Users\[ユーザー名]\Documents\koten-transcriber\pages\_document.js
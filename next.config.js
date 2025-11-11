/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dl.ndl.go.jp',
      },
    ],
  },
};

module.exports = nextConfig;
```

---

## 🛠️ 使い方

1. **上のコードをすべてコピー**

2. **テキストエディタを開く**

3. **貼り付け**

4. **以下の場所に保存**
```
   C:\Users\[ユーザー名]\Documents\koten-transcriber\next.config.js
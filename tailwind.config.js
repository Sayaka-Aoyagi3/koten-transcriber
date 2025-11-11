/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fce7a1',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
    },
  },
  plugins: [],
};
```

---

## 🛠️ 使い方

1. **上のコードをすべてコピー**

2. **テキストエディタを開く**

3. **貼り付け**

4. **以下の場所に保存**
```
   C:\Users\[ユーザー名]\Documents\koten-transcriber\tailwind.config.js
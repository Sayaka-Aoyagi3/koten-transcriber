# 🚀 古文書翻刻アプリを WEB で公開 - クイックスタート

**最短 30分で、あなたのアプリを世界中に公開できます。**

---

## 📌 このガイドについて

- ✅ **対象者**: 非 IT エンジニア向け
- ✅ **難易度**: ⭐⭐☆☆☆（簡単）
- ✅ **所要時間**: 30分～1時間
- ✅ **費用**: すべて無料

---

## 🎯 3つの大きなステップ

```
Step 1          Step 2              Step 3
GitHub に       コードを            Vercel で
アカウント作成  アップロード         公開
(5分)          (15分)              (10分)
  ↓              ↓                  ↓
 完了！          完了！              完了！🎉
```

---

# ⭐ まず最初にすること

## 1️⃣ ファイルを準備

以下の **4つのファイル** が `/mnt/user-data/outputs` フォルダにあることを確認：

```
✅ WEB_RELEASE_GUIDE.md         ← 詳細ガイド
✅ FILE_STRUCTURE_GUIDE.md      ← ファイル構造ガイド
✅ package.json                 ← 必須ファイル
✅ その他のファイル一式
```

確認方法：
- ブラウザで https://claude.ai/chat/[URL] にアクセス
- 「View your files」リンクをクリック
- すべてのファイルが見えるか確認

---

## 2️⃣ GitHub アカウント作成（5分）

### 手順

1. ブラウザで以下のリンクを開く
   ```
   https://github.com/signup
   ```

2. **以下の情報を入力**

   | 項目 | 入力内容 | 例 |
   |------|--------|-----|
   | メールアドレス | 仕事用 or 個人用 | `sayaka@example.com` |
   | パスワード | 8文字以上 | `Culture@Commons2025` |
   | ユーザー名 | 半角英数字 | `sayaka-culture-commons` |

3. **「Create account」をクリック**

4. **メール認証**
   - メールボックスを確認
   - GitHub からのメールを開く
   - リンクをクリック

✅ **完了！GitHub アカウントができました。**

---

## 3️⃣ リポジトリを作成（3分）

### 手順

1. GitHub にログイン

2. 右上の **「+」マーク** → **「New repository」**

3. **以下を入力**

   ```
   Repository name: koten-transcriber
   Description: NDL古文書自動翻刻ツール
   Public: ☑ チェック
   ```

4. **「Create repository」をクリック**

✅ **リポジトリが作成されました！**

---

## 4️⃣ ファイルをアップロード（5分）

### 最も簡単な方法：GitHub Web UI

1. GitHub でリポジトリを開く

2. **「Add file」** → **「Upload files」**

3. **以下のファイルをドラッグ&ドロップ**

   ```
   ✅ package.json
   ✅ next.config.js
   ✅ tailwind.config.js
   ✅ postcss.config.js
   ✅ .env.example
   ✅ .gitignore
   ✅ README.md
   ✅ GUIDE.md
   ✅ WEB_RELEASE_GUIDE.md
   ✅ FILE_STRUCTURE_GUIDE.md
   ✅ transcribe_ndl.py
   ```

4. **「Commit changes」をクリック**

✅ **ファイルがアップロードされました！**

---

## 5️⃣ ページファイルを作成（3分）

### pages フォルダ内のファイル

GitHub で以下のファイルを作成：

#### pages/index.jsx

1. **「Add file」** → **「Create new file」**

2. **ファイル名**: `pages/index.jsx`

3. `pages_index.jsx` のコードをコピー＆ペースト

4. **「Commit changes」**

#### pages/_app.js

1. **「Add file」** → **「Create new file」**

2. **ファイル名**: `pages/_app.js`

3. `pages_app.js` のコードをコピー＆ペースト

4. **「Commit changes」**

#### pages/_document.js

1. **「Add file」** → **「Create new file」**

2. **ファイル名**: `pages/_document.js`

3. `pages_document.js` のコードをコピー＆ペースト

4. **「Commit changes」**

---

## 6️⃣ スタイルファイルを作成（2分）

### styles フォルダ内のファイル

#### styles/globals.css

1. **「Add file」** → **「Create new file」**

2. **ファイル名**: `styles/globals.css`

3. `styles_globals.css` のコードをコピー＆ペースト

4. **「Commit changes」**

✅ **すべてのファイルが GitHub にアップロードされました！**

---

## 7️⃣ Vercel で公開（10分）

### 手順

1. ブラウザで以下を開く
   ```
   https://vercel.com/signup
   ```

2. **「GitHub で続行」をクリック**

3. **「Authorize Vercel」で許可**

4. Vercel ダッシュボードで **「+ New Project」**

5. **GitHub から インポート**
   - `[ユーザー名]/koten-transcriber` を選択

6. **Environment Variables を設定**

   ```
   KEY:   NEXT_PUBLIC_ANTHROPIC_API_KEY
   VALUE: sk-ant-xxxxxxxxxxxxx...
   ```

   ※ API キーの取得方法は下記を参照

7. **「Deploy」をクリック**

⏳ **3～5分待機...**

🎉 **完了！あなたのアプリが公開されました！**

---

# 🔐 Claude API キーを取得

## 手順

1. ブラウザで以下を開く
   ```
   https://console.anthropic.com/
   ```

2. **ログイン**
   - Google または GitHub アカウントでログイン

3. 左メニューから **「API Keys」**

4. **「Create Key」** をクリック

5. **キーをコピー**
   - 一度だけ表示されます
   - 必ずコピーして保存してください

6. **Vercel に貼り付け**
   - Environment Variables の VALUE に貼り付け
   - 「Add」をクリック

✅ **API キーが設定されました！**

---

# 🌐 あなたのアプリの URL

Vercel ダッシュボードで確認：

```
https://koten-transcriber.vercel.app
```

このURLを：
- 📱 SNS で共有
- 📧 メールで配信
- 🌐 ウェブサイトに埋め込み
- 🔗 QR コードで配布

できます！

---

# 🎨 デザインをカスタマイズ（オプション）

### タイトルを変更

1. GitHub で `pages/index.jsx` を開く

2. 以下の行を探す
   ```javascript
   title: '新編武蔵風土記稿',
   ```

3. テキストを変更
   ```javascript
   title: 'あなたのタイトル',
   ```

4. **「Commit changes」**

5. Vercel が自動デプロイ（3～5分）

---

### 色を変更

1. `tailwind.config.js` を編集

2. `amber` を別の色に変更
   - `blue`, `green`, `purple` など

3. **「Commit changes」**

詳細は **FILE_STRUCTURE_GUIDE.md** を参照

---

# ⚠️ 注意事項

## 無料範囲

- ✅ Vercel ホスティング：**月額 $0**
- ✅ GitHub リポジトリ：**月額 $0**
- ❌ Claude API：**有料** （$0.01～0.02 / ページ）

---

## API クレジット

1ページの翻刻でかかるコスト：
```
約 $0.01 ~ 0.02（日本円で約 1.5 ~ 3 円）
```

---

## 更新の反映

コードを修正した場合：

1. GitHub でファイルを編集
2. **「Commit changes」** をクリック
3. Vercel が自動的に検知してデプロイ
4. 数分後、変更が反映される

---

# 🆘 よくあるトラブル

## Q. Vercel でエラーが出ている

**A.** 確認事項：
- ✅ GitHub にすべてのファイルがあるか
- ✅ `pages/index.jsx` に正しいコードが入っているか
- ✅ Vercel で Environment Variables が設定されているか

**対策**：
1. Vercel ダッシュボードで「Redeploy」をクリック
2. ビルドログを確認

---

## Q. アプリが真っ白で何も表示されない

**A.** 確認事項：
- ✅ `pages/_app.js` が存在するか
- ✅ `styles/globals.css` が存在するか
- ✅ API キーが正しく設定されているか

**対策**：
1. ブラウザを再読み込み（Ctrl+Shift+R）
2. キャッシュをクリア
3. 別ブラウザで試す

---

## Q. API キーエラーが出ている

**A.** 確認事項：
- ✅ API キーをコピーできているか
- ✅ キー名が `NEXT_PUBLIC_ANTHROPIC_API_KEY` か
- ✅ Vercel で Redeploy を実行したか

---

# 📚 さらに詳しく知りたい場合

このフォルダに含まれる：

- **WEB_RELEASE_GUIDE.md** - 詳細な公開手順
- **FILE_STRUCTURE_GUIDE.md** - ファイル構造の詳説
- **README.md** - プロジェクト説明
- **GUIDE.md** - 使用ガイド

をご参照ください。

---

# 🎉 おめでとうございます！

あなたの古文書翻刻アプリが、世界中でアクセス可能になりました。

```
🌍 世界中のユーザーがあなたのアプリを使えます！
```

---

## 次のステップ

- 📱 SNS で公開
- 📧 友人・同僚にシェア
- 🌐 ウェブサイトに埋め込み
- 🎓 学術機関に紹介

---

**Happy Coding! 🚀**

何か問題が発生した場合は、お気軽にお問い合わせください。


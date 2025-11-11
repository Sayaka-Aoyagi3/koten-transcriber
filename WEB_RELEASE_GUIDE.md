# 🌐 古文書翻刻アプリをWEBで公開する方法

**対象者**: 非IT エンジニア向け  
**難易度**: ⭐⭐☆☆☆（中程度）  
**所要時間**: 30分～1時間

---

## 📌 事前に知っておくこと

このガイドは、3つの **無料サービス** を使って、あなたのアプリをインターネットで公開する方法を説明します。

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  GitHub     │ ──→ │  Vercel     │ ──→ │  あなたの   │
│ コード保管  │     │ 自動公開    │     │  WEBアプリ  │
└─────────────┘     └─────────────┘     └─────────────┘
   (無料)             (無料)            (世界中から利用可)
```

---

## 🎯 3ステップで完成

### ステップ1️⃣: GitHub に登録（5分）
### ステップ2️⃣: コードを GitHub に上げる（10分）
### ステップ3️⃣: Vercel で自動公開（10分）

---

# ✅ ステップ1: GitHub に登録

## 1-1. GitHub アカウント作成

1. ブラウザで以下のURLを開く：
   ```
   https://github.com/signup
   ```

2. **メールアドレス** を入力
   - 仕事用か個人用か、どちらでもOK
   - 例：`your_email@gmail.com`

3. **パスワード** を作成
   - 8文字以上（大文字・小文字・数字を含む）
   - 例：`Culture@Commons2025`

4. **ユーザー名** を決定
   - 半角英数字とハイフンのみ
   - 後で変更も可能
   - 例：`sayaka-culture-commons`

5. **ニュースレター配信の確認**
   - チェックは不要（好みで）

6. 「**Create account**」をクリック

7. **メール認証**
   - 登録したメールアドレスにGitHubから確認メールが届く
   - メール内のリンクをクリック

✅ **GitHub アカウント作成完了！**

---

# ✅ ステップ2: コードを GitHub にアップロード

## 2-1. 新しいリポジトリを作成

1. GitHub にログイン後、右上の **「+」マーク** をクリック

2. メニューから **「New repository」** を選択

3. **リポジトリ情報を入力**

   ```
   Repository name（必須）
   ├─ koten-transcriber
   │  （日本語は避ける、わかりやすい英数字で）
   │
   Description（説明・任意）
   ├─ NDL古文書自動翻刻ツール
   │
   Public / Private（公開設定）
   ├─ ☑ Public （みんなに見えるように）
   │
   チェックボックス
   ├─ ☐ Add a README file
   ├─ ☐ Add .gitignore  
   ├─ ☐ Choose a license
   ```

4. **「Create repository」** をクリック

✅ **GitHub リポジトリ作成完了！**

---

## 2-2. コードをアップロード（3つの方法）

### 方法A: GitHub Desktop（最も簡単・推奨）

#### ① GitHub Desktop をインストール

1. 以下のサイトにアクセス：
   ```
   https://desktop.github.com/
   ```

2. **「Download for...」** ボタンをクリック
   - Windows の場合：Windows 版をダウンロード
   - Mac の場合：Mac 版をダウンロード

3. インストーラーを実行して、指示に従う

#### ② GitHub Desktop でコードをアップロード

1. GitHub Desktop を起動

2. 「**File**」→「**Clone repository**」をクリック

3. あなたが作成したリポジトリを選択
   - 例：`sayaka-culture-commons/koten-transcriber`

4. **ローカルパス** を選択
   - 例：`C:\Users\YourName\Documents\koten-transcriber`
   - 「**Clone**」をクリック

5. エクスプローラーで該当フォルダを開く

6. 以下のファイルを用意してコピー：

   ```
   📁 koten-transcriber/
   ├─ 📄 transcriber_app.md
   ├─ 📄 transcribe_ndl.py
   ├─ 📄 README.md
   ├─ 📄 GUIDE.md
   └─ 📄 .gitignore  ← このファイルを作成
   ```

   **.gitignore ファイルの内容**（テキストエディタで作成）：
   ```
   node_modules/
   .env.local
   .DS_Store
   dist/
   build/
   ```

7. GitHub Desktop に戻る

8. 左下に、変更内容が表示される

9. **「Commit to main」** をクリック
   - Summary：`Initial commit`
   - Description：`Upload transcriber app`

10. 上部の **「Publish repository」** をクリック

✅ **コードがGitHubにアップロードされました！**

---

### 方法B: ブラウザでアップロード（最も簡単）

1. GitHub でリポジトリを開く

2. 「**Add file**」 → 「**Upload files**」

3. ファイルをドラッグ&ドロップ
   - `transcriber_app.md`
   - `transcribe_ndl.py`
   - `README.md`
   - `GUIDE.md`
   - `.gitignore`

4. **「Commit changes」** をクリック

✅ **コードがアップロードされました！**

---

### 方法C: コマンドライン（上級者向け）

```bash
git clone https://github.com/[ユーザー名]/koten-transcriber.git
cd koten-transcriber

# ファイルをコピー

git add .
git commit -m "Initial commit"
git push origin main
```

---

# ✅ ステップ3: Vercel で自動公開

## 3-1. Vercel にサインアップ

1. ブラウザで以下を開く：
   ```
   https://vercel.com/signup
   ```

2. **GitHub で続行** をクリック
   - 「Authorize Vercel」で許可

✅ **Vercel アカウント作成完了！**

---

## 3-2. React アプリをセットアップ

Vercel で React アプリをホストするために、少し準備が必要です。

### パッケージ.json を作成

リポジトリのルートに `package.json` ファイルを作成：

1. GitHub で リポジトリを開く

2. **「Add file」 → 「Create new file」**

3. **ファイル名**を入力：
   ```
   package.json
   ```

4. 以下の内容をコピー＆ペースト：

   ```json
   {
     "name": "koten-transcriber",
     "version": "1.0.0",
     "description": "NDL古文書自動翻刻ツール",
     "private": true,
     "dependencies": {
       "react": "^18.2.0",
       "react-dom": "^18.2.0",
       "lucide-react": "^0.263.1"
     },
     "scripts": {
       "dev": "react-scripts start",
       "build": "react-scripts build",
       "start": "react-scripts start"
     },
     "eslintConfig": {
       "extends": "react-app"
     },
     "browserslist": {
       "production": [">0.2%", "not dead", "not op_mini all"],
       "development": ["last 1 chrome version"]
     }
   }
   ```

5. **「Commit changes」** をクリック

---

### .vercelignore を作成

1. **「Add file」 → 「Create new file」**

2. **ファイル名**：
   ```
   .vercelignore
   ```

3. **内容**：
   ```
   transcribe_ndl.py
   README.md
   GUIDE.md
   WEB_RELEASE_GUIDE.md
   ```

4. **「Commit changes」** をクリック

---

## 3-3. Vercel でデプロイ

1. Vercel ダッシュボードにアクセス：
   ```
   https://vercel.com/dashboard
   ```

2. 右上の **「+ New Project」** をクリック

3. **GitHub から インポート**
   - 「Select a Git Repository」をクリック

4. あなたのリポジトリを選択：
   ```
   [ユーザー名]/koten-transcriber
   ```

5. **プロジェクト設定**
   - Framework Preset：**Next.js** → **その他** に変更
   - Root Directory：そのまま（root）

6. **Environment Variables（環境変数）を設定**
   - ⚠️ **これが重要です！** API キーを保護するため

   ```
   KEY: REACT_APP_API_KEY
   VALUE: [あなたの Anthropic API キー]
   ```

   ※ Anthropic API キーの取得方法は後述

7. **「Deploy」** をクリック

🎉 **デプロイが開始される！**

**3〜5分後、アプリが公開されます。**

---

## 3-4. デプロイ完了の確認

1. Vercel ダッシュボードで、プロジェクトが表示される

2. **プロジェクト名をクリック**

3. 上部の **プロジェクトURL** が表示される：
   ```
   https://koten-transcriber.vercel.app
   ```

✅ **これがあなたのWEBアプリのURLです！**

---

# 🔐 API キーの取得と設定

## Claude API キーの取得

1. ブラウザで Anthropic の公式サイトにアクセス：
   ```
   https://console.anthropic.com/
   ```

2. **ログイン または 登録**
   - Google/GitHub アカウントでログイン可能

3. 左側メニューから **「API Keys」** を選択

4. **「Create Key」** ボタンをクリック

5. **キーをコピー**
   - 一度だけ表示されるので、必ずコピー
   - 失くしたら、新しいキーを作成

6. 安全な場所に保存
   - パスワード管理アプリに登録推奨

---

## Vercel に環境変数を設定

1. Vercel ダッシュボードで、プロジェクトを開く

2. **「Settings」 タブをクリック**

3. 左側メニューから **「Environment Variables」** を選択

4. **「Add New」** をクリック

5. 以下を入力：
   ```
   Name: REACT_APP_API_KEY
   Value: sk-ant-xxxxxxxxxxxxx...
   ```

6. **「Save」** をクリック

7. **「Deployments」** タブに戻る

8. 最新のデプロイメントの右側「**⋯**」をクリック

9. **「Redeploy」** を選択

🔄 **アプリが再構築されます。（3～5分待機）**

---

# 🎉 公開完了！

## あなたのWEBアプリのURL

```
https://koten-transcriber.vercel.app
```

このURLを：
- ✅ SNS で共有
- ✅ メールで配信
- ✅ ウェブサイトに埋め込み
- ✅ QR コードで印刷

---

## 独自ドメインの設定（オプション）

例：`https://transcriber.culture-commons.jp` のような独自ドメインを使いたい場合

1. ドメイン取得サービスで `.jp` ドメインを購入
   - 例：`お名前.com`、`VALUE DOMAIN` など

2. Vercel で、プロジェクトの **「Settings」** を開く

3. **「Domains」** セクションを探す

4. **「Add Domain」** をクリック

5. 購入したドメイン名を入力

6. DNS設定を案内に従って修正
   - ドメイン会社の管理画面で設定

⏳ 反映には 24～48時間かかることもあります

---

# 📊 使用状況の確認

## Vercel ダッシュボード

1. https://vercel.com/dashboard にアクセス

2. プロジェクトをクリック

3. 確認できる情報：
   - 📈 アクセス数
   - ⚡ 読み込み速度
   - 🐛 エラーログ
   - 💰 API 使用状況

---

# 💡 便利な設定

## メール通知の設定

Vercel でエラーが発生した場合、メール通知を受け取れます：

1. **「Settings」 → 「Notifications」**

2. **「Email」** から通知内容を選択

---

## 複数バージョンの管理

テスト用と本番用を分ける場合：

1. GitHub で **「Create a new branch」**
   - 例：`develop` ブランチ

2. Vercel で **別のプロジェクト** として import

3. 動作確認後、main ブランチにマージ

```
main ブランチ  →  本番環境（自動デプロイ）
develop ブランチ →  テスト環境（手動確認）
```

---

# 🚀 更新の反映方法

コードを修正した場合：

1. GitHub にコードを push

2. Vercel が **自動的に検知** して再デプロイ

3. 数分後、変更が反映される

例：
```
1. ファイルを編集
2. GitHub Desktop で「Commit and Push」
3. Vercel が自動デプロイ
4. あなたのWEBアプリが更新される
```

---

# ⚠️ トラブルシューティング

## Q. アプリが真っ白（何も表示されない）

**A.** 確認事項：
- ✅ API キーが正しく設定されているか
- ✅ Vercel でデプロイが完了しているか
- ✅ ブラウザのコンソールでエラーを確認（F12キー）

---

## Q. 「API キーが見つかりません」エラー

**A.** 以下を確認：
1. Vercel の Environment Variables に キーが設定されている
2. キー名が `REACT_APP_API_KEY` か確認
3. 再度 Redeploy を実行

---

## Q. アップロードしたのに反映されない

**A.**
- ✅ GitHub に push されているか確認
- ✅ Vercel で Redeploy を実行
- ✅ ブラウザをリロード（Ctrl+R または Cmd+R）
- ✅ キャッシュをクリア（Ctrl+Shift+R）

---

## Q. SSL エラー（鍵マーク）が出ない

**A.** Vercel は自動で HTTPS を設定しています。
リロードか、別のブラウザで試してみてください。

---

# 🎓 次のステップ

### レベル1: 基本操作をマスター
- ✅ アプリのデプロイ
- ✅ コードの更新反映
- ✅ エラーの確認

### レベル2: カスタマイズ
- ⭐ ページデザインの変更
- ⭐ 翻刻対象資料の変更
- ⭐ 独自ドメイン設定

### レベル3: 高度な機能
- 🚀 複数言語対応
- 🚀 ユーザー登録機能
- 🚀 データベース連携

---

# 📞 サポート情報

## よくある質問（FAQ）

**Q. 無料で使い続けられる？**

**A.** 
- ✅ Vercel のホスティング：**無料**
- ✅ GitHub の保存：**無料**
- ❌ Claude API：**有料**（$0.01～0.02/ページ）

---

**Q. アクセス数に制限がある？**

**A.** Vercel は月間 10万リクエストまで無料。
それ以上は従量課金（1万リクエスト＝$0.50程度）

---

**Q. ずっと公開し続けたい場合は？**

**A.** 最初の 3ヶ月は無料で使い放題。以降、月額 $20 のプランを推奨。

---

## 参考リンク

- [Vercel 公式ドキュメント](https://vercel.com/docs)
- [GitHub ガイド](https://docs.github.com/)
- [React 入門ガイド](https://react.dev/learn)
- [Claude API ドキュメント](https://docs.anthropic.com/)

---

# ✨ 完成おめでとうございます！

あなたの「古文書翻刻アプリ」が、世界中の誰からでもアクセス可能なWEBアプリになりました。

```
🌍 世界中のユーザーが、あなたのアプリを使えるようになりました！
```

---

## 今後のアイデア

- 📱 モバイルアプリ化
- 🌐 複数言語対応（英語、中国語など）
- 💾 翻刻結果をクラウド保存
- 👥 ユーザーコミュニティ機能
- 📊 翻刻統計ダッシュボード

---

**質問や問題が発生した場合は、遠慮なく相談してください！**

**Happy Coding! 🎉**


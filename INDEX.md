# 📚 古文書翻刻アプリ - 完全ファイルガイド

このフォルダに含まれるすべてのファイルの説明と、用途別ガイドです。

---

## 🎯 どのガイドから読めばいい？

### 1️⃣ **初めての方**
   → **QUICKSTART.md** を読む（5分）
   
### 2️⃣ **WEBアプリとして公開したい**
   → **WEB_RELEASE_GUIDE.md** を読む（30分）
   
### 3️⃣ **ファイル構造を理解したい**
   → **FILE_STRUCTURE_GUIDE.md** を読む（10分）
   
### 4️⃣ **ローカルで実行したい**
   → **GUIDE.md** を読む（15分）

---

## 📄 ドキュメント（読むファイル）

| ファイル | 用途 | 難易度 | 所要時間 |
|---------|------|--------|---------|
| **QUICKSTART.md** | 🚀 最速スタート | ⭐ | 5分 |
| **WEB_RELEASE_GUIDE.md** | 🌐 WEBアプリ公開 | ⭐⭐ | 30分 |
| **FILE_STRUCTURE_GUIDE.md** | 📁 ファイル構造 | ⭐ | 10分 |
| **GUIDE.md** | 📖 完全ガイド | ⭐⭐ | 30分 |
| **README.md** | 📝 プロジェクト説明 | ⭐ | 5分 |

---

## 💻 アプリケーション（WEBで公開するファイル）

### 必須ファイル

| ファイル | 説明 | 必須性 |
|---------|------|--------|
| **package.json** | 依存ライブラリの定義 | ✅ 必須 |
| **next.config.js** | Next.js設定 | ✅ 必須 |
| **tailwind.config.js** | Tailwind CSS設定 | ✅ 必須 |
| **postcss.config.js** | PostCSS設定 | ✅ 必須 |
| **.env.example** | 環境変数テンプレート | ✅ 必須 |
| **.gitignore** | Git除外ファイル | ✅ 必須 |

### ページ＆コンポーネント

| ファイル | 配置先 | 説明 |
|---------|--------|------|
| **pages_index.jsx** | `pages/index.jsx` | メインアプリ（翻刻画面） |
| **pages_app.js** | `pages/_app.js` | Next.js共通設定 |
| **pages_document.js** | `pages/_document.js` | HTML設定 |
| **styles_globals.css** | `styles/globals.css` | グローバルスタイル |

### その他

| ファイル | 説明 |
|---------|------|
| **transcriber_app.md** | Claude.ai で実行可能なReactコード |
| **transcribe_ndl.py** | ローカル実行用Pythonスクリプト |

---

## 🗂️ GitHub にアップロードする際の構造

```
koten-transcriber/
│
├── 📄 package.json                 ← コピー
├── 📄 next.config.js               ← コピー
├── 📄 tailwind.config.js           ← コピー
├── 📄 postcss.config.js            ← コピー
├── 📄 .env.example                 ← コピー
├── 📄 .gitignore                   ← コピー
├── 📄 README.md                    ← コピー
├── 📄 GUIDE.md                     ← コピー
├── 📄 WEB_RELEASE_GUIDE.md         ← コピー
├── 📄 FILE_STRUCTURE_GUIDE.md      ← コピー
├── 📄 QUICKSTART.md                ← コピー
├── 📄 transcribe_ndl.py            ← コピー
│
├── 📁 pages/
│   ├── 📄 _app.js                  ← pages_app.js をコピー
│   ├── 📄 _document.js             ← pages_document.js をコピー
│   └── 📄 index.jsx                ← pages_index.jsx をコピー
│
└── 📁 styles/
    └── 📄 globals.css              ← styles_globals.css をコピー
```

---

## ✅ WEBアプリ公開 - チェックリスト

### 準備フェーズ

- [ ] すべてのファイルをダウンロード
- [ ] ファイル構造を確認
- [ ] 各ファイルの用途を理解

### GitHub フェーズ

- [ ] GitHub アカウント作成
- [ ] リポジトリ作成（`koten-transcriber`）
- [ ] すべてのファイルをアップロード
- [ ] フォルダ構造が正しいか確認

### Vercel フェーズ

- [ ] Vercel アカウント作成
- [ ] プロジェクトをインポート
- [ ] Environment Variables 設定
- [ ] API キー取得＆設定
- [ ] デプロイ実行
- [ ] アプリが表示されるか確認

### 公開フェーズ

- [ ] URL をコピー
- [ ] SNS で共有
- [ ] 動作確認

---

## 📊 ファイル容量

```
WEB_RELEASE_GUIDE.md    15.0 KB  ← 最も詳しい
QUICKSTART.md            8.5 KB  ← 最速スタート
transcriber_app.md      13.0 KB  ← React コード
GUIDE.md                 6.5 KB
FILE_STRUCTURE_GUIDE.md  6.8 KB
README.md                5.1 KB
pages_index.jsx          (大)    ← アプリ本体
transcribe_ndl.py        5.5 KB
```

---

## 🚀 実行方法（3つの選択肢）

### 方法1: ブラウザ版（推奨・最速）

```
1. transcriber_app.md を開く
2. コードをコピー
3. Claude.ai のアーティファクトに貼り付け
4. 実行
```

**メリット**: インストール不要、すぐ実行可能  
**デメリット**: API キーが必要

---

### 方法2: WEBアプリ版（本格的）

```
1. GitHub にアップロード
2. Vercel でデプロイ
3. URLにアクセス
```

**メリット**: 世界中からアクセス可能、いつでも利用可能  
**デメリット**: 準備に30分必要

---

### 方法3: ローカル版（開発向け）

```
1. Python をインストール
2. transcribe_ndl.py を実行
3. ローカルで処理
```

**メリット**: 大量データ処理に最適  
**デメリット**: 技術的知識が必要

---

## 🆘 よくある質問（FAQ）

### Q. どのファイルから始めたらいい？

**A.** **QUICKSTART.md** です。  
5分で概要をつかめます。

---

### Q. API キーはどこから取得？

**A.** 以下の手順：
1. https://console.anthropic.com/ にアクセス
2. ログイン（Google/GitHub）
3. 「API Keys」をクリック
4. 「Create Key」をクリック
5. キーをコピー

---

### Q. 費用はかかる？

**A.** 
- ✅ GitHub・Vercel：**無料**
- ❌ Claude API：**有料**（1ページ＝約1.5円）

---

### Q. 独自ドメイン設定できる？

**A.** はい。 **WEB_RELEASE_GUIDE.md** の「独自ドメインの設定」セクションを参照。

---

### Q. 複数言語対応できる？

**A.** はい。次のレベルの改造で実装可能。  
詳細は **GUIDE.md** の「次のステップ」を参照。

---

## 📞 トラブルシューティング

### エラー: "API キーが見つかりません"

**原因**: Environment Variables が設定されていない  
**対策**: WEB_RELEASE_GUIDE.md の「API キーの設定」を参照

---

### エラー: "ファイルが見つかりません"

**原因**: 階層構造が間違っている  
**対策**: FILE_STRUCTURE_GUIDE.md でファイル構造を確認

---

### アプリが真っ白

**原因**: CSS が読み込まれていない、またはビルドエラー  
**対策**: 
1. ブラウザをリロード（Ctrl+R）
2. キャッシュをクリア（Ctrl+Shift+R）
3. Vercel ビルドログを確認

---

## 🎓 学習ロードマップ

### Level 1: 基本
- [ ] ブラウザ版を試す（5分）
- [ ] QUICKSTART.md を読む（5分）

### Level 2: WEBアプリ化
- [ ] WEB_RELEASE_GUIDE.md を読む（30分）
- [ ] GitHub にアップロード（10分）
- [ ] Vercel でデプロイ（10分）

### Level 3: カスタマイズ
- [ ] FILE_STRUCTURE_GUIDE.md を読む（10分）
- [ ] デザイン変更（10分）
- [ ] 翻刻対象資料を変更（15分）

### Level 4: 応用
- [ ] Python スクリプトを理解（30分）
- [ ] 複数資料に対応（1時間）
- [ ] データベース連携（2時間）

---

## 📖 参考資料

- [Next.js 公式ドキュメント](https://nextjs.org/docs)
- [Vercel デプロイガイド](https://vercel.com/docs)
- [Claude API ドキュメント](https://docs.anthropic.com/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [GitHub ガイド](https://docs.github.com/)

---

## 🎉 成功の指標

### 3つのマイルストーン

```
✅ Step 1: Claude.ai で翻刻が動く
         ↓
✅ Step 2: GitHub にコードがある
         ↓
✅ Step 3: Vercel で公開されている 🎉
```

---

## 💡 アイデア集

### 短期（1週間）
- 📱 モバイル対応確認
- 🎨 色・デザイン変更
- 📊 ページアクセス分析

### 中期（1ヶ月）
- 🌐 複数言語対応
- 💾 翻刻結果の自動保存
- 👥 ユーザーコメント機能

### 長期（3ヶ月）
- 📚 複数資料対応
- 🔍 テキスト検索機能
- 📈 ダッシュボード

---

## ⭐ この順番で進めることをお勧めします

### 推奨順序

1. **QUICKSTART.md** を読む（5分）
   ↓
2. Claude.ai でテスト実行（5分）
   ↓
3. **WEB_RELEASE_GUIDE.md** を読む（30分）
   ↓
4. 実際に GitHub にアップロード（15分）
   ↓
5. Vercel で公開（15分）
   ↓
6. 🎉 完成！

**合計: 1時間 20分**

---

## 📝 最後に

あなたのアプリが世界中の人に使われるようになります。

```
🌍 世界中のユーザーがあなたのアプリを利用可能に！
```

質問や問題が発生したら、遠慮なく相談してください。

**Happy Coding! 🚀**


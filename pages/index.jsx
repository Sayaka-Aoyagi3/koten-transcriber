import React, { useState } from 'react';
import { Download, Loader, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home() {
  const [transcriptions, setTranscriptions] = useState({});
  const [loading, setLoading] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(114);
  const [batchProgress, setBatchProgress] = useState('');

  const manifestData = {
    title: '新編武蔵風土記稿',
    subtitle: '巻之１８～２４（豊島郡・葛飾郡）',
    publisher: '内務省地理局',
    date: '明治17年（1884年）',
    id: '763978'
  };

  const getPageImageUrl = (pageNum) => {
    return `https://dl.ndl.go.jp/api/iiif/763978/R${String(pageNum).padStart(7, '0')}/full/full/0/default.jpg`;
  };

  const transcribePage = async (pageNum) => {
    if (transcriptions[pageNum]) return;

    setLoading(prev => ({ ...prev, [pageNum]: true }));
    
    try {
      const imageUrl = getPageImageUrl(pageNum);
      
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const reader = new FileReader();
      
      reader.onload = async (e) => {
        const base64Data = e.target.result.split(',')[1];
        
        const apiResponse = await fetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.NEXT_PUBLIC_ANTHROPIC_API_KEY || "",
          },
          body: JSON.stringify({
            model: "claude-sonnet-4-20250514",
            max_tokens: 2000,
            messages: [
              {
                role: "user",
                content: [
                  {
                    type: "image",
                    source: {
                      type: "base64",
                      media_type: "image/jpeg",
                      data: base64Data,
                    }
                  },
                  {
                    type: "text",
                    text: `この画像は明治時代の地誌『${manifestData.title}』のスキャン画像です。

以下の方針で翻刻してください:
1. 古い字体を現代の字体に変換
2. 変体仮名を現代の仮名に統一（ゐ→い、ゑ→え など）
3. 適切に句点を挿入
4. 読みにくい文字は【？】と記す
5. 行単位で改行を保持
6. レイアウトはできるだけ原文に近く
7. 注釈が必要な場合は【】内に記す

翻刻後のテキストのみを出力してください。`
                  }
                ]
              }
            ]
          })
        });

        const data = await apiResponse.json();
        
        if (data.error) {
          setTranscriptions(prev => ({
            ...prev,
            [pageNum]: `エラー: ${data.error.message || '不明なエラーが発生しました'}`
          }));
        } else {
          const transcribedText = data.content[0].text;
          setTranscriptions(prev => ({
            ...prev,
            [pageNum]: transcribedText
          }));
        }
      };
      
      reader.readAsDataURL(blob);
    } catch (error) {
      setTranscriptions(prev => ({
        ...prev,
        [pageNum]: `エラー: ${error.message}`
      }));
    } finally {
      setLoading(prev => ({ ...prev, [pageNum]: false }));
    }
  };

  const transcribeRange = async (start, end) => {
    setBatchProgress(`${start}〜${end}ページを処理中...`);
    
    for (let i = start; i <= end; i++) {
      if (!transcriptions[i]) {
        await transcribePage(i);
        setBatchProgress(`${i}/${end}ページ完了`);
        await new Promise(resolve => setTimeout(resolve, 1500));
      }
    }
    
    setBatchProgress('');
  };

  const downloadAll = () => {
    const sortedPages = Object.entries(transcriptions)
      .sort((a, b) => parseInt(a[0]) - parseInt(b[0]))
      .map(([page, text]) => `【ページ ${page}】\n\n${text}\n\n${'─'.repeat(60)}\n\n`)
      .join('');

    const header = `${manifestData.title}\n${manifestData.subtitle}\n出版社: ${manifestData.publisher}\n出版年: ${manifestData.date}\n生成日時: ${new Date().toLocaleString('ja-JP')}\n\n${'═'.repeat(60)}\n\n`;

    const blob = new Blob([header + sortedPages], { type: 'text/plain; charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${manifestData.title}_翻刻_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const handlePageChange = (delta) => {
    setCurrentPage(prev => Math.max(1, Math.min(totalPages, prev + delta)));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* ヘッダー */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-amber-900 mb-2">📚 古文書翻刻ツール</h1>
          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-600">
            <h2 className="text-2xl font-bold text-amber-900 mb-1">{manifestData.title}</h2>
            <p className="text-gray-600 mb-3">{manifestData.subtitle}</p>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-gray-500">出版社</span>
                <p className="font-semibold text-gray-800">{manifestData.publisher}</p>
              </div>
              <div>
                <span className="text-gray-500">出版年</span>
                <p className="font-semibold text-gray-800">{manifestData.date}</p>
              </div>
              <div>
                <span className="text-gray-500">総ページ数</span>
                <p className="font-semibold text-gray-800">{totalPages} ページ</p>
              </div>
            </div>
          </div>
        </div>

        {/* クイックアクション */}
        <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border border-amber-200">
          <h3 className="font-bold text-amber-900 mb-3">⚡ クイック翻刻</h3>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => transcribeRange(1, 5)}
              className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition text-sm font-semibold"
            >
              最初の5ページ
            </button>
            <button
              onClick={() => transcribeRange(1, 10)}
              className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition text-sm font-semibold"
            >
              最初の10ページ
            </button>
            <button
              onClick={() => transcribeRange(currentPage, Math.min(currentPage + 4, totalPages))}
              className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition text-sm font-semibold"
            >
              今のページから5ページ
            </button>
          </div>
          {batchProgress && (
            <div className="mt-3 text-sm text-amber-700 flex items-center gap-2">
              <Loader className="w-4 h-4 animate-spin" />
              {batchProgress}
            </div>
          )}
        </div>

        {/* メインコンテンツ */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* 画像ビューア */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="aspect-video bg-gray-100 overflow-auto flex items-center justify-center">
              <img
                src={getPageImageUrl(currentPage)}
                alt={`ページ ${currentPage}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="p-4 bg-gray-50 border-t">
              <div className="flex items-center justify-between mb-3">
                <button
                  onClick={() => handlePageChange(-1)}
                  disabled={currentPage <= 1}
                  className="p-2 hover:bg-gray-200 rounded-lg disabled:text-gray-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="text-center flex-1">
                  <input
                    type="number"
                    min="1"
                    max={totalPages}
                    value={currentPage}
                    onChange={(e) => setCurrentPage(Math.max(1, Math.min(totalPages, parseInt(e.target.value) || 1)))}
                    className="w-16 px-2 py-1 border rounded text-center font-bold"
                  />
                  <span className="text-gray-600 ml-2">/ {totalPages}</span>
                </div>
                <button
                  onClick={() => handlePageChange(1)}
                  disabled={currentPage >= totalPages}
                  className="p-2 hover:bg-gray-200 rounded-lg disabled:text-gray-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              <button
                onClick={() => transcribePage(currentPage)}
                disabled={loading[currentPage]}
                className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:bg-gray-400 font-semibold transition"
              >
                {loading[currentPage] ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader className="w-4 h-4 animate-spin" />
                    翻刻中...
                  </span>
                ) : (
                  'このページを翻刻'
                )}
              </button>
            </div>
          </div>

          {/* 翻刻テキスト */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <div className="p-4 bg-amber-50 border-b border-amber-200">
              <h3 className="font-bold text-amber-900">翻刻結果（ページ {currentPage}）</h3>
            </div>
            <div className="flex-1 overflow-auto p-4 text-sm text-gray-800 whitespace-pre-wrap leading-relaxed font-serif">
              {loading[currentPage] ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <Loader className="w-8 h-8 animate-spin mx-auto mb-2 text-amber-500" />
                    <p className="text-gray-600">翻刻中...</p>
                  </div>
                </div>
              ) : transcriptions[currentPage] ? (
                transcriptions[currentPage]
              ) : (
                <div className="text-gray-400 text-center py-20">
                  翻刻ボタンをクリックして開始します
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ダウンロード */}
        {Object.keys(transcriptions).length > 0 && (
          <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border border-green-200">
            <button
              onClick={downloadAll}
              className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 font-bold transition flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              翻刻結果をダウンロード ({Object.keys(transcriptions).length} ページ)
            </button>
          </div>
        )}

        {/* 注意 */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-yellow-900 mb-2">⚠️ 使用上の注意</h4>
              <ul className="text-sm text-yellow-800 space-y-1 list-disc list-inside">
                <li>翻刻結果は自動処理のため、重要な利用時は原本と照合してください</li>
                <li>Claude API のクレジットが消費されます</li>
                <li>連続処理時はレート制限に注意してください</li>
                <li>画質が低い場合は翻刻精度が低下する可能性があります</li>
              </ul>
            </div>
          </div>
        </div>

        {/* フッター */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <p>NDL古文書自動翻刻ツール | Culture + Commons</p>
          <p className="mt-1">powered by Claude Vision</p>
        </div>
      </div>
    </div>
  );
}
```

---

## 🛠️ 使い方

1. **上のコードをすべてコピー**

2. **テキストエディタを開く**

3. **貼り付け**

4. **重要：以下の場所に保存**
```
   C:\Users\[ユーザー名]\Documents\koten-transcriber\pages\index.jsx
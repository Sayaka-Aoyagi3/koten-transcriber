#!/usr/bin/env python3
"""
NDL (National Diet Library) マニフェストから古文書を自動翻刻するスクリプト

使用方法:
    python3 transcribe_ndl.py

前提条件:
    - anthropic パッケージのインストール: pip install anthropic
    - ANTHROPIC_API_KEY 環境変数の設定
"""

import anthropic
import json
import urllib.request
import base64
import sys
import time
from pathlib import Path

# 設定
MANIFEST_ID = "763978"
MANIFEST_TITLE = "新編武蔵風土記稿"
TOTAL_PAGES = 114
OUTPUT_FILE = "transcription_output.txt"

def get_page_url(page_num: int) -> str:
    """ページ番号からNDL画像URLを生成"""
    return f"https://dl.ndl.go.jp/api/iiif/{MANIFEST_ID}/R{page_num:07d}/full/full/0/default.jpg"

def download_image_as_base64(url: str) -> str | None:
    """画像をダウンロードしてBase64エンコード"""
    try:
        print(f"  画像ダウンロード中: {url}")
        with urllib.request.urlopen(url, timeout=30) as response:
            image_data = response.read()
            base64_image = base64.standard_b64encode(image_data).decode('utf-8')
            print(f"  ✓ ダウンロード完了 ({len(image_data)/1024:.1f} KB)")
            return base64_image
    except Exception as e:
        print(f"  ✗ ダウンロード失敗: {e}")
        return None

def transcribe_page(client: anthropic.Anthropic, page_num: int, image_base64: str) -> str:
    """Claude APIでページを翻刻"""
    try:
        print(f"  Claude APIで翻刻処理中...")
        
        message = client.messages.create(
            model="claude-sonnet-4-20250514",
            max_tokens=2000,
            messages=[
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "image",
                            "source": {
                                "type": "base64",
                                "media_type": "image/jpeg",
                                "data": image_base64,
                            },
                        },
                        {
                            "type": "text",
                            "text": """この画像は明治時代の地誌『新編武蔵風土記稿』のスキャン画像です。

以下の方針で翻刻してください:
1. 古い字体を現代の字体に変換
2. 変体仮名を現代の仮名に統一（ゐ→い、ゑ→え など）
3. 適切に句点を挿入
4. 読みにくい文字は【？】と記す
5. 行単位で改行を保持
6. レイアウトはできるだけ原文に近く
7. 注釈や補足が必要な場合は【】内に記す

翻刻後のテキストのみを出力してください。"""
                        }
                    ],
                }
            ],
        )
        
        transcribed_text = message.content[0].text
        print(f"  ✓ 翻刻完了")
        return transcribed_text
        
    except Exception as e:
        print(f"  ✗ 翻刻失敗: {e}")
        return f"エラー: {e}"

def save_transcription(page_num: int, transcription: str, append: bool = True):
    """翻刻結果をファイルに保存"""
    header = f"\n{'='*70}\n【ページ {page_num}】\n{'='*70}\n"
    
    mode = 'a' if append else 'w'
    with open(OUTPUT_FILE, mode, encoding='utf-8') as f:
        f.write(header)
        f.write(transcription)
        f.write("\n")

def transcribe_pages(start_page: int = 1, end_page: int = 5):
    """指定範囲のページを翻刻"""
    # API キーの確認
    client = anthropic.Anthropic()
    
    print(f"\n{'='*70}")
    print(f"NDL 古文書自動翻刻ツール")
    print(f"{'='*70}")
    print(f"対象: {MANIFEST_TITLE}")
    print(f"範囲: ページ {start_page} 〜 {end_page}")
    print(f"出力: {OUTPUT_FILE}")
    print(f"{'='*70}\n")
    
    # ファイルを初期化
    if start_page == 1:
        with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
            f.write(f"{MANIFEST_TITLE} - 翻刻結果\n")
            f.write(f"生成日時: {time.strftime('%Y-%m-%d %H:%M:%S')}\n")
    
    total = end_page - start_page + 1
    
    for page_num in range(start_page, end_page + 1):
        progress = page_num - start_page + 1
        print(f"[{progress}/{total}] ページ {page_num}/{TOTAL_PAGES}")
        
        # 画像をダウンロード
        url = get_page_url(page_num)
        image_base64 = download_image_as_base64(url)
        
        if not image_base64:
            print(f"  スキップ")
            save_transcription(page_num, "[ダウンロード失敗]")
            continue
        
        # 翻刻処理
        transcription = transcribe_page(client, page_num, image_base64)
        save_transcription(page_num, transcription)
        
        # レート制限対策（APIの呼び出し制限を避けるため）
        if page_num < end_page:
            print("  2秒待機中...")
            time.sleep(2)
        
        print()
    
    print(f"{'='*70}")
    print(f"完了! 結果は {OUTPUT_FILE} に保存されました")
    print(f"{'='*70}\n")

if __name__ == "__main__":
    # コマンドライン引数で範囲を指定可能
    start = int(sys.argv[1]) if len(sys.argv) > 1 else 1
    end = int(sys.argv[2]) if len(sys.argv) > 2 else 5
    
    try:
        transcribe_pages(start, end)
    except KeyboardInterrupt:
        print("\n\n中断されました。")
        sys.exit(1)
    except Exception as e:
        print(f"\nエラーが発生しました: {e}")
        sys.exit(1)

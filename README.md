# WebMC

これはJavaScriptで書かれたWebGLベースのウェブ版minecraftです。

> JavaScriptで記述できるアプリケーションは、最終的にはJavaScriptで記述されます。
--ジェフ・アトウッド（スタック・オーバーフローの共同設立者）
  >> JavaScriptで実現できるアプリケーションは、最終的にはJavaScriptで実現されます。  
     --Jeff Atwood（Stack OverFlow の共同設立者）

これがネットで有名な“[Atwood法則](https://blog.codinghorror.com/the-principle-of-least-power/)”，この法則を見た後、ずっと試してみたくて、jsで一番好きなmcを実現したい。0から作成し、第三者ライブラリは使用しません。繰り返しホイールを作ろうとするところが多いですが、私はゼロから好きなように作るという感覚が好きです。~~(今は何も実現していないが)~~

この言葉は知っているが _[最小電力の原理](https://www.w3.org/DesignIssues/Principles.html)_ と[チューリング完備](https://en.wikipedia.org/wiki/Turing_completeness)角度から出発する ~~(だいたい)~~，しかし、私たちはやはりPHPerを習う必要があります：JavaScriptは世界最高の言語です。

# How to Run

テクスチャ画像のクロスドメイン問題があるため、サーバーで実行する必要があります。
もしNode.js環境があれば、これで実行できます`node server.js`簡単なサーバーを運営するための指令、そして通過`http://localhost:3000/`訪問する。
あなたが使っているIDEに付属の静的サーバー機能があれば、IDEを通じてブラウザで開くことができます`/index.html`。

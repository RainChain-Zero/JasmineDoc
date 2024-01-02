import{_ as e,e as t}from"./app.44268f86.js";var c="/JasmineDoc/assets/chess.a4366276.png";const d={},l=t(`<h1 id="\u68CB\u7C7B\u6E38\u620F" tabindex="-1"><a class="header-anchor" href="#\u68CB\u7C7B\u6E38\u620F" aria-hidden="true">#</a> \u68CB\u7C7B\u6E38\u620F</h1><blockquote><p><em>(\u4F60\u5C31\u8FD9\u4E48\u9759\u9759\u770B\u7740\u68CB\u76D8\u5BF9\u9762\u5168\u795E\u8D2F\u6CE8\u7684\u5C11\u5973\uFF0C\u5982\u6B64\u8BA4\u771F\u7684\u6A21\u6837\u53EF\u4E0D\u591A\u89C1\u3002)</em></p></blockquote><p>\u8FD9\u5927\u6982\u662F\u6015\u7FA4\u53CB\u65E0\u804A\u6240\u4EE5\u63D0\u4F9B\u4E86\u4E00\u79CD\u5728\u7FA4\u91CC\u4E0B\u68CB\u7684\u529F\u80FD\u5427(</p><p>\u76EE\u524D\u652F\u6301\u7684\u6709\uFF1A</p><ul><li>\u4E94\u5B50\u68CB</li><li>\u56F4\u68CB\uFF08\u7981\u5168\u540C\uFF0C\u6682\u65F6\u4E0D\u652F\u6301\u70B9\u76EE\uFF09</li><li>\u9ED1\u767D\u68CB</li></ul><p>\u4F7F\u7528 chess \u6307\u4EE4\u5F00\u59CB\u4E00\u4E2A\u68CB\u5C40\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/chess --rule &lt;rule&gt; [--size &lt;size&gt;]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>\u4EE5\u4E0A\u6307\u4EE4\uFF0C\u901A\u8FC7 rule \u53C2\u6570\u6307\u5B9A\u89C4\u5219\uFF0C\u901A\u8FC7 size \u53C2\u6570\u6307\u5B9A\u68CB\u76D8\u5927\u5C0F\u4E3A\u591A\u5C11\uFF08n*n\uFF09\u3002</p></blockquote><p>\u6216\u8005\u76F4\u63A5\u4F7F\u7528\u5DF2\u7ECF\u6CE8\u518C\u53F7\u7684\u5FEB\u6377\u8C03\u7528\uFF1A<strong>\u201C\u56F4\u68CB\u201D\uFF0C\u201C\u4E94\u5B50\u68CB\u201D\uFF0C\u201C\u9ED1\u767D\u68CB\u201D</strong>\uFF0C\u4E5F\u53EF\u4EE5\u5F00\u59CB\u4E00\u4E2A\u68CB\u5C40\u3002\uFF08\u6CA1\u6709\u524D\u7F00\uFF09</p><p>\u6BD4\u5982\u4F60\u53EF\u4EE5\u4F7F\u7528<code>\u4E94\u5B50\u68CB --size 20</code>\u5F00\u59CB\u4E00\u573A\u68CB\u76D8\u5927\u5C0F\u4E3A 20 \u7684\u4E94\u5B50\u68CB\u3002</p><p>\u5176\u4E2D\u76EE\u524D\u652F\u6301\u7684\u68CB\u5C40\u89C4\u5219\u4EE5\u53CA\u5B83\u4EEC\u5BF9\u5E94\u7684\u89C4\u5219\u540D\u548C\u9ED8\u8BA4\u68CB\u76D8\u5927\u5C0F\u4E3A\uFF1A</p><table><thead><tr><th style="text-align:center;">\u5FEB\u6377\u540D</th><th style="text-align:center;">\u89C4\u5219\u540D</th><th style="text-align:center;">\u9ED8\u8BA4\u5927\u5C0F</th></tr></thead><tbody><tr><td style="text-align:center;">\u56F4\u68CB</td><td style="text-align:center;">go</td><td style="text-align:center;">19</td></tr><tr><td style="text-align:center;">\u4E94\u5B50\u68CB</td><td style="text-align:center;">gomoku</td><td style="text-align:center;">15</td></tr><tr><td style="text-align:center;">\u9ED1\u767D\u68CB / \u5965\u8D5B\u7F57</td><td style="text-align:center;">othello</td><td style="text-align:center;">8</td></tr></tbody></table><p>\u4F7F\u7528 <code>/chess --stop</code> \u6216\u8005 <code>\u505C\u6B62\u4E0B\u68CB</code> \u53EF\u4EE5\u505C\u6B62\u4E00\u4E2A\u6B63\u5728\u8FDB\u884C\u7684\u68CB\u5C40\u3002</p><p>\u4F60\u53EF\u4EE5\u4F7F\u7528\u6307\u4EE4<code>\u843D\u5B50 [\u4F4D\u7F6E]</code>\u7528\u6765\u653E\u7F6E\u68CB\u5B50\uFF0C\u5982<code>\u843D\u5B50 A3</code></p><p>\u5F53\u68CB\u5C40\u5F00\u59CB\u65F6\uFF0C\u9ED8\u8BA4\u53D1\u8D77\u4EBA\u662F\u540E\u624B\uFF0C\u800C\u7B2C\u4E00\u4E2A\u54CD\u5E94\u8FD9\u4E2A\u68CB\u5C40\u8005\u662F\u5148\u624B\uFF0C\u5F53\u4E00\u4F4D\u73A9\u5BB6\u4F7F\u7528<code>\u843D\u5B50</code>\u540E\u52A0\u5165\u68CB\u5C40\uFF0C\u8FD9\u65F6\u68CB\u5C40\u6709\u6548\uFF0C\u5176\u4ED6\u4EBA\u65E0\u6CD5\u52A0\u5165\u3002</p><p>\u53EF\u4EE5\u4F7F\u7528<code>\u6094\u68CB</code>\u8BA9\u68CB\u76D8\u5411\u540E\u9000\u4E00\u6B65\u3002</p><p>\u4F7F\u7528<code>\u8DF3\u8FC7\u56DE\u5408</code>\u53EF\u4EE5\u8DF3\u8FC7\u4E00\u4E2A\u56DE\u5408\u3002</p><p>\u8F93\u5165<code>\u67E5\u770B\u68CB\u76D8</code>\u53EF\u4EE5\u67E5\u770B\u5F53\u524D\u6B63\u5728\u8FDB\u884C\u7684\u68CB\u76D8\u3002</p><p><img src="`+c+'" alt="chess" loading="lazy"></p>',19);function s(n,r){return l}var o=e(d,[["render",s]]);export{o as default};
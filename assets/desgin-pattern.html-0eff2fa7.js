import{_ as n,p as s,q as a,Y as e}from"./framework-e1bed10d.js";const t={},c=e(`<h1 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式" aria-hidden="true">#</a> 设计模式</h1><h2 id="单例模式" tabindex="-1"><a class="header-anchor" href="#单例模式" aria-hidden="true">#</a> 单例模式</h2><blockquote><p>只进行一次实例化的类，并且可以全局访问。适用于管理应用程序中的全局状态</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> instance
<span class="token keyword">class</span> <span class="token class-name">Counter</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;class a only&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        instance <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> counter <span class="token operator">=</span> Obejct<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[c];function p(i,l){return s(),a("div",null,o)}const u=n(t,[["render",p],["__file","desgin-pattern.html.vue"]]);export{u as default};

import{i as e,r as t,s as n,t as r}from"./app-D-6_6R21.js";var i=JSON.parse(`{"path":"/2018-01-06-%E5%B1%9E%E6%80%A7%E5%92%8C%E8%BF%90%E8%A1%8C%E6%97%B6.html","title":"属性和运行时","lang":"en-US","frontmatter":{"title":"属性和运行时","date":"2018-01-06T17:30:03.000Z","permalink":"/2018-01-06-属性和运行时.html","tag":["iOS","Objective-C"],"article":true,"description":"@property 的本质是什么? @property 和运行时有什么关系? @property 一个 demo property 的本质是什么 @property 的本质就是成员变量加 getter 和 setter 方法。getter 和 setter 方法是编译器自动为我们生成的。我们也可以尝试去复写 getter 和 setter 方法，在设置...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"属性和运行时\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-01-06T17:30:03.000Z\\",\\"dateModified\\":\\"2026-05-22T05:59:03.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://www.fanthus.blog/2018-01-06-%E5%B1%9E%E6%80%A7%E5%92%8C%E8%BF%90%E8%A1%8C%E6%97%B6.html"}],["meta",{"property":"og:site_name","content":"fanthus's blog"}],["meta",{"property":"og:title","content":"属性和运行时"}],["meta",{"property":"og:description","content":"@property 的本质是什么? @property 和运行时有什么关系? @property 一个 demo property 的本质是什么 @property 的本质就是成员变量加 getter 和 setter 方法。getter 和 setter 方法是编译器自动为我们生成的。我们也可以尝试去复写 getter 和 setter 方法，在设置..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2026-05-22T05:59:03.000Z"}],["meta",{"property":"article:tag","content":"Objective-C"}],["meta",{"property":"article:tag","content":"iOS"}],["meta",{"property":"article:published_time","content":"2018-01-06T17:30:03.000Z"}],["meta",{"property":"article:modified_time","content":"2026-05-22T05:59:03.000Z"}]]},"git":{"createdTime":1667295292000,"updatedTime":1779429543000,"contributors":[{"name":"fanxiushan","username":"fanxiushan","email":"fanxiushan@gmail.com","commits":6,"url":"https://github.com/fanxiushan"},{"name":"Cursor","username":"Cursor","email":"cursoragent@cursor.com","commits":1,"url":"https://github.com/Cursor"}]},"readingTime":{"minutes":3.9,"words":1170},"filePathRelative":"_posts/2018-01-06-属性和运行时.md","excerpt":"<ol>\\n<li><code>@property</code> 的本质是什么?</li>\\n<li><code>@property</code> 和运行时有什么关系?</li>\\n<li><code>@property</code> 一个 demo</li>\\n</ol>\\n<h1><code>property</code> 的本质是什么</h1>\\n<p><code>@property</code> 的本质就是成员变量加 <code>getter</code> 和 <code>setter</code> 方法。<code>getter</code> 和 <code>setter</code> 方法是编译器自动为我们生成的。我们也可以尝试去复写 <code>getter</code> 和 <code>setter</code> 方法，在设置成员变量前后增加一些我们想要的业务逻辑。</p>","autoDesc":true}`),a={name:`2018-01-06-属性和运行时.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<ol><li><code>@property</code> 的本质是什么?</li><li><code>@property</code> 和运行时有什么关系?</li><li><code>@property</code> 一个 demo</li></ol><h1 id="property-的本质是什么" tabindex="-1"><a class="header-anchor" href="#property-的本质是什么"><span><code>property</code> 的本质是什么</span></a></h1><p><code>@property</code> 的本质就是成员变量加 <code>getter</code> 和 <code>setter</code> 方法。<code>getter</code> 和 <code>setter</code> 方法是编译器自动为我们生成的。我们也可以尝试去复写 <code>getter</code> 和 <code>setter</code> 方法，在设置成员变量前后增加一些我们想要的业务逻辑。</p><p><code>@property</code> 有不同的 <code>attribute</code> : <code>readonly</code>,<code>atomic</code>,<code>nonatomic</code> 等等。编译器会根据不同的 <code>attribute</code> 生成不同的 <code>getter</code> 和 <code>setter</code> 方法</p><h1 id="property-和运行时有什么关系" tabindex="-1"><a class="header-anchor" href="#property-和运行时有什么关系"><span><code>property</code> 和运行时有什么关系?</span></a></h1><p>来看下运行时系统对 <code>property</code> 相关类型的定义</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>template &lt;typename Element, typename List, uint32_t FlagMask&gt;</span></span>
<span class="line"><span>struct property_list_t : entsize_list_tt&lt;property_t, property_list_t, 0&gt; {</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>typedef struct property_t *objc_property_t;</span></span>
<span class="line"><span>struct property_t {</span></span>
<span class="line"><span>    const char *name;</span></span>
<span class="line"><span>    const char *attributes;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/// Defines a property attribute</span></span>
<span class="line"><span>typedef struct {</span></span>
<span class="line"><span>    const char *name;           /**&lt; The name of the attribute */</span></span>
<span class="line"><span>    const char *value;          /**&lt; The value of the attribute (usually empty) */</span></span>
<span class="line"><span>} objc_property_attribute_t;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>entsize_list_tt</code> 是通过 <code>C++</code> 的容器类，提供了容器类的基本方法，通过这些基本方法可以管理数据并以遍历的方式获取容器内的数据。<code>property_list_t</code> 是管理 <code>property_t</code> 的一个属性类型。</p></blockquote><p>了解了基本数据类型之后，我们来讨论几个问题</p><h2 id="类是怎么获取到-property-的" tabindex="-1"><a class="header-anchor" href="#类是怎么获取到-property-的"><span>类是怎么获取到 <code>@property</code> 的?</span></a></h2><p>看源码及注释</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>objc_property_t class_getProperty(Class cls, const char *name)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    .......</span></span>
<span class="line"><span>    //依次遍历父类</span></span>
<span class="line"><span>    for ( ; cls; cls = cls-&gt;superclass) {</span></span>
<span class="line"><span>        //遍历当前类的属性列表</span></span>
<span class="line"><span>        for (auto&amp; prop : cls-&gt;data()-&gt;properties) {</span></span>
<span class="line"><span>            //比较字符串如果相等就返回当前的 property</span></span>
<span class="line"><span>            if (0 == strcmp(name, prop.name)) {</span></span>
<span class="line"><span>                return (objc_property_t)&amp;prop;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return nil;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类是怎么增加-property-的" tabindex="-1"><a class="header-anchor" href="#类是怎么增加-property-的"><span>类是怎么增加 <code>property</code> 的?</span></a></h2><p>看源码及注释</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>static bool _class_addProperty(Class cls, const char *name,</span></span>
<span class="line"><span>                   const objc_property_attribute_t *attrs, unsigned int count,</span></span>
<span class="line"><span>                   bool replace)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    if (!cls) return NO;</span></span>
<span class="line"><span>    if (!name) return NO;</span></span>
<span class="line"><span>    //先从当前类获取指定名称的 property，如果有而且 caller 不想替换则直接返回</span></span>
<span class="line"><span>    property_t *prop = class_getProperty(cls, name);</span></span>
<span class="line"><span>    if (prop  &amp;&amp;  !replace) {</span></span>
<span class="line"><span>        // already exists, refuse to replace</span></span>
<span class="line"><span>        return NO;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //替换当前 property 流程，其实就是把 property 相关的 attributes 进行替换。</span></span>
<span class="line"><span>    else if (prop) {</span></span>
<span class="line"><span>        // replace existing</span></span>
<span class="line"><span>        rwlock_writer_t lock(runtimeLock);</span></span>
<span class="line"><span>        try_free(prop-&gt;attributes);</span></span>
<span class="line"><span>        //参数 count 是 attrs 的数量。</span></span>
<span class="line"><span>        prop-&gt;attributes = copyPropertyAttributeString(attrs, count);</span></span>
<span class="line"><span>        return YES;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    else {</span></span>
<span class="line"><span>        //为新的 property 分配空空间。值得注意的是这里并不是直接分配的 property 而是通过 property_list 进行操作的。</span></span>
<span class="line"><span>        property_list_t *proplist = (property_list_t *)malloc(sizeof(*proplist));</span></span>
<span class="line"><span>        proplist-&gt;count = 1;</span></span>
<span class="line"><span>        proplist-&gt;entsizeAndFlags = sizeof(proplist-&gt;first);</span></span>
<span class="line"><span>        proplist-&gt;first.name = strdupIfMutable(name);</span></span>
<span class="line"><span>        proplist-&gt;first.attributes = copyPropertyAttributeString(attrs, count);</span></span>
<span class="line"><span>        //cls-&gt;data() 拿到 class_rw_t 结构体，结构体里的 properties 是 property_array_t 类型，将新的 property 加入到 property 数组中。</span></span>
<span class="line"><span>        cls-&gt;data()-&gt;properties.attachLists(&amp;proplist, 1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return YES;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="property-和成员变量是怎么对应起来的" tabindex="-1"><a class="header-anchor" href="#property-和成员变量是怎么对应起来的"><span><code>property</code> 和成员变量是怎么对应起来的？</span></a></h2><p>其实是在编译这一步就做好了。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>@interface Fan : NSObject</span></span>
<span class="line"><span>@property (nonatomic,strong) NSString *name;</span></span>
<span class="line"><span>@end</span></span>
<span class="line"><span>.....</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译 clang -rewrite-objc main.m 之后结果</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>typedef struct objc_object Fan;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>extern &quot;C&quot; unsigned long OBJC_IVAR_$_Fan$_name;</span></span>
<span class="line"><span>struct Fan_IMPL {</span></span>
<span class="line"><span>	struct NSObject_IMPL NSObject_IVARS;</span></span>
<span class="line"><span>	NSString *_name;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>// @property (atomic,strong) NSString *name;</span></span>
<span class="line"><span>/* @end */</span></span>
<span class="line"><span>...</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到 <code>name</code> 属性变成了成员变量 <code>_name</code>。</p><h2 id="property-一个-demo" tabindex="-1"><a class="header-anchor" href="#property-一个-demo"><span><code>property</code> 一个 demo</span></a></h2><p>我们之前猜测不同 <code>property</code> 的 <code>attribute</code> 会对编译器造成影响，即生成出来的 <code>setter</code> 和 <code>getter</code> 方法可能不同，比如 <code>atomic</code> 的 <code>setter</code> 方法可能会有锁的实现，于是我补充了上面源码的 <code>getter</code> 和 <code>setter</code> 实现：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>static NSString * _I_Fan_name(Fan * self, SEL _cmd) { return (*(NSString **)((char *)self + OBJC_IVAR_$_Fan$_name)); }</span></span>
<span class="line"><span>static void _I_Fan_setName_(Fan * self, SEL _cmd, NSString *name) { (*(NSString **)((char *)self + OBJC_IVAR_$_Fan$_name)) = name; }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>发现 setter 并没有什么特别的地方...</p><p>难道我的验证有问题吗？感觉不应该。我尝试在 demo 中给 <code>name</code> 属性赋值，并打了个符号断点 <code>objc_setProperty_atomic</code> 发现这个方法确实走了，所以 <code>clang</code> 出来的结果应该是有问题的。怎么生成更准确的编译结果我也不清楚。。</p><p><img src="/assets/Jietu20180106-185957-BtJGweiK.png" alt="Jietu20180106-185957"></p><p>你也许会问 <code>objc_setProperty_atomic</code> 这个是干什么用的，翻源码到 <code>objc-accessors.mm</code> 这个文件看，可以看到不同的修饰符走了不同的设置属性的方法比如 <code>objc_setProperty_nonatomic</code>，<code>objc_setProperty_atomic</code>，<code>objc_setProperty_atomic_copy</code> 最终他们都调用了 <code>reallySetProperty</code> 这个方法接收了众多参数，根据不同的参数，走了不同的执行流。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>static inline void reallySetProperty(id self, SEL _cmd, id newValue, ptrdiff_t offset, bool atomic, bool copy, bool mutableCopy)</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    if (offset == 0) {</span></span>
<span class="line"><span>        object_setClass(self, newValue);</span></span>
<span class="line"><span>        return;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    id oldValue;</span></span>
<span class="line"><span>    //这里的 offset 其实就是上一步编译时候确定的。</span></span>
<span class="line"><span>    id *slot = (id*) ((char*)self + offset);</span></span>
<span class="line"><span>    if (copy) {</span></span>
<span class="line"><span>        newValue = [newValue copyWithZone:nil];</span></span>
<span class="line"><span>    } else if (mutableCopy) {</span></span>
<span class="line"><span>        newValue = [newValue mutableCopyWithZone:nil];</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        if (*slot == newValue) return;</span></span>
<span class="line"><span>        newValue = objc_retain(newValue);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if (!atomic) {</span></span>
<span class="line"><span>        oldValue = *slot;</span></span>
<span class="line"><span>        *slot = newValue;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        //在这里看到 atomic 确实是使用自旋锁来对赋值进行了保护。</span></span>
<span class="line"><span>        spinlock_t&amp; slotlock = PropertyLocks[slot];</span></span>
<span class="line"><span>        slotlock.lock();</span></span>
<span class="line"><span>        oldValue = *slot;</span></span>
<span class="line"><span>        *slot = newValue;</span></span>
<span class="line"><span>        slotlock.unlock();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    objc_release(oldValue);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，属性机制的实现不仅靠编译时，运行时也起了很大的作用。</p><p>一个思考，能否在运行时候动态添加属性呢？</p>`,31)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};
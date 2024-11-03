"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[89913],{16527:(e,a,n)=>{n.r(a),n.d(a,{comp:()=>c,data:()=>p});var s=n(24691),t=n(86082),l=n(78571);const i=n.p+"assets/img/connected.843d662a.jpg",o=n.p+"assets/img/smartrf.f6080d0e.png",r={},c=(0,n(88242).A)(r,[["render",function(e,a){const n=(0,s.g2)("RouteLink");return(0,s.uX)(),(0,s.CE)("div",null,[a[20]||(a[20]=(0,s.Lk)("h1",{id:"flashing-the-cc2531-usb-stick",tabindex:"-1"},[(0,s.Lk)("a",{class:"header-anchor",href:"#flashing-the-cc2531-usb-stick"},[(0,s.Lk)("span",null,"Flashing the CC2531 USB stick")])],-1)),(0,s.Lk)("p",null,[a[1]||(a[1]=(0,s.eW)("The firmware can be flashed with multiple devices. The easiest but most expensive option is with the ")),a[2]||(a[2]=(0,s.Lk)("em",null,"CC Debugger",-1)),a[3]||(a[3]=(0,s.eW)(" from Texas Instruments, which is described on this page. However, you can also use a ")),a[4]||(a[4]=(0,s.Lk)("em",null,"Raspberry Pi",-1)),a[5]||(a[5]=(0,s.eW)(" or a MCU like the ")),a[6]||(a[6]=(0,s.Lk)("em",null,"Arduino Uno",-1)),a[7]||(a[7]=(0,s.eW)(" or the cheap ")),a[8]||(a[8]=(0,s.Lk)("em",null,"ESP8266",-1)),a[9]||(a[9]=(0,s.eW)(" with four dupont cables and optionally a downloader cable. Information about these methods can be found here: ")),(0,s.bF)(n,{to:"/guide/adapters/flashing/alternative_flashing_methods.html"},{default:(0,s.k6)((()=>a[0]||(a[0]=[(0,s.eW)("Alternative firmware flashing methods")]))),_:1}),a[10]||(a[10]=(0,s.eW)("."))]),(0,s.Lk)("p",null,[a[12]||(a[12]=(0,s.Lk)("strong",null,"NOTE 1",-1)),a[13]||(a[13]=(0,s.eW)(": In case you are already running a Zigbee network: reflashing does not require repairing of all devices, see ")),(0,s.bF)(n,{to:"/guide/faq/#what-does-and-does-not-require-repairing-of-all-devices"},{default:(0,s.k6)((()=>a[11]||(a[11]=[(0,s.eW)("What does and does not require repairing of all devices?")]))),_:1})]),a[21]||(a[21]=(0,s.Lk)("p",null,[(0,s.Lk)("strong",null,"NOTE 2"),(0,s.eW)(": In this tutorial we will flash the default firmware. For larger network (20+) or when experiencing stability problems the "),(0,s.Lk)("a",{href:"https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin/source_routing",target:"_blank",rel:"noopener noreferrer"},"source routing firmware"),(0,s.eW)(" is recommended. This firmware has a limitation of 5 direct children so make sure to have enough routers in your network.")],-1)),(0,s.Lk)("p",null,[a[15]||(a[15]=(0,s.Lk)("strong",null,"NOTE 3",-1)),a[16]||(a[16]=(0,s.eW)(": The CC2531 USB dongle can be flashed also with the ")),a[17]||(a[17]=(0,s.Lk)("a",{href:"https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin/default",target:"_blank",rel:"noopener noreferrer"},"CC2530 firmware",-1)),a[18]||(a[18]=(0,s.eW)(" to be operated via the P0.2/P0.3 serial pins (which are the first one and the second one of the IO expansion port). Be careful when using the CC2531 in association with an ESP8266 (as if it were the ")),(0,s.bF)(n,{to:"/guide/adapters/flashing/connecting_cc2530.html#via-an-esp8266"},{default:(0,s.k6)((()=>a[14]||(a[14]=[(0,s.eW)("CC2530")]))),_:1}),a[19]||(a[19]=(0,s.eW)("): the onboard USB power supply may not be able to power an additional ESP8266 without overheating/failing."))]),a[22]||(a[22]=(0,s.Fv)('<h2 id="required-hardware" tabindex="-1"><a class="header-anchor" href="#required-hardware"><span>Required hardware</span></a></h2><p>The following additional hardware is required in order to flash the CC2531:</p><table><thead><tr><th>Name</th><th>Price</th><th>Picture</th></tr></thead><tbody><tr><td>CC debugger</td><td>+-9$ on AliExpress</td><td><img src="'+t+'" alt="CC debugger"></td></tr><tr><td>CC2531 downloader cable</td><td>+-2$ on AliExpress</td><td><img src="'+l+'" alt="Downloader cable CC2531"></td></tr></tbody></table><h2 id="windows" tabindex="-1"><a class="header-anchor" href="#windows"><span>Windows</span></a></h2><ol><li>Install <a href="http://www.ti.com/tool/flash-programmer" target="_blank" rel="noopener noreferrer">SmartRF Flash programmer</a> (<strong>NOT V2</strong>). This software is free but requires a Texas Instruments account in order to download.</li><li>Install the <a href="https://www.ti.com/tool/CC-DEBUGGER" target="_blank" rel="noopener noreferrer">CC debugger driver</a> on your PC (Windows only). Before continuing, verify that the CC Debugger driver has been installed correctly. See <a href="http://www.ti.com/lit/ug/swru197h/swru197h.pdf" target="_blank" rel="noopener noreferrer">Figure 1. Verify Correct Driver Installation @ Chapter 5.1</a>. In case the CC Debugger is not recognized correctly <a href="https://www.youtube.com/watch?v=jyKrxxXOvQY" target="_blank" rel="noopener noreferrer">install the driver manually</a>.</li><li>Connect <code>CC debugger --&gt; Downloader cable CC2531 --&gt; CC2531 USB sniffer</code>.</li><li>Connect <strong>BOTH</strong> the <code>CC2531 USB sniffer</code> and the <code>CC debugger</code> to your PC using USB.</li><li>If the light on the CC debugger is RED press set reset button on the CC debugger. The light on the CC debugger should now turn GREEN. If not use <a href="http://www.ti.com/lit/ug/swru197h/swru197h.pdf" target="_blank" rel="noopener noreferrer">CC debugger user guide</a> to troubleshoot your problem. <img src="'+i+'" alt="How to connect"></li><li>Download the firmware <a href="https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin/default/CC2531_DEFAULT_20211115.zip" target="_blank" rel="noopener noreferrer">CC2531_DEFAULT_20211115.zip</a></li><li>Start SmartRF Flash Programmer, setup as shown below and press <code>Perform actions</code>. Make sure to select the <code>.hex</code> file, not the <code>.bin</code> file! <img src="'+o+'" alt="SmartRF Flash Programmer"></li></ol><h2 id="linux-or-macos" tabindex="-1"><a class="header-anchor" href="#linux-or-macos"><span>Linux or MacOS</span></a></h2><p>Credits to <a href="https://github.com/frans-Willem" target="_blank" rel="noopener noreferrer">@Frans-Willem</a> for majority of instructions.</p><ol><li>Install prerequisites for <a href="https://github.com/dashesy/cc-tool" target="_blank" rel="noopener noreferrer">CC-Tool</a> using a package manager (e.g. <a href="https://brew.sh/" target="_blank" rel="noopener noreferrer">Homebrew</a> for macOS)</li></ol><ul><li>Ubuntu (version &gt;= 20.04): install cc-tool with <code>sudo apt install cc-tool</code> &amp; go on with 3.</li><li>Ubuntu/Debian: libusb-1.0-0-dev, libboost-all-dev, autoconf, libtool</li><li>Fedora: dh-autoreconf, boost-devel, libusb1-devel, gcc-c++</li><li>Archlinux: dh-autoreconf, libusb, boost</li><li>macOS: <code>brew install autoconf automake libusb boost pkgconfig libtool</code></li><li>Raspbian: dh-autoreconf, libusb-1.0-0-dev, libboost-all-dev</li></ul><ol start="2"><li>Build cc-tool</li></ol><ul><li>Linux:</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"></span>\n<span class="line"><span class="token function">git</span> clone https://github.com/dashesy/cc-tool.git</span>\n<span class="line"><span class="token builtin class-name">cd</span> cc-tool</span>\n<span class="line"></span>\n<span class="line"><span class="token assign-left variable">CPPFLAGS</span><span class="token operator">=</span><span class="token string">&quot;-I/usr/local/include&quot;</span> <span class="token punctuation">\\</span></span>\n<span class="line"><span class="token assign-left variable">LDFLAGS</span><span class="token operator">=</span><span class="token string">&quot;-I/usr/local/include&quot;</span> <span class="token punctuation">\\</span></span>\n<span class="line"> ./bootstrap</span>\n<span class="line"></span>\n<span class="line"><span class="token assign-left variable">CPPFLAGS</span><span class="token operator">=</span><span class="token string">&quot;-I/usr/local/opt/boost@1.76/include&quot;</span> <span class="token punctuation">\\</span></span>\n<span class="line"><span class="token assign-left variable">CXXFLAGS</span><span class="token operator">=</span><span class="token string">&quot;-std=c++0x&quot;</span> <span class="token punctuation">\\</span></span>\n<span class="line"><span class="token assign-left variable">LDFLAGS</span><span class="token operator">=</span><span class="token string">&quot;-L/usr/local/opt/boost@1.76/lib&quot;</span> <span class="token punctuation">\\</span></span>\n<span class="line"><span class="token assign-left variable">LIBUSB_CFLAGS</span><span class="token operator">=</span><span class="token string">&quot;-I/usr/local/include/libusb-1.0&quot;</span> <span class="token punctuation">\\</span></span>\n<span class="line"> ./configure</span>\n<span class="line"></span>\n<span class="line"><span class="token function">make</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>macOS:</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"></span>\n<span class="line"><span class="token function">git</span> clone https://github.com/dashesy/cc-tool.git</span>\n<span class="line"><span class="token builtin class-name">cd</span> cc-tool</span>\n<span class="line"></span>\n<span class="line"><span class="token assign-left variable">CPPFLAGS</span><span class="token operator">=</span><span class="token string">&quot;-I/opt/homebrew/include&quot;</span> <span class="token punctuation">\\</span></span>\n<span class="line"><span class="token assign-left variable">LDFLAGS</span><span class="token operator">=</span><span class="token string">&quot;-I/opt/homebrew/include&quot;</span> <span class="token punctuation">\\</span></span>\n<span class="line"> ./bootstrap</span>\n<span class="line"></span>\n<span class="line"><span class="token assign-left variable">CPPFLAGS</span><span class="token operator">=</span><span class="token string">&quot;-I/opt/homebrew/include&quot;</span> <span class="token punctuation">\\</span></span>\n<span class="line"><span class="token assign-left variable">CXXFLAGS</span><span class="token operator">=</span><span class="token string">&quot;-std=c++0x&quot;</span> <span class="token punctuation">\\</span></span>\n<span class="line"><span class="token assign-left variable">LDFLAGS</span><span class="token operator">=</span><span class="token string">&quot;-L/opt/homebrew/lib&quot;</span> <span class="token punctuation">\\</span></span>\n<span class="line"><span class="token assign-left variable">LIBUSB_CFLAGS</span><span class="token operator">=</span><span class="token string">&quot;-I/opt/homebrew/include&quot;</span> <span class="token punctuation">\\</span></span>\n<span class="line"> ./configure</span>\n<span class="line"></span>\n<span class="line"><span class="token function">make</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>Connect <code>CC debugger --&gt; Downloader cable CC2531 --&gt; CC2531 USB sniffer</code>.</li><li>Connect <strong>BOTH</strong> the <code>CC2531 USB sniffer</code> and the <code>CC debugger</code> to your PC using USB.</li><li>If the light on the CC debugger is RED, press the Reset button on the CC debugger. The light on the CC debugger should now turn GREEN. If not, try to reboot and retry or follow the <a href="http://www.ti.com/lit/ug/swru197h/swru197h.pdf" target="_blank" rel="noopener noreferrer">CC debugger user guide</a> to troubleshoot your problem. <img src="'+i+'" alt="How to connect"></li><li>Download the firmware <a href="https://github.com/Koenkk/Z-Stack-firmware/raw/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin/default/CC2531_DEFAULT_20211115.zip" target="_blank" rel="noopener noreferrer">CC2531_DEFAULT_20211115.zip</a>.</li><li>Flash your firmware:</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">sudo ./cc-tool -e -w CC2531ZNP-Prod.hex</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h1 id="how-to-check-the-installed-firmware-version" tabindex="-1"><a class="header-anchor" href="#how-to-check-the-installed-firmware-version"><span>How-to check the installed firmware version</span></a></h1><p>Zigbee2MQTT will output the installed firmware version to the Zigbee2MQTT log on startup:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Zigbee2MQTT:info  2019-11-09T13:01:14: Coordinator firmware version: &#39;{&quot;type&quot;:&quot;zStack30x&quot;,&quot;meta&quot;:{&quot;transportrev&quot;:2,&quot;product&quot;:2,&quot;majorrel&quot;:2,&quot;minorrel&quot;:7,&quot;maintrel&quot;:2,&quot;revision&quot;:20190425}}&#39;</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>In the above example the version is <code>20190425</code>.</p>',20))])}]]),p=JSON.parse('{"path":"/guide/adapters/flashing/flashing_the_cc2531.html","title":"Flashing the CC2531 USB stick","lang":"en-US","frontmatter":{"pageClass":"content-page"},"headers":[{"level":2,"title":"Required hardware","slug":"required-hardware","link":"#required-hardware","children":[]},{"level":2,"title":"Windows","slug":"windows","link":"#windows","children":[]},{"level":2,"title":"Linux or MacOS","slug":"linux-or-macos","link":"#linux-or-macos","children":[]}],"git":{"updatedTime":1730645888000},"filePathRelative":"guide/adapters/flashing/flashing_the_cc2531.md"}')},86082:e=>{e.exports="data:image/jpeg;base64,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"},78571:(e,a,n)=>{e.exports=n.p+"assets/img/downloader_cable.720e6aa2.png"}}]);
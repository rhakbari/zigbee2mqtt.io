"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[70362],{156:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>r,data:()=>n});var o=i(24691);const a={},r=(0,i(88242).A)(a,[["render",function(e,t){const i=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[t[8]||(t[8]=(0,o.Lk)("h1",{id:"efekta-efekta-eon213wz",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#efekta-efekta-eon213wz"},[(0,o.Lk)("span",null,"EFEKTA EFEKTA_eON213wz")])],-1)),(0,o.Lk)("table",null,[t[6]||(t[6]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1)),(0,o.Lk)("tbody",null,[t[2]||(t[2]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"EFEKTA_eON213wz")],-1)),(0,o.Lk)("tr",null,[t[1]||(t[1]=(0,o.Lk)("td",null,"Vendor",-1)),(0,o.Lk)("td",null,[(0,o.bF)(i,{to:"/supported-devices/#v=EFEKTA"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("EFEKTA")]))),_:1})])]),t[3]||(t[3]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"Mini weather station, digital barometer, forecast, charts, temperature, humidity")],-1)),t[4]||(t[4]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"battery, voltage, temperature, humidity, pressure, linkquality")],-1)),t[5]||(t[5]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/EFEKTA_eON213wz.png",alt:"EFEKTA EFEKTA_eON213wz"})])],-1))])]),t[9]||(t[9]=(0,o.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><p><a href="http://efektalab.com/eON213wz" target="_blank" rel="noopener noreferrer">Mini weather station, digital barometer, forecast, charts, temperature, humidity</a></p><h3 id="build-guide" tabindex="-1"><a class="header-anchor" href="#build-guide"><span>Build guide</span></a></h3><p>Instructions on how to build this device can be found <a href="https://github.com/smartboxchannel/EFEKTA_eON213wz" target="_blank" rel="noopener noreferrer">here</a></p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',5)),(0,o.Lk)("p",null,[(0,o.Lk)("em",null,[(0,o.bF)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.k6)((()=>t[7]||(t[7]=[(0,o.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,o.Fv)('<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>pressure_calibration</code>: Calibrates the pressure value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>pressure_precision</code>: Number of digits after decimal point for pressure, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Reported battery voltage in millivolts. Value can be found in the published state on the <code>voltage</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;voltage&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric"><span>Humidity (numeric)</span></a></h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;humidity&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="pressure-numeric" tabindex="-1"><a class="header-anchor" href="#pressure-numeric"><span>Pressure (numeric)</span></a></h3><p>The measured atmospheric pressure. Value can be found in the published state on the <code>pressure</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;pressure&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>kPa</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',14))])}]]),n=JSON.parse('{"path":"/devices/EFEKTA_eON213wz.html","title":"EFEKTA EFEKTA_eON213wz control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"EFEKTA EFEKTA_eON213wz control via MQTT","description":"Integrate your EFEKTA EFEKTA_eON213wz via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-09-16T00:31:40.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Build guide","slug":"build-guide","link":"#build-guide","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"Pressure (numeric)","slug":"pressure-numeric","link":"#pressure-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1730645888000},"filePathRelative":"devices/EFEKTA_eON213wz.md"}')}}]);
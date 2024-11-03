"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[99001],{62795:(e,r,t)=>{t.r(r),t.d(r,{comp:()=>n,data:()=>c});var o=t(24691);const i={},n=(0,t(88242).A)(i,[["render",function(e,r){const t=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[r[8]||(r[8]=(0,o.Lk)("h1",{id:"owon-pc321",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#owon-pc321"},[(0,o.Lk)("span",null,"OWON PC321")])],-1)),(0,o.Lk)("table",null,[r[6]||(r[6]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1)),(0,o.Lk)("tbody",null,[r[2]||(r[2]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"PC321")],-1)),(0,o.Lk)("tr",null,[r[1]||(r[1]=(0,o.Lk)("td",null,"Vendor",-1)),(0,o.Lk)("td",null,[(0,o.bF)(t,{to:"/supported-devices/#v=OWON"},{default:(0,o.k6)((()=>r[0]||(r[0]=[(0,o.eW)("OWON")]))),_:1})])]),r[3]||(r[3]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"3-Phase clamp power meter")],-1)),r[4]||(r[4]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"current, power, power_reactive, energy, reactive_energy, voltage_l1, voltage_l2, voltage_l3, current_l1, current_l2, current_l3, energy_l1, energy_l2, energy_l3, reactive_energy_l1, reactive_energy_l2, reactive_energy_l3, power_l1, power_l2, power_l3, reactive_power_l1, reactive_power_l2, reactive_power_l3, power_factor_l1, power_factor_l2, power_factor_l3, clear_metering, linkquality")],-1)),r[5]||(r[5]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/PC321.png",alt:"OWON PC321"})])],-1))])]),r[9]||(r[9]=(0,o.Lk)("h2",{id:"options",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#options"},[(0,o.Lk)("span",null,"Options")])],-1)),(0,o.Lk)("p",null,[(0,o.Lk)("em",null,[(0,o.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.k6)((()=>r[7]||(r[7]=[(0,o.eW)("How to use device type specific configuration")]))),_:1})])]),r[10]||(r[10]=(0,o.Fv)('<ul><li><p><code>current_calibration</code>: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>current_precision</code>: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>power_precision</code>: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="current-numeric" tabindex="-1"><a class="header-anchor" href="#current-numeric"><span>Current (numeric)</span></a></h3><p>Instantaneous measured electrical current. Value can be found in the published state on the <code>current</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric"><span>Power (numeric)</span></a></h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="power-reactive-numeric" tabindex="-1"><a class="header-anchor" href="#power-reactive-numeric"><span>Power reactive (numeric)</span></a></h3><p>Instantaneous measured reactive power. Value can be found in the published state on the <code>power_reactive</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>VAR</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric"><span>Energy (numeric)</span></a></h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="reactive-energy-numeric" tabindex="-1"><a class="header-anchor" href="#reactive-energy-numeric"><span>Reactive energy (numeric)</span></a></h3><p>Reactive energy for all phase. Value can be found in the published state on the <code>reactive_energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kVArh</code>.</p><h3 id="voltage-l1-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-l1-numeric"><span>Voltage l1 (numeric)</span></a></h3><p>Phase 1 voltage. Value can be found in the published state on the <code>voltage_l1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="voltage-l2-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-l2-numeric"><span>Voltage l2 (numeric)</span></a></h3><p>Phase 2 voltage. Value can be found in the published state on the <code>voltage_l2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="voltage-l3-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-l3-numeric"><span>Voltage l3 (numeric)</span></a></h3><p>Phase 3 voltage. Value can be found in the published state on the <code>voltage_l3</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="current-l1-numeric" tabindex="-1"><a class="header-anchor" href="#current-l1-numeric"><span>Current l1 (numeric)</span></a></h3><p>Phase 1 current. Value can be found in the published state on the <code>current_l1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="current-l2-numeric" tabindex="-1"><a class="header-anchor" href="#current-l2-numeric"><span>Current l2 (numeric)</span></a></h3><p>Phase 2 current. Value can be found in the published state on the <code>current_l2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="current-l3-numeric" tabindex="-1"><a class="header-anchor" href="#current-l3-numeric"><span>Current l3 (numeric)</span></a></h3><p>Phase 3 current. Value can be found in the published state on the <code>current_l3</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="energy-l1-numeric" tabindex="-1"><a class="header-anchor" href="#energy-l1-numeric"><span>Energy l1 (numeric)</span></a></h3><p>Phase 1 energy. Value can be found in the published state on the <code>energy_l1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="energy-l2-numeric" tabindex="-1"><a class="header-anchor" href="#energy-l2-numeric"><span>Energy l2 (numeric)</span></a></h3><p>Phase 2 energy. Value can be found in the published state on the <code>energy_l2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="energy-l3-numeric" tabindex="-1"><a class="header-anchor" href="#energy-l3-numeric"><span>Energy l3 (numeric)</span></a></h3><p>Phase 3 energy. Value can be found in the published state on the <code>energy_l3</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="reactive-energy-l1-numeric" tabindex="-1"><a class="header-anchor" href="#reactive-energy-l1-numeric"><span>Reactive energy l1 (numeric)</span></a></h3><p>Phase 1 reactive energy. Value can be found in the published state on the <code>reactive_energy_l1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kVArh</code>.</p><h3 id="reactive-energy-l2-numeric" tabindex="-1"><a class="header-anchor" href="#reactive-energy-l2-numeric"><span>Reactive energy l2 (numeric)</span></a></h3><p>Phase 2 reactive energy. Value can be found in the published state on the <code>reactive_energy_l2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kVArh</code>.</p><h3 id="reactive-energy-l3-numeric" tabindex="-1"><a class="header-anchor" href="#reactive-energy-l3-numeric"><span>Reactive energy l3 (numeric)</span></a></h3><p>Phase 3 reactive energy. Value can be found in the published state on the <code>reactive_energy_l3</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kVArh</code>.</p><h3 id="power-l1-numeric" tabindex="-1"><a class="header-anchor" href="#power-l1-numeric"><span>Power l1 (numeric)</span></a></h3><p>Phase 1 power. Value can be found in the published state on the <code>power_l1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="power-l2-numeric" tabindex="-1"><a class="header-anchor" href="#power-l2-numeric"><span>Power l2 (numeric)</span></a></h3><p>Phase 2 power. Value can be found in the published state on the <code>power_l2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="power-l3-numeric" tabindex="-1"><a class="header-anchor" href="#power-l3-numeric"><span>Power l3 (numeric)</span></a></h3><p>Phase 3 power. Value can be found in the published state on the <code>power_l3</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="reactive-power-l1-numeric" tabindex="-1"><a class="header-anchor" href="#reactive-power-l1-numeric"><span>Reactive power l1 (numeric)</span></a></h3><p>Phase 1 reactive power. Value can be found in the published state on the <code>reactive_power_l1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>VAr</code>.</p><h3 id="reactive-power-l2-numeric" tabindex="-1"><a class="header-anchor" href="#reactive-power-l2-numeric"><span>Reactive power l2 (numeric)</span></a></h3><p>Phase 2 reactive power. Value can be found in the published state on the <code>reactive_power_l2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>VAr</code>.</p><h3 id="reactive-power-l3-numeric" tabindex="-1"><a class="header-anchor" href="#reactive-power-l3-numeric"><span>Reactive power l3 (numeric)</span></a></h3><p>Phase 3 reactive power. Value can be found in the published state on the <code>reactive_power_l3</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>VAr</code>.</p><h3 id="power-factor-l1-numeric" tabindex="-1"><a class="header-anchor" href="#power-factor-l1-numeric"><span>Power factor l1 (numeric)</span></a></h3><p>Phase 1 power factor. Value can be found in the published state on the <code>power_factor_l1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="power-factor-l2-numeric" tabindex="-1"><a class="header-anchor" href="#power-factor-l2-numeric"><span>Power factor l2 (numeric)</span></a></h3><p>Phase 2 power factor. Value can be found in the published state on the <code>power_factor_l2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="power-factor-l3-numeric" tabindex="-1"><a class="header-anchor" href="#power-factor-l3-numeric"><span>Power factor l3 (numeric)</span></a></h3><p>Phase 3 power factor. Value can be found in the published state on the <code>power_factor_l3</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="clear-metering-enum" tabindex="-1"><a class="header-anchor" href="#clear-metering-enum"><span>Clear metering (enum)</span></a></h3><p>Clear measurement data. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;clear_metering&quot;: NEW_VALUE}</code>. The possible values are: <code>clear</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',58))])}]]),c=JSON.parse('{"path":"/devices/PC321.html","title":"OWON PC321 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"OWON PC321 control via MQTT","description":"Integrate your OWON PC321 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-07-01T08:15:09.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Current (numeric)","slug":"current-numeric","link":"#current-numeric","children":[]},{"level":3,"title":"Power (numeric)","slug":"power-numeric","link":"#power-numeric","children":[]},{"level":3,"title":"Power reactive (numeric)","slug":"power-reactive-numeric","link":"#power-reactive-numeric","children":[]},{"level":3,"title":"Energy (numeric)","slug":"energy-numeric","link":"#energy-numeric","children":[]},{"level":3,"title":"Reactive energy (numeric)","slug":"reactive-energy-numeric","link":"#reactive-energy-numeric","children":[]},{"level":3,"title":"Voltage l1 (numeric)","slug":"voltage-l1-numeric","link":"#voltage-l1-numeric","children":[]},{"level":3,"title":"Voltage l2 (numeric)","slug":"voltage-l2-numeric","link":"#voltage-l2-numeric","children":[]},{"level":3,"title":"Voltage l3 (numeric)","slug":"voltage-l3-numeric","link":"#voltage-l3-numeric","children":[]},{"level":3,"title":"Current l1 (numeric)","slug":"current-l1-numeric","link":"#current-l1-numeric","children":[]},{"level":3,"title":"Current l2 (numeric)","slug":"current-l2-numeric","link":"#current-l2-numeric","children":[]},{"level":3,"title":"Current l3 (numeric)","slug":"current-l3-numeric","link":"#current-l3-numeric","children":[]},{"level":3,"title":"Energy l1 (numeric)","slug":"energy-l1-numeric","link":"#energy-l1-numeric","children":[]},{"level":3,"title":"Energy l2 (numeric)","slug":"energy-l2-numeric","link":"#energy-l2-numeric","children":[]},{"level":3,"title":"Energy l3 (numeric)","slug":"energy-l3-numeric","link":"#energy-l3-numeric","children":[]},{"level":3,"title":"Reactive energy l1 (numeric)","slug":"reactive-energy-l1-numeric","link":"#reactive-energy-l1-numeric","children":[]},{"level":3,"title":"Reactive energy l2 (numeric)","slug":"reactive-energy-l2-numeric","link":"#reactive-energy-l2-numeric","children":[]},{"level":3,"title":"Reactive energy l3 (numeric)","slug":"reactive-energy-l3-numeric","link":"#reactive-energy-l3-numeric","children":[]},{"level":3,"title":"Power l1 (numeric)","slug":"power-l1-numeric","link":"#power-l1-numeric","children":[]},{"level":3,"title":"Power l2 (numeric)","slug":"power-l2-numeric","link":"#power-l2-numeric","children":[]},{"level":3,"title":"Power l3 (numeric)","slug":"power-l3-numeric","link":"#power-l3-numeric","children":[]},{"level":3,"title":"Reactive power l1 (numeric)","slug":"reactive-power-l1-numeric","link":"#reactive-power-l1-numeric","children":[]},{"level":3,"title":"Reactive power l2 (numeric)","slug":"reactive-power-l2-numeric","link":"#reactive-power-l2-numeric","children":[]},{"level":3,"title":"Reactive power l3 (numeric)","slug":"reactive-power-l3-numeric","link":"#reactive-power-l3-numeric","children":[]},{"level":3,"title":"Power factor l1 (numeric)","slug":"power-factor-l1-numeric","link":"#power-factor-l1-numeric","children":[]},{"level":3,"title":"Power factor l2 (numeric)","slug":"power-factor-l2-numeric","link":"#power-factor-l2-numeric","children":[]},{"level":3,"title":"Power factor l3 (numeric)","slug":"power-factor-l3-numeric","link":"#power-factor-l3-numeric","children":[]},{"level":3,"title":"Clear metering (enum)","slug":"clear-metering-enum","link":"#clear-metering-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1730645888000},"filePathRelative":"devices/PC321.md"}')}}]);
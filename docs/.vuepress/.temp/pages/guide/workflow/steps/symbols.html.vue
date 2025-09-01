<template><div><h1 id="symbol-annotation" tabindex="-1"><a class="header-anchor" href="#symbol-annotation"><span>Symbol Annotation</span></a></h1>
<h3 id="automatic-detection" tabindex="-1"><a class="header-anchor" href="#automatic-detection"><span>Automatic Detection</span></a></h3>
<p><img src="@source/images/workflow/symboldetection.gif" alt="Automatic Symbol Detection"></p>
<p>OMMR4all can automatically detect symbols used in medieval square notation:</p>
<ul>
<li>Neume elements (Normal, Oriscus, Apostropha, Liquescence up/down)</li>
<li>Clefs (C, F)</li>
<li>Accidentals (flat, natural, sharp)</li>
</ul>
<p>Symbols are assigned a position relative to the staff and are color-coded:</p>
<ul>
<li><strong>Green</strong> = between lines</li>
<li><strong>Yellow</strong> = on a line</li>
<li><strong>Red</strong> = low confidence (not exported)</li>
<li><strong>Pink segments</strong> = melodic outliers (to review)</li>
</ul>
<h3 id="manual-symbol-correction-and-annotation" tabindex="-1"><a class="header-anchor" href="#manual-symbol-correction-and-annotation"><span>Manual Symbol Correction and Annotation</span></a></h3>
<p>You can insert a symbol by selecting a type and clicking on the image. Moving symbols updates their color automatically.</p>
<p><img src="@source/images/workflow/createnewsymbol.gif" alt="edit symbols"></p>
<p>To prevent automatic logical linking when placing a new symbol, hold <code v-pre>Shift</code>. Otherwise, notes are grouped into neumes automatically. You can also:</p>
<ul>
<li>Move symbols via drag and drop</li>
<li>Delete symbols with <code v-pre>Delete</code> or <code v-pre>Backspace</code></li>
<li>Change symbol type via shortcuts or the dropdown in the right panel</li>
</ul>
<h3 id="logical-and-graphical-connections" tabindex="-1"><a class="header-anchor" href="#logical-and-graphical-connections"><span>Logical and Graphical Connections</span></a></h3>
<p>Symbols are connected in two ways:</p>
<ul>
<li><strong>Logical connections</strong> (dashed lines) define neume groupings. You can toggle the <code v-pre>Start of neume</code> property or remove connections with the separation tool.</li>
<li><strong>Graphical connections</strong> (solid lines) indicate visual closeness and can be toggled with the <code v-pre>Connected</code> checkbox.</li>
</ul>
<p><img src="@source/images/workflow/graphicalconnection.gif" alt="Edit Graphical Connection"></p>
<ul>
<li><strong>Fixed order</strong> locks the symbol's reading order, independent of its x-position.</li>
</ul>
<p>An &quot;Auto insert neume starts&quot; tool assigns <code v-pre>Start of neume</code> to all unlinked symbols.</p>
<h3 id="advanced-symbol-types" tabindex="-1"><a class="header-anchor" href="#advanced-symbol-types"><span>Advanced Symbol Types</span></a></h3>
<p>OMMR4all can detect and annotate advanced symbol types
<img src="@source/images/workflow/steps/symbols/advanced_types.gif" alt="Edit Graphical Connection"></p>
<hr>
</div></template>



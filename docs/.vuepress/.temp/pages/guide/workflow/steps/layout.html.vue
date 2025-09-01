<template><div><h1 id="layout-annotation" tabindex="-1"><a class="header-anchor" href="#layout-annotation"><span>Layout Annotation</span></a></h1>
<p><img src="@source/images/various/layout.png" alt="Top Edit Toolbar"></p>
<h3 id="types-of-layout-area" tabindex="-1"><a class="header-anchor" href="#types-of-layout-area"><span>Types of Layout Area</span></a></h3>
<p>Each zone is assigned one of five types:</p>
<ul>
<li><strong>Notation</strong> (green): contains staves</li>
<li><strong>Text</strong> (red): contains lyrics</li>
<li><strong>Drop Capital</strong> (purple): initials</li>
<li><strong>Folio</strong> (light blue): folio info</li>
<li><strong>Paratexts</strong> (orange): decorations or notes</li>
</ul>
<p>Zones can also be marked as <strong>Reconstructed</strong> (not visible in the scan) or <strong>Document Start</strong> (first zone of a new logical unit (chant)).</p>
<h3 id="automatic-detection" tabindex="-1"><a class="header-anchor" href="#automatic-detection"><span>Automatic Detection</span></a></h3>
<p><img src="@source/images/workflow/layoutdetection.gif" alt="Automatic Layout Detection"></p>
<p>Two layout models are available:</p>
<ul>
<li><strong>Simple detection</strong> identifies notation, text areas and initials and chant instances.</li>
<li><strong>Complex detection</strong> also finds initials, folios, and more (Old).</li>
</ul>
<p>Each page is segmented into zones based on staff lines and segmentation output, which helps ensure accurate downstream processing.</p>
<h3 id="manual-layout-correction-and-annotation" tabindex="-1"><a class="header-anchor" href="#manual-layout-correction-and-annotation"><span>Manual Layout Correction and Annotation</span></a></h3>
<p>You can edit zones using four tools:</p>
<ul>
<li>
<p><strong>Pen Tool</strong>: Draw zones and adjust shape by modifying boundary points.
<img src="@source/images/workflow/steps/layout/layput_edit.gif" alt="pen"></p>
</li>
<li>
<p><strong>Magic Wand</strong>: Extend a zone by connecting it to adjacent pixels (based on image structure).
<img src="@source/images/workflow/steps/layout/connected_component.gif" alt="magic"></p>
</li>
<li>
<p><strong>Scissors Tool</strong>: Freehand extension of an active zone, starting and ending inside the zone.
<img src="@source/images/workflow/steps/layout/lasso.gif" alt="scissor"></p>
</li>
<li>
<p><strong>Split Tool</strong>: Split lyric lines into two lines. Helpful if you want to correct missing chant instances
<img src="@source/images/workflow/steps/layout/split_layout_line.gif" alt="split"></p>
</li>
</ul>
<p>Zones of the same type can be merged if they overlap. Select them and press <code v-pre>J</code> or use the context menu.</p>
<hr>
</div></template>



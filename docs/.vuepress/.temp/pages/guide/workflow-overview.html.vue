<template><div><h1 id="workflow-overview" tabindex="-1"><a class="header-anchor" href="#workflow-overview"><span>Workflow Overview</span></a></h1>
<p>This guide walks you through the full OMMR4all transcription process, from page upload to symbol and text annotation. Each step combines automatic processing with manual editing to ensure high-quality results.</p>
<hr>
<h2 id="edit-manuscript-pages" tabindex="-1"><a class="header-anchor" href="#edit-manuscript-pages"><span>Edit Manuscript Pages</span></a></h2>
<h3 id="basic-orientation" tabindex="-1"><a class="header-anchor" href="#basic-orientation"><span>Basic Orientation</span></a></h3>
<p>Open a page in transcription view. The selected page should be shown in the center view.
To navigate within the scanned page, you have the following options:</p>
<ul>
<li>
<p>To pan (switch to different positions) use the middle mouse button or hold <code v-pre>ALT</code>/<code v-pre>Option</code> and drag the page
<img src="@source/images/workflow/pan_1.gif" alt="Pan"></p>
</li>
<li>
<p>To zoom you can use the scroll wheel.
<img src="@source/images/workflow/zoom.gif" alt="Zoom"></p>
</li>
</ul>
<h3 id="transcription-toolbar" tabindex="-1"><a class="header-anchor" href="#transcription-toolbar"><span>Transcription Toolbar</span></a></h3>
<p>You have to click on the pen symbol in the top bar to access the edit tools.
The top toolbar provides access to the four main annotation steps: <strong>Staff Lines</strong>, <strong>Layout</strong>, <strong>Symbols</strong>, and <strong>Text</strong>. Only one mode can be active at a time.</p>
<p><img src="@source/images/workflow/topeditbar.png" alt="Top Edit Toolbar"></p>
<hr>
<h2 id="staff-line-annotation" tabindex="-1"><a class="header-anchor" href="#staff-line-annotation"><span>Staff Line Annotation</span></a></h2>
<h3 id="automatic-detection" tabindex="-1"><a class="header-anchor" href="#automatic-detection"><span>Automatic Detection</span></a></h3>
<p>Click on the first button in the staff lines part of the top menu.
OMMR4all attempts to detect staff lines based on the configured number of lines per system. Detected lines appear as dark blue paths over the image.</p>
<p><img src="@source/images/workflow/automaticstaffline.gif" alt="Automatic Staff Line Detection"></p>
<h3 id="manual-line-correction-and-annotation" tabindex="-1"><a class="header-anchor" href="#manual-line-correction-and-annotation"><span>Manual Line Correction and Annotation</span></a></h3>
<p><img src="@source/images/workflow/editstaffline.gif" alt="Edit Staff Line"></p>
<p>You can correct or add lines by selecting a line and adjusting its control points. New lines are drawn point by point and confirmed with <code v-pre>Enter</code>. To cancel, press <code v-pre>Esc</code>, <code v-pre>Backspace</code>, or <code v-pre>Delete</code>.</p>
<p>Proper line placement is crucial since all symbol recognition relies on the positioning of staff lines — not the layout zones.
If there are lines that are colliding with other elements, you can use the trim tool to cut the ends of the staff:</p>
<p><img src="@source/images/workflow/trimstaffline.gif" alt="Trim Staff Lines"></p>
<h3 id="grouping-single-lines-to-a-staff" tabindex="-1"><a class="header-anchor" href="#grouping-single-lines-to-a-staff"><span>Grouping Single Lines to a Staff</span></a></h3>
<p>Detected lines are grouped into staves. You can manually group or split them. To group, draw a box over several lines. Each line belongs to exactly one staff.</p>
<p>Grouped staves are shown in different colors. To split a group, select it and mark a region to remove. You can cancel the operation using <code v-pre>Esc</code>.</p>
<p><img src="@source/images/workflow/regroupstaffline.gif" alt="Regroup Staff Line"></p>
<h2 id="layout-annotation" tabindex="-1"><a class="header-anchor" href="#layout-annotation"><span>Layout Annotation</span></a></h2>
<h3 id="types-of-layout-area" tabindex="-1"><a class="header-anchor" href="#types-of-layout-area"><span>Types of Layout Area</span></a></h3>
<p>Each zone is assigned one of five types:</p>
<ul>
<li><strong>Notation</strong> (green): contains staves</li>
<li><strong>Text</strong> (red): contains lyrics</li>
<li><strong>Drop Capital</strong> (purple): initials</li>
<li><strong>Folio</strong> (light blue): folio info</li>
<li><strong>Paratexts</strong> (orange): decorations or notes</li>
</ul>
<p>Zones can also be marked as <strong>Reconstructed</strong> (not visible in the scan) or <strong>Document Start</strong> (first zone of a new logical unit).</p>
<h3 id="automatic-detection-1" tabindex="-1"><a class="header-anchor" href="#automatic-detection-1"><span>Automatic Detection</span></a></h3>
<p><img src="@source/images/workflow/layoutdetection.gif" alt="Automatic Layout Detection"></p>
<p>Two layout models are available:</p>
<ul>
<li><strong>Simple detection</strong> identifies notation and text areas.</li>
<li><strong>Complex detection</strong> also finds initials, folios, and more.</li>
</ul>
<p>Each page is segmented into zones based on pixel classification, which helps ensure accurate downstream processing.</p>
<h3 id="manual-layout-correction-and-annotation" tabindex="-1"><a class="header-anchor" href="#manual-layout-correction-and-annotation"><span>Manual Layout Correction and Annotation</span></a></h3>
<p>You can edit zones using three tools:</p>
<ul>
<li><strong>Pen Tool</strong>: Draw zones and adjust shape by modifying boundary points.</li>
<li><strong>Magic Wand</strong>: Extend a zone by connecting it to adjacent pixels (based on image structure).</li>
<li><strong>Scissors Tool</strong>: Freehand extension of an active zone, starting and ending inside the zone.</li>
</ul>
<p>Zones of the same type can be merged if they overlap. Select them and press <code v-pre>J</code> or use the context menu.</p>
<hr>
<h2 id="symbol-annotation" tabindex="-1"><a class="header-anchor" href="#symbol-annotation"><span>Symbol Annotation</span></a></h2>
<h3 id="automatic-detection-2" tabindex="-1"><a class="header-anchor" href="#automatic-detection-2"><span>Automatic Detection</span></a></h3>
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
<p><img src="@source/images/workflow/createnewsymbol.gif" alt="Trim Staff Lines"></p>
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
<hr>
<h2 id="text-detection" tabindex="-1"><a class="header-anchor" href="#text-detection"><span>Text Detection</span></a></h2>
<h3 id="text-import" tabindex="-1"><a class="header-anchor" href="#text-import"><span>Text Import</span></a></h3>
<p>You can add text manually or import it from an external source. Imported text must be syllabified using spaces or hyphens. Special characters can be inserted from a preset list.</p>
<p>Text is associated with red or purple zones and appears in the reading order panel.</p>
<h4 id="automatic-detection-of-text" tabindex="-1"><a class="header-anchor" href="#automatic-detection-of-text"><span>Automatic Detection of Text</span></a></h4>
<p>An OCR model can extract text from lyric and initial zones. Detected text appears in the panel and can be edited zone by zone.</p>
<p><img src="@source/images/workflow/automaticsyllabledetection.gif" alt="Automatical Text Transcription"></p>
<h4 id="manual-insertion" tabindex="-1"><a class="header-anchor" href="#manual-insertion"><span>Manual Insertion</span></a></h4>
<p>Users may edit or enter text directly within zones. The system allows adding new characters or syllables to the source-wide list for reuse.</p>
<hr>
<h2 id="manipulating-text" tabindex="-1"><a class="header-anchor" href="#manipulating-text"><span>Manipulating Text</span></a></h2>
<h2 id="assigning-syllables-to-neumes" tabindex="-1"><a class="header-anchor" href="#assigning-syllables-to-neumes"><span>Assigning Syllables to Neumes</span></a></h2>
<p>This step allows syllables from the text pool to be linked to specific neumes in the music layer.</p>
<p>Manual assignment gives the most control. You select a syllable, then click on the corresponding neume, staying within the boundaries of a text zone and neume group. The editor advances automatically through the list of syllables.</p>
<p>Automatic assignment works in two ways:</p>
<ul>
<li>
<p>By detecting the closest neume to each syllable</p>
<p><img src="@source/images/workflow/assignsyllables.gif" alt="Syllable Assignment"></p>
</li>
<li>
<p>By assigning one syllable to each neume group, in sequence</p>
</li>
</ul>
<p>Both methods can be refined manually afterward.</p>
<hr>
<h2 id="importing" tabindex="-1"><a class="header-anchor" href="#importing"><span>Importing</span></a></h2>
<p>Imported text can be inserted from files or copy-pasted into the editor. Make sure syllables are separated by hyphens or spaces. After import, the syllables are available for assignment to neumes. You can also use the same pool across multiple pages.</p>
<hr>
<p>This concludes the full walkthrough of the OMMR4all workflow. Each annotation step builds on the previous one, enabling a structured and flexible approach to the digital transcription of medieval chant manuscripts.</p>
</div></template>



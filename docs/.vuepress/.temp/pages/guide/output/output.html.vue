<template><div><h1 id="export-data" tabindex="-1"><a class="header-anchor" href="#export-data"><span>Export data</span></a></h1>
<h2 id="general" tabindex="-1"><a class="header-anchor" href="#general"><span>General</span></a></h2>
<p>With <img src="@source/images/various/download.png" alt="Login">, it is possible to export all pages of the manuscript coherently in various file formats. These can be: the original image files, Monodi Plus files, the transcription with associated image coordinates, a backup of the source, and MEI 4 files.</p>
<div class="hint-container info">
<p class="hint-container-title">Info</p>
<p>Most of the options available for individual pages are also available for selecting all pages via the menu or several specific pages via <code v-pre>Shift</code> + <code v-pre>Mouse1</code> button.</p>
<p>Selection of multiple pages:</p>
<p><img src="@source/images/various/book_options.png" alt="Login"></p>
<p>Individual pages:</p>
<p><img src="@source/images/various/book_options2.png" alt="Login"></p>
<p>If the page has a green background, the previously grayed-out Verify option is enabled. This allows the page to be set as finally verified after a correction step. The editing functions of the editor are disabled to prevent further changes.
<img src="@source/images/workflow/Output.gif" alt="chants"></p>
</div>
<h2 id="chant-export" tabindex="-1"><a class="header-anchor" href="#chant-export"><span>Chant export</span></a></h2>
<p>In addition to the source overview with the individual pages, there is an overview of all (chants) with the start and end lines and the drop capital. In OMMR4all, documents are defined as the units of the source that have been marked with the <strong>Documentstart</strong> property in the editor. Documents can span multiple pages and are therefore suitable for division into logical units. The start line is lyric line with the <strong>Documentstart</strong> property and the end line corresponds to the last line before the next <strong>Documentstart</strong>.
The documents can be viewed individually in the viewer or exported.</p>
<p><img src="@source/images/workflow/chants.gif" alt="chants"></p>
</div></template>



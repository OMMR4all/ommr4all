<template><div><h1 id="editor" tabindex="-1"><a class="header-anchor" href="#editor"><span>Editor</span></a></h1>
<p>Auf dem Editor kann zugegriffen werden, indem auf eine beliebige Seite per Doppelklick geklickt wird.</p>
<p><img src="@source/images/workflow/Access_editor.gif" alt="editor"></p>
<h2 id="general" tabindex="-1"><a class="header-anchor" href="#general"><span>General</span></a></h2>
<h4 id="basic-orientation" tabindex="-1"><a class="header-anchor" href="#basic-orientation"><span>Basic Orientation</span></a></h4>
<p>Open a page in transcription view. The selected page should be shown in the center view.
To navigate within the scanned page, you have the following options:</p>
<ul>
<li>
<p>To pan (switch to different positions) use the middle mouse button or hold <code v-pre>ALT</code>/<code v-pre>Option</code> and drag the page
<img src="@source/images/workflow/general/pan_compressed.gif" alt="pan"></p>
</li>
<li>
<p>To zoom you can use the scroll wheel.
<img src="@source/images/workflow/general/zoom_compressed.gif" alt="pan"></p>
</li>
</ul>
<h4 id="shortcuts" tabindex="-1"><a class="header-anchor" href="#shortcuts"><span>Shortcuts</span></a></h4>
<p>OMMR4all offers a number of shortcuts that are helpful and can significantly speed up transcription/correction. The shortcuts can be viewed directly in the tool.</p>
<div class="hint-container info">
<p class="hint-container-title">Info</p>
<p>Depending on the selected tools, different shortcuts are displayed. The shortcuts can be displayed using <code v-pre>?</code>.</p>
</div>
<p><img src="@source/images/workflow/general/Shortcuts_compressed.gif" alt="Top Edit Toolbar"></p>
<h4 id="transcription-toolbar" tabindex="-1"><a class="header-anchor" href="#transcription-toolbar"><span>Transcription Toolbar</span></a></h4>
<p>You have to click on the pen symbol in the top bar to access the edit tools.
The top toolbar provides access to the four main annotation steps: <strong>Staff Lines</strong>, <strong>Layout</strong>, <strong>Symbols</strong>, and <strong>Text</strong>. Only one mode can be active at a time.</p>
<p><img src="@source/images/workflow/topeditbar.png" alt="Top Edit Toolbar"></p>
<div class="hint-container note">
<p class="hint-container-title">Note</p>
<p>In the text section, tools are provided to correct or transcribe syllable assignments</p>
</div>
<h4 id="overlay" tabindex="-1"><a class="header-anchor" href="#overlay"><span>Overlay</span></a></h4>
<p>On the right side of the editor you have the option to customize the overlay of the annotations.</p>
<p><img src="@source/images/workflow/general/annotations.gif" alt="Top Edit Toolbar"></p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>You can toggle as many panels as you want at once. It is not advised to have all of them active at the same time, though, because it limits the readability of the documents.
Also, for each pipeline step exists a custom overlay config. So for example if you switch to the symbol step, only symbol related annotations are shown by default. Other annotations like the layout is not shown by default, as it can interfere the correction/annotation workflow.</p>
</div>
<h4 id="general-section" tabindex="-1"><a class="header-anchor" href="#general-section"><span>General Section</span></a></h4>
<p><img src="@source/images/various/general.png" alt="Top Edit Toolbar"></p>
<p>Here you will find general functions that affect the entire page. In addition to the familiar Save, Undo, and Redo functions, you can delete all editing elements at once, activate read mode, complete all four editing steps at once, and display the shortcuts.
In read mode, the editing elements are displayed without the option to change them. It is automatically disabled as soon as an editing function is activated and must then be reactivated manually.
The shortcuts are adapted to the respective editing function. Only the general shortcuts for moving and zooming the image and for saving the page remain the same in every editing step.</p>
<h4 id="automatic-transcription" tabindex="-1"><a class="header-anchor" href="#automatic-transcription"><span>Automatic Transcription</span></a></h4>
<p>In the editor, automatic transcription can also be performed for each pipeline step on the page level. Of course, this is only necessary if it has not already been done for the entire book.</p>
</div></template>



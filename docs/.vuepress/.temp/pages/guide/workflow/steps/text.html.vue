<template><div><h1 id="text-detection" tabindex="-1"><a class="header-anchor" href="#text-detection"><span>Text Detection</span></a></h1>
<p><img src="@source/images/various/text.png" alt="Text Edit"></p>
<p>The editing step for the text on the page consists of three parts: determining the reading order, transcription of the text, and assigning syllables.</p>
<h2 id="reading-order" tabindex="-1"><a class="header-anchor" href="#reading-order"><span>Reading order</span></a></h2>
<p>The reading order can be set automatically via <img src="@source/images/various/reading_order.png" alt="Automatical Text Transcription">
or the context menu, or manually via drag and drop in the display in the right-hand column. The list only contains the text of lyrics and drop capital zones, because the other zone types are treated as independent elements.</p>
<h2 id="transcription-of-the-text" tabindex="-1"><a class="header-anchor" href="#transcription-of-the-text"><span>Transcription of the text</span></a></h2>
<p>There are several methods (automatic and manual) for transcribing text.</p>
<h3 id="text-import" tabindex="-1"><a class="header-anchor" href="#text-import"><span>Text Import</span></a></h3>
<p>If the text is stored in an external file, it can be inserted using <img src="@source/images/various/input_text.png" alt="Automatical Text Transcription">. Imported text must be syllabified using spaces or hyphens. In terms of formatting, the tool requires hyphenation (-) or spaces, because contiguous character strings are processed as one syllable. Line breaks are retained. When inserting text from external sources, it is possible to assign syllables immediately afterwards, in which case you will be redirected to the selected function.
Special characters can be inserted from a preset list.</p>
<h3 id="automatic-detection-of-text" tabindex="-1"><a class="header-anchor" href="#automatic-detection-of-text"><span>Automatic Detection of Text</span></a></h3>
<p>An OCR model can extract text from lyric and initial zones. Detected text appears in the panel and can be edited zone by zone.</p>
<p><img src="@source/images/workflow/automaticsyllabledetection.gif" alt="Automatical Text Transcription"></p>
<h3 id="manual-insertion" tabindex="-1"><a class="header-anchor" href="#manual-insertion"><span>Manual Insertion</span></a></h3>
<p>Users may edit or enter text directly within zones. The system allows adding new characters or syllables to the source-wide list for reuse.
<img src="@source/images/workflow/steps/text/text_edit.gif" alt="Text Edit"></p>
<h3 id="dictionary" tabindex="-1"><a class="header-anchor" href="#dictionary"><span>Dictionary</span></a></h3>
<p>OMMR4all marks word not known to the system as red. By right-clicking on the word a list of suggestions appear.
<img src="@source/images/workflow/steps/text/dictionary.gif" alt="Text Edit"></p>
<div class="hint-container info">
<p class="hint-container-title">Info</p>
<p>You can also add the word to the dictionary. The next time the word appears it will not be marked anymore.</p>
</div>
<hr>
</div></template>



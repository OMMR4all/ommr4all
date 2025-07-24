<template><div><h1 id="workflow-overview" tabindex="-1"><a class="header-anchor" href="#workflow-overview"><span>Workflow Overview</span></a></h1>
<h2 id="edit-manuscript-pages" tabindex="-1"><a class="header-anchor" href="#edit-manuscript-pages"><span>Edit Manuscript Pages</span></a></h2>
<p>The first step is to upload scanned manuscript pages into OMMR4all.
The system supports a semi‑automatic pipeline where images are
processed for segmentation and analysis,
but final edits are performed manually in an interactive environment.</p>
<h2 id="staff-line-annotation" tabindex="-1"><a class="header-anchor" href="#staff-line-annotation"><span>Staff Line Annotation</span></a></h2>
<h3 id="automatic-detection" tabindex="-1"><a class="header-anchor" href="#automatic-detection"><span>Automatic Detection</span></a></h3>
<h3 id="manual-line-correction-and-annotation" tabindex="-1"><a class="header-anchor" href="#manual-line-correction-and-annotation"><span>Manual Line Correction and Annotation</span></a></h3>
<p>Users can correct missed, fragmented, or misaligned lines using the web editor.</p>
<h3 id="grouping-single-lines-to-a-staff" tabindex="-1"><a class="header-anchor" href="#grouping-single-lines-to-a-staff"><span>Grouping Single Lines to a Staff</span></a></h3>
<p>After detection, individual lines are grouped into staves
(sets of four or five staff lines). OMMR4all supports both
automatic grouping and manual reassignment when the algorithm misgroups lines.</p>
<h2 id="layout-annotation" tabindex="-1"><a class="header-anchor" href="#layout-annotation"><span>Layout Annotation</span></a></h2>
<p>OMMR4all recognizes distinct page areas—musical regions vs. illuminations,
rubrics, or decorative margins—by classifying pixels into layout types.
Having accurate layout segmentation helps isolate zones for staff/symbol detection.</p>
<h3 id="types-of-layout-area" tabindex="-1"><a class="header-anchor" href="#types-of-layout-area"><span>Types of Layout Area</span></a></h3>
<h3 id="automatic-detection-1" tabindex="-1"><a class="header-anchor" href="#automatic-detection-1"><span>Automatic Detection</span></a></h3>
<p>A layout segmentation model processes each scanned page to
produce masks of music content areas.
These masks guide subsequent annotation operations
and ensure that non‑musical graphics are not misinterpreted as music.</p>
<h3 id="manual-layout-correction-and-annotation" tabindex="-1"><a class="header-anchor" href="#manual-layout-correction-and-annotation"><span>Manual Layout Correction and Annotation</span></a></h3>
<p>The editor interface enables users to refine the automatic
segmentation by adding or removing region boundaries, merging
or splitting zones, and ensuring that musical content is correctly mapped.</p>
<h2 id="symbol-annotation" tabindex="-1"><a class="header-anchor" href="#symbol-annotation"><span>Symbol Annotation</span></a></h2>
<p>OMMR4all utilizes symbol detection models tuned for neumes, clefs, and
accidentals in medieval square notation.</p>
<h3 id="automatic-detection-2" tabindex="-1"><a class="header-anchor" href="#automatic-detection-2"><span>Automatic Detection</span></a></h3>
<h3 id="manual-symbol-correction-and-annotation" tabindex="-1"><a class="header-anchor" href="#manual-symbol-correction-and-annotation"><span>Manual Symbol Correction and Annotation</span></a></h3>
<h2 id="text-detection" tabindex="-1"><a class="header-anchor" href="#text-detection"><span>Text Detection</span></a></h2>
<h3 id="text-import" tabindex="-1"><a class="header-anchor" href="#text-import"><span>Text Import</span></a></h3>
<h4 id="automatic-detection-of-text" tabindex="-1"><a class="header-anchor" href="#automatic-detection-of-text"><span>Automatic Detection of Text</span></a></h4>
<h4 id="manual-insertion" tabindex="-1"><a class="header-anchor" href="#manual-insertion"><span>Manual Insertion</span></a></h4>
<p>Users can manually insert or edit recognized text,
or correct misaligned syllables that weren't automatically matched.</p>
<h4 id="importing" tabindex="-1"><a class="header-anchor" href="#importing"><span>Importing</span></a></h4>
<h3 id="manipulating-text" tabindex="-1"><a class="header-anchor" href="#manipulating-text"><span>Manipulating Text</span></a></h3>
<h3 id="assigning-syllables-to-neumes" tabindex="-1"><a class="header-anchor" href="#assigning-syllables-to-neumes"><span>Assigning Syllables to Neumes</span></a></h3>
</div></template>



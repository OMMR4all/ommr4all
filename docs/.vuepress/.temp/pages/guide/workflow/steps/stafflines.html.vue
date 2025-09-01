<template><div><h1 id="staff-line-annotation-and-correction" tabindex="-1"><a class="header-anchor" href="#staff-line-annotation-and-correction"><span>Staff Line Annotation and Correction</span></a></h1>
<p><img src="@source/images/various/staff_lines.png" alt="Top Edit Toolbar"></p>
<h3 id="automatic-detection" tabindex="-1"><a class="header-anchor" href="#automatic-detection"><span>Automatic Detection</span></a></h3>
<div class="hint-container important">
<p class="hint-container-title">Important</p>
<p>If you have already transcribed all pages using the workflow area, you do not need to perform automatic transcription again here. However, it may be helpful if changes have been made (e.g., to the text, and the syllable assignment needs to be automatically transcribed again).</p>
</div>
<p>Click on the first button in the staff lines part of the top menu.
OMMR4all attempts to detect staff lines based on the configured number of lines per system and the selected model. Detected lines appear as dark blue paths over the image.</p>
<p><img src="@source/images/workflow/automaticstaffline.gif" alt="Automatic Staff Line Detection"></p>
<h3 id="manual-line-correction-and-annotation" tabindex="-1"><a class="header-anchor" href="#manual-line-correction-and-annotation"><span>Manual Line Correction and Annotation</span></a></h3>
<p><img src="@source/images/workflow/editstaffline.gif" alt="Edit Staff Line"></p>
<p>You can correct or add lines by selecting a line and adjusting its control points. New lines are drawn point by point and confirmed with <code v-pre>Enter</code>. To cancel, press <code v-pre>Esc</code>, <code v-pre>Backspace</code>, or <code v-pre>Delete</code>.
To add points to an existing line hold the <code v-pre>Control</code> button while the line is selected.</p>
<p>Proper line placement is crucial since all symbol recognition relies on the positioning of staff lines — not the layout zones.
If there are lines that are colliding with other elements, you can use the trim tool to cut the ends of the staff:</p>
<p><img src="@source/images/workflow/trimstaffline.gif" alt="Trim Staff Lines"></p>
<h3 id="grouping-single-lines-to-a-staff" tabindex="-1"><a class="header-anchor" href="#grouping-single-lines-to-a-staff"><span>Grouping Single Lines to a Staff</span></a></h3>
<p>Detected lines are grouped into staves. You can manually group or split them. To group, draw a box over several lines. Each line belongs to exactly one staff.
Grouped staff lines are displayed in blocks of different colors. Each staff can consist of any number of lines, but each line can only belong to one staff.</p>
<p>To split a group, select it and mark a region to remove. You can cancel the operation using <code v-pre>Esc</code>.</p>
<p><img src="@source/images/workflow/regroupstaffline.gif" alt="Regroup Staff Line"></p>
<h3 id="division-of-staffs" tabindex="-1"><a class="header-anchor" href="#division-of-staffs"><span>Division of Staffs</span></a></h3>
<p>The division of one staff into two is done via <img src="@source/images/various/stafflines_smart_tool1.png" alt="Trim Staff Lines"> and also works by selecting the staves rather than individual staff lines. To do this, hold down the <code v-pre>Mouse1</code> button to select the area to be deleted. You can cancel the process by pressing the Escape key.</p>
</div></template>



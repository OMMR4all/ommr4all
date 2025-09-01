# Staff Line Annotation and Correction
![Top Edit Toolbar](../../../images/various/staff_lines.png)

### Automatic Detection
::: important
If you have already transcribed all pages using the workflow area, you do not need to perform automatic transcription again here. However, it may be helpful if changes have been made (e.g., to the text, and the syllable assignment needs to be automatically transcribed again).
:::
Click on the first button in the staff lines part of the top menu.
OMMR4all attempts to detect staff lines based on the configured number of lines per system and the selected model. Detected lines appear as dark blue paths over the image.

![Automatic Staff Line Detection](../../../images/workflow/automaticstaffline.gif)

### Manual Line Correction and Annotation

![Edit Staff Line](../../../images/workflow/editstaffline.gif)

You can correct or add lines by selecting a line and adjusting its control points. New lines are drawn point by point and confirmed with `Enter`. To cancel, press `Esc`, `Backspace`, or `Delete`.
To add points to an existing line hold the `Control` button while the line is selected.

Proper line placement is crucial since all symbol recognition relies on the positioning of staff lines — not the layout zones.
If there are lines that are colliding with other elements, you can use the trim tool to cut the ends of the staff:

![Trim Staff Lines](../../../images/workflow/trimstaffline.gif)

### Grouping Single Lines to a Staff

Detected lines are grouped into staves. You can manually group or split them. To group, draw a box over several lines. Each line belongs to exactly one staff. 
Grouped staff lines are displayed in blocks of different colors. Each staff can consist of any number of lines, but each line can only belong to one staff.

To split a group, select it and mark a region to remove. You can cancel the operation using `Esc`.

![Regroup Staff Line](../../../images/workflow/regroupstaffline.gif)


### Division of Staffs

The division of one staff into two is done via ![Trim Staff Lines](../../../images/various/stafflines_smart_tool1.png) and also works by selecting the staves rather than individual staff lines. To do this, hold down the `Mouse1` button to select the area to be deleted. You can cancel the process by pressing the Escape key.
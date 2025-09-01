# Layout Annotation
![Top Edit Toolbar](../../../images/various/layout.png)

### Types of Layout Area

Each zone is assigned one of five types:
- **Notation** (green): contains staves
- **Text** (red): contains lyrics
- **Drop Capital** (purple): initials
- **Folio** (light blue): folio info
- **Paratexts** (orange): decorations or notes

Zones can also be marked as **Reconstructed** (not visible in the scan) or **Document Start** (first zone of a new logical unit (chant)).

### Automatic Detection

![Automatic Layout Detection](../../../images/workflow/layoutdetection.gif)

Two layout models are available:
- **Simple detection** identifies notation, text areas and initials and chant instances.
- **Complex detection** also finds initials, folios, and more (Old).

Each page is segmented into zones based on staff lines and segmentation output, which helps ensure accurate downstream processing.

### Manual Layout Correction and Annotation

You can edit zones using four tools:


- **Pen Tool**: Draw zones and adjust shape by modifying boundary points.
![pen](../../../images/workflow/steps/layout/layput_edit.gif)



- **Magic Wand**: Extend a zone by connecting it to adjacent pixels (based on image structure).
![magic](../../../images/workflow/steps/layout/connected_component.gif)

- **Scissors Tool**: Freehand extension of an active zone, starting and ending inside the zone.
![scissor](../../../images/workflow/steps/layout/lasso.gif)

- **Split Tool**: Split lyric lines into two lines. Helpful if you want to correct missing chant instances
![split](../../../images/workflow/steps/layout/split_layout_line.gif)


Zones of the same type can be merged if they overlap. Select them and press `J` or use the context menu.

---

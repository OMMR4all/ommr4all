# Workflow Overview

## Edit Manuscript Pages
The first step is to upload scanned manuscript pages into OMMR4all. 
The system supports a semi‑automatic pipeline where images are 
processed for segmentation and analysis, 
but final edits are performed manually in an interactive environment.



## Staff Line Annotation


### Automatic Detection


### Manual Line Correction and Annotation
Users can correct missed, fragmented, or misaligned lines using the web editor.


### Grouping Single Lines to a Staff
After detection, individual lines are grouped into staves
(sets of four or five staff lines). OMMR4all supports both
automatic grouping and manual reassignment when the algorithm misgroups lines.

## Layout Annotation 
OMMR4all recognizes distinct page areas—musical regions vs. illuminations, 
rubrics, or decorative margins—by classifying pixels into layout types. 
Having accurate layout segmentation helps isolate zones for staff/symbol detection.

### Types of Layout Area


### Automatic Detection
A layout segmentation model processes each scanned page to 
produce masks of music content areas. 
These masks guide subsequent annotation operations 
and ensure that non‑musical graphics are not misinterpreted as music.

### Manual Layout Correction and Annotation
The editor interface enables users to refine the automatic 
segmentation by adding or removing region boundaries, merging
or splitting zones, and ensuring that musical content is correctly mapped.

## Symbol Annotation 
OMMR4all utilizes symbol detection models tuned for neumes, clefs, and 
accidentals in medieval square notation.

### Automatic Detection

### Manual Symbol Correction and Annotation



## Text Detection 




### Text Import
#### Automatic Detection of Text

#### Manual Insertion
Users can manually insert or edit recognized text, 
or correct misaligned syllables that weren't automatically matched.
#### Importing


### Manipulating Text

### Assigning Syllables to Neumes

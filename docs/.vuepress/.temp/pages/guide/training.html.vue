<template><div><h1 id="training-new-models" tabindex="-1"><a class="header-anchor" href="#training-new-models"><span>Training new models</span></a></h1>
<p>As already mentioned, OMMR4all also offers an iterative training workflow. This means that data that has been corrected/annotated can be used for training.</p>
<p>To do this, you need to switch to the training view. For each step of the pipeline, there is a separate subsection with which models can be trained.
<img src="@source/images/workflow/training.gif" alt="Automatic Symbol Detection"></p>
<p>The configuration for training is simple. The following parameters can be set:</p>
<ul>
<li>Fine-tuning and selection of a model</li>
<li>Selection of training materials (only data from the book, or also data from other books)</li>
</ul>
<p>OMMR4all only uses data that has been marked as corrected. This means that if new symbol recognition models are to be trained, only pages with a green box in the page overview will be used. (For layout, it is sufficient if the L box is green; for symbols, the s box must be green).</p>
</div></template>



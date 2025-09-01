<template><div><h1 id="workflow-overview" tabindex="-1"><a class="header-anchor" href="#workflow-overview"><span>Workflow overview</span></a></h1>
<p>OMMR4all offers two primary workflows for music transcription:</p>
<ul>
<li>With Suitable Models available: Utilizes automatic transcription of the entire document, followed by proofreading to
correct any errors</li>
<li>Without Suitable Models available: Implements an iterative training process where pages are initially manually corrected
or marked. This corrected data is then used to train models, which can be looped through repeatedly until effective
models are achieved.</li>
</ul>
<h2 id="with-suitable-models-available" tabindex="-1"><a class="header-anchor" href="#with-suitable-models-available"><span>With Suitable Models available:</span></a></h2>
<p>This is the simplest case. Suitable models already exist because manuscripts with similar styles have already been
transcribed and trained on these models.</p>
<p>The workflow consists of eight steps:</p>
<ol>
<li><strong>Preprocessing</strong>: Data preparation, such as normalizing the pages.</li>
<li><strong>Staff Lines</strong>: Recognition of staff lines and staves.</li>
<li><strong>Layout Detection</strong>: Recognition of text regions and music parts. Additionally, song instances are identified.</li>
<li><strong>Symbols</strong>: Recognition of symbols.</li>
<li><strong>Text</strong>: Recognition of text and syllables.</li>
<li><strong>Documents (Optional)</strong>: Alignment of song texts to recognized text for improving OCR.</li>
<li><strong>Syllables</strong>: Assignment of syllables to notes.</li>
<li><strong>Post-processing (Optional)</strong>: Removal of line groupings.</li>
</ol>
<p>The automatic transcription can be started via the workflow section located on the left. Each step has to be executed in sequence.</p>
<p><img src="@source/images/workflow/workflow_preprocessing.gif" alt="start_workflow1"></p>
<p>Often there are settings that can be configured, such as model selection or the selection of pages which should be transcribed.</p>
<p><img src="@source/images/workflow/model_selection.gif" alt="model:selection"></p>
<p>After executing the recognition for all mandatory steps, the result can be viewed.</p>
<h2 id="without-suitable-models-available" tabindex="-1"><a class="header-anchor" href="#without-suitable-models-available"><span>Without Suitable Models available:</span></a></h2>
<p>If no suitable models may exist, or the results from the available models is too poor, it is
possible to manually correct/annotate pages and use these annotations to train improved models.</p>
<p>For evaluating the results, one can access the editor.</p>
</div></template>



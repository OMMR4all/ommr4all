<template><div><h1 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started"><span>Getting Started</span></a></h1>
<p>Welcome to <strong>OMMR4all</strong>! This guide will walk you through what the tool does, how to access it, and how to get started with using it — step by step.</p>
<hr>
<h2 id="what-is-ommr4all" tabindex="-1"><a class="header-anchor" href="#what-is-ommr4all"><span>What is OMMR4all?</span></a></h2>
<p><strong>OMMR4all</strong> is a web-based tool for Optical Medieval Music Recognition. It helps you transcribe and annotate medieval music manuscripts, offering:</p>
<ul>
<li>Automatic detection of musical elements</li>
<li>Manual correction and annotation</li>
<li>Visual organization of scanned sources</li>
</ul>
<hr>
<h2 id="key-goals-and-use-cases" tabindex="-1"><a class="header-anchor" href="#key-goals-and-use-cases"><span>Key Goals and Use Cases</span></a></h2>
<p>OMMR4all is designed to:</p>
<ul>
<li>Support musicologists in the digitization of medieval chant</li>
<li>Provide a <strong>semi-automatic pipeline</strong> — with manual corrections possible at every stage</li>
</ul>
<hr>
<h2 id="step-1-getting-access" tabindex="-1"><a class="header-anchor" href="#step-1-getting-access"><span>Step 1: Getting Access</span></a></h2>
<h3 id="online-access" tabindex="-1"><a class="header-anchor" href="#online-access"><span>Online Access</span></a></h3>
<p>You can try out the application via our <strong><a href="https://ommr4all.informatik.uni-wuerzburg.de" target="_blank" rel="noopener noreferrer">online demo</a></strong> — no login required.</p>
<p>To request full access, please email:</p>
<p>📧 <strong>tim.eipert@uni-wuerzburg.de</strong></p>
<h3 id="local-installation" tabindex="-1"><a class="header-anchor" href="#local-installation"><span>Local Installation</span></a></h3>
<p>If you prefer running OMMR4all on your own infrastructure, visit the <a href="/local-use" target="_blank" rel="noopener noreferrer">Local Use</a> section for setup instructions.</p>
<hr>
<h2 id="step-2-explore-the-interface" tabindex="-1"><a class="header-anchor" href="#step-2-explore-the-interface"><span>Step 2: Explore the Interface</span></a></h2>
<p>Once you open the <a href="https://ommr4all.informatik.uni-wuerzburg.de" target="_blank" rel="noopener noreferrer">online app</a>, click on <strong>“Books”</strong> to see the available sources.</p>
<p><img src="/images/get-started/books.png" alt="Book Overview"></p>
<p>Select any book to view its scanned pages:</p>
<p><img src="/images/get-started/document-overview.png" alt="Pages Overview"></p>
<h3 id="interface-overview" tabindex="-1"><a class="header-anchor" href="#interface-overview"><span>Interface Overview</span></a></h3>
<ul>
<li>
<p><strong>Left Sidebar</strong></p>
<ul>
<li><em>View content</em>: Page thumbnails</li>
<li><em>View documents of book</em>: List of transcribed chants</li>
<li><em>Comments</em>: Community notes and feedback</li>
<li><em>Workflow methods</em>: Tools for batch transcription</li>
</ul>
</li>
<li>
<p><strong>Center Area</strong></p>
<ul>
<li>Displays all scanned pages</li>
<li>Pages with <strong>green backgrounds</strong> are fully transcribed</li>
</ul>
</li>
<li>
<p><strong>Right Sidebar</strong></p>
<ul>
<li>Export and upload buttons (login required)</li>
</ul>
</li>
</ul>
<p>Click on a page to enter the <strong>Transcription View</strong>.</p>
<p><img src="/images/get-started/transcription-view.png" alt="Transcription View"></p>
<hr>
<h2 id="step-3-understand-the-annotation-layers" tabindex="-1"><a class="header-anchor" href="#step-3-understand-the-annotation-layers"><span>Step 3: Understand the Annotation Layers</span></a></h2>
<p>OMMR4all uses different annotation layers to visualize your manuscript data. You can toggle their visibility from the <strong>right sidebar</strong>.</p>
<h3 id="staff-lines" tabindex="-1"><a class="header-anchor" href="#staff-lines"><span>Staff Lines</span></a></h3>
<p>Displayed as <strong>blue horizontal lines</strong>:</p>
<p><img src="/images/get-started/staff-lines.png" alt="Staff Lines"></p>
<hr>
<h3 id="layout-areas" tabindex="-1"><a class="header-anchor" href="#layout-areas"><span>Layout Areas</span></a></h3>
<p>Shown as <strong>colored polygons</strong>, marking different sections of the page:</p>
<p><img src="/images/get-started/layout-areas.png" alt="Layout areas"></p>
<hr>
<h3 id="symbol-annotations" tabindex="-1"><a class="header-anchor" href="#symbol-annotations"><span>Symbol Annotations</span></a></h3>
<p>These identify and group neume components:</p>
<ul>
<li><strong>Rounded squares</strong>:
<ul>
<li>Green = between lines</li>
<li>Yellow = on lines</li>
</ul>
</li>
<li><strong>Large yellow rectangle</strong> = clef</li>
<li><strong>Light grey lines</strong> = sequential elements</li>
<li><strong>Light blue lines</strong> = connected components</li>
<li><strong>Dashed vertical lines</strong> = start of new neumes</li>
</ul>
<p><img src="@source/src/images/get-started/symbols.png" alt="Symbols"></p>
<hr>
<h3 id="text-annotations" tabindex="-1"><a class="header-anchor" href="#text-annotations"><span>Text Annotations</span></a></h3>
<p>To see textual data aligned to syllables, toggle <em>Show annotations</em>. The annotations appear over the scanned text and are already assigned.</p>
<p><img src="/images/get-started/text-annotations.png" alt="Text Annotations"></p>
<hr>
<h2 id="step-4-upload-your-own-scans" tabindex="-1"><a class="header-anchor" href="#step-4-upload-your-own-scans"><span>Step 4: Upload Your Own Scans</span></a></h2>
<p>Want to work with your own material? Here's how to prepare and upload scans.</p>
<h3 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements"><span>Requirements</span></a></h3>
<p>Make sure your scans follow these rules:</p>
<ul>
<li>Format: <code v-pre>.jpg</code> or <code v-pre>.png</code></li>
<li>One column per image (split two-column pages beforehand)</li>
<li>All pages compressed into a <code v-pre>.zip</code> archive</li>
</ul>
<p>No other preprocessing is needed.</p>
<hr>
<h3 id="upload-instructions" tabindex="-1"><a class="header-anchor" href="#upload-instructions"><span>Upload Instructions</span></a></h3>
<ol>
<li>
<p><strong>Log in</strong> to your account</p>
</li>
<li>
<p>Go to the <a href="https://www.ommr4all.informatik.uni-wuerzburg.de/en/book" target="_blank" rel="noopener noreferrer">book overview</a></p>
</li>
<li>
<p>Click the upload icon:</p>
<p><img src="/images/get-started/cloud-upload.png" alt="Cloud Upload"></p>
</li>
<li>
<p>Select your <code v-pre>.zip</code> file</p>
</li>
<li>
<p>Upload and start transcription!</p>
</li>
</ol>
<hr>
<p>You’re now ready to begin transcribing medieval chant with OMMR4all!</p>
<p>Next up: Dive into the detailed annotation workflows.</p>
</div></template>



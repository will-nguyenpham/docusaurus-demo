---
id: "0cd1ff00-b3ee-11ec-a2dc-0242fe3e4a3f"
title: "[Mobile] iOS Setup (Simulators)"
slug: "katalon-studio-enterprise/create-tests-and-projects/configure-test-cases/mobile-testing/ios/mobile-ios-setup-simulators"
hide_title: true
---
import useBaseUrl from '@docusaurus/useBaseUrl';


# <a id="id" class="anchor_top_offset"/><a id="ariaid-title1" class="anchor_top_offset"/>[Mobile] iOS Setup (Simulators)

<p xmlns="http://www.w3.org/1999/xhtml" className="p">This article shows you how to set up Xcode simulators to test iOS applications with Katalon Studio.</p> 
<p xmlns="http://www.w3.org/1999/xhtml" className="p">To begin with, you need to setup a macOS environment. You can   not execute iOS mobile testing in Windows and Linux.</p> 

## <a id="id_1" class="anchor_top_offset"/>Part 1: Install Xcode

<p xmlns="http://www.w3.org/1999/xhtml" className="p">Install Xcode version 10.2 or newer. You can download Xcode from   the App Store or the Apple Developer website: <a className="xref j-external-link" href="https://developer.apple.com/xcode/" target="_blank">Xcode 13</a>.</p> 
<div xmlns="http://www.w3.org/1999/xhtml" className="p"><div className="note note note_note"><span className="note__title">Note:</span> <ul className="ul"><li className="li">Xcode must support the current version of your iOS device.</li><li className="li">Katalon Studio can only support iOS version 9.0 or above. To
        learn more about the supported environment in Katalon Studio, you
        can refer to this document: <a className="xref j-external-link" href="https://docs.katalon.com/katalon-studio/docs/supported-environments.html#mobile" target="_blank">Supported
          environment</a>.</li></ul></div></div>

## <a id="id_2" class="anchor_top_offset"/>Part 2: Install Appium and Xcode command-line tools


### <a id="task-7459" class="anchor_top_offset"/>Install with  built-in tools

<section xmlns="http://www.w3.org/1999/xhtml" className="section context">From Katalon Studio version 8.3.0 onwards, you can install Appium and Xcode command-line tools (Xcode CLT) via Katalon built-in tools. To do so:</section> 
<ol xmlns="http://www.w3.org/1999/xhtml" className="ol steps"><li className="li step stepexpand"><span className="ph cmd">Open Katalon Studio and go to</span><div className="itemgroup info"><img className="image" width={500} src={useBaseUrl("/0d4f4fe0-b3ef-11ec-a2dc-0242fe3e4a3f.png")} alt="Install dependencies via Katalon built-in tools" /></div></li><li className="li step stepexpand"><span className="ph cmd">Katalon will automatically install the latest version of Xcode CLT, Appium, Homebrew, NodeJS, and other iOS dependencies.</span><div className="itemgroup info"><img className="image" width={500} src={useBaseUrl("/3af679f0-b3ef-11ec-a2dc-0242fe3e4a3f.png")} alt="KS installs dependencies" /></div></li></ol> 

### <a id="task-2441" class="anchor_top_offset"/>Install manually

<ol xmlns="http://www.w3.org/1999/xhtml" className="ol steps"><li className="li step stepexpand"><span className="ph cmd">Install the command-line tool for Xcode. You can download the command-line tool compatible with your Xcode version from the Apple Developer website here: <a className="xref j-external-link" href="https://developer.apple.com/download/all/" target="_blank">Download</a>.</span><div className="itemgroup info">       <div className="p">Alternatively, you can copy and paste the following command-line arguments in this order in the <strong className="ph b">Terminal</strong> to install the command-line tool for Xcode:<pre className="pre codeblock"><code>xcode-select --install</code></pre><pre className="pre codeblock"><code>sudo xcode-select -s /Applications/Xcode.app/Contents/Developer</code></pre>       </div>     </div></li><li className="li step stepexpand"><span className="ph cmd">Download and install Node.js from the Node.js website: <a className="xref j-external-link" href="https://nodejs.org/en/download/" target="_blank">Node.js Downloads</a>.</span><div className="itemgroup info"><div className="note note note_note"><span className="note__title">Note:</span> <ul className="ul"><li className="li"><p className="p">Make sure you install Node.js into a location where you have full Read/Write permissions.</p></li></ul></div></div></li><li className="li step stepexpand"><span className="ph cmd">Install Appium version 1.12.1 or newer via NPM. To install the latest Appium version, copy and paste the command-line argument as follows:</span><div className="itemgroup info"><pre className="pre codeblock"><code>npm install -g appium</code></pre></div><div className="itemgroup info"><div className="note note note_note"><span className="note__title">Note:</span> <ul className="ul"><li className="li">We recommend installing the latest Appium version.</li><li className="li">If you are using emulators other than Xcode simulators, some             emulators come with Appium installed. If you want to run an             application on an emulator, check your emulator settings before             installing Appium.</li></ul></div><p className="p">To learn more about Appium, you can refer to the Appium document here: <a className="xref j-external-link" href="http://appium.io/docs/en/about-appium/getting-started/#installing-appium" target="_blank">Getting started</a>.</p></div></li></ol> 

## <a id="concept-8181" class="anchor_top_offset"/>Part 3: Set up Xcode simulators for mobile testing in Katalon Studio

<p xmlns="http://www.w3.org/1999/xhtml" className="p">After installing Xcode, Katalon automatically recognizes Xcode   simulators as iOS devices. To check whether Katalon successfully   recognizes Xcode simulators, on the main toolbar, select the   <strong className="ph b">iOS</strong> device in the dropdown list next to   <strong className="ph b">Run</strong>.</p> 
<p xmlns="http://www.w3.org/1999/xhtml" className="p"><img className="image" src={useBaseUrl("/224dd860-b3f1-11ec-a2dc-0242fe3e4a3f.png")} alt="Katalon recognizes Xcode simulators" /></p> 
<p xmlns="http://www.w3.org/1999/xhtml" className="p">You should see a list of pre-installed Xcode simulators appearing as iOS devices.</p> 
<p xmlns="http://www.w3.org/1999/xhtml" className="p"><img className="image" src={useBaseUrl("/224a2ee0-b3f1-11ec-a2dc-0242fe3e4a3f.png")} alt="Katalon recognizes Xcode simulators" /></p> 

## <a id="task-1208" class="anchor_top_offset"/>Part 4: Prepare the iOS application file

<section xmlns="http://www.w3.org/1999/xhtml" className="section context">To execute mobile testing with Xcode simulators, you need to prepare an <code className="ph codeph">.app</code> file.</section> 
<ol xmlns="http://www.w3.org/1999/xhtml" className="ol steps"><li className="li step stepexpand"><span className="ph cmd">Open the <code className="ph codeph">.xcodeproj</code> project file with Xcode. Here, we open our sample <code className="ph codeph">Coffee Timer.xcodeproj</code> project file.</span><div className="itemgroup info"><img className="image" src={useBaseUrl("/048fe740-b3f2-11ec-a2dc-0242fe3e4a3f.png")} alt="Open Xcode project" /></div></li><li className="li step stepexpand"><span className="ph cmd">After opening the project in Xcode, choose one of the iOS simulators to launch the apps.</span><div className="itemgroup info"><img className="image" src={useBaseUrl("/048b5360-b3f2-11ec-a2dc-0242fe3e4a3f.png")} alt="Choose simulators" /></div></li><li className="li step stepexpand"><span className="ph cmd">To build the <code className="ph codeph">.app</code> file, click <strong className="ph b">Product &gt; Build</strong>.</span><div className="itemgroup info">Wait for the build to finish, to find the <code className="ph codeph">app</code> file, go to <code className="ph codeph">~/Library/Developer/Xcode/DerivedData/{'{'}app name{'}'}/Build/Products/{'{'}scheme{'}'}-iphonesimulator/{'{'}app name{'}'}.app</code>. In this example, we can find our sample <code className="ph codeph">Coffee Timer.app</code> file at: <code className="ph codeph">~/Library/Developer/Xcode/DerivedData/Coffee Timer/Build/Products/Debug-iphonesimulator/Coffee Timer.app</code>.</div><div className="itemgroup info"><div className="note tip note_tip"><span className="note__title">Tip:</span> <ul className="ul"><li className="li">To quickly search for the <code className="ph codeph">DerivedData</code> folder, copy and paste the following path <code className="ph codeph">~/Library/Developer/Xcode/DerivedData</code> into the <span className="ph uicontrol">Spotlight</span>.</li></ul></div></div></li></ol> 
<nav xmlns="http://www.w3.org/1999/xhtml" role="navigation" className="related-links"><div className="linklist"><strong>Learn more with our Katalon Academy course:</strong><br /><br /><ul className="linklist"><li className="linklist"><a className="link" href="#" target="_blank">Solve Mobile Testing Challenges with Codeless Solution</a></li></ul></div></nav> 
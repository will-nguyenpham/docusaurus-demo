---
id: "bc4ffd70-e2f0-11ec-a2dc-0242fe3e4a3f"
title: "Enhanced Variable Binding"
slug: "katalon-studio-enterprise/test-execution/data-driven-testing/enhanced-variable-binding"
hide_title: true
---
import useBaseUrl from '@docusaurus/useBaseUrl';

    

# <a id="id" class="anchor_top_offset"/><a id="ariaid-title1" class="anchor_top_offset"/>Enhanced Variable Binding

    
      
<div xmlns="http://www.w3.org/1999/xhtml" className="note note note_note"><span className="note__title">Note:</span> 
  <p className="p">Starting from version 6.3.0, variable binding can be configured
    to read test data values as the intended data types. This feature
    is only applicable for Test data of type Excel and Database.</p>
</div>
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">You can enable this feature to obtain old variable binding   behaviors. Old test data continue to be read as string to ensure   that we don't break existing test cases.</p> 
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">In this example, we create a test suite and a test case with   variables. <em className="ph i">booleanVar</em> is a test case variable of type   Boolean; <em className="ph i">numberVar</em> a test case variable of type Number;   and, <em className="ph i">stringVar</em> a test case variable of type String.</p> 
      
<table xmlns="http://www.w3.org/1999/xhtml" className="table"><caption /><thead className="thead">     <tr className>       <th className="entry anchor_top_offset" id="id__entry__1">Boolean</th>       <th className="entry anchor_top_offset" id="id__entry__2">Integer</th>       <th className="entry anchor_top_offset" id="id__entry__3">String</th>     </tr>   </thead><tbody className="tbody">     <tr className>       <td className="entry" headers="id__entry__1 id__entry__2 id__entry__3 ">TRUE</td>       <td className="entry" headers="id__entry__1 id__entry__2 id__entry__3 ">1</td>       <td className="entry" headers="id__entry__1 id__entry__2 id__entry__3 ">one</td>     </tr>     <tr className>       <td className="entry" headers="id__entry__1 id__entry__2 id__entry__3 ">FALSE</td>       <td className="entry" headers="id__entry__1 id__entry__2 id__entry__3 ">2</td>       <td className="entry" headers="id__entry__1 id__entry__2 id__entry__3 ">zero</td>     </tr>   </tbody></table> 
      
<ul xmlns="http://www.w3.org/1999/xhtml" className="ul">   <li className="li">Create the following custom keyword     <strong className="ph b">TestDataKeyword</strong>:</li> </ul> 
              
<pre xmlns="http://www.w3.org/1999/xhtml" className="pre codeblock"><code>public class testdata {"{"}{"\n"}{"\n"}{"    "}public static void printString(String str) {"{"}{"\n"}{"        "}println str;{"\n"}{"    "}{"}"}{"\n"}{"\n"}{"    "}public static void printInt(BigDecimal integer) {"{"}{"\n"}{"        "}println integer;{"\n"}{"    "}{"}"}{"\n"}{"\n"}{"    "}public static void printBoolean(boolean bool) {"{"}{"\n"}{"        "}println bool;{"\n"}{"    "}{"}"}{"\n"}{"\n"}{"}"}{"\n"}</code></pre> 
            
<ul xmlns="http://www.w3.org/1999/xhtml" className="ul">   <li className="li">Use them in the test case Sample Test Case as followed:</li> </ul> 
              
<pre xmlns="http://www.w3.org/1999/xhtml" className="pre codeblock"><code>TestDataKeyword.takeBooleanAndPrint(booleanVar);{"\n"}TestDataKeyword.takeNumberAndPrint(numberVar);{"\n"}TestDataKeyword.takeStringAndPrint(stringVar);{"\n"}</code></pre> 
            
<p xmlns="http://www.w3.org/1999/xhtml" className="p">where <em className="ph i">booleanVar</em>, <em className="ph i">numberVar</em>,   <em className="ph i">stringVar</em> are test case variables.</p> 
    
  
    

## <a id="id_1" class="anchor_top_offset"/>Variable binding for Test Data with option <em xmlns="http://www.w3.org/1999/xhtml" className="ph i">bind to test   case as string</em>  enabled

    
      
<ul xmlns="http://www.w3.org/1999/xhtml" className="ul">   <li className="li">     <p className="p">Create a Test Data with the data provided above and the <em className="ph i">bind         to test case as string</em> option enabled.</p>     <p className="p">       <img className="image" src={useBaseUrl("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/bind-as-string/option-enabled.png")} /><br /><br />     </p>   </li>   <li className="li">     <p className="p">Follow <a className="xref" href="/docs/legacy/katalon-studio-enterprise/test-execution/data-driven-testing/run-test-case-with-an-external-data-source">this         document</a> to run the test case, and then we will have the result       as below:</p>     <p className="p">       <img className="image" src={useBaseUrl("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/bind-as-string/2-failed.png")} /><br /><br />     </p>     <p className="p">The test suite should fail when the first keyword function       <em className="ph i">takeBooleanAndPrint</em> does not expect a String; however, due       to the enabled <em className="ph i">bind to test case as string</em> option, the       test data values are read as string.</p>   </li> </ul> 
    
  

## <a id="id_2" class="anchor_top_offset"/>Variable binding for Test Data with option <em xmlns="http://www.w3.org/1999/xhtml" className="ph i">bind to test   case as string</em>  disabled

<ul xmlns="http://www.w3.org/1999/xhtml" className="ul"><li className="li">     <p className="p">Create a Sample Test Data with option <em className="ph i">bind to test case as         string</em> disabled.</p>     <p className="p">       <img className="image" src={useBaseUrl("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/bind-as-string/option-disabled.png")} /><br /><br />     </p>   </li><li className="li">     <p className="p">Repeat the same steps as above, and then we have the result as       below:</p>     <p className="p">       <img className="image" src={useBaseUrl("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/bind-as-string/4-passed.png")} /><br /><br />     </p>     <p className="p">The test suite should pass because <em className="ph i">bind to test case as         string</em> is disabled. Test data values are read as-is, and all       keyword functions receive their expected data types.</p>   </li></ul> 
<div xmlns="http://www.w3.org/1999/xhtml" className="note tip note_tip"><span className="note__title">Tip:</span> 
  <ul className="ul"><li className="li">To push customizability further, Katalon now supports an
      annotation called <code className="ph codeph">BeforeTestDataBindToTestCase</code> which
      allows the annotated functions to operate on Test Data variables
      before they are bound to test cases.</li><li className="li">Before Katalon 6.3, you would have to compile another set of
      Test Data for each requirement. Increasingly varied requirements
      would then further complicate Test Data management.</li><li className="li">Starting from version 6.3, you need one raw Test Data file and
      then define the rules of transformation in different functions
      using the new annotation. With this feature, deciding how Test Data
      variables are used occurs at run-time.</li></ul>
</div>

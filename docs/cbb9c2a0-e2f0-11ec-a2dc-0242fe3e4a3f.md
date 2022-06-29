---
id: "cbb9c2a0-e2f0-11ec-a2dc-0242fe3e4a3f"
title: "How to handle Drop-down menu"
slug: "katalon-studio-enterprise/test-execution/advanced-guides/web-testing/how-to-handle-drop-down-menu"
hide_title: true
---
import useBaseUrl from '@docusaurus/useBaseUrl';

    

# <a id="id_how_handle_drop_down_menu" class="anchor_top_offset"/><a id="ariaid-title1" class="anchor_top_offset"/>How to handle Drop-down menu

    
    
  

## <a id="id_1" class="anchor_top_offset"/>What is Drop-down?

<p xmlns="http://www.w3.org/1999/xhtml" className="p">A drop-down list (abbreviated drop-down; also known as a   drop-down menu) is a graphical control element, similar to a list   box, that allows the user to choose one value from a list. When a   drop-down list is inactive, it displays a single value. When   activated, it displays a list of values, from which the user may   select one. When the user selects a new value, the control reverts   to its inactive state, displaying the selected value. It is often   used in the design of graphical user interfaces, including web   design.</p> 
<p xmlns="http://www.w3.org/1999/xhtml" className="p">This tutorial illustrates how to handle the drop-down list using   Katalon Studio built-in keywords.</p> 
<p xmlns="http://www.w3.org/1999/xhtml" className="p">The below image shows what the sample select command has.</p> 
<ol xmlns="http://www.w3.org/1999/xhtml" className="ol"><li className="li">     <em className="ph i">Index:</em> The index of the option to be     selected/deselected.</li><li className="li">     <em className="ph i">Value:</em> The value of the "value" attribute.</li><li className="li">     <em className="ph i">Label:</em> The exactly displayed text of a particular     option</li></ol> 
<p xmlns="http://www.w3.org/1999/xhtml" className="p">   <img className="image" src={useBaseUrl("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/how_handle_drop_down_menu/DropDown_Methods_Explanation.png")} alt="DropDown Methods Explanation" /><br /><br /> </p> 
    

## <a id="id_2" class="anchor_top_offset"/>Deselect All Options

    
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">We have a multi-select drop down as the following, values in a   multi-select combo box include Admin, HR, Networking, Developer,   Tester. This drop-down allows users to select multiple items.</p> 
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">   <img className="image" src={useBaseUrl("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/how_handle_drop_down_menu/Multiple_Attribute_Image1.png")} alt="Multiple Attribute drop-down" /><br /><br /> </p> 
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">We already have several items selected, for example, and now we   want all selected items to be deselected. How can we accomplish   this using Katalon?</p> 
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">We have a keyword called "deselectAllOption". This will deselect   all the selected items in a combo box.</p> 
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">   <strong className="ph b">Manual Mode:</strong> </p> 
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">   <img className="image" src={useBaseUrl("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/how_handle_drop_down_menu/DeSelectAll_Manual.png")} alt="DeSelectAll Manual mode" /><br /><br /> </p> 
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">   <strong className="ph b">Script Mode:</strong> </p> 
              
<pre xmlns="http://www.w3.org/1999/xhtml" className="pre codeblock"><code>'Launch Browser'{"\n"} {"\n"}WebUI.openBrowser('C:\\\\Users\\\\User\\\\Desktop\\\\DropDown\\\\MultiSelection_dropDown.html'){"\n"} {"\n"}'Maximize the window'{"\n"} {"\n"}WebUI.maximizeWindow(){"\n"} {"\n"}'Select all the Options'{"\n"} {"\n"}WebUI.selectAllOption(findTestObject('comboBox_Role')){"\n"} {"\n"}'Deselect all the options'{"\n"} {"\n"}WebUI.deselectAllOption(findTestObject('comboBox_Role')){"\n"} {"\n"}'Taking the count of number of Selected Options and Storing it in a variable'{"\n"} {"\n"}NoOfSelectedOptions = WebUI.getNumberOfSelectedOption(findTestObject('comboBox_Role')){"\n"} {"\n"}'After Deselect verifying the Number of Selected options with Actual result to Expected'{"\n"} {"\n"}WebUI.verifyEqual(NoOfSelectedOptions, 0){"\n"}{"\n"}</code></pre> 
          
  
    

## <a id="id_3" class="anchor_top_offset"/>Get the number of selected         options ('getNumberOfTotalOption')

    
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">This keyword returns a Count of number of options which are   being selected in the combo box</p> 
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">For example, let's say in the combo box below the values Admin,   HR are selected. If we want to get the number of selected options,   we can use the keyword 'getNumberOfTotalOption'. In this case, it   will return 2.</p> 
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">   <img className="image" src={useBaseUrl("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/how_handle_drop_down_menu/Get-Number-Of-Selected-Options-Example.png")} alt="Get-Number-Of-Selected-Options-Example" /><br /><br /> </p> 
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">   <strong className="ph b">Manual Mode:</strong> </p> 
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">   <img className="image" src={useBaseUrl("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/how_handle_drop_down_menu/Get_Number_of_Selected_Option_manual.png")} alt="Get<em>Number</em>of<em>Selected</em>Option_manual" /><br /><br /> </p> 
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">   <strong className="ph b">Script Mode:</strong> </p> 
              
<pre xmlns="http://www.w3.org/1999/xhtml" className="pre codeblock"><code>'Launch Browser'{"\n"} {"\n"}WebUI.openBrowser('C:\\\\Users\\\\User\\\\Desktop\\\\DropDown\\\\MultiSelection_dropDown.html'){"\n"} {"\n"}'Maximize the window'{"\n"} {"\n"}WebUI.maximizeWindow(){"\n"} {"\n"}'Select All values available in the dropdown by Select All option'{"\n"} {"\n"}WebUI.selectAllOption(findTestObject('comboBox_Role')){"\n"} {"\n"}'Capturing the Number of selected Values and storing it in a variable'{"\n"} {"\n"}SelectedItems = WebUI.getNumberOfTotalOption(findTestObject('comboBox_Role')){"\n"} {"\n"}println('No of Selected Roles are ' + SelectedItems){"\n"} {"\n"}'Verifying the number of Options selected with Expected result'{"\n"} {"\n"}WebUI.verifyEqual(SelectedItems, 5){"\n"}{"\n"}</code></pre> 
          
  
    

## <a id="id_4" class="anchor_top_offset"/>Get Number of Total Option (getNumberOfTotalOption)

    
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">This keyword returns the number of options listed in the combo   box.</p> 
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">Example:</p> 
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">We have a drop-down and want to get the total number of   available options in a drop-down then we will use   'getNumberOfTotalOption'.</p> 
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">   <img className="image" src={useBaseUrl("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/how_handle_drop_down_menu/Total_Options_Image.png")} alt="Total<em>Options</em>Image" /><br /><br /> </p> 
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">As it has 5 options in the dropdown it will return a value   5.</p> 
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">   <strong className="ph b">Manual Mode:</strong> </p> 
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">   <img className="image" src={useBaseUrl("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/how_handle_drop_down_menu/Get_Number_of_Total_Options_Manual.png")} alt="Get Number of Total Options Manual" /><br /><br /> </p> 
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">   <strong className="ph b">Script Mode:</strong> </p> 
              
<pre xmlns="http://www.w3.org/1999/xhtml" className="pre codeblock"><code>'Launch Browser'{"\n"} {"\n"}WebUI.openBrowser('C:\\\\Users\\\\User\\\\Desktop\\\\DropDown\\\\MultiSelection_dropDown.html'){"\n"} {"\n"}'Maximize the window'{"\n"} {"\n"}WebUI.maximizeWindow(){"\n"} {"\n"}'Capturing the Toal Number of{"  "}Values in the dropdown and storing it in a variable'{"\n"} {"\n"}TotalOptions = WebUI.getNumberOfTotalOption(findTestObject('comboBox_Role')){"\n"} {"\n"}println('No of Roles are :' + TotalOptions){"\n"} {"\n"}'Verifying the number of Options in the dropdown with Expected result'{"\n"} {"\n"}WebUI.verifyEqual(TotalOptions, 5){"\n"}{"\n"}</code></pre> 
          
  
    

## <a id="id_5" class="anchor_top_offset"/>Select All Option

    
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">It will select all options from the list.</p> 
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">   <strong className="ph b">Manual Mode:</strong> </p> 
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">   <img className="image" src={useBaseUrl("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/how_handle_drop_down_menu/SelectAll_Manual.png")} alt="SelectAll Manual" /><br /><br /> </p> 
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">   <strong className="ph b">Script Mode:</strong> </p> 
              
<pre xmlns="http://www.w3.org/1999/xhtml" className="pre codeblock"><code>'Launch Browser'{"\n"} {"\n"}WebUI.openBrowser('C:\\\\Users\\\\User\\\\Desktop\\\\DropDown\\\\MultiSelection_dropDown.html'){"\n"} {"\n"}'Maximize the window'{"\n"} {"\n"}WebUI.maximizeWindow(){"\n"} {"\n"}'Selecting all Options'{"\n"} {"\n"}WebUI.selectAllOption(findTestObject('comboBox_Role')){"\n"} {"\n"}'Capturing the Number of selected Values and storing it in a variable'{"\n"} {"\n"}SelectedOptions = WebUI.getNumberOfSelectedOption(findTestObject('comboBox_Role')){"\n"} {"\n"}'Verifying the number of selected options with Expected result'{"\n"} {"\n"}WebUI.verifyEqual(SelectedOptions, 5){"\n"}{"\n"}</code></pre> 
          
  
    

## <a id="id_6" class="anchor_top_offset"/>Select Option By Index

    
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">It will select the option at the given index. Index always   starts from 0.</p> 
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">Example 1:</p> 
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">If we want a select 'Feb' from the below drop down then we will   pass input 2 in the value.</p> 
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">Here in this example, we are Validating verify Option Selected   By Index Also.</p> 
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">   <img className="image" src={useBaseUrl("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/how_handle_drop_down_menu/Select_by_Index_Example.png")} alt="Select by Index Example" /><br /><br /> </p> 
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">   <strong className="ph b">Manual Mode:</strong> </p> 
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">   <img className="image" src={useBaseUrl("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/how_handle_drop_down_menu/SelectbyIndex_manual.png")} alt="SelectbyIndex manual" /><br /><br /> </p> 
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">   <strong className="ph b">Script Mode:</strong> </p> 
              
<pre xmlns="http://www.w3.org/1999/xhtml" className="pre codeblock"><code>'Open browser'{"\n"} {"\n"}WebUI.openBrowser('file:///C:/Users/User/Desktop/Dropdown.html'){"\n"} {"\n"}'Maximize the Window'{"\n"} {"\n"}WebUI.maximizeWindow(){"\n"} {"\n"}'Select the dropdown value by Select option By index Method'{"\n"} {"\n"}WebUI.selectOptionByIndex(findTestObject('dropdown_Month'), 2){"\n"} {"\n"}'Verifying the Option is Selected by Index option'{"\n"} {"\n"}WebUI.verifyOptionSelectedByIndex(findTestObject('dropdown_Month'), 2, 60){"\n"}{"\n"}</code></pre> 
            
<p xmlns="http://www.w3.org/1999/xhtml" className="p">Example 2:</p> 
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">If we want a select  Feb to Apr from the below combo box   then we will pass input as Value 2-4 and Value type as String.</p> 
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">   <img className="image" src={useBaseUrl("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/how_handle_drop_down_menu/Select_options_by_passing_Range_value.png")} alt="Select<em>options</em>by<em>passing</em>Range_value" /><br /><br /> </p> 
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">   <img className="image" src={useBaseUrl("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/how_handle_drop_down_menu/Input_Dialog_Box.png")} alt="Input<em>Dialog</em>Box" /><br /><br /> </p> 
    
  
    

## <a id="id_7" class="anchor_top_offset"/>Select Option By Label

    
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">It will select the option which has the exactly displayed text   of a particular option.</p> 
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">   <strong className="ph b">Example:</strong> </p> 
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">If we want to select 'Apr' from the drop-down then we need to   pass exactly visible text from it.</p> 
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">In this Example we are also verifying the option is select by   Label Value by using Verify option Selected By Label.</p> 
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">   <img className="image" src={useBaseUrl("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/how_handle_drop_down_menu/SelectByLabel_Expample.png")} alt="SelectByLabel_Expample" /><br /><br /> </p> 
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">   <strong className="ph b">Manual Mode:</strong> </p> 
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">   <img className="image" src={useBaseUrl("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/how_handle_drop_down_menu/Select_option_By_label_Manual.png")} alt="Select<em>option</em>By<em>label</em>Manual" /><br /><br /> </p> 
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">   <strong className="ph b">Script Mode:</strong> </p> 
              
<pre xmlns="http://www.w3.org/1999/xhtml" className="pre codeblock"><code>'Open browser'{"\n"} {"\n"}WebUI.openBrowser('file:///C:/Users/User/Desktop/Dropdown.html'){"\n"} {"\n"}'Maximize the Window'{"\n"} {"\n"}WebUI.maximizeWindow(){"\n"} {"\n"}'Select the dropdown value by Select option By Label Method'{"\n"} {"\n"}WebUI.selectOptionByLabel(findTestObject('dropdown_Month'), 'Apr', false){"\n"} {"\n"}'Verifying the Option is Selected by Label option'{"\n"} {"\n"}WebUI.verifyOptionSelectedByLabel(findTestObject('dropdown_Month'), 'Apr', false, 60){"\n"} {"\n"}WebUI.closeBrowser(){"\n"}{"\n"}</code></pre> 
          
  

## <a id="id_8" class="anchor_top_offset"/>Select Option by Value

<p xmlns="http://www.w3.org/1999/xhtml" className="p">It will Select the option which has value of the "value"   attribute.</p> 
<p xmlns="http://www.w3.org/1999/xhtml" className="p">Example:</p> 
<p xmlns="http://www.w3.org/1999/xhtml" className="p">If we want to select 'Mar' from the drop-down then we need to   pass the value as 3 as "Mar" has the value as 3 for Value   attribute.</p> 
<p xmlns="http://www.w3.org/1999/xhtml" className="p">Here in this example we are Validating verify Option Selected By   Value Also.</p> 
<p xmlns="http://www.w3.org/1999/xhtml" className="p">   <img className="image" src={useBaseUrl("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/how_handle_drop_down_menu/SelectByValue_Exp.png")} alt="SelectByValue Example" /><br /><br /> </p> 
<p xmlns="http://www.w3.org/1999/xhtml" className="p">   <strong className="ph b">Manual Mode:</strong> </p> 
<p xmlns="http://www.w3.org/1999/xhtml" className="p">   <img className="image" src={useBaseUrl("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/tutorials/how_handle_drop_down_menu/Select_By_Value_Manual.png")} /><br /><br /> </p> 
<p xmlns="http://www.w3.org/1999/xhtml" className="p">   <strong className="ph b">Script Mode :</strong> </p> 
<pre xmlns="http://www.w3.org/1999/xhtml" className="pre codeblock"><code>'Open browser'{"\n"} {"\n"}WebUI.openBrowser('file:///C:/Users/User/Desktop/Dropdown.html'){"\n"} {"\n"}'Maximize the window'{"\n"} {"\n"}WebUI.maximizeWindow(){"\n"} {"\n"}'Selecting the month from Select By value method'{"\n"} {"\n"}WebUI.selectOptionByValue(findTestObject('dropdown_Month'), '3', false){"\n"} {"\n"}'Verifying the Option is Selected by Value option'{"\n"} {"\n"}WebUI.verifyOptionSelectedByValue(findTestObject('dropdown_Month'), '3', false, 60){"\n"} {"\n"}WebUI.closeBrowser(){"\n"}{"\n"}</code></pre> 
<p xmlns="http://www.w3.org/1999/xhtml" className="p">Using Katalon built-in keywords we can simple handle dropdowns,   we will look into other scenarios of dropdowns such as 'verifying   dropdown values are in alphabetical', 'verifying expected and   actual dropdown values' using custom keywords. You may download the   source code <a className="xref j-external-link" href="https://github.com/katalon-studio/katalon-web-automation" target="_blank">here</a>.</p> 
<p xmlns="http://www.w3.org/1999/xhtml" className="p">For further instructions and help, please refer to <a className="xref" href="/docs/katalon-studio-enterprise/get-started/webui-testing/webui-create-and-run-web-ui-test-case-using-record-and-playback">Katalon Studio WebUI</a>   tutorials.</p> 
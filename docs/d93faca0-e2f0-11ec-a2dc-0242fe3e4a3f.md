---
id: "d93faca0-e2f0-11ec-a2dc-0242fe3e4a3f"
title: "Import/Export Keywords"
slug: "katalon-studio-enterprise/extend-katalon-studio/custom-keywords/importexport-keywords"
hide_title: true
---
import useBaseUrl from '@docusaurus/useBaseUrl';

    

# <a id="id" class="anchor_top_offset"/><a id="ariaid-title1" class="anchor_top_offset"/>Import/Export Keywords

    
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">Katalon Studio allows the users to   <strong className="ph b">import</strong>/<strong className="ph b">export</strong> for quick and   better management of custom keywords. This feature minimizes the   risk of moving test artifacts across different test   projects. </p> 
    
  
    

## <a id="id_1" class="anchor_top_offset"/>Import Keywords

    
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">Currently, Katalon Studio provides two options to import   keywords: from a <strong className="ph b">local folder</strong>, or from a   <strong className="ph b">git</strong> repository.</p> 
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">To import new keywords, navigate to <strong className="ph b">Menu &gt; File &gt;     Import Keywords</strong> and choose your preferred option.   Additionally, the users can import keywords from the <strong className="ph b">Tests     Explorer</strong> by right-clicking on the   <strong className="ph b">Keywords</strong> section to display the context menu as   shown below.</p> 
      
<p xmlns="http://www.w3.org/1999/xhtml" className="p">   <img className="image" src={useBaseUrl("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/importexport-keywords/image2018-6-21-113A383A45.png")} /><br /><br /> </p> 
    
              
      

### <a id="id_2" class="anchor_top_offset"/>Import from Local Folder

      
        
<p xmlns="http://www.w3.org/1999/xhtml" className="p">   <img className="image" src={useBaseUrl("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/importexport-keywords/image2018-6-21-113A403A43.png")} /><br /><br /> </p> 
        
<p xmlns="http://www.w3.org/1999/xhtml" className="p">After the <strong className="ph b">Browse For Folder</strong> panel   appears, choose your desired folder to import the keywords to   Katalon Studio. If the keywords imported don't belong to any   package, Katalon Studio will put them into a default package.</p> 
        
<p xmlns="http://www.w3.org/1999/xhtml" className="p">   <img className="image" src={useBaseUrl("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/importexport-keywords/image2018-6-21-113A533A24.png")} /><br /><br /> </p> 
      
    
      

### <a id="id_3" class="anchor_top_offset"/>Import from Git 

      
        
<p xmlns="http://www.w3.org/1999/xhtml" className="p">If the user is importing the keywords from a public repository,   <strong className="ph b">NO</strong> authentication is <strong className="ph b">required</strong>.   However, if the repository is private, please provide your Git   authentication. </p> 
        
<p xmlns="http://www.w3.org/1999/xhtml" className="p">   <img className="image" src={useBaseUrl("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/importexport-keywords/image2018-6-25-163A33A24.png")} /><br /><br /> </p> 
        
<p xmlns="http://www.w3.org/1999/xhtml" className="p">When Katalon Studio successfully discovers the desired   repository, it will ask the user to choose a branch to check out.   Please select the branch that contains the keywords you want to   import. </p> 
        
<p xmlns="http://www.w3.org/1999/xhtml" className="p">   <img className="image" src={useBaseUrl("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/importexport-keywords/image2018-6-25-163A23A27.png")} /><br /><br /> </p> 
        
<p xmlns="http://www.w3.org/1999/xhtml" className="p">Katalon Studio will clone the Git repository to a default   location in your project folder. Choose your initial   branch and click <strong className="ph b">Finish.</strong> </p> 
        
<p xmlns="http://www.w3.org/1999/xhtml" className="p">   <img className="image" src={useBaseUrl("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/importexport-keywords/image2018-6-21-113A453A26.png")} /><br /><br /> </p> 
        
<p xmlns="http://www.w3.org/1999/xhtml" className="p">Katalon Studio will notify you whether the keywords are imported   successfully. If the keywords imported don't belong to any package,   Katalon Studio will put them into a <strong className="ph b">default</strong>   package.</p> 
        
<p xmlns="http://www.w3.org/1999/xhtml" className="p">   <img className="image" src={useBaseUrl("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/importexport-keywords/image2018-6-21-113A533A24.png")} /><br /><br /> </p> 
      
    
      

### <a id="id_4" class="anchor_top_offset"/>Duplicate Keywords

      
        
<p xmlns="http://www.w3.org/1999/xhtml" className="p">There are instances of similar keywords exist in the project.   Katalon Studio will automatically detect and alert users for taking   actions. There are 3 options to choose as shown below.</p> 
        
<p xmlns="http://www.w3.org/1999/xhtml" className="p">   <img className="image" src={useBaseUrl("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/importexport-keywords/image2018-6-21-113A463A12.png")} /><br /><br /> </p> 
      
    

## <a id="id_5" class="anchor_top_offset"/>Export Keywords

<p xmlns="http://www.w3.org/1999/xhtml" className="p">To increase code usability, Katalon Studio also let the users to   export keyword for sharing across team memebers. Simply right-click   on Keywords  in the Tests Explorer, select   Export from the context-menu. </p> 
<p xmlns="http://www.w3.org/1999/xhtml" className="p">   <img className="image" src={useBaseUrl("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/importexport-keywords/image2018-6-21-113A463A43.png")} /><br /><br /> </p> 
<p xmlns="http://www.w3.org/1999/xhtml" className="p">The <strong className="ph b">Browse For Folder</strong> panel will be   displayed, choose your desired folder to export the keywords to the   local storage.</p> 
<p xmlns="http://www.w3.org/1999/xhtml" className="p">   <img className="image" src={useBaseUrl("https://github.com/katalon-studio/docs-images/raw/master/katalon-studio/docs/importexport-keywords/image2018-6-21-113A483A40.png")} /><br /><br /> </p> 
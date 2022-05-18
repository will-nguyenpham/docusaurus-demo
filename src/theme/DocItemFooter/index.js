/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
 import React, { useEffect } from 'react';
 import clsx from 'clsx';
 import LastUpdated from '@theme/LastUpdated';
 import EditThisPage from '@theme/EditThisPage';
 import TagsListInline from '@theme/TagsListInline';
 import styles from './styles.module.css';
 import {ThemeClassNames} from '@docusaurus/theme-common';
 
 function TagsRow(props) {
   return (
     <div
       className={clsx(
         ThemeClassNames.docs.docFooterTagsRow,
         'row margin-bottom--sm',
       )}>
       <div className="col">
         <TagsListInline {...props} />
       </div>
     </div>
   );
 }
 
 function EditMetaRow({
   editUrl,
   lastUpdatedAt,
   lastUpdatedBy,
   formattedLastUpdatedAt,
 }) {
   return (
     <div className={clsx(ThemeClassNames.docs.docFooterEditMetaRow, 'row')}>
       <div className="col">{editUrl && <EditThisPage editUrl={editUrl} />}</div>
 
       <div className={clsx('col', styles.lastUpdated)}>
         {(lastUpdatedAt || lastUpdatedBy) && (
           <LastUpdated
             lastUpdatedAt={lastUpdatedAt}
             formattedLastUpdatedAt={formattedLastUpdatedAt}
             lastUpdatedBy={lastUpdatedBy}
           />
         )}
       </div>
     </div>
   );
 }
 
 const useScript = () => {
  useEffect(() => {
    const PDRTJS_settings_8726954 = {
      "id": "8726954",
      "unique_id": "{{ page.path }}",
      "title": "{{ page.title }}",
      "permalink": "https://github.com/{{site.github_editme_path}}/blob/{{site.branch}}/{{page.path}}"
    };

    // if (!document.getElementById(j)) {
      const d = document.createElement('script');
      d.type = 'text/javascript';
      d.async = true;
      d.id = 'pd-rating-js';

      d.src = ('https:' == document.location.protocol) ? 'https://polldaddy.com/js/rating/rating.js' : 'http://i0.poll.fm/js/rating/rating.js';
      document.getElementsByTagName('script')[0].appendChild(d);
    // }

  }, []);
};

 export default function DocItemFooter(props) {
   const {content: DocContent} = props;
   const {metadata} = DocContent;
   const {editUrl, lastUpdatedAt, formattedLastUpdatedAt, lastUpdatedBy, tags} =
     metadata;
   const canDisplayTagsRow = tags.length > 0;
   const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);
   const canDisplayFooter = canDisplayTagsRow || canDisplayEditMetaRow;
 
   if (!canDisplayFooter) {
     return null;
   }
   return (
     <footer
       className={clsx(ThemeClassNames.docs.docFooter, 'docusaurus-mt-lg')}>
       {canDisplayTagsRow && <TagsRow tags={tags} />}
       {/* <div id="pd_rating_holder_8726954"></div>
       {useScript()} */}
       {/* {canDisplayEditMetaRow && (
         <EditMetaRow
           editUrl={editUrl}
           lastUpdatedAt={lastUpdatedAt}
           lastUpdatedBy={lastUpdatedBy}
           formattedLastUpdatedAt={formattedLastUpdatedAt}
         />
       )} */}
     </footer>
   );
 }
 
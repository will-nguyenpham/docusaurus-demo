/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
 import React from 'react';
 import clsx from 'clsx';
 import Link from '@docusaurus/Link';
 import {useThemeConfig} from '@docusaurus/theme-common';
 import useBaseUrl from '@docusaurus/useBaseUrl';
 import isInternalUrl from '@docusaurus/isInternalUrl';
 import styles from './styles.module.css';
 import ThemedImage from '@theme/ThemedImage';
 import IconExternalLink from '@theme/IconExternalLink';
 
 function FooterLink({to, href, label, prependBaseUrlToHref, ...props}) {
   const toUrl = useBaseUrl(to);
   const normalizedHref = useBaseUrl(href, {
     forcePrependBaseUrl: true,
   });
   return (
     <Link
       className="footer__link-item"
       {...(href
         ? {
             href: prependBaseUrlToHref ? normalizedHref : href,
           }
         : {
             to: toUrl,
           })}
       {...props}>
       {href && !isInternalUrl(href) ? (
         <span>
           {label}
           <IconExternalLink />
         </span>
       ) : (
         label
       )}
     </Link>
   );
 }
 
 function FooterLogo({sources, alt, width, height}) {
   return (
     <ThemedImage
       className="footer__logo"
       alt={alt}
       sources={sources}
       width={width}
       height={height}
     />
   );
 }
 
 function MultiColumnLinks({links}) {
   return (
     <>
       {links.map((linkItem, i) => (
         <div key={i} className="col footer__col">
           <div className="footer__title">{linkItem.title}</div>
           <ul className="footer__items">
             {linkItem.items.map((item, key) =>
               item.html ? (
                 <li
                   key={key}
                   className="footer__item" // Developer provided the HTML, so assume it's safe.
                   // eslint-disable-next-line react/no-danger
                   dangerouslySetInnerHTML={{
                     __html: item.html,
                   }}
                 />
               ) : (
                 <li key={item.href || item.to} className="footer__item">
                   <FooterLink {...item} />
                 </li>
               ),
             )}
           </ul>
         </div>
       ))}
     </>
   );
 }
 
 function SimpleLinks({links}) {
   return (
     <div className="footer__links">
       {links.map((item, key) => (
         <>
           {item.html ? (
             <span
               key={key}
               className="footer__link-item" // Developer provided the HTML, so assume it's safe.
               // eslint-disable-next-line react/no-danger
               dangerouslySetInnerHTML={{
                 __html: item.html,
               }}
             />
           ) : (
             <FooterLink {...item} />
           )}
           {links.length !== key + 1 && (
             <span className="footer__link-separator">·</span>
           )}
         </>
       ))}
     </div>
   );
 }
 
 function isMultiColumnFooterLinks(links) {
   return 'title' in links[0];
 }
 
 function FooterLeftView(logo, copyright, sources) {
   const SvgFacebook = require('@site/static/img/ic_facebook.svg').default;
   const SvgTwitter = require('@site/static/img/ic_twitter.svg').default;
   const SvgLinkedin = require('@site/static/img/ic_in.svg').default;
   const SvgYoutube = require('@site/static/img/ic_youtube.svg').default;
   return (
     <div className={styles.footerContainerLeft}>
       <div className={styles.logoContainer}>
          <img className={styles.logo} src={require('@site/static/img/logo_katalon.png').default}/>
          <p className={styles.logoText}>Katalon</p>
       </div>
       <p className={styles.footerCompanyText}>1776 Peachtree Street NW, Suite 200N, Atlanta, GA 30309<br/>
           Phone: +1 678-500-9185<br/>
           General & Legal inquiries: info@katalon.com<br/>
           License & Purchase inquiries: business@katalon.com<br/>
           Partnership inquiries: partner@katalon.com<br/>
         </p>
         <p>FOLLOW US</p>
         <div className={styles.footerSocialView}>
           <a className={styles.footerLinkSocial} href="https://www.facebook.com/katalonstudio" target="_blank"><SvgFacebook className={styles.footerSocialFBImg}/></a>
           <a className={styles.footerLinkSocial} href="https://twitter.com/katalon_studio" target="_blank"><SvgTwitter className={styles.footerSocialImg}/></a>
           <a className={styles.footerLinkSocial} href="https://www.linkedin.com/company/katalon/" target="_blank"><SvgLinkedin className={styles.footerSocialImg}/></a>
           <a className={styles.footerLinkSocial} href="https://www.youtube.com/c/KatalonStudio/" target="_blank"><SvgYoutube className={styles.footerSocialImg}/></a>
         </div>
         
         {/* Copy right */}
         {(logo || copyright) && (
           <div className="footer__bottom">
             {logo && (logo.src || logo.srcDark) && (
               <div className="margin-bottom--sm">
                 {logo.href ? (
                   <Link href={logo.href} className={styles.footerLogoLink}>
                     <FooterLogo
                       alt={logo.alt}
                       sources={sources}
                       width={logo.width}
                       height={logo.height}
                     />
                   </Link>
                 ) : (
                   <FooterLogo alt={logo.alt} sources={sources} />
                 )}
               </div>
             )}
             {copyright ? (
               <div
                 className={clsx("footer__copyright", styles.footerCopyRight)} // Developer provided the HTML, so assume it's safe.
                 // eslint-disable-next-line react/no-danger
                 dangerouslySetInnerHTML={{
                   __html: copyright,
                 }}
               />
             ) : null}
           </div>
         )}
     </div>
   )
 }
 
 function Footer() {
   const {footer} = useThemeConfig();
   const {copyright, links = [], logo = {}} = footer || {};
   const sources = {
     light: useBaseUrl(logo.src),
     dark: useBaseUrl(logo.srcDark || logo.src),
   };
 
   if (!footer) {
     return null;
   }
 
   return (
     <footer
       className={clsx('footer', {
         'footer--dark': footer.style === 'dark',
       }, styles.footerContainer)}>
       
       {FooterLeftView(logo, copyright, sources)}
 
       <div className={clsx("container container-fluid", styles.footerContainerRight)}>
         {links &&
           links.length > 0 &&
           (isMultiColumnFooterLinks(links) ? (
             <div className="row footer__links">
               <MultiColumnLinks links={links} />
             </div>
           ) : (
             <div className="footer__links text--center">
               <SimpleLinks links={links} />
             </div>
           ))}
         <div className={styles.footerContainerPrivacy}>
             <a href="https://katalon.com/terms" target="_blank"><p className={styles.footerTermText}>Temrs of Use</p></a>
             <a href="https://katalon.com/terms#privacy-policy" target="_blank"><p className={styles.footerPrivacyText}>Privacy Policy</p></a>
             <a href="https://katalon.com/terms#license-agreement" target="_blank"><p className={styles.footerPrivacyText}>License Agreement</p></a>
         </div>
       </div>
     </footer>
   );
 }
 
 export default React.memo(Footer);
 
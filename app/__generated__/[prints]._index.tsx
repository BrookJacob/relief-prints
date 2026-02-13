/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import { Fragment, useState } from "react";
      import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
      import { Body as Body, Link as Link } from "@webstudio-is/sdk-components-react-router";
import { NavigationMenu as NavigationMenu, NavigationMenuList as NavigationMenuList, NavigationMenuItem as NavigationMenuItem, NavigationMenuTrigger as NavigationMenuTrigger, NavigationMenuContent as NavigationMenuContent, NavigationMenuLink as NavigationMenuLink, NavigationMenuViewport as NavigationMenuViewport, Dialog as Dialog, DialogTrigger as DialogTrigger, DialogOverlay as DialogOverlay, DialogContent as DialogContent, DialogTitle as DialogTitle, DialogDescription as DialogDescription, DialogClose as DialogClose } from "@webstudio-is/sdk-components-react-radix";
import { Button as Button, Text as Text, Box as Box, HtmlEmbed as HtmlEmbed, Paragraph as Paragraph, Image as Image } from "@webstudio-is/sdk-components-react";


      export const projectId = "82a0631c-c19d-4d0a-9e44-882cf1173c19";

      export const lastPublished = "2026-02-13T03:13:40.625Z";

      export const siteName = undefined;

      export const breakpoints = [{"id":"B5vgdr8VcUfxtjSf8yJGV"},{"id":"3R1OwwKDJqyZRBVViG0ab","maxWidth":991},{"id":"KjtyZcIdeZuWQbmjPEzEC","maxWidth":767},{"id":"BIbDldY_w4RzFaO5dBfLO","maxWidth":479}];

      export const favIconAsset: string | undefined =
        undefined;

      // Font assets on current page (can be preloaded)
      export const pageFontAssets: string[] =
        []

      export const pageBackgroundImageAssets: string[] =
        []

      

      const Page = (_props: { system: any; }) => {
let PrintsAPI = useResource("PrintsAPI_1")
return <Body
className={`w-element c1uyowuj c31w3r6 c68fxpy c1sv9ebm cy3z0ey crdsz7w c1itvrt`}>
<NavigationMenu
className={`w-navigation-menu cxw8zc3 c19sltx8 c14i7eiu c1uyowuj ctux2o1 c1sv9ebm cy3z0ey cjir9es ctzqmm1 c17nhxwk cpe5lqd c13jr8hu c68fxpy c1t1qcoy c1foj3ip cai4g10 cc5dof9 c7gmfw7 c9aibis`}>
<NavigationMenuList
className={`w-menu-list cs0inmg c1aygg54 c14rn8fm c2wps9b c1uyowuj cvoildy c1ky79ns cito4x c1jwonnk c1sv9ebm c1xaawq cz0dubf ca19okh c6dt4vj`}>
<NavigationMenuItem
data-ws-index="0"
className={`w-menu-item`}>
<NavigationMenuLink>
<Link
className={`w-link cnbx0p c1sv9ebm c1xaawq c1bwetql c1k1o26d c14s5dys cfvvqx7 cbqry1f cz7ytka cieuo91 cd9wt8m c1lf6x7 c1bqpkhd cxqh096 c1fxua5b ct3an0q c36sn1v c100mmmt c14hzzl3 c1kk01li c12y8jvm c1v0ssuk c1bzfz6c c1osnjdn c1yjp3hm c1ajm9ba c16by7wx c1yf5rre`}>
{"Jacob Brook"}
</Link>
</NavigationMenuLink>
</NavigationMenuItem>
<NavigationMenuItem
data-ws-index="1"
className={`w-menu-item c1nw3gf0`}>
<NavigationMenuTrigger>
<Button
className={`w-button cnbx0p c1sv9ebm c1xaawq c1bwetql c1k1o26d c14s5dys cfvvqx7 cbqry1f c1qawyll cg4mzxw cm7ipnh c1lf6x7 c1bqpkhd cxqh096 c1fxua5b ct3an0q c191asrm c12y8jvm c1v0ssuk c1bzfz6c c1osnjdn c1yjp3hm c1ajm9ba c16by7wx c1yf5rre c1nh0hw0`}>
<Text
className={`w-text`}>
{"Prints"}
</Text>
<Box
className={`w-box c13se400 cha70u0 c8z56qe cdgy5g cgmuryo c49g0au c1yvskw1 cytk4ht cz2kiag c1uo7dxt`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m4 6 4 4 4-4\"/></svg>"}
className={`w-html-embed`} />
</Box>
</Button>
</NavigationMenuTrigger>
<NavigationMenuContent
className={`w-menu-content c1rfce01 c1bukgm2 c1c7xgx7 c149b819 c15q7ogf`}>
<Box
className={`w-box c1uyowuj ccqa24j c1rmpn19 c31w3r6 czqvxj3`}>
{PrintsAPI?.data?.slice?.(0,3)?.map?.((collectionItem: any, index: number) =>
<Fragment key={index}>
<div
className={`w-element c1uyowuj c14i7eiu c1l4a3y8 cy3z0ey c1st0lcn c1p2kov4 cw0dto3 c1blhtxf c16tih0w c135xnuc cmai9ko`}>
<NavigationMenuLink>
<Link
href={"/print/:slug"}
className={`w-link c1wcbk0m c1uyowuj crqzcvq c2f5gyz ccqa24j c1rmpn19 c1k1o26d c14s5dys cfvvqx7 cbqry1f cy3mdji c36sn1v c1sv9ebm cy3z0ey cc2qqmj c1jj2uxl c16by7wx c1yf5rre c46pe1u cbycsfa`}>
<div
className={`w-element c1uyowuj c1sv9ebm c1xaawq c1hn7fn4`}>
<Image
src={collectionItem?.imageUrl}
width={200}
className={`w-image cunxeuq c18faydo cw0dto3 c1blhtxf c16tih0w c135xnuc ca18hep`} />
</div>
<div
className={`w-element`}>
<h1
className={`w-element`}>
{collectionItem?.Title}
</h1>
<Paragraph
className={`w-paragraph c1hycn3j caz0h6c ck9j3rw cdj2t61 cdurq3g c1qawyll c16d5wrw crf0w56 co6l85i`}>
{collectionItem?.Description}
</Paragraph>
</div>
</Link>
</NavigationMenuLink>
</div>
</Fragment>
)}
<NavigationMenuLink>
<Link
href={"/prints"}
className={`w-link c1wcbk0m c1uyowuj crqzcvq c2f5gyz ccqa24j c1rmpn19 c1k1o26d c14s5dys cfvvqx7 cbqry1f cy3mdji c36sn1v c1sv9ebm c1xaawq cmai9ko cc2qqmj c1jj2uxl c16by7wx c1yf5rre c46pe1u cbycsfa`}>
<div
className={`w-element`}>
<h1
className={`w-element`}>
{"View All Prints"}
</h1>
</div>
</Link>
</NavigationMenuLink>
</Box>
</NavigationMenuContent>
</NavigationMenuItem>
<NavigationMenuItem
data-ws-index="2"
className={`w-menu-item c1nw3gf0`}>
<NavigationMenuTrigger>
<Button
className={`w-button cnbx0p c1sv9ebm c1xaawq c1bwetql c1k1o26d c14s5dys cfvvqx7 cbqry1f c1qawyll cg4mzxw cm7ipnh c1lf6x7 c1bqpkhd cxqh096 c1fxua5b ct3an0q c191asrm c12y8jvm c1v0ssuk c1bzfz6c c1osnjdn c1yjp3hm c1ajm9ba c16by7wx c1yf5rre c1nh0hw0`}>
<Text
className={`w-text`}>
{"Articles"}
</Text>
<Box
className={`w-box c13se400 cha70u0 c8z56qe cdgy5g cgmuryo c49g0au c1yvskw1 cytk4ht cz2kiag c1uo7dxt`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m4 6 4 4 4-4\"/></svg>"}
className={`w-html-embed`} />
</Box>
</Button>
</NavigationMenuTrigger>
<NavigationMenuContent
className={`w-menu-content c1rfce01 c1bukgm2 c1c7xgx7 c149b819 c15q7ogf`}>
<Box
className={`w-box c1uyowuj ccqa24j c1rmpn19`}>
<Box
className={`w-box cqxnxum c1uyowuj ccqa24j c1rmpn19 c31w3r6`}>
<NavigationMenuLink>
<Link
href={"https://ui.shadcn.com/docs/components/accordion"}
className={`w-link c1wcbk0m c1uyowuj c31w3r6 c2f5gyz cz0dubf ca19okh c1k1o26d c14s5dys cfvvqx7 cbqry1f cy3mdji c36sn1v cc2qqmj c1jj2uxl c16by7wx c1yf5rre c46pe1u cbycsfa`}>
<Text
className={`w-text c1qawyll cm7ipnh cy3mdji`}>
{"Accordion"}
</Text>
<Paragraph
className={`w-paragraph c1hycn3j caz0h6c ck9j3rw cdj2t61 cdurq3g c1qawyll c16d5wrw crf0w56 co6l85i`}>
{"A vertically stacked set of interactive headings that each reveal a section of content."}
</Paragraph>
</Link>
</NavigationMenuLink>
<NavigationMenuLink>
<Link
href={"https://ui.shadcn.com/docs/components/dialog"}
className={`w-link c1wcbk0m c1uyowuj c31w3r6 c2f5gyz cz0dubf ca19okh c1k1o26d c14s5dys cfvvqx7 cbqry1f cy3mdji c36sn1v cc2qqmj c1jj2uxl c16by7wx c1yf5rre c46pe1u cbycsfa`}>
<Text
className={`w-text c1qawyll cm7ipnh cy3mdji`}>
{"Dialog"}
</Text>
<Paragraph
className={`w-paragraph c1hycn3j caz0h6c ck9j3rw cdj2t61 cdurq3g c1qawyll c16d5wrw crf0w56 co6l85i`}>
{"A window overlaid on either the primary window or another dialog window, rendering the content underneath inert."}
</Paragraph>
</Link>
</NavigationMenuLink>
<NavigationMenuLink>
<Link
href={"https://ui.shadcn.com/docs/components/collapsible"}
className={`w-link c1wcbk0m c1uyowuj c31w3r6 c2f5gyz cz0dubf ca19okh c1k1o26d c14s5dys cfvvqx7 cbqry1f cy3mdji c36sn1v cc2qqmj c1jj2uxl c16by7wx c1yf5rre c46pe1u cbycsfa`}>
<Text
className={`w-text c1qawyll cm7ipnh cy3mdji`}>
{"Collapsible"}
</Text>
<Paragraph
className={`w-paragraph c1hycn3j caz0h6c ck9j3rw cdj2t61 cdurq3g c1qawyll c16d5wrw crf0w56 co6l85i`}>
{"An interactive component which expands/collapses a panel."}
</Paragraph>
</Link>
</NavigationMenuLink>
</Box>
<Box
className={`w-box cqxnxum c1uyowuj ccqa24j c1rmpn19 c31w3r6`}>
<NavigationMenuLink>
<Link
href={"https://ui.shadcn.com/docs/components/popover"}
className={`w-link c1wcbk0m c1uyowuj c31w3r6 c2f5gyz cz0dubf ca19okh c1k1o26d c14s5dys cfvvqx7 cbqry1f cy3mdji c36sn1v cc2qqmj c1jj2uxl c16by7wx c1yf5rre c46pe1u cbycsfa`}>
<Text
className={`w-text c1qawyll cm7ipnh cy3mdji`}>
{"Popover"}
</Text>
<Paragraph
className={`w-paragraph c1hycn3j caz0h6c ck9j3rw cdj2t61 cdurq3g c1qawyll c16d5wrw crf0w56 co6l85i`}>
{"Displays rich content in a portal, triggered by a button."}
</Paragraph>
</Link>
</NavigationMenuLink>
<NavigationMenuLink>
<Link
href={"https://ui.shadcn.com/docs/components/tooltip"}
className={`w-link c1wcbk0m c1uyowuj c31w3r6 c2f5gyz cz0dubf ca19okh c1k1o26d c14s5dys cfvvqx7 cbqry1f cy3mdji c36sn1v cc2qqmj c1jj2uxl c16by7wx c1yf5rre c46pe1u cbycsfa`}>
<Text
className={`w-text c1qawyll cm7ipnh cy3mdji`}>
{"Tooltip"}
</Text>
<Paragraph
className={`w-paragraph c1hycn3j caz0h6c ck9j3rw cdj2t61 cdurq3g c1qawyll c16d5wrw crf0w56 co6l85i`}>
{"A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."}
</Paragraph>
</Link>
</NavigationMenuLink>
<NavigationMenuLink>
<Link
href={"https://ui.shadcn.com/docs/components/button"}
className={`w-link c1wcbk0m c1uyowuj c31w3r6 c2f5gyz cz0dubf ca19okh c1k1o26d c14s5dys cfvvqx7 cbqry1f cy3mdji c36sn1v cc2qqmj c1jj2uxl c16by7wx c1yf5rre c46pe1u cbycsfa`}>
<Text
className={`w-text c1qawyll cm7ipnh cy3mdji`}>
{"Button"}
</Text>
<Paragraph
className={`w-paragraph c1hycn3j caz0h6c ck9j3rw cdj2t61 cdurq3g c1qawyll c16d5wrw crf0w56 co6l85i`}>
{"Displays a button or a component that looks like a button."}
</Paragraph>
</Link>
</NavigationMenuLink>
</Box>
</Box>
</NavigationMenuContent>
</NavigationMenuItem>
</NavigationMenuList>
<Box
className={`w-box c1d9maox c1rfce01 culxb5o c1uyowuj c1xaawq`}>
<NavigationMenuViewport
className={`w-menu-viewport ccqcnmt cfsi5cq c1hycn3j caz0h6c c1k1o26d c14s5dys cfvvqx7 cbqry1f c68fxpy c10xjwlq cks8tsl c1w7vfh7 chxvavw cjpzr7w`} />
</Box>
<div
className={`w-element c188bzp0 c16wdsq9 c3wvvo4`}>
<Dialog>
<DialogTrigger>
<Button
className={`w-button cnbx0p c1sv9ebm c1xaawq c1bwetql c1k1o26d c14s5dys cfvvqx7 cbqry1f c1qawyll cg4mzxw cm7ipnh c1xn1l1n c1togt01 c4bix43 c1h8im9 csn16a8 c1452pfq c12y8jvm c1v0ssuk c1bzfz6c c1osnjdn c1yjp3hm c1ajm9ba c16by7wx c1yf5rre`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M2.667 8h10.666M2.667 4h10.666M2.667 12h10.666\"/></svg>"}
className={`w-html-embed`} />
</Button>
</DialogTrigger>
<DialogOverlay
className={`w-dialog-overlay cjdwxsq c1bukgm2 c104y8em cpr7vok c1rfce01 chwrsma cpsrxgc c1ntzshm c1uyowuj c31w3r6 cjhquqn cqcsevb`}>
<DialogContent
className={`w-dialog-content c14i7eiu chwrsma c1uyowuj c31w3r6 ccqa24j c1rmpn19 c1ayzjvm cks8tsl ccqcnmt c152ye8w c14wz3th cvoildy cjpzr7w c17qxd5e`}>
<Box
data-ws-tag="nav"
className={`w-box`}>
<Box
className={`w-box c1uyowuj c31w3r6 criblb6 cn7p44r`}>
<DialogTitle
className={`w-dialog-title c3ypcl7 cy3mdji c1haqq2n co6l85i`}>
{"Sheet Title"}
</DialogTitle>
<DialogDescription
className={`w-dialog-description c1qawyll cg4mzxw crf0w56 co6l85i`}>
{"Sheet description text you can edit"}
</DialogDescription>
</Box>
<Text
className={`w-text`}>
{"The text you can edit"}
</Text>
</Box>
<DialogClose
className={`w-close-button c1d9maox chlnbf6 c1ic54aj cgjpeus c1uh2lru cgydoo3 c1mp5fxy c92znjl c1uyowuj c1sv9ebm c1xaawq c8z56qe cdgy5g c1bwetql cc2qqmj cgtx35s c1exwrx c1bzfz6c`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.5 3 3 12.5M3 3l9.5 9.5\"/></svg>"}
className={`w-html-embed`} />
</DialogClose>
</DialogContent>
</DialogOverlay>
</Dialog>
</div>
</NavigationMenu>
<div
className={`w-element c1uyowuj crqzcvq ciia31h crdsz7w c1itvrt c1szfcn8 c1sv9ebm c1nw3vf0 ccp2v74 c15hm828`}>
{PrintsAPI?.data?.map?.((collectionItem_1: any, index_1: number) =>
<Fragment key={index_1}>
<div
className={`w-element c1uyowuj c31w3r6 c1sv9ebm c1xaawq`}>
<Image
src={collectionItem_1?.imageUrl}
className={`w-image c8zw5sy c18faydo`} />
</div>
</Fragment>
)}
</div>
<Dialog>
<DialogTrigger>
<Button
className={`w-button cnbx0p c1sv9ebm c1xaawq c1ayzjvm c1k1o26d c14s5dys cfvvqx7 cbqry1f c1qawyll cg4mzxw cm7ipnh c1xn1l1n c1uv9ufw c8ddc3u c10igab cxry5hj cjpzr7w c1v0ssuk c1bzfz6c c1osnjdn c1yjp3hm c1ajm9ba c16by7wx c1yf5rre`}>
{"Button"}
</Button>
</DialogTrigger>
<DialogOverlay
className={`w-dialog-overlay cjdwxsq c1bukgm2 c104y8em cpr7vok c1rfce01 chwrsma cpsrxgc c1ntzshm c1uyowuj cjhquqn cqcsevb`}>
<DialogContent
className={`w-dialog-content c14i7eiu chwrsma c1uyowuj c31w3r6 ccqa24j c1rmpn19 cje8lbb c1ayzjvm cks8tsl ccqcnmt cjpzr7w c1qtydff c17qxd5e`}>
<Box
className={`w-box c1uyowuj c31w3r6 criblb6 cn7p44r`}>
<DialogTitle
className={`w-dialog-title c3ypcl7 cy3mdji c1haqq2n co6l85i`}>
{"Dialog Title you can edit"}
</DialogTitle>
<DialogDescription
className={`w-dialog-description c1qawyll cg4mzxw crf0w56 co6l85i`}>
{"Dialog description text you can edit"}
</DialogDescription>
</Box>
<Text
className={`w-text`}>
{"The text you can edit"}
</Text>
<DialogClose
className={`w-close-button c1d9maox chlnbf6 c1ic54aj cgjpeus c1uh2lru cgydoo3 c1mp5fxy c92znjl c1uyowuj c1sv9ebm c1xaawq c8z56qe cdgy5g c1bwetql cc2qqmj cgtx35s c1exwrx c1bzfz6c`}>
<HtmlEmbed
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 16 16\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12.5 3 3 12.5M3 3l9.5 9.5\"/></svg>"}
className={`w-html-embed`} />
</DialogClose>
</DialogContent>
</DialogOverlay>
</Dialog>
</Body>
}


      export { Page }
    
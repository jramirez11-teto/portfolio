# Portfolio testing

## Current live-site test plan - 2026-10-29

Target: https://jramirez11-teto.github.io/portfolio/

Use Chrome at 390 x 844 (phone) and 1440 x 900 (laptop). Run the tests below on the live URLs, in both light and dark themes where applicable. Select the theme on Home, then visit the other pages. Also repeat relevant checks by opening index.html directly and through VS Code Live Preview when available; keep those results separate from live results.

For every browser run, record the date, full URL, Chrome version (from Help > About Google Chrome), viewport, theme, and result. Replace Not run with Pass or Fail only after executing the steps. For a failure, keep the original result, describe the fix, and append a dated retest result. No contact form exists, so valid/invalid form validation is not applicable. Contact currently displays approved plain text rather than a clickable email link.

Live availability checked on 2026-10-29 using PowerShell HTTP requests: all five pages returned 200. This checks availability only. Browser execution is still outstanding: the previous Computer Use attempt stopped because it could not reliably determine Chrome's URL. No keyboard, rendering, console, or Lighthouse result is inferred from HTTP responses or source inspection.

| ID | What is tested | Steps on the live site | Expected result | Actual result |
| --- | --- | --- | --- | --- |
| L01 | Live availability | Request index.html, about.html, projects.html, skills.html, and contact.html under the target URL. | All five return HTTP 200. | Pass - 2026-10-29, PowerShell Invoke-WebRequest; all five returned 200. Browser not used. |
| L02 | Home navigation | From index.html, activate Joel Ramirez and each of Home, About Me, Projects, Skills, Contact; return Home after each. | Each opens the correct live page; Home has the current-page indicator. | Not run |
| L03 | About navigation | From about.html, activate Joel Ramirez and all five navigation links; return after each. | Correct destinations; About Me is indicated as current. | Not run |
| L04 | Projects navigation | From projects.html, activate Joel Ramirez and all five navigation links; return after each. | Correct destinations; Projects is indicated as current. | Not run |
| L05 | Skills navigation | From skills.html, activate Joel Ramirez, all five navigation links, and the Projects page link in the content; return after each. | Correct destinations; Skills is indicated as current. | Not run |
| L06 | Contact navigation | From contact.html, activate Joel Ramirez and all five navigation links; return after each. Inspect every page footer for any additional links and test any present. | Correct destinations; Contact is indicated as current. Current footers contain no links. | Not run |
| L07 | Home responsive layout | Open index.html at both specified sizes in both themes. | Readable content; no horizontal overflow; theme control fits. | Not run |
| L08 | About responsive layout | Open about.html at both sizes in both themes. | Text and interest list fit without horizontal scrolling. | Not run |
| L09 | Projects responsive layout | Open projects.html at both sizes in both themes. | Cards, filters, and photos fit; photos retain proportions; no horizontal scrolling. | Not run |
| L10 | Skills responsive layout | Open skills.html at both sizes in both themes. | Headings, lists, and content fit without horizontal scrolling. | Not run |
| L11 | Contact responsive layout | Open contact.html at both sizes in both themes. | Email text wraps when needed; no horizontal scrolling. | Not run |
| L12 | Home keyboard | At both sizes, use Tab and Shift+Tab through Home; Enter on the skip link and every navigation link; Enter and Space on theme control. | Visible focus, logical order, skip reaches main, links work, theme toggles. | Not run |
| L13 | About keyboard | At both sizes, use Tab/Shift+Tab, Enter on skip link and every navigation link. | Visible focus, logical order, skip reaches main, links work. | Not run |
| L14 | Projects keyboard | At both sizes, use Tab/Shift+Tab, Enter on skip and navigation links; Enter/Space on every filter. | Visible focus; correct destinations; all filters usable without a mouse. | Not run |
| L15 | Skills keyboard | At both sizes, use Tab/Shift+Tab and Enter on skip, navigation, and content links. | Visible focus; skip reaches main; all links work. | Not run |
| L16 | Contact keyboard | At both sizes, use Tab/Shift+Tab and Enter on skip and navigation links. | Visible focus; skip reaches main; all links work; plain email text is not a tab stop. | Not run |
| L17 | Mobile menu | On each page at phone width, open/close with click, Enter, and Space; Tab through open links; press Escape; Tab while closed; resize to laptop and back. Repeat in both themes. | Menu state matches aria-expanded; Escape closes and returns focus; closed links are skipped; desktop navigation remains usable. | Not run |
| L18 | Project filters | On Projects, select Individual work, Team work, then All projects using mouse and keyboard in both themes. Inspect pressed states and status text. | Individual shows Over Under; Team shows High Stakes; All shows both; one pressed button; status reports 1, 1, then 2 projects. | Not run |
| L19 | Theme selection and persistence | On Home toggle with mouse, Enter, and Space. Visit all five pages and reload. With no saved choice, change device preference using DevTools rendering emulation; then select a theme and change device preference again. | Theme button only on Home; pressed state matches dark mode; saved selection applies sitewide; device preference used until explicit selection. | Not run |
| L20 | No JavaScript and unavailable storage | Disable JavaScript in DevTools and reload each page; restore it afterward. Separately test where browser storage is unavailable if possible. | Without JS all navigation and both projects remain available in light mode; controls needing JS hidden. Blocked storage does not break the current-page toggle or other features. | Not run |
| L21 | Images, alt text, and public content | On live Projects inspect both photos and their alt attributes in DevTools; check transferred image sizes in Network. Review project and contact links if present. | Both images load, have descriptive alt, and are each below 500 KB. No project destination or mailto link is invented; current projects have no external links and Contact is plain text. | Not run |
| L22 | Console and assets | Open each live page with DevTools Console and Network; reload and exercise menu, theme, and filters. | No site JavaScript exceptions or failed local asset requests. | Not run |
| L23 | Home Lighthouse | On live index.html run DevTools Lighthouse Navigation, Accessibility and Best Practices, Mobile then Desktop, in both themes. Save reports and record each score. | Accessibility at least 90 in every run; review Best Practices findings. | Not run - no measured scores |
| L24 | About Lighthouse | Repeat L23 on live about.html. | Accessibility at least 90 in every run; record actual Best Practices scores. | Not run - no measured scores |
| L25 | Projects Lighthouse | Repeat L23 on live projects.html with All projects selected. | Accessibility at least 90 in every run; record actual Best Practices scores. | Not run - no measured scores |
| L26 | Skills Lighthouse | Repeat L23 on live skills.html. | Accessibility at least 90 in every run; record actual Best Practices scores. | Not run - no measured scores |
| L27 | Contact Lighthouse | Repeat L23 on live contact.html. | Accessibility at least 90 in every run; record actual Best Practices scores. | Not run - no measured scores |
| L28 | Contrast and focus | Inspect normal/hover text, selected filters, buttons, and focus outlines in both themes using DevTools color contrast information; keyboard-focus each control. | Normal text at least 4.5:1; large text and focus indicators at least 3:1 against adjacent backgrounds; focus remains visible. | Not run in browser; earlier calculated palette results preserved below. |

### Execution and retest log

Append one row per executed test/configuration, including separate Lighthouse scores for each page, viewport, and theme. Keep failed rows when adding retests. The table below is intentionally empty until browser testing is executed.

| Date | Test ID | Full URL | Chrome version | Viewport / theme | Pass or Fail | Evidence / scores / issue and fix | Retest reference |
| --- | --- | --- | --- | --- | --- | --- | --- |

## Historical test plans and verification

The dated entries below are preserved as history. Statements about missing pages or features describe those earlier versions; use the current plan above for the present site.

## Current verification

2026-10-19: Home page created. Browser, direct-file, VS Code Live Preview, keyboard, and Lighthouse checks have not been executed. The remaining four pages and interactive features are not implemented. Live deployment has not been verified; no live URL or measured accessibility scores are recorded yet.

For browser runs, record date, URL, browser/version, viewport, and actual result. Use 390 × 844 for phone and 1440 × 900 for laptop. Preserve failures and append retest results.

| ID | What is tested | Steps | Expected result | Actual result |
| --- | --- | --- | --- | --- |
| T01 | Home navigation | Open index.html directly; activate name and Home links. | Both open Home; Home indicates current page. | Not run |
| T02 | All-page navigation | On each of five pages, activate every header, logo, and any footer link. | Correct pages open; current page indicated. | Not run; four pages not built |
| T03 | Home responsive layout | Open Home at both specified sizes. | Text fits; no horizontal scrolling. | Not run |
| T04 | About responsive layout | Open About at both sizes; inspect content and images. | Readable content; images fit; no overflow. | Not run |
| T05 | Projects responsive layout | Open Projects at both sizes; inspect cards and images. | Cards and images fit without overflow. | Not run; page not built |
| T06 | Skills responsive layout | Open Skills at both sizes. | Content fits without overflow. | Not run; page not built |
| T07 | Contact responsive layout | Open Contact at both sizes. | Content fits without overflow. | Not run; page not built |
| T08 | Keyboard and skip link | On each page, use Tab, Shift+Tab, Enter; activate skip link. | Logical order, visible focus; skip link reaches main. | Not run |
| T09 | Mobile menu states | At phone width, open/close with Enter and Space; close with Escape; resize to laptop. | Expanded state accurate; hidden links unfocusable; desktop links usable. | Not run; feature not built |
| T10 | Project filter | Activate every filter with mouse and keyboard; restore All; disable JavaScript. | Selected state clear; correct projects shown; all available without JS. | Not run; feature not built |
| T11 | Assets and public links | Inspect each project image and link and each approved contact link. | Images load with appropriate alt; links reach correct destinations. | Not run; content not added |
| T12 | Browser console | Open every page directly and through VS Code Live Preview if available; inspect console. | No script errors or missing local assets. | Not run |
| T13 | Lighthouse accessibility | Audit every page; record individual scores and browser details. | Each score at least 90. | Not run; no scores measured |
| T14 | Live GitHub Pages | After approved deployment, repeat T01–T13 on verified live URL and record details. | Same behavior under repository path; record actual scores. | Not run; deployment not verified |
| T15 | Color contrast | Calculate normal, hover, focus, and highlight text contrast against actual backgrounds. | Normal text contrast at least 4.5:1; focus at least 3:1. | Pass: 2026-10-19, PowerShell WCAG luminance calculation; green/white 7.13:1, hover/white 9.11:1, green/off-white 6.81:1, hover/off-white 8.71:1, green/pale green 6.81:1, slate/pale green 7.24:1, slate/off-white 7.24:1, navy/off-white 17.06:1. Green focus outlines on the light surfaces exceed 3:1. |

Static checks on 2026-10-19: Pass — exactly one h1 and all local link/asset targets exist. Browser rendering and keyboard behavior remain unverified. Python was unavailable; checks were executed with PowerShell. Git diff whitespace check passed.

About Me update, 2026-10-19: About Me now contains owner-provided education and interests. Home and About Me link to each other; three pages remain unbuilt. Browser viewport, direct-file, keyboard, console, Live Preview, live-site, and Lighthouse checks remain Not run for this update. Earlier results above describe the Home-only version.

Static checks for this update: Pass on both HTML pages for exactly one h1, exactly one current-page indicator, and existing local link and asset targets. Git diff whitespace check passed. These source checks do not verify rendered layout or browser behavior.

Projects update, 2026-10-26: Added the two owner-provided robotics projects and photos; all three existing pages link to Projects. One more owner-provided project is needed to meet the three-project requirement. Skills and Contact remain unbuilt; the mobile menu and project filter remain unimplemented.

Static verification: Pass on Home, About Me, and Projects for exactly one h1, one current-page indicator, and existing local link/script/style/image targets. Both project images are under 500 KB (80,495 and 146,169 bytes). Git diff whitespace check passed. No new text/background color combinations were introduced.

T02, T05, T08, T11, T12, T13, and T14 for this update: Not run in a browser. Direct-file rendering, phone/laptop viewports, keyboard, console, VS Code Live Preview, Lighthouse, and live-site checks remain unverified. No measured Lighthouse scores are claimed. Live testing awaits approved push and verified deployment. Static checks above do not establish rendered layout or accessibility behavior.

Skills update, 2026-10-26: Added owner-provided strengths and workshop equipment to skills.html, with navigation on all four existing pages. T02 source check: Pass, all local targets exist and all pages link to Skills. Static checks: Pass, exactly one h1 and one current-page indicator on each page. Git diff whitespace check passed. Styling reuses existing colors.

T02 browser navigation, T06 phone/laptop rendering, T08 keyboard, T12 console/direct-file/Live Preview, T13 Lighthouse, and T14 live-site checks for this update: Not run. Browser automation inventory exposed no connected browser session; native Edge windows are present, but native UI tests were not executed. No viewport, keyboard, console, or Lighthouse results are claimed. Contact and the planned interactive features are still unbuilt. Skills changes await review and push approval.

Verification correction: The initial diff check flagged an extra blank line at the end of README.md. Removed that line and the unintended UTF-8 BOM; the final diff check passed. The earlier whitespace Pass statement refers to the corrected result.

Contact update, 2026-10-26: Added contact.html with the owner-approved text exactly as requested: joelramirez9000[at][gmale][dot][com]. It is plain text; no mailto destination was inferred. Added Contact navigation to the other four pages and a wrapping rule for narrow screens.

Static checks: Pass on all five pages for one h1, one current-page indicator, all five navigation destinations, and existing local assets/links. Exact contact text check and git diff whitespace check passed. Existing text/background colors are reused.

T02 browser navigation, T07 phone/laptop layout, T08 keyboard, T12 console/direct-file/Live Preview, T13 Lighthouse, and T14 full live-site tests for this update: Not run. Browser checks were not executed; no rendering or measured Lighthouse results are claimed. Contact is not yet pushed. Earlier HTTP verification on 2026-10-26 confirmed Home and Skills returned 200 and GitHub's latest Pages deployment succeeded; this was an HTTP check, not a browser test.

JavaScript update, 2026-10-26: Implemented mobile navigation below 48rem and project contribution filters. Native buttons support Enter/Space; Escape closes the menu and restores focus. Resize resets navigation for the new layout. The hidden attribute removes closed links and filtered cards from display/tab order. Controls start hidden until JavaScript initializes; all navigation and project content remain visible without JavaScript.

| ID | What is tested | Steps | Expected result | Actual result |
| --- | --- | --- | --- | --- |
| T16 | Menu state logic | Execute main.js in Node VM with mock DOM; click menu, send Escape, change media query in both directions with focus in navigation. | Accurate expanded/hidden state; focus restored; desktop navigation visible. | Pass, 2026-10-26, Node VM mock DOM. Not a browser/keyboard test. |
| T17 | Filter state logic | Execute script with mock project cards; choose Individual, Team, then All. | Matching cards visible, one selected button, accurate status count. | Pass, 2026-10-26, Node VM mock DOM. |
| T18 | Page-specific guards | Execute script without project filters and with no matching elements. | No exceptions. | Pass, 2026-10-26, Node VM mock DOM. |
| T19 | Shared markup | Check all HTML files for one h1, one navigation target, matching menu controls, deferred script, and existing local targets. | All five pages pass. | Pass, 2026-10-26, PowerShell source checks. |

Git diff whitespace check: Pass. New button text colors reuse combinations measured in T15: green/white, green/pale green, white/green and white/darker green; underlined bold text distinguishes selected filters beyond color.

T02, T03-T08, T09-T10 browser execution, T12 direct-file/Live Preview console, T13 Lighthouse and T14 live-site checks for this update: Not run. Actual phone/laptop rendering, Tab/Shift+Tab/Enter/Space/Escape operation, no-JavaScript rendering, and browser console behavior remain unverified. Browser automation inventory previously had no connected session; native UI checks were not executed. No measured Lighthouse scores are claimed. Push awaits owner review and approval.

Theme update, 2026-10-26: Added a Dark mode toggle to every page, available independently of the mobile menu. Device preference is the default; explicit choices use localStorage with guarded reads/writes. No JavaScript leaves the original light theme.

| ID | What is tested | Steps | Expected result | Actual result |
| --- | --- | --- | --- | --- |
| T20 | Theme logic | Execute shared script in Node VM mock DOM with light/dark device settings, saved/invalid preferences, toggle twice, and blocked storage. | Correct initial palette, accurate pressed state, user choice retained after system change, no storage exceptions. | Pass, 2026-10-26, Node VM mock DOM; not browser testing. |
| T21 | Dark contrast | Calculate WCAG relative luminance for dark text, secondary text, links, hover, highlights and selected filters. | Text >=4.5:1; focus >=3:1. | Pass, 2026-10-26: text/background 17.06, text/surface 13.98, secondary/background 12.02, secondary/highlight 9.24, green/surface 10.42, green/background 12.71, green/highlight 9.77, hover/highlight 11.32, selected text/green 12.71, selected text/hover 14.73. |
| T22 | Theme browser behavior | At 390x844 and 1440x900 on all pages, toggle using click/Enter/Space, navigate/reload, change system preference, test blocked storage and direct-file opening. | Readable layout, visible focus, preference retained when supported, working menu and filters in both themes. | Not run; browser, keyboard, storage persistence across actual pages, console and Lighthouse remain unverified. |

Static and whitespace checks are recorded below after execution. Full live-site testing remains outstanding. No measured Lighthouse scores are claimed.

Theme static verification: Pass, all five pages have exactly one theme control and one h1. Git diff whitespace check passed.

Home-only theme revision, 2026-10-26: Owner requested one theme button on Home with the saved choice applied across all pages. Moved theme initialization outside the button guard. Node VM mock DOM checks: Pass for dark/light selection on Home, shared choice on all four button-free pages, and blocked storage. Actual browser navigation/persistence, phone/laptop, keyboard, console and Lighthouse checks remain Not run. Previous all-page button expectations in T22 are superseded: test the control on Home and the resulting theme on every page.

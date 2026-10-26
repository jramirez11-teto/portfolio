# Portfolio testing

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

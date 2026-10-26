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

# Portfolio project instructions

## Purpose and scope

Build a public personal portfolio for the repository owner that showcases their background, projects, skills, and experience. This is a class assignment focused on understandable HTML, CSS, JavaScript, responsive design, accessibility, testing, and GitHub Pages deployment.

Work on one small, requested task at a time. Read the existing files before editing, keep changes focused, and explain the result so the owner can review and explain the code. Do not build the entire site unless asked.

## Pages and content

Use five separate pages with consistent navigation linking to every page:

- `index.html`: Home, with a brief introduction and links to the other pages.
- `about.html`: About Me, with personal background, education, and interests.
- `projects.html`: At least three projects, each with a description, image or screenshot, and a relevant link when available. Class projects count.
- `skills.html`: Technical skills and an honest description of proficiency.
- `contact.html`: Owner-approved public contact information, such as an email link and professional profiles.

Use real, owner-provided content. Do not invent education, experience, skills, projects, contact details, or accomplishments. Ask for missing information when it is needed to complete a page. Do not treat placeholder text or empty sections as finished work.

The repository and website are public. Never include a home address, phone number, credentials, API keys, passwords, tokens, or private information. Confirm which email address the owner wants public before adding it.

## Design direction

Use this initial direction unless the owner requests a change; update this file when the design changes:

- Style: clean, welcoming, and professional, with generous spacing, simple project cards, subtle borders, and consistent page layouts.
- Colors: off-white background `#F8FAFC`, white surfaces `#FFFFFF`, dark navy text `#0F172A`, slate secondary text `#475569`, and deep green accent `#166534`. Use green sparingly for links, primary buttons, and current-page indicators; use darker green `#14532D` for hover states and pale green `#F0FDF4` for subtle highlights. Keep most surfaces neutral for a professional appearance. Use white text on solid green buttons and deep green text on pale green highlights. Keep links underlined and current-page indicators distinct beyond color alone. Use deep green for visible focus outlines against light surfaces, with enough offset to separate the outline from the control.
- Fonts: a local system sans-serif stack such as `system-ui, -apple-system, "Segoe UI", sans-serif`. No font download is needed.
- Layout: a centered content container, readable text widths, and a mobile-first layout. Stack cards on narrow screens and use columns when space permits.
- Keep link text recognizable, focus indicators visible, and motion modest. Respect `prefers-reduced-motion`.

Check contrast for actual text/background combinations, including hover and focus states.

## Technical rules and file organization

- Use plain HTML5, CSS, and JavaScript only. No backend, database, login, frameworks, component libraries, build tools, npm, React, Vue, Tailwind, or Bootstrap.
- The complete site must work by double-clicking `index.html`, without installation, compilation, or a local server.
- Use one shared external stylesheet at `css/styles.css` and a shared external script at `js/main.js`, loaded with `defer`. Avoid inline styles, inline event handlers, and unnecessary dependencies.
- Store images in `images/`, use descriptive lowercase filenames, and keep each image under 500 KB.
- Use relative paths for internal pages, scripts, styles, and images. Do not use root-relative paths such as `/images/photo.jpg`, which break under the GitHub Pages `/portfolio/` path.
- Avoid runtime HTML fetching, module imports, or other features that require an HTTP server to function.
- Prefer short, readable functions and descriptive names. Add comments where they clarify intent. The owner must be able to explain any JavaScript used.
- Do not add analytics, external services, or dependencies without a concrete project need and owner direction.

## HTML and accessibility

- Set the document language, a unique page title, character encoding, and viewport metadata on every page.
- Use semantic elements such as `header`, `nav`, `main`, `section`, and `footer` where appropriate.
- Include exactly one `h1` per page and a logical heading hierarchy.
- Provide a skip link, visible keyboard focus, and a current-page navigation indicator using `aria-current="page"`.
- Use native links for navigation and native buttons for actions. Label every form control.
- Every image must have an `alt` attribute: meaningful text for informative images and empty alt text for decorative images.
- Ensure links, buttons, and form controls work with the keyboard and that layouts do not cause horizontal scrolling on phone or laptop screens.
- Aim for a Lighthouse Accessibility score of at least 90 on every page. Record actual scores rather than assuming compliance.

## JavaScript features

Implement at least two working interactive features:

1. A responsive mobile navigation menu that opens and closes. Use a button with an accessible name, `aria-expanded`, and `aria-controls`; keep hidden links out of the tab order. Support keyboard operation and Escape to close, and keep desktop navigation usable after resizing.
2. A project category filter as the initial second feature. Use accessible buttons, show the selected state, and allow visitors to restore all projects. Keep all project content available if JavaScript is unavailable.

If the owner prefers a different second feature, update this plan. A contact form is optional: it cannot send messages without a backend. If added, validate valid and invalid input with JavaScript, explain its limitations, and direct visitors to an email link. Never display a false message claiming an email was sent.

Guard page-specific JavaScript so a missing element on another page does not cause console errors.

## Task and Git workflow

1. Read this file and inspect the relevant existing code.
2. Implement the requested task with a small, understandable change.
3. Run relevant checks, inspect the diff, and report what changed, what was verified, and any remaining limitations.
4. Give the owner an opportunity to review the work. For website development tasks, follow the assignment workflow: commit completed changes with a clear, specific message, then request the owner's approval before pushing to GitHub.

Do not include unrelated changes or overwrite the owner's work. Do not amend history, use `git reset` to undo completed work, or force-push. Use a revert commit when an undo is requested. Never fabricate or backdate commits to simulate work over multiple days.

## Testing and verification

After each relevant change, check the affected behavior locally, at phone and laptop widths, and with the keyboard. Test using a direct file opening as well as VS Code Live Preview when available. Check the browser console for errors.

Maintain `TESTING.md` with at least 12 test cases. Each case must include an ID, what is tested, steps, expected result, and actual result. Mark unexecuted checks as `Not run`; record `Pass` or `Fail` only after execution. Cover:

- Every navigation link on every page, including the logo/home link and any footer navigation.
- All five pages at phone and laptop sizes, including overflow and image sizing.
- Every JavaScript feature and its relevant states; test both valid and invalid input if a form exists.
- Keyboard navigation with Tab, Shift+Tab, and Enter on every page, plus Space and Escape where relevant.
- Lighthouse Accessibility results for every page.
- Project links, images, and public contact links.

Run the full test plan on the live GitHub Pages site, not only locally. Record the tested URL, date, viewport/browser details, and measured Lighthouse scores. Preserve failed results, fix the issues, and append retest outcomes. Never claim a browser, live-site, keyboard, or Lighthouse test was run if it was not; state any access or tooling limitation.

## Deployment and documentation

Deploy as a static GitHub Pages site from the `main` branch and repository root. The expected URL for the current repository is `https://jramirez11-teto.github.io/portfolio/`; verify it before documenting it as live. Do not assume Pages is enabled or deployment succeeded merely because a push succeeded.

Keep `README.md` current with the project description, verified live URL, local viewing instructions, and any credits or acknowledgments. Local instructions should explain that visitors can open `index.html` directly.

When requested, help prepare the assignment's 1–2 page report with repository and live links at the top, features, real challenges and solutions, a real example of a Codex mistake and correction, and phone/laptop screenshots. Do not invent experiences or screenshots. Keep JavaScript understandable enough for the owner to explain during the three-minute demo.

## Owner-approved theme addition

Show the theme button only on Home; apply the saved theme across all five pages.

2026-10-26: Add a light/dark toggle on phone and desktop. Preserve the existing light palette. Dark mode uses navy background #0F172A, slate surfaces #1E293B, off-white text #F8FAFC, secondary text #CBD5E1, green links/focus #86EFAC, hover green #BBF7D0, and highlights #143326. Follow the device preference until the visitor selects a theme; remember the choice when browser storage is available.

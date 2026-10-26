# Joel Ramirez’s portfolio

A personal portfolio for Joel Ramirez, a Mechanical Engineering Technology student at NJIT. Built with plain HTML, CSS, and JavaScript.

## View locally

Double-click `index.html` to open the Home page in a browser. No installation or server is needed.

## Progress

The Home page introduces Joel and his interests using a restrained green palette. The About Me page covers his education and interests. The Projects page presents his Over Under robot and High Stakes intake mechanism with owner-provided photos. The Skills page covers teamwork, hands-on problem solving, and workshop tools. Contact displays the owner's approved email text exactly as supplied. All five pages share navigation and styling. A third project is still needed for the assignment.

JavaScript adds a mobile Menu button below 48rem, with Escape to close and navigation that adjusts on resize. The Projects page has All projects, Individual work, and Team work filters. Without JavaScript, navigation and all project cards remain visible. These features use the shared deferred script without dependencies.

Home has a single Dark mode toggle for phone and desktop. Its saved choice applies to all five pages. Each page follows the device preference until a visitor chooses a theme, then reads that choice from browser storage when available. If storage is blocked, the toggle works for the current page. Without JavaScript, the site uses its light palette.

The Home and Skills URLs responded successfully on 2026-10-26 at [the live site](https://jramirez11-teto.github.io/portfolio/). The interactive features have not yet been deployed. Full live browser testing remains outstanding; see `TESTING.md`.

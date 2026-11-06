# Joel Ramirez’s portfolio

A personal portfolio for Joel Ramirez, a Mechanical Engineering Technology student at NJIT. Built with plain HTML, CSS, and JavaScript.

## View locally

Double-click `index.html` to open the Home page in a browser. No installation or server is needed.

## Progress

The Home page introduces Joel and his interests using a restrained green palette, with an owner-supplied NJIT Highlanders logo on the right on wide screens. The About Me page covers his education and four expandable interests: Robotics, Music, Video Games, and Anime. Native details/summary elements reveal owner-supplied photos and titles without JavaScript. The Projects page presents his Over Under robot and High Stakes intake mechanism with owner-provided photos, plus an individual Onshape pulley model from his Intro to Engineering Design college course. The pulley project credits guidance from Getting Started with Onshape, Fifth Edition and includes an owner-provided screenshot of the model. The Skills page covers teamwork, hands-on problem solving, and workshop tools, with a plain tool list and larger owner-supplied images in a separate right column on wide screens, stacked below the text on smaller screens. Contact displays the owner's approved email text exactly as supplied. All five pages share navigation and styling.

JavaScript adds a mobile Menu button below 48rem, with Escape to close and navigation that adjusts on resize. The Projects page has All projects, Individual work, and Team work filters. Without JavaScript, navigation and all project cards remain visible. These features use the shared deferred script without dependencies.

Every page has a Dark mode toggle for phone and desktop, showing a crescent moon in light mode and a sun in dark mode. Its saved choice applies to all five pages. Each page follows the device preference until a visitor chooses a theme, then reads that choice from browser storage when available. If storage is blocked, the toggle works for the current page. Without JavaScript, the site uses its light palette.

The Home and Skills URLs responded successfully on 2026-10-26 at [the live site](https://jramirez11-teto.github.io/portfolio/). The interactive features have not yet been deployed. Full live browser testing remains outstanding; see `TESTING.md`.

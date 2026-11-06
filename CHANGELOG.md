# Changelog

## 1.8.2 - 2026-11-06
- Fixed: with a downloaded language pack (for example Japanese) receipt reading stayed on "Reading receipt…" forever; it now reads, and a stuck start ends with a message after 45 seconds
- Yen receipts: amounts after ¥ or before 円 are found, currency JPY is set, and dates like 2024/11/12 are recognised

## 1.8.1 - 2026-11-06
- Receipt form: the whole date is visible again (narrower padding in the date and category fields)

## 1.8.0 - 2026-11-06
- Short welcome card and a spotlight tour on a brand-new install (replay any time: ☰ menu > Show tutorial); the first screen is no longer the bank details
- Your name and bank details are asked when you generate the PDF (only if missing), then the PDF continues
- Country field: type to search (accents ignored)
- PDF layout: new Auto-small (fewest pages, smaller cells) and Custom (columns × rows, 1 to 30); captions shrink in small cells
- Categories: icons in the category picker, press-and-hold drag to reorder, logical default order (transport, meals, hotel, other) applied once, Reset to default order button

## 1.7.0 - 2026-11-06
- Close button (X) on every pop-up; forms with unsaved changes ask before discarding
- The receipt form keeps Save and Delete always visible at the bottom; rarely used options are under More options
- Report: page 1 now looks like the company template; with more than 20 receipts, page 1 has no signature and says the table continues, later pages carry a short header and the signature and total are on the last page
- You can edit the file name before the PDF or ZIP is created (suggested: YearMonth_TripName)
- When online, the app tells you if a new version is available (popup at each start, a refresh button and the new version number in the top bar)
- Settings > Appearance: switch all icons to emoji and back

## 1.6.0 - 2026-11-06
- Icons instead of emojis everywhere in the app; categories can be given any of 44 icons (existing categories keep the closest matching icon)
- Two sample trips (202610 Zürich and 202611 Espoo) with fake receipts marked SAMPLE come with a fresh install; delete them any time in My trips

## 1.5.0 - 2026-11-06
- Home page has four big buttons: Add receipt, Last trip, New trip, My trips
- App icon with a black outline (reinstall the app to see it on the home screen)

## 1.4.2 - 2026-11-06
- A one-time "What's new" window appears after the app has been updated

## 1.4.1 - 2026-11-06
- New trip: name, dates and country are asked together

## 1.4.0 - 2026-11-06
- Photo editor: page edges are found automatically right after taking a photo; corners and sides snap to strong edges while dragging (can be switched off)
- Round magnifier above the finger while dragging a corner or side
- New "Mark total" button in the editor: draw a box around the total and only that box is read for the amount
- Warning before saving a receipt whose amount and date already exist in the same trip
- Trip status (Open, Submitted, Reimbursed), "Mark trip as submitted" after making the PDF, trip dates and country (preselects the currency and the reading language)
- Split / exclusions: paid for colleague, personal or partial (amount or percent); report PDF and statistics count only the claimed amount
- Backup can be protected with a standard ZIP password
- New Statistics page: total per trip, per category and per month, with year and trip filters
- PDF layout setting: 2 x 2 (default), 2 x 3, 1 x 2, 1 per page or Auto, plus "Print on its own page" per receipt

## 1.3.0 - 2026-11-05
- Faster receipt reading: the language follows the currency (e.g. JPY reads Japanese, USD English)
- For EUR and CHF the app remembers the last detected language and reuses it; if nothing is found it retries with all chosen languages

## 1.2.1 - 2026-11-05
- Phone bottom bar: app colors set to black (reinstall the app once to see it)

## 1.2.0 - 2026-11-05
- New home page: add a receipt to your last trip, open your trips or start a new one
- Trips list is now its own page, newest first, with dates, receipt count and total
- Photo editor simplified: drag a corner to fix perspective, drag a side to crop
- Categories have icons; choose Other to type your own; edit categories and icons in Settings
- Reads receipts offline (amount, currency, date, category guess); suggestions only
- Language packs page: English, German, French and Italian built in, ~100 more downloadable
- Backup: save everything as one ZIP and load it on another phone (replace or merge)
- Export a ZIP with the summary PDF and every receipt as a separate JPEG
- Pop-ups now say "Insert" instead of the web address
- Bottom bar of the phone follows the chosen theme

## 1.1.0 - 2026-11-05
- Top bar with app name, version and a menu button for navigation
- Settings reorganised: a short menu with a separate page for each group
- New Appearance page: color themes and light / dark mode
- Photo editor: perspective correction (drag the 4 corners)
- Add PDF and image files as receipts (e.g. a train ticket from your email)
- New receipts reuse the currency of the last receipt in the trip
- Version number on the opening screen

## 1.0.0 - 2026-11-05
- Renamed to Receipt Archive
- Version number and changelog in Settings
- Licensed under GPL-3.0
- Published on GitHub Pages so it can be installed on phones

## 0.3.0 - 2026-11-05
- Privacy information and license in Settings

## 0.2.0 - 2026-11-05
- Photo editor: crop, rotate and straighten after taking a picture
- Install button in Settings
- App icon and quick opening animation
- Layout fixes for phone screens

## 0.1.0 - 2026-11-05
- First version: receipts with photos, automatic exchange rates with manual override
- One-click PDF in the company format (report page plus numbered receipt scans)
- Settings for bank details, header fields and signature

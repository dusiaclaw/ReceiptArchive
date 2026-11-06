# Receipt Archive

Installable web app (Android and iPhone) to photograph receipts on business trips and generate, in one tap, the PDF expense report: a report page in the company format followed by the numbered receipt scans.

**Privacy:** all data (bank details, receipts, photos) stays in the browser storage of your own device. There is no server. Receipt reading (OCR) runs on the phone. Online requests: exchange rates (frankfurter.dev, currency and date only) and, only if you choose to download an extra language pack, that language file.

## Features (1.4.0)
Page-edge auto-frame with snapping and magnifier, "Mark total" box for the amount, duplicate warning, trip status / dates / country, split and exclusions, password-protected backup (standard ZIP password), statistics page, selectable PDF receipt layouts (2x2, 2x3, 1x2, 1 per page, Auto).

## Install on your phone
Open https://dusiaclaw.github.io/ReceiptArchive/ in Chrome (Android) and use **Settings → Install app**, or the ⋮ menu → *Install app*. On iPhone use Safari → Share → *Add to Home Screen*.

## Updating
Edit `APP_VERSION` and `CHANGELOG` in `index.html` and `CHANGELOG.md` for each release. The app updates on the next online start.

## License
GPL-3.0, see [LICENSE](LICENSE). Includes [jsPDF](https://github.com/parallax/jsPDF) (MIT), [PDF.js](https://github.com/mozilla/pdf.js) (Apache-2.0), [Tesseract.js](https://github.com/naptha/tesseract.js) (Apache-2.0, files in `ocr/`) and [fflate](https://github.com/101arrowz/fflate) (MIT).

## OCR files
`ocr/` holds Tesseract.js, its WebAssembly core (~8 MB) and the built-in language files for English, German, French and Italian (~6.6 MB). Extra languages can be hosted in `ocr/lang/` as `<code>.traineddata.gz` and selected in Settings → Language packs.

# Receipt Archive

Installable web app (Android and iPhone) to photograph receipts on business trips and generate, in one tap, the PDF expense report: a report page in the company format followed by the numbered receipt scans.

**Privacy:** all data (bank details, receipts, photos) stays in the browser storage of your own device. There is no server. The only online request is the exchange rate lookup (frankfurter.dev, ECB rates: currency and date only).

## Install on your phone
Open https://dusiaclaw.github.io/ReceiptArchive/ in Chrome (Android) and use **Settings → Install app**, or the ⋮ menu → *Install app*. On iPhone use Safari → Share → *Add to Home Screen*.

## Updating
Edit `APP_VERSION` and `CHANGELOG` in `index.html` and `CHANGELOG.md` for each release. The app updates on the next online start.

## License
GPL-3.0, see [LICENSE](LICENSE). Includes [jsPDF](https://github.com/parallax/jsPDF) (MIT).

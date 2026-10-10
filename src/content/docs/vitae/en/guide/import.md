---
title: "Move all your old bills into the app at once"
description: "Bring bills from other ledger apps, banks, or your own spreadsheet into the app in one go. CSV and Excel supported, with automatic column mapping, categorization and de-duplication."
group: "finance"
order: 5
---

Import bills from other ledger apps, banks, or your own spreadsheet into the app. Both <strong>CSV</strong> and <strong>Excel (.xlsx)</strong> are supported, with automatic column mapping, categorization and de-duplication. Not sure how to organize your data? Download the template below and fill it in.

> <strong>Bill Import Template.csv</strong>: Includes the header row and 6 sample rows — fill it in for zero-config recognition. [Download Template](/vitae/downloads/hiwik-import-template.csv)

## Where to import

<strong>Settings → Bill Import → Import Bills</strong>. It opens a dedicated import page with three steps, top to bottom:

1. <strong>Download the template</strong> — if you're not sure how to organize your data, grab this template and fill it in.
2. <strong>Choose your data file</strong> — pick the CSV / Excel file you want to import.
3. <strong>Start parsing</strong> — tap the bottom button to enter the preview & confirm page.

<div class="shots">
<figure><img src="/vitae/images/screenshots/import-entry.png" alt="Entry: Settings → Finance → &quot;Import Bills&quot;" loading="lazy"><figcaption>Entry: Settings → Finance → "Import Bills"</figcaption></figure>
<figure><img src="/vitae/images/screenshots/import-steps.png" alt="Import page: ① download template → ② choose file → ③ start parsing" loading="lazy"><figcaption>Import page: ① download template → ② choose file → ③ start parsing</figcaption></figure>
</div>

## Supported files

| Type | Notes |
|---|---|
| CSV | Comma-separated. UTF-8 / GB18030 / UTF-16 encodings are auto-detected. |
| Excel | `.xlsx` (the old `.xls` is not supported — save as .xlsx in Excel first). |

### Your data can come from

- <strong>The app's template</strong>: fill in the downloaded template for zero-config recognition.
- <strong>Exports from other ledger apps</strong>: export to CSV / Excel.
- <strong>Bank / payment statements</strong>: export to CSV / Excel.
- <strong>Your own spreadsheet</strong>.

> Non-standard column names are fine: if a column can't be recognized, you'll be asked to <strong>manually point out which column is the date and which is the amount</strong> — it imports just the same.

## Recommended: use the template

The most reliable way is to <strong>download the template first</strong>, fill in your data, then import. The template columns are:

| Column | Required | Notes | Example |
|---|---|---|---|
| Transaction time |  | Date, or date + time | `2026-05-01 12:20` |
| Income / Expense |  | Enter "Expense" or "Income" | Expense |
| Amount |  | A positive number; direction is set by the Income/Expense column | `32.50` |
| Category |  | Top-level category name; leave blank to auto-guess | Food / Transport / Shopping… |
| Account |  | Which wallet paid for it | WeChat / Bank |
| Note |  | What it was for, or extra remarks | Weekday lunch · split with a colleague |

### Key points

- <strong>Always enter amounts as positive numbers</strong> — whether it's an expense or income is decided by the Income/Expense column, so don't use a minus sign.
- <strong>Time</strong> accepts many formats: `2026-05-01 12:20:00`, `2026/05/01`, `2026年05月01日` all work, interpreted in Beijing time.
- <strong>Category can be left blank</strong> — the app will guess the category from the Note, and you can refine the uncertain ones with AI.

## Mapping from other exports

No need to rename columns — the app recognizes these common names automatically:

- <strong>Date column</strong>: transaction time / time / date / record date / bill time / date / time
- <strong>Amount column</strong>: amount / money
- <strong>Direction column</strong>: income/expense / type; or separate "Income" and "Expense" columns; or a signed amount
- <strong>Description column</strong>: description / item / title / counterparty / memo
- <strong>Category column</strong>: category / class / top-level category
- <strong>Account column</strong>: account / payment method / wallet
- <strong>Note column</strong>: note / memo / description

> As long as the file has a <strong>date</strong> and an <strong>amount (or separate income/expense columns)</strong>, it can be imported.

## What the preview page shows

After you tap "Start parsing", the preview page shows:

- <strong>Scan results</strong>: four counts — parsed rows, importable, already exists (skipped), and invalid (skipped).
- <strong>Categories unique to the imported data</strong>: categories in your file that the app doesn't have yet (e.g. "Pets", "Baby") are listed and can be created as your own custom categories with one tap; turn the switch off and those records fall back to "Other Expense".
- <strong>Refine with AI</strong>: for records the auto-categorizer isn't sure about, tap to re-categorize with AI.
- <strong>Sample preview</strong>: a few rows are shown so you can check the format.

Once everything looks right, tap "Start Import" at the bottom.

## Automatic de-duplication

The app uses <strong>time + amount + title</strong> to identify the same transaction:

- Duplicate rows within the file, and <strong>records already in your ledger</strong>, are skipped automatically and counted as "already exists".
- So <strong>re-importing the same file won't create duplicates</strong>, and resuming an interrupted import is safe.

> Large files are fine too: parsing, preview and writing all run in the background without freezing the UI, and writes are saved in batches with a progress indicator.

## Will my bills be uploaded?

Parsing, de-duplication and rule-based categorization all happen <strong>on your device</strong>. Only when you actively tap "Refine with AI" are the <strong>title / note</strong> of the uncertain records sent to the categorization service — never the amount, account or other sensitive fields.

## FAQ

### The income/expense direction is reversed after import?

Check the Income/Expense column. Enter amounts as positive numbers and let the Income/Expense column express the direction — don't use both a minus sign and "Expense".

### It says "header not found" or "file encoding not recognized"?

Usually the file was re-edited or has an unusual encoding. Re-organize it with the template, or "Save as CSV UTF-8 / xlsx" in Excel and try again.

### Can the old `.xls` format be imported?

No — please save as `.xlsx` in Excel.

### What if a category was guessed wrong?

Before importing, tap "Refine with AI" on the preview page; after importing, you can also edit the category of each entry in the ledger.

## Still have questions?

If you run into trouble importing, email us — we respond within 7 business days.

hongsikunjob@gmail.com

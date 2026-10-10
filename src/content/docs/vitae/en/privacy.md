---
title: "Privacy Policy"
updated: "October 9, 2026"
---

## Overview

Vitae (Chinese name 平生, hereafter 'this App' or 'we') is a personal life tracker for individuals, covering ledger, assets, health, fitness and todos. We take your privacy seriously and commit that we <strong>do not collect account information, do not store any of your business data on our own servers, and do not sell or share your data with any third party</strong>.

This policy applies to the 'Vitae' app published by developer sikunhong on iOS / iPadOS / macOS. It does not apply to any third-party websites or services.

## What we collect

This App <strong>does not require account registration</strong> and does not proactively collect any of the following:

- Phone number, email, name, ID number, address or any other personal identifiers
- Device identifiers (IDFA, IDFV), advertising IDs or push tokens for tracking purposes
- Contacts, location, calendar, clipboard contents
- Personally identifiable browsing behavior, click tracking, or any data used to build a user profile or serve ads (anonymous, aggregate usage analytics are described in the 'Usage Analytics' section below)

All 'business data' you create in the app (ledger entries, asset accounts, training records, todos, diet logs, health metrics, etc.) <strong>lives only on your device and in your private iCloud database</strong>. See the next section for details.

## Usage Analytics (Anonymous)

To understand which features are actually used and focus our improvements where they matter, this App collects only <strong>anonymous, aggregate</strong> usage statistics — never any of your business data:

- <strong>Collected automatically</strong>: launches / sessions / retention, device model, OS version and app version — all anonymous, device-level aggregate stats not tied to your identity.
- <strong>Feature events</strong>: e.g. how often actions like 'logged an entry', 'used AI recognition' or 'completed a todo' occur, used only to understand feature usage.
- <strong>Your content is never reported</strong>: amounts, account names, notes, food names, todo titles or any text you enter are <strong>never sent</strong>; where a count is involved, only a range (e.g. 2–5, 6–20) is reported, never the exact number.

These anonymous statistics use no IDFA / advertising identifiers, builds no cross-app user profile, and is not used for advertising. These anonymous statistics serve only to improve the product itself and are never sold or shared with any third party.

## Data Storage & Sync

All data you create in Vitae is stored in the following locations:

- <strong>Local device</strong> — Saved on your device through Apple's SwiftData framework, inside the App Group container
- <strong>iCloud Private Database</strong> — When you enable iCloud sync in Settings, data syncs via Apple CloudKit to the <strong>private database under your own Apple ID</strong>, which the developer has no access to

We <strong>do not run any servers</strong> that store your business data. Your data is entirely managed by you and Apple's iCloud infrastructure. Even if this App is discontinued, your data remains intact on your device and in iCloud.

## Permissions & Usage

This App requests the following permissions on demand when you first use the related feature. You can revoke any of them anytime via iPhone Settings → Vitae, or macOS System Settings → Privacy & Security.

### Camera (NSCameraUsageDescription)

Used to take photos of receipts / screenshots for AI recognition and auto-entry into your ledger. We never access the camera in the background.

### Photo Library

Used to pick receipt screenshots, exercise illustrations or account proof images. The app only accesses images you explicitly select — it does not scan your entire library.

### Health (HealthKit · read / write)

The health module reads weight, sleep and activity data to render the health dashboard and trends. Write access is only used when you manually record a weight back into the Health app. The exact scope is governed by Apple's HealthKit permission prompts and can be fine-tuned in Health → Data Access & Devices.

### Microphone + Speech Recognition

Only used when you actively use 'voice todo'. Audio is transcribed by Apple's on-device Speech framework — the resulting text is used to create a todo and the audio itself is not saved.

### Notifications

Used for todo reminders, subscription-renewal reminders and other local notifications. <strong>Never used for marketing push.</strong>

## Network Requests

This App does not make implicit background network calls. It only reaches the network in the following clearly defined scenarios:

### AI Vision (receipts / food photos)

When you actively tap 'Scan Receipt' or 'AI Recognize Food', the selected image is sent to a third-party AI vision service for one-off recognition. Images <strong>are not persisted by this App</strong>; the structured result (amount/category or food name/nutrition) is written into your local SwiftData store.

### AI Reflections (weekly / monthly)

When you actively generate a reflection in the 'Self Know' module, the app sends a <strong>structured text summary</strong> (no raw attachments, no images) of that week or month's ledger, training, diet and todo activity to a third-party LLM service. Explicit consent is required on first use; no related requests are made before consent. A daily call cap is enforced to prevent abuse.

### Market & FX Quotes

If you use the investment-related features, the app requests public stock / fund / ETF / FX quotes from third-party data sources. The requests contain only ticker symbols — no personal information.

### CloudKit Sync

When iCloud sync is on, SwiftData talks directly to your iCloud via Apple CloudKit, encrypted end-to-end by Apple. The developer is never in the middle.

## Third-Party Services

The complete list of third-party services integrated in this App (nothing is hidden):

- <strong>Apple CloudKit</strong> — iCloud data sync (you can turn it off)
- <strong>Apple HealthKit / Speech</strong> — System frameworks; data never leaves the Apple ecosystem
- <strong>Third-party AI vision service</strong> — Receipt and food-photo recognition, only called when you trigger it
- <strong>Third-party LLM service</strong> — Powers AI Reflections, only called when you explicitly consent and trigger it
- <strong>Public market data APIs</strong> — Only called when you use the investment features

We commit: <strong>no ad SDKs, no marketing push SDKs, no social-share SDKs</strong>. No third-party analytics or tracking services are integrated; usage data is limited to the anonymous aggregate statistics described above. This App will never sell, rent or exchange your data with any third party.

## AI Data Use & Disclaimer

For all AI features (receipt capture, food recognition, AI Reflections, etc.), we make the following commitments:

- <strong>No retention of raw input</strong> — Anything you input or upload to AI (screenshots, text, aggregated summaries) is <strong>not stored on our servers</strong> and is discarded as soon as the request completes
- <strong>Used only for that one request</strong> — The data is used only to fulfill the specific recognition / generation you triggered; the result goes back to you only and is not used for anything else
- <strong>Third-party providers do not train on it either</strong> — Per our agreements, the third-party AI providers we work with will not use your request data for model training or any other purpose

Please also note: <strong>You are responsible for ensuring that whatever you input or upload to AI is lawful, compliant, and does not infringe on others' rights</strong> (portrait rights, copyright, etc.). Any legal liability or loss arising from your input is yours alone and has nothing to do with Vitae.

## Minors

This App is not designed for children under 13 and does not knowingly collect any personal information from them. If you believe a minor has provided personal information without guardian consent, please contact us via the email below and we will delete it immediately.

## Data Deletion & Access

As the sole owner of your data, you have full control:

- <strong>Delete individual records</strong> — Long-press or swipe to delete any ledger, asset, training, todo or diet entry directly in the app
- <strong>Delete all local data</strong> — Uninstalling Vitae wipes all local data on this device
- <strong>Export your data</strong> — Settings → General → Export Data exports selected modules and time ranges as a JSON file (membership feature). The file is created on your device and never passes through our servers; once you send it to a third party (such as an AI assistant), that party's privacy policy applies
- <strong>Delete iCloud data</strong> — Settings → Apple ID → iCloud → Manage Account Storage → Vitae → Delete Data

## Policy Changes

If we make material changes to this policy, we will update the 'Effective date' at the top of this page and surface a prominent notice in the app. Continued use means you accept the updated policy.

## Contact Us

For any question, suggestion or rights request regarding this privacy policy, please email us. We will respond within 7 business days.

[hongsikunjob@gmail.com](mailto:hongsikunjob@gmail.com)

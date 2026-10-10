---
title: Privacy Policy
updated: October 2026
---

Waystub ("we") is an app that turns train and plane tickets into keepsake stubs and finds the photos you took on each trip. We care about your privacy: **your journeys are stored only on your device and in your own iCloud, and your photos are never uploaded**. This policy explains how we handle information when you use Waystub.

## Data storage

The journeys, ticket details, travel companions, avatar and nickname you create in Waystub are stored in these places:

- **Local device**: data is saved in your device's local storage
- **iCloud**: when you are signed in to iCloud, data syncs to your personal iCloud account via Apple's CloudKit, keeping your devices in step

We **do not keep** your journeys, tickets or photos on our own servers.

## Photos and the photo library

- Waystub asks for photo library access only to find the photos and videos taken during your trips. **Photos are organized on your device, stay in your library and are never uploaded**; a journey only stores references to photos, not copies.
- When you save a share card, Waystub asks for permission to add photos, used only to save the cards you make.

## Ticket recognition

How a ticket is processed depends on where it comes from:

- **On your device**: Wallet boarding passes, boarding pass barcodes, OFD e-invoices, PDFs with a text layer, and ticket texts or emails are parsed on your device and never sent to a server.
- **Sent to our recognition service**: booking screenshots, photos of paper tickets taken with the camera, and PDFs that can only be read as images are sent over an encrypted connection to our recognition service. Volcano Engine's (ByteDance) Doubao vision model extracts the train or flight number, stations, date, seat and fare, which are returned to the app for you to check. The service has no database and **does not keep the image or the result**; the returned fields never include passenger names, ID numbers or order numbers.
- To prevent abuse, the service limits how many recognitions each device can make per day. For this the app sends a random device identifier with each request. It is not linked to your identity, and the counts live only in server memory and reset daily.
- The recognition service runs on Alibaba Cloud servers in mainland China.

## Anonymous usage statistics

To keep improving the app, Waystub collects anonymous usage data, including: an anonymous install ID randomly generated on first launch (not linked to your identity, no ad identifier IDFA), session counts and duration, feature and screen usage (limited to enumerated values and count ranges such as import method, transport type and share template), app version and device/OS info, and a random token attached to purchases (used only to see which entry point led to a purchase).

We **never report** place names, dates, ticket contents, companions, photos or anything you type.

## Purchases

Waystub Pro is bought through Apple's In-App Purchase. Apple handles payment, and we never see your payment details. We receive transaction notifications from Apple to count purchases.

## Third-party services

- **No ad SDKs**: we do not integrate any advertising frameworks
- **No user tracking**: no third-party analytics or tracking tools, only the anonymous usage statistics described above
- **No data sales**: we will never sell your data to any third party

The only third parties involved are those named above: Apple (iCloud sync, In-App Purchase), Volcano Engine (screenshot recognition) and Alibaba Cloud (server hosting).

## Export and deletion

- **Export a backup**: the app exports an open JSON backup containing journey details and photo references, not the photos themselves
- **Delete a journey**: delete it directly in the app
- **Delete all data**: choose "Delete All Data" in Settings to remove every journey from your device and iCloud; photos in your library are not affected
- You can also delete Waystub's iCloud data in Settings → Apple ID → iCloud → Manage Storage

## Contact us

If you have any questions about this privacy policy, email us at [hongsikunjob@gmail.com](mailto:hongsikunjob@gmail.com).

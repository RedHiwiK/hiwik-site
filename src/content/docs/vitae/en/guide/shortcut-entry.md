---
title: "Shortcuts + AI Receipt Capture"
description: "Set up a Shortcut and trigger it from the Action Button, Back Tap or Control Center — capture a receipt in one tap without opening the app."
group: "finance"
order: 3
---

Set up a Shortcut for AI receipt capture: take a screenshot, then hand it straight to Vitae to recognize. Once built, bind it to the Action Button, Back Tap, or Control Center — when you see a bill screenshot, <strong>record it in one tap without opening the app</strong>. The video below walks through the full flow, from creating it to using it.

<video src="/vitae/videos/shortcut-entry-demo.mp4" controls playsinline preload="metadata" poster="/vitae/images/screenshots/tutorials/shortcut-entry-poster.png"></video>

## First, build a Shortcut

1. <strong>Open the Shortcuts app</strong> and tap the "+" in the top-right to create a new one.
2. <strong>Add the "Take Screenshot" action</strong> (search for "screenshot" in the search box).
3. <strong>Add Vitae's "Recognize Bill Screenshot" action</strong>, set "Bill Screenshot" to the <strong>"Screenshot"</strong> from the previous step, and turn on "Show When Run".
4. <strong>Give it a name</strong> (such as "AI Receipt Capture") and you're done.

This simplest Shortcut is now ready to use. The exact setup varies slightly depending on which entry point you bind it to — see below.

## Two setups: it depends where you trigger from

### Option 1: Action Button / Back Tap (recommended, two steps)

When you trigger from the side Action Button or by double-tapping the back of the phone, the bill page is right there on screen, <strong>nothing is covering it, so you can screenshot directly</strong>:

1. Take Screenshot
2. Recognize Bill Screenshot (set Bill Screenshot to "Screenshot", turn on "Show When Run")

![操作按钮 / 背部双击版快捷指令配置：截屏 → 识别账单截图](/vitae/images/screenshots/tutorials/shortcut-quick-key.png)

### Option 2: Trigger from Control Center

Control Center sits on top of the bill page, so you have to close it first to capture the bill underneath:

1. Hide Control Center
2. <strong>(Recommended) Wait 1 second</strong> — so you don't screenshot before Control Center has fully closed
3. Take Screenshot
4. Recognize Bill Screenshot (set Bill Screenshot to "Screenshot")

![控制中心版快捷指令配置：隐藏控制中心 → 截屏 → 识别账单截图](/vitae/images/screenshots/tutorials/shortcut-control-center.png)

## Bind it to a handy entry point

Once the Shortcut is built, bind it to whichever entry point you prefer, so a single action triggers it from then on:

- <strong>Action Button</strong> (iPhone 15 Pro and newer): Settings → Action Button → swipe to "Shortcut" → pick your "AI Receipt Capture". After that, one press of the side button records a transaction.
- <strong>Back Tap</strong> (most newer models): Settings → Accessibility → Touch → Back Tap → Double Tap → pick "AI Receipt Capture". After that, double-tapping the back of the phone records a transaction.
- <strong>Control Center</strong>: Press and hold an empty area of Control Center → Edit → Add a Control → pick "Shortcut" → assign the Control Center version. Remember to use the "Option 2" setup above.

## FAQ

### Why do some setups require "Hide Control Center"?

Only when you <strong>trigger from Control Center</strong> — Control Center covers the bill page, so you have to close it first to capture the bill. When you trigger via the Action Button or Back Tap, nothing covers the screen, so this step isn't needed.

### Action Button or Back Tap — which should I choose?

It depends on your model and habits. The Action Button is the physical key on the side of the iPhone 15 Pro / 16 series — just one press; Back Tap is a tap on the back of the phone, supported on most newer models. Both are convenient, so pick whichever you use more.

### What do I do after triggering it?

Once the screenshot is recognized into a bill, it goes into Vitae's "To Confirm" list — same as using AI receipt capture directly: review each one, then save in bulk. See [AI Receipt Capture](/en/vitae/guide/ai-screenshot-entry/) for details.

---
title: "Food Ordering"
tagline: "Order coffee or food from chat: full review with fees and total, and your approval before anything is submitted."
category: "shopping"
type: "prompt"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/food-ordering.md"
source_verified: false
origin: "directory"
includes: ["instructions", "purchase-review-flow"]
version: "1.0.0"
date_added: 2026-10-05
safety_notes: |
  Places real orders that cost real money. Every order needs your explicit
  approval on the exact reviewed total before anything is submitted. Works
  through merchant websites only; it cannot drive the apps on your phone.
  You sign in yourself in the browser; it never asks for passwords or card
  numbers in chat.
install_prompt: |
  Install the "Food Ordering" prompt pack. Its full source is below. Save it at
  ~/workspace/prompts/food-ordering.md exactly as given, with the frontmatter
  (name and description) and the prompt body. Do not run it now. Then
  confirm it is saved and tell me the trigger phrases: "order me coffee",
  "get me lunch", "order me food".

  --- SOURCE ---
  # Food Ordering

  How to use: say "order me coffee", "get me lunch", or "order me food",
  and give the item, the restaurant or merchant, and pickup or delivery.

  Trigger phrases: "order me coffee", "get me lunch", "order me food".

  ## The prompt

  Turn this into a real placed order on the merchant website. First collect:
  the exact items with variants and quantities, pickup or delivery, the store
  or delivery address, and the ready-by time. Use remembered defaults for my
  usual orders and store.

  Prepare the checkout on the site and pause at the final review. Show me the
  merchant, the items and options, the store or delivery details, the pickup
  or delivery estimate, every fee and tax, the total, and the payment method.
  Do not submit anything until I approve that exact total. A budget I
  mentioned earlier is not approval for a different total.

  Rules: one order at a time per merchant; verify the cart is empty before
  adding items. I sign in myself; never ask me for passwords or card numbers
  in chat. Payment comes from a saved digital wallet method or a card I enter
  myself in the browser. Verify the order actually submitted before reporting
  success, and report the order number, the total charged, and the pickup code
  or delivery ETA. If anything fails, do not retry the payment blindly; report
  what happened first.

  This works through websites only. It cannot tap through the apps on my
  phone, so if a merchant needs its app, say so plainly instead of trying.

  After pickup or delivery, offer to draft a short review of the store or
  order. Post nothing without my word-for-word approval.
source: |
  # Food Ordering

  How to use: say "order me coffee", "get me lunch", or "order me food",
  and give the item, the restaurant or merchant, and pickup or delivery.

  Trigger phrases: "order me coffee", "get me lunch", "order me food".

  ## The prompt

  Turn this into a real placed order on the merchant website. First collect:
  the exact items with variants and quantities, pickup or delivery, the store
  or delivery address, and the ready-by time. Use remembered defaults for my
  usual orders and store.

  Prepare the checkout on the site and pause at the final review. Show me the
  merchant, the items and options, the store or delivery details, the pickup
  or delivery estimate, every fee and tax, the total, and the payment method.
  Do not submit anything until I approve that exact total. A budget I
  mentioned earlier is not approval for a different total.

  Rules: one order at a time per merchant; verify the cart is empty before
  adding items. I sign in myself; never ask me for passwords or card numbers
  in chat. Payment comes from a saved digital wallet method or a card I enter
  myself in the browser. Verify the order actually submitted before reporting
  success, and report the order number, the total charged, and the pickup code
  or delivery ETA. If anything fails, do not retry the payment blindly; report
  what happened first.

  This works through websites only. It cannot tap through the apps on my
  phone, so if a merchant needs its app, say so plainly instead of trying.

  After pickup or delivery, offer to draft a short review of the store or
  order. Post nothing without my word-for-word approval.
---

# Food Ordering

A prompt pack that turns a chat request for coffee or food into a real order
on the merchant website. Say "order me coffee" and name the item and the
store, and the assistant builds the cart, shows you the full review with
every fee and the total, and waits for your explicit approval before
submitting. Payment can come from a saved digital wallet method or a card
you enter yourself during a browser takeover. It works with order-ahead and
delivery sites such as Starbucks.com, DoorDash, and Uber Eats, and it stops
plainly instead of pretending when a merchant needs its phone app. After the
order lands, it can also draft a short review of the store or meal for your
word-for-word approval before anything is posted anywhere.

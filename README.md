# Noura
A React + TypeScript + Vite modest-fashion UX prototype.

## Run
```
npm install
npm run dev
```
Open the local address shown. `npm run build` type-checks and creates `dist/`.

## Demo
Choose “Explore with a demo wardrobe.” Open The campus edit, swap the tote for a cheaper or owned bag, save it and wear it today. Ask the stylist to adapt it for work. Try Discover’s sample queries, create a Preloved listing, then bookmark a Learn lesson.

36 coherent illustrated sample products, 12 seeded wardrobe pieces, 12 outfits, 8 preloved listings and 6 lessons. Owned pieces never count toward additional purchase costs. Saved items, outfit changes, preferences, lessons and lightweight listings persist locally. Uploaded photos remain session-only.

AI responses, shopping results, image matching, purchases and trades are simulations. There is no backend, live inventory, scraping, payment processing or message delivery. Image matching uses selected coverage choices, not image recognition. Garments are original local SVG illustrations; fonts load from Google Fonts with serif and sans-serif fallbacks.

## Pink shopping redesign
The header now offers a global catalog search and Home / Shop / Preloved / Learn navigation. Home shows six looks initially, with more on request; shopping filters expand only when needed. The Learn creator accepts a written goal and optional local image, then selects and adapts DIY, hijab or styling templates. Guides include materials, time, cost, steps, completion and browser-local saving. Images are reference previews; there is no image analysis or live generative AI.

## Regular-site demo options
The original pink storefront is preserved. There is no separate story page or guided walkthrough.

For Khadidja’s example:
1. Use the normal search for “light blue polka-dot summer dress under $50.” Open the $39 dress and select Style with my wardrobe. Save the beach outfit.
2. Go to My Wardrobe. Upload a blouse with Add a piece (Tops), then choose Style it. A seeded blush blouse is also available.
3. In the normal stylist panel, answer No to a white skirt, No to a belt, then choose the cream hijab.
4. Choose Save all 3 looks. Open Saved → Malibu trip to see three outfits and $93 in unique new pieces, including the optional tote. Using owned items or the preloved dress reduces the total.

Search listings and stylist replies are hardcoded simulations. No live scraping, stock check, payment or message delivery occurs. Sample prices exclude shipping and tax. Image uploads remain local to the session.

## Demo purchases
Search cards and product previews include Buy now. The checkout lets the user select a size and confirm a simulated, quantity-one purchase. It stores a local purchase record, adds the piece to My Wardrobe, and offers styling next. Purchases are accessible from the shopping-bag button in the header and persist across reloads. Reopening a purchased item shows its existing record rather than creating a duplicate. There are no payment fields or external orders; tax, shipping and live stock are not calculated. Trip spending includes completed demo purchases, even though those items now count as owned when calculating remaining additions.

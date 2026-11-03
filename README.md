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

## Khadidja's Malibu story demo
Open the published website with `/#malibu` or choose **Malibu story demo** in the navigation.

Presentation click path:
1. Start Khadidja's story → Find my dress → Choose the $39 sample offer.
2. Next: style her blouse → upload a photo or Use her sample blouse.
3. Answer No to the white skirt, No to the belt, then choose Cream hijab.
4. Build my looks → optionally add the $18 straw tote.
5. Save & pack all 3 → View her suitcase → Ready for Malibu.

Example outcome: dress $39 + white skirt $24 + belt $12 + optional tote $18 = **$93** for three looks. Owned pieces are $0 in new spending; repeated pieces count once. Shipping and taxes are excluded. Own-item answers, skipping the belt, choosing the $34 preloved dress, and the tote toggle update the total. Saved looks appear in the app's Saved page; the blouse appears in My Wardrobe. Uploaded photos remain session-only. The guided journey persists in localStorage and has a Restart story action that retains existing saved outfits.

Search, retailer offers, personalization, and stylist responses are simulations using local sample data. No scraping, stock checks, image analysis, payment or message delivery occurs. Five minutes and under $100 are illustrative targets. The final print view provides a landscape story summary for presentation use.

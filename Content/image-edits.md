# Screenshot edits

Eleven images. Each one below is complete on its own: everything that needs
doing to that file is in its own list, including the crop. You can send a single
block to whoever is doing it and nothing is missing.

Edits are numbered `asset.edit`, so you can pick line by line. For example
"do 01.1 to 01.4, skip 06, all of 07".

Written 16 September 2026.

---

## The names to use

Several of these screens show the same client and the same home, so the values
have to match across them. Each asset below already names the value it needs.
This table is only here so you can see they agree.

| | |
|---|---|
| Client | Robert Alvarez |
| DOB / age / gender | 04-11-1941 / 84 / Male |
| Power of attorney | Marta Alvarez, Daughter |
| POA phone | (480) 555-0142 |
| POA email | m.alvarez@example.com |
| Home | Sun Ridge Assisted Living |
| Home address | 4120 N Recker Rd, Mesa, AZ 85215 |
| Anchor address | 1250 E Baseline Rd, Mesa, AZ 85204 |

**Export rules, all files:** original pixel size, PNG, no upscaling, no
re-crop to square, no flattening to JPEG.

---

# 01. `HPC Phone 1.png`

**381 x 773. Assessment form on a phone. On the site now.**

Every field is empty, so it reads as an unfinished product. This is the most
valuable edit on the list: it is the only screen in the "one placement, start to
finish" section.

| # | Edit |
|---|---|
| 01.1 | **Client Name:** type `Robert` and `Alvarez` into the First and Last boxes. Top third, the green outlined field and the one beside it. |
| 01.2 | **Current Location Type:** replace `-Select-` with `Hospital`, styled as a chosen value, not placeholder grey. |
| 01.3 | **POA Full Name:** `Marta Alvarez` |
| 01.4 | **POA Relationship:** `Daughter` |
| 01.5 | **POA Type:** replace `-Select-` with `Medical` |
| 01.6 | **Phone:** replace the grey hint `201-555-0123` with solid `480-555-0142`. Leave the US flag and `+1`. |
| 01.7 | **POA Email:** `m.alvarez@example.com` |
| 01.8 | **Crop:** none. Keep the device frame, the iOS status bar and the 9:41 clock. They are part of the image on the site. |

---

# 02. `HPC Phone 2.png`

**347 x 703. Marketing visits form on a phone. On the site now.**

Also completely empty. The desktop version of this same form is asset 05 and it
is already filled in, so these values are copied from it and the two screens
agree.

| # | Edit |
|---|---|
| 02.1 | **Date to Visit:** `15-09-26` |
| 02.2 | **Start Time:** `09:00 AM`. **End Time:** `12:30 PM` |
| 02.3 | **Address:** `1250 E Baseline Rd` |
| 02.4 | **City / State / Zip:** `Mesa` / `AZ` / `85204` |
| 02.5 | **Do not touch** the line "Homes within 1 mile of this address will be included". It is what explains the whole feature. |
| 02.6 | **Crop:** none. Keep the device frame and the status bar. |

---

# 03. `HPC Phone 3.png`

**469 x 952. A routed day on a phone. On the site now.**

The best image we have of the product working. I have done a rough pass on this
already, so please redo it at full quality: my patch over the avatar shows as a
soft circle.

| # | Edit |
|---|---|
| 03.1 | **Remove the profile picture**, the circular avatar with the purple ring, top right at roughly x 392-444, y 91-143. Clone the map underneath. The park edge and the road running through it need to continue. |
| 03.2 | **Delete the red badge** reading `57 d 3 h 43 min late`, in the info bar at y 802-838. It is test data from a route left open two months. Replace it with nothing: leave the pill holding just the arrow and `1:46pm`. |
| 03.3 | **Replace the stop label** `Diego Shaw - Diego Shaw - Gold...` with `Robert Alvarez - Sun Ridge Assisted Living`, at y 774-800. Match the existing bold grey black and keep it centred. |
| 03.4 | **Do not touch the bottom bar.** `Navigate / Room Details / AZDHS / FamilyTour Form` is the evidence for a claim the site makes two sections later. |
| 03.5 | **Crop:** none. Keep the device frame and the status bar. |

---

# 04. `map 2x.png`

**3472 x 1930. The statewide map. On the site now.**

No chrome, no identity, no named home. Already resampled and live.

**Nothing to do.**

---

# 05. `marketing visit.png`

**1908 x 1071. Marketing visits form on desktop. Not on the site yet.**

Already filled in correctly and already free of browser chrome. The quickest win
on the list.

| # | Edit |
|---|---|
| 05.1 | **Remove `Terrah` and the profile picture** from the bottom of the left sidebar, with the two small icons beside them, at y 1030-1071. Extend the sidebar's flat colour down. |
| 05.2 | **Crop to 4 : 3**, from the top of the sidebar to just under the Submit button. Roughly two thirds of the current frame is empty white below the form, which makes the product look emptier than it is. Crop tight to content, do not pad to hit the ratio. |

---

# 06. `clients.png`

**1913 x 1077. The clients list on desktop. Not on the site yet.**

One row, and that row is Buggs Bunny, age 100, POA Daffy Duck. Cartoon data on a
page going to hospice owners is worse than no screenshot at all.

| # | Edit |
|---|---|
| 06.1 | **Build eight to ten rows** by duplicating the single row and editing the text. Keep the row treatment and the column alignment. |
| 06.2 | **Row one** is the client the rest of the site uses: `Robert Alvarez` / `04-11-1941` / `84` / `Male` / `5` / `170` / `Marta Alvarez`. |
| 06.3 | **POA Phone must be US.** It currently reads `+15551112233` with a generic flag. Use `(480) 555-0142` in row one and matching US numbers down the column. |
| 06.4 | **Ages 71 to 94** across the rows. A 100 year old in row one reads as filler. |
| 06.5 | **Footer count:** `Showing 1 of 1` becomes the real number. |
| 06.6 | **Remove `Terrah` and the profile picture** from the bottom of the left sidebar. |
| 06.7 | **Crop to 1.8 : 1**, from the top of the table to just under the last row, keeping the left sidebar. The sidebar is worth keeping because it shows the app is five screens, not fifty. Do not keep the empty space below the rows. |

---

# 07. `state view.png`

**1732 x 967. The map with a home selected and its card open. Not on the site yet.**

The most convincing image anyone has produced on this project, and unusable as
it stands: it publishes a real business's mobile number and email, and it puts a
status on a home.

| # | Edit |
|---|---|
| 07.1 | **Home name:** `Sun View Estates Home Care` becomes `Sun Ridge Assisted Living`. Keep the underline. |
| 07.2 | **Address:** `701 West Solano Drive, Phoenix, AZ, 85013` becomes `4120 N Recker Rd, Mesa, AZ, 85215`. |
| 07.3 | **Mobile:** `(602) 717-8296` becomes `(480) 555-0176`. Keep the blue link colour. |
| 07.4 | **Email:** `Sunviewestateshomecare@yahoo.com` becomes `contact@sunridgeal.example.com`. |
| 07.5 | **Delete the whole line** `Good Standing Status: Good To Place`. Close the gap so the rows below move up. Do not leave an empty slot. This is a grade on a home and it cannot appear in any form. |
| 07.6 | **Delete `Open in Zoho CRM`** and its external link icon from the action row, leaving `Navigate` and `Copy address` centred. |
| 07.7 | **Remove the profile picture** at the far right edge, level with the top of the card. |
| 07.8 | **Keep** `ALTCS: Yes`, `Website: Empty` and `Tags: Nothing selected`. They are record fields, not judgements. |
| 07.9 | **Optional, only after 07.1 to 07.5.** Add three rows where `Good Standing Status` was, in the card's existing style: `Licence: Current`, `Inspections: 4 since 2019`, `Open enforcement: None`. See the note under this table before doing it. |
| 07.10 | **Crop, version A, 1.8 : 1.** Centred so the card sits right of centre and the pin density fills the left. This is the version for a full width band. |
| 07.11 | **Crop, version B, 4 : 3.** Tight on the card with a little map around it. The card is the subject, the map is context. Please send both crops from the same edited file. |

**About 07.9.** The card has room for more rows and currently shows none of the
state record. Adding those three would turn the site's best image into the one
that proves the site's central claim. It is only safe once 07.1 to 07.4 are
done: replacing the name, address, phone and email makes the card illustrative
rather than a real business's record, at which point adding plausible rows is no
different in kind from replacing the phone number. Values must read as facts,
never as judgements, so nothing like "good", "clean" or "compliant".

---

# 08. `Lasso_Workflow_Step1`, `Step2`, `Step3`

**2880 x 1800 each. A rep drawing an area on the map. Not on the site yet.**

Three frames of an area being drawn. With asset 11 they make a four step
sequence, which nothing else in the set gives us: it shows the product being
operated rather than displayed.

| # | Edit |
|---|---|
| 08.1 | **Crop the entire browser window** off all three, roughly the top 260px. The tab bar names a real home, `Abundant Life Assisted Living`, the URL bar reads `app.mapsly.com`, and the bookmarks bar includes `ZOHO`. None of those can appear anywhere. |
| 08.2 | **Remove the profile picture** top right of the map on every frame, and the red crossed out pin control directly below it. Red on this site means an error and nothing else. |
| 08.3 | **Replace the address in the in-app search field**, `8825 North Third Avenue, Phoenix, AZ, USA 85021`, with `1250 E Baseline Rd, Mesa, AZ 85204` on all three, so it matches the forms. |
| 08.4 | **Keep** the map's own zoom, layers and locate controls. They are what say this is a live map rather than a picture of one. |
| 08.5 | **Crop to 4 : 3**, framed on the area being drawn. Use the identical crop box on all three and on asset 11. They only work as a sequence if the frame does not move between steps. |

---

# 09. `assesment.png`

**1902 x 1071. Assessment form on desktop. Not on the site yet.**

Same empty form problem as 01. `Screen A form.png` is a near duplicate: edit
whichever of the two is cleaner and discard the other.

| # | Edit |
|---|---|
| 09.1 | **Fill in the same client as 01:** `Robert Alvarez`, location type `Hospital`, POA `Marta Alvarez`, relationship `Daughter`, POA type `Medical`, phone `480-555-0142`, email `m.alvarez@example.com`. The phone and desktop screens have to show one client. |
| 09.2 | **Remove `Terrah` and the profile picture** from the bottom of the left sidebar. |
| 09.3 | **Crop to 4 : 3**, cropped to the filled fields. As with 05, most of the current frame is empty white. |

---

# 10. `Mapsly_PreTour_RoomDetails-FIX.png`

**1645 x 956. A home's reply beside the state's inspection panel. Blocked, see below.**

A home's actual reply, "We agreed on room 10 private with bath", next to the
AZDHS panel. The single strongest asset on the project: it proves the two claims
the whole site rests on, in one frame.

| # | Edit |
|---|---|
| 10.1 | **Crop the entire browser window.** Tabs, `app.mapsly.com`, bookmarks bar. |
| 10.2 | **Client name:** `Alfred Mollsen` becomes `Robert Alvarez`. |
| 10.3 | **Home name:** `Abundant Life Assisted Living And Senior Care` becomes `Sun Ridge Assisted Living`. |
| 10.4 | **Delete `for $6K`** from the agreement line, leaving "We agreed on room 10 private with bath". No price appears anywhere on this site. |
| 10.5 | **Remove the profile picture** top right. |
| 10.6 | **Crop to 1.8 : 1**, framed so the reply card and the route are both in shot. The card is the point, the route is what makes it credible. |
| 10.7 | **Do not put numbers in the AZDHS panel.** See below. |

**Why this still cannot ship after all of the above.** The AZDHS panel's four
fields, `Total Citations`, `2026 Citations`, `2025 Citations` and
`Total Enforcement Fines`, are all blank. This is the one thing on the whole
list nobody should type a number into. Unlike asset 07, these are specifically
citation counts and enforcement fines sitting in a screenshot alongside a real
message thread, so invented values are a fabricated regulatory record whatever
the home is called, and it would destroy the exact claim the image exists to
make. We need a real capture with those fields populated. That is a request for
Terrah, not an edit.

---

# 11. `Lasso_Workflow_Step4_RouteCreated.png`

**2880 x 1800. A routed day on desktop, twelve stops. Not on the site yet.**

Twelve numbered stops clustered in one area with the drive out to them. This is
the picture behind the line "twelve homes in a morning" and it has never been on
the site. It is also step four of the sequence in asset 08.

| # | Edit |
|---|---|
| 11.1 | **Crop the entire browser window**, roughly the top 260px, as 08.1. Same reasons. |
| 11.2 | **Remove the profile picture** top right, and the red crossed out pin control directly below it. |
| 11.3 | **Stop label:** `Lidia's Care Home LLC` is a real business. Replace with `Sun Ridge Assisted Living`. |
| 11.4 | **Delete `Open in Zoho CRM`** from the bottom bar, leaving `Navigate`, `AZDHS` and `Exit trip mode`. Re-centre the three. |
| 11.5 | **Keep `AZDHS`** in that bar. Same evidence as 03.4. |
| 11.6 | **Crop to 4 : 3**, using the identical crop box as asset 08 so the four frames run as a sequence. If that box cuts off too much of the drive, centre on the twelve stop cluster and keep enough of the green leg to show it runs somewhere, then match 08 to this instead. |

---

# Do not bother with these

Duplicates and superseded captures. Nothing needs doing to any of them.

- `HCP Desk 2.png` and `HPC Desk 1.png`: the clients list and the map inside a
  monitor illustration. We use the flat versions.
- `Route.jpg`: superseded by 03.
- `Facility Details.jpg` and `Mapsly_PreTour_RoomDetails-OG.png`: the same card
  as 10, carrying the same blocker.
- `Screenshot 2026-09-08 at 18-24-16.jpg` and `-25-60.jpg`: phone route captures
  superseded by 03.
- `Screen A form.png`: near duplicate of 09, unless it is the cleaner of the two.

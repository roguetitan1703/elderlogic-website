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

# 07b. Correction to 07, the map with the home card open

**Added 19 September 2026. Supersedes 07.8, which was wrong.**

Work from your edited version of 07, the file with Sun Ridge Assisted Living
in it. It is on the site now as two crops:

- `home-record.jpg`, 1681 x 936, the wide version
- `home-record-tall.jpg`, 692 x 519, tight on the card

Send both back at exactly those sizes, cut from the same corrected file.

07.8 told you to keep `Website: Empty` and `Tags: Nothing selected`. That was
our mistake, not yours. They are the map tool's empty placeholders, and the
pencil beside Website is that tool's own edit button. On the site they make the
data look incomplete and make the tool recognisable.

| # | Edit |
|---|---|
| 07b.1 | **Delete the whole `Website: Empty` line**, including the pencil icon. Close the gap so the rows below move up. |
| 07b.2 | **Delete the whole `Tags: Nothing selected` line.** Close the gap. The card ends on the email row, then `Navigate` and `Copy address`. |
| 07b.3 | **Clear the ghost text.** Zoomed in, faint pieces of the old wording show underneath `Yes`, `Current`, `4 since 2019`, `None` and the email address. The new values were typed over the old ones. Paint each of those areas back to clean card white first, then set the value again. Check at 400%. |
| 07b.3a | **Remove the close cross** at the top right of the card, and paint the corner back to card white. It is generic, but with the lines above gone it is the last piece of the map tool's own furniture. |
| 07b.4 | **`Licence` becomes `License`**, American spelling, to match the rest of the site. |
| 07b.5 | **Send two versions.** Version A exactly as above. Version B also deletes the three rows `License`, `Inspections` and `Open enforcement`, closing the gaps. The client has not yet confirmed she can show state inspection data in an illustration, and B means we do not need a second round whichever way she answers. |
| 07b.6 | **Leave alone:** the home name, address, `Mobile:` line, email, `ALTCS: Yes`, `Navigate`, `Copy address`, and the map. Two of those are still being decided with the client and will come as a separate note if they change. |

---

# 07c. The Mapsly popup: the client's data, our capture

> **DONE, 25 September.** Cut and in the build. What follows is the record of
> what was asked for and what came back; see the note at the end for the two
> things that changed along the way.

**24 September. This supersedes 07b.** The client sent her own capture of the
popup and said: "Let's use this as the Mapsly popup. The data on it is fine as
it is." Read as what it is: she is signing off the **data**, not handing us a
finished asset. So her capture is the reference, not the artwork. It is saved
as `Assets/client-mapsly-popup-2026-09-24.jpg`, 468 x 234, for reference only.

Editing our own capture instead settles three things her file could not. Ours
is already at the right resolution for the 1280 wide exhibit. Ours has no
settings gear, no close cross and no inline edit pencil sitting in a green
highlighted field, which is the map tool's own furniture and is what 07b was
removing. And the popup keeps the styling of the rest of the site's screens.

**The data, from her capture, exactly:**

```
Example Residential Care Home
10805 N 83rd Street, Scottsdale, Arizona, 85260
Mobile: 111-222-1234
ALTCS: Pending
Email: example@example.com
AZDHS' Listing URL: <the state listing link>
                                    Navigate    Copy address
```

| # | Do |
|---|---|
| 07c.1 | In `home-record`, retype the popup to the block above. The home is `Example Residential Care Home`, not `Sun Ridge Assisted Living`. Every name and number in it is already fake, so nothing has to be invented. |
| 07c.2 | **Add the `AZDHS' Listing URL:` row.** It is new, and it is the one row that carries the section's "the source is one tap away" line. Style it as the other link rows on the card, not as a highlighted edit field. |
| 07c.3 | **Delete the `Website: Empty` and `Tags: Nothing selected` rows**, and the pencil beside them. They are the map tool's empty state, not record fields. This part of 07b stands. |
| 07c.4 | **Delete the close cross** at the top right and paint the corner back to card white. |
| 07c.5 | **Clear the ghost text.** Faint pieces of old wording show under the retyped values at 400%. Paint each area back to clean card white before setting the value. |
| 07c.6 | Redo the phone crop, `home-record-tall`, from the new wide file so the two agree. |
| 07c.7 | 07b.5's two versions are withdrawn. There is one version now, and it is this. |

## What came back

The edit was done generatively, from the master `home-record.jpg`, 1681 x 936.

**The card is right.** All six lines correct and crisp, no close cross, none of
the five removed rows, the AZDHS row styled as a link rather than as an edit
field. The card came back wider and shorter than the original, which is fine.

**The map was redrawn, as expected of a generative edit.** 41 per cent of the
pixels outside the card moved. Every label still reads correctly and the map is
plausible, but the pin density is visibly thinner than the original capture.
That carries no claim here: the count of homes belongs to the coverage section,
which uses a different image, and this one is captioned "One home, selected on
the map. Illustrative values."

**The alt text had to change with it.** It described license, inspections and
open enforcement, which are no longer in the picture.

## The heading stays. Closed.

Settled, and not by us. Asked whether the popup could show inspections, the
client answered on 25 September: "It won't on the popup yet because I'd have to
still figure out how to include another data set into Mapsly and I haven't done
it yet. It'll show up on their route with the link to AZDHS for the moment.
It's on my to do list."

So this is not a temporary state of the image, it is the state of the product.
The exhibit sits under **"Every inspection the state has published"** and shows
an AZDHS link and nothing else. The section's own copy still lists Licensing,
Inspections, Violations and Enforcement as what the record carries.

**Decided 25 September: nothing changes.** The reader does see every
inspection, by opening the link, and the page already says so. The record grid
carries a cell for it:

> **The source.** AZDHS is one tap away at every stop, opening the state's own
> record.

So the heading is supported by the section's own copy, four cells above the
picture, and the picture is an illustration of one home rather than the
evidence for the heading. The client is building the data into the map tool;
the copy is not going to be rewritten back and forth around a product that is
mid change.

Not to be reopened without a reason that is new.

---

# 07d. The AZDHS metrics rows

**29 September. Adds to 07c, which stands. Not yet done.**

The client built the rollup she said was on her to do list four days ago. Her
capture of 29 September shows the popup now carrying a headed block of state
metrics under the contact rows:

```
STATE OF ARIZONA'S AZDHS METRICS      (green pill, section header)
AZDHS' Listing URL:                   (the state listing link)
Total Citation Count:
2026 Citation Count:
2025 Citation Count:
Total Enforcement Fines: $
```

All of it comes across, header included. The card is a picture of the product,
so what the product renders is what it shows. The only things left out are the
two that are not part of the record: an edit affordance on one field, and the
window controls. Both are named below.

Saved as `Assets/client-mapsly-popup-2026-09-29.png`, 368 x 270, reference
only. **Her capture is a real home**, Sunrise Care Homes-hayden on North Hayden
Road with its real mobile number, and none of it goes anywhere near the site.
Her instruction was: "You'll have to fill in the fake values, but I just wanted
you to know what it would look like. Those pieces of information are on a real
home. Let's still use that example home from a few days ago." So the layout is
hers and the home stays ours.

**The standard is fidelity.** This is a screenshot of a working product, and
its job is to be believed by somebody who will later see the real thing. So the
card shows what the product shows. Where this brief removes something, it is
for one of two reasons and no others: it names the tool the client does not
publish, or it is a control rather than a piece of the record. Nothing is
removed because it would look tidier without it.

**Why numbers are allowed here and were refused in 10.7.** Asset 10 carries the
same four fields and this file says nobody should type a number into them. That
still holds for asset 10, because the numbers there would sit beside a real
home's real message thread, where an invented regulatory history reads as that
home's record. Here the home is `Example Residential Care Home` at a fake
address with a fake phone and a fake email, the exhibit is captioned
"Illustrative values", and every other value in the card was already invented in
07c. Adding these four is no different in kind. The line is the home's identity,
not the field.

| # | Do |
|---|---|
| 07d.1 | **Work from the current `home-record.jpg`, 1681 x 936.** Everything 07c produced stays: the six existing lines, no close cross, no `Website` row, no `Tags` row. |
| 07d.2 | **Add the section header** `STATE OF ARIZONA'S AZDHS METRICS`, as the green pill in her capture, below the `Email:` row. Retype it cleanly at the card's own scale rather than lifting it: her capture is 368px wide and will not survive being scaled into a 1681px file. Same typeface, weight and letter spacing as her capture, which sets it in small caps on a pale green fill. |
| 07d.3 | **Move the `AZDHS' Listing URL:` row** under that header, as the first row of the block, which is where her capture has it. |
| 07d.4 | **Add four rows** beneath it, in the card's existing label-and-value style, in this order: `Total Citation Count: 3`, `2026 Citation Count: 0`, `2025 Citation Count: 1`, `Total Enforcement Fines: $500`. |
| 07d.5 | **Keep the AZDHS URL row a plain link.** Her capture shows it inside a green filled box with a pencil at the end. That is the map tool's inline editor, caught mid edit; it is a control for changing the field, not a way the record reads. The header pill stays, that box and pencil do not. |
| 07d.6 | **The arithmetic has to hold.** Three total, one of them in 2025, none this year. A reader who adds them up and finds they contradict will distrust the whole image. Do not substitute rounder or larger numbers. |
| 07d.7 | **No word anywhere is a judgement.** These are counts and a dollar amount and nothing else. Nothing reading "good", "clean", "compliant", "in good standing", and no status, badge or colour that grades the home. The numbers are set in the card's ordinary text colour, the same as every other value on it. The green belongs to the header, where it labels the source, and goes no further down the block. |
| 07d.8 | **Delete `Open in Zoho CRM`** and its external link icon from the action row if the rebuilt card carries one. `Navigate` and `Copy address` remain, centred. That tool cannot be named anywhere on this site. |
| 07d.9 | **Delete the settings gear and the close cross** at the top right of the card, and paint the corner back to clean card white. Those are the popup's window controls, not the record. |
| 07d.10 | **Do not redraw the map** if it can be avoided. The last generative pass moved 41 per cent of the pixels outside the card and thinned the pin density. If the map does change, every label still has to read correctly. |
| 07d.11 | **Send the wide file at 1681 x 936**, then the phone crop `home-record-tall` at 692 x 519 cut from the same file so the two agree. |

## After the file comes back

The edit is generative, so the map is at risk whatever 07d.10 asks for: the last
pass moved 41 per cent of the pixels outside the card. That is bounded rather
than trusted. The returned card is composited back onto the **original** map,
so only the card region is ever new and the map on the site is the same capture
it has always been. If the returned card's bounds do not allow a clean
composite, the whole returned file is used and the map is re-checked label by
label, as it was in 07c.

Then, in order:

1. Composite, and write the result to `web/public/product/home-record.jpg` at
   1681 x 936.
2. Re-cut `home-record-tall.jpg` at 692 x 519 from that same file, so the wide
   and phone versions cannot disagree.
3. `python scripts/build-images.py`, which regenerates AVIF and WebP at 640,
   960, 1280 and 1681 for the wide file and 400 and 692 for the crop, and
   rewrites `content/images.generated.ts`.
4. Rewrite the image's alt text to describe the four new rows.
5. Build, run the verify suite and axe, commit the generated files with the
   source.

## Round one, 29 September: not cut in

Saved as `Assets/home-record-07d-round1.png`, 1680 x 936.

**The map held.** 3.2 per cent of the pixels outside the card moved at a
threshold that ignores compression noise, against 41 per cent last time. Giving
the editor the current file and telling it to leave the map alone worked. The
remaining 3.2 per cent is mostly pins east of Mesa, and the composite step
removes it entirely, so the map is effectively solved.

**The card was rebuilt from the wrong file.** It has gone back to the identity
07c replaced on 24 September, and reinstated three rows 07c deleted:

| in the returned file | should be |
|---|---|
| `Sun Ridge Assisted Living` | `Example Residential Care Home` |
| `4120 N Recker Rd, Mesa, AZ, 85215` | `10805 N 83rd Street, Scottsdale, Arizona, 85260` |
| `Mobile: (480) 555-0176` | `Mobile: 111-222-1234` |
| `ALTCS: Yes` | `ALTCS: Pending` |
| `Email: contact@sunridgeal.example.com` | `Email: example@example.com` |
| `Licence: Current` | deleted |
| `Inspections: 4 since 2019` | deleted |
| `Open enforcement: None` | deleted |

**The three reinstated rows fail the standard this brief set.** They were
invented on 16 September under 07.9, before the client had shown us the popup
at all. Her captures of 24 and 29 September both show that the product has no
such rows. Under fidelity they go, and they would go even if nobody minded
them: `Open enforcement: None` reads as a clean record rather than a fact, which
07d.7 forbids, and it now sits four lines above `Total Enforcement Fines: $500`,
where a careful reader will take the two as contradicting each other.

`Licence` is also the British spelling, which 07b.4 flagged a week ago.

**Right in the returned file, and to be kept:** the green header pill, all four
counting rows with the values as briefed, the AZDHS URL as a plain link with no
edit box or pencil, no settings gear, no close cross, and no Zoho link in the
action row.

**One thing to fix while the rows are being cut.** The four new values are
underlined inconsistently: `1` and `$500` carry an underline, `3` and `0` do
not. All four match each other, or none of them does.

Round two works from the returned file, not from the original, so the map is
not put at risk a third time.

## Round two, 29 September: cut in

`Assets/home-record-07d-round2-fixed.png` is the returned file with two local
repairs; `Assets/home-record-07d-composite.png` is what shipped.

**The card is right.** Correct home, correct address, mobile, ALTCS and email;
the green header pill; all four counting rows with the briefed values; the
AZDHS URL as a plain link; no Zoho link. The three reinstated rows are gone.

**Two things came back wrong and were fixed here rather than in a third round,
because each one is surgical and another round would put the map at risk
again.**

The close cross was back at the top right. It sits on flat card white, 251 to
255 across the whole ring around it, so it was painted out.

The four counting values were set in link blue and underlined. The card's own
convention is that blue means a link: the mobile number is a `tel:`, the AZDHS
URL opens the state listing, `Navigate` and `Copy address` are actions. A
citation count is a value, like `ALTCS: Pending` and the email, which are dark
with a thin underline. Styling the most sensitive numbers on the page as
clickable implies a source behind each one that does not exist, when the source
is the row above them. They were recoloured to the card's body colour by
recovering each pixel's ink coverage from the red channel and recompositing it
over white in the dark colour, so the glyph shapes and the underline are
untouched.

**The map was redrawn again**, harder than in round one: 13.7 per cent of the
pixels outside the card moved, across the whole pin field. So the card was
composited onto the original capture, and the result carries **0.000 per cent**
difference from it outside the card.

That needed one thing the brief had not anticipated. The original file has the
old card in it, so pasting the new card where the editor happened to put it
would have left the old one showing alongside. The new card is therefore placed
at 816, 208 rather than at its own 914, 222, which covers the old card's body
and the whole of its shadow, measured at about 14 pixels on each edge. Nothing
is painted back in and no generated map survives anywhere in the file. The
composite asserts the coverage before it runs, so it cannot silently produce a
file with two cards in it.

The card is larger than the old one, so it now covers the Scottsdale label. A
popup covering a city label is what the product does, and the address on the
card says Scottsdale.

**Then:** the phone crop re-cut at 692 x 519 from 761, 131; AVIF and WebP
rebuilt at every width; the alt text rewritten to describe the metrics block.
106 checks with the same six known `<details>` artifacts, and axe clean at
1440 and 390 across all three routes.

**The heading needs no revisiting.** It was closed on 25 September because the
copy should not be rewritten back and forth around a product mid change. The
product has now moved toward the copy: the card shows counts of citations and a
total of enforcement fines, which is nearer to `Every inspection the state has
published` than the bare link was. That is a reason to leave the copy alone,
not a reason to reopen it.

**One thing that is ours, not the editor's.**

The heading question stays closed and this does not reopen it. It was closed on
the reasoning that the copy is not rewritten back and forth around a product
that is mid change. The product has now changed in the direction the copy
already described, which is a reason to leave the copy exactly where it is.

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

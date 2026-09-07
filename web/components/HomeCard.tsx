import { homeCard } from "@/content/copy";

/**
 * The signature object.
 *
 * Everything this product does resolves to one thing: a home, with an address,
 * a licence, an inspection history, and an answer about a room and a price.
 * The site was built out of eight identical text blocks instead. This is the
 * atom, so the page is built out of it.
 *
 * Values are illustrative and labelled as such on the card. No real home is
 * named, no state record is reproduced, and nothing here scores or ranks
 * anything, which is the one rule this product does not bend.
 */
export default function HomeCard() {
  return (
    <figure className="hcard">
      <div className="hcard__top">
        <span className="hcard__kind mono">{homeCard.kind}</span>
        <span className="hcard__flag mono">{homeCard.status}</span>
      </div>

      <p className="hcard__place">{homeCard.place}</p>

      <dl className="hcard__rows">
        {homeCard.rows.map((row) => (
          <div key={row.label} className="hcard__row">
            <dt>{row.label}</dt>
            <dd className="mono">{row.value}</dd>
          </div>
        ))}
      </dl>

      <figcaption className="hcard__foot mono">{homeCard.note}</figcaption>
    </figure>
  );
}

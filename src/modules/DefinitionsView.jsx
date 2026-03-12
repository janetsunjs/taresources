export default function DefinitionsView({ items }) {
  return (
    <div className="definitionGrid">
      {items.map((item) => (
        <article key={item.id} className="definitionCard">
          <h2 className="definitionTerm">{item.term}</h2>

          <div className="definitionBlock">
            <div className="definitionLabel">Plain language</div>
            <p>{item.plain}</p>
          </div>

          <div className="definitionBlock">
            <div className="definitionLabel">Why it matters</div>
            <p>{item.whyItMatters}</p>
          </div>

          <div className="definitionBlock">
            <div className="definitionLabel">Common mix-up</div>
            <p>{item.commonMixup}</p>
          </div>

          <div className="definitionExample">{item.example}</div>
        </article>
      ))}
    </div>
  );
}

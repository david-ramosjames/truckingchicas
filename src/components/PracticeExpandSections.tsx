type Section = { title: string; body: string };

export default function PracticeExpandSections({
  details,
  sections,
}: {
  details: readonly string[];
  sections: readonly Section[];
  faq?: readonly { q: string; a: string }[];
  faqHeading?: string;
}) {
  return (
    <>
      {details.length > 0 && (
        <section className="pb-8">
          <div className="mx-auto max-w-3xl px-4">
            {details.map((para) => (
              <p key={para} className="mt-4 text-lg leading-relaxed text-gray-600">
                {para}
              </p>
            ))}
          </div>
        </section>
      )}

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl space-y-12 px-4">
          {sections.map((item) => (
            <div key={item.title}>
              <h2 className="text-3xl font-bold text-brand-navy">{item.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

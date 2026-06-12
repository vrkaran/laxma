import React from 'react';

export default function PcosPcod() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-16">
        
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">PCOS & PCOD</h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            When it comes to hormonal health in women, PCOS (Polycystic Ovary Syndrome) and PCOD 
            (Polycystic Ovarian Disease) are terms that often come up—and just as often, they’re confused. 
            While they share similar features, they are not identical. Understanding the difference is key 
            to proper diagnosis, treatment, and long-term health.
          </p>
        </header>

        {/* Section: What is PCOS? */}
        <section className="mb-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What is PCOS?</h2>
            <p className="mb-4 text-gray-700">
              Polycystic Ovary Syndrome (PCOS) is a hormonal and metabolic disorder where the ovaries produce 
              higher-than-normal levels of androgens (male hormones), which can interfere with the development 
              and release of eggs during ovulation.
            </p>
            <h3 className="font-semibold text-lg mb-2">Common signs of PCOS:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Irregular or absent periods</li>
              <li>Multiple small cysts in the ovaries (seen via ultrasound)</li>
              <li>Acne, oily skin, and unwanted facial or body hair</li>
              <li>Weight gain or difficulty losing weight</li>
              <li>Insulin resistance or increased risk of type 2 diabetes</li>
              <li>Fertility challenges</li>
            </ul>
            <p className="mt-4 text-sm italic text-gray-600">
              PCOS is often linked with broader metabolic disturbances and may require long-term management involving lifestyle changes.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://samsarawellness.in/wp-content/uploads/2025/05/pcos3.jpg" 
              alt="PCOS Illustration" 
              className="rounded-2xl shadow-lg w-full h-auto object-cover" 
            />
          </div>
        </section>

        {/* Section: What is PCOD? */}
        <section className="mb-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img 
              src="https://samsarawellness.in/wp-content/uploads/elementor/thumbs/pcod-r6itq1q742gpwdqxw5cwmvrl69mrknvx28ga3ep8tg.webp" 
              alt="PCOD Illustration" 
              className="rounded-2xl shadow-lg w-full h-auto object-cover" 
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Is PCOD?</h2>
            <p className="mb-4 text-gray-700">
              Polycystic Ovarian Disease (PCOD) is a condition where the ovaries release immature or partially 
              mature eggs, which can develop into cysts over time. It’s more common and generally less severe than PCOS.
            </p>
            <h3 className="font-semibold text-lg mb-2">Common signs of PCOD:</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Irregular menstrual cycles</li>
              <li>Mild hormonal imbalances</li>
              <li>Occasional acne or bloating</li>
              <li>Weight fluctuations</li>
            </ul>
          </div>
        </section>

        {/* Section: Comparison Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Key Differences in PCOS & PCOD</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-rose-50 text-rose-900">
                <tr>
                  <th className="py-4 px-6 text-left">Feature</th>
                  <th className="py-4 px-6 text-left">PCOS</th>
                  <th className="py-4 px-6 text-left">PCOD</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 px-6 font-semibold">Nature</td>
                  <td className="py-4 px-6">Complex hormonal disorder</td>
                  <td className="py-4 px-6">Ovarian dysfunction</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold">Hormonal impact</td>
                  <td className="py-4 px-6">Higher androgen level</td>
                  <td className="py-4 px-6">Mild hormonal irregularities</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold">Menstrual irregularity</td>
                  <td className="py-4 px-6">Often severe</td>
                  <td className="py-4 px-6">Mild hormonal irregularities</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold">Metabolic involvement</td>
                  <td className="py-4 px-6">High</td>
                  <td className="py-4 px-6">Less or none</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold">Fertility & Reversibility</td>
                  <td className="py-4 px-6">Can cause infertility; Hard to reverse, needs medical support</td>
                  <td className="py-4 px-6">Usually doesn’t affect fertility much; Often reversible with lifestyle changes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section: Corporate Impact */}
        <section className="mb-16 bg-gray-50 p-8 rounded-3xl border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">PCOS/PCOD in the Corporate World: The Hidden Struggle</h2>
          <p className="mb-6 text-gray-700">
            This chronic hormonal disorder affects nearly 1 in 5 women in India, many of whom are juggling 
            demanding careers while managing unpredictable symptoms—often in silence.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg text-rose-600 mb-2">Irregular Energy Cycles</h3>
              <p className="text-gray-700 text-sm">Fatigue, bloating, or migraines around irregular cycles can reduce day-to-day efficiency and make planning difficult.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-rose-600 mb-2">Mental Health Impact</h3>
              <p className="text-gray-700 text-sm">Closely linked with anxiety and mood swings. The pressure to maintain a “normal” face while battling internal hormonal storms is exhausting.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-rose-600 mb-2">Focus and Productivity</h3>
              <p className="text-gray-700 text-sm">Brain fog, lack of motivation, and emotional overwhelm can affect project management and team communication.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-rose-600 mb-2">Workplace Silence</h3>
              <p className="text-gray-700 text-sm">Many women hesitate to disclose PCOS due to stigma or fear of being seen as “less capable.”</p>
            </div>
          </div>
        </section>

        {/* Section: Solution */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Is There a Cure?</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            There is no one-pill cure, but the good news is—PCOS and PCOD can be reversed or very well managed through holistic interventions:
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <span className="bg-rose-100 text-rose-800 px-4 py-2 rounded-full font-semibold">Lifestyle & Nutrition</span>
            <span className="bg-rose-100 text-rose-800 px-4 py-2 rounded-full font-semibold">Ayurveda & Natural Healing</span>
            <span className="bg-rose-100 text-rose-800 px-4 py-2 rounded-full font-semibold">Mental Wellness</span>
          </div>
          <p className="italic text-gray-600">True healing comes from understanding the body—not suppressing symptoms.</p>
        </section>

        {/* Section: FAQ / App */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Ayurvedic PCOS/PCOD Support App</h2>
          <div className="space-y-4">
            <FaqItem 
              question="What is this app about?" 
              answer="This app provides holistic, Ayurveda-based care for women with PCOS/PCOD. It combines traditional healing with modern tools — including customized herbal guidance, yoga, meditation, and period tracking — to help you manage symptoms naturally." 
            />
            <FaqItem 
              question="How does the app help with PCOS/PCOD?" 
              answer={
                <ul className="list-disc pl-5 space-y-1">
                  <li>Personalized Ayurvedic diet and lifestyle plans</li>
                  <li>Herbal recommendations based on your body type (dosha)</li>
                  <li>Daily yoga and meditation</li>
                  <li>Cycle and symptom tracking (mood, menstrual flow, etc.)</li>
                  <li>Emotional wellness support</li>
                </ul>
              }
            />
            <FaqItem 
              question="What features are included?" 
              answer={
                <ul className="list-disc pl-5 space-y-1">
                  <li><b>Yoga for PCOS:</b> Gentle, hormone-balancing yoga</li>
                  <li><b>Meditation:</b> Stress relief and emotional wellness</li>
                  <li><b>Ayurvedic Consultations:</b> Chat with certified BAMS doctors</li>
                  <li><b>Period & Symptom Tracker:</b> Understand your cycles</li>
                  <li><b>Herbal Remedies:</b> Natural, dosha-specific solutions</li>
                </ul>
              }
            />
             <FaqItem 
              question="How long will it take to see results?" 
              answer="Most users notice improvement in 3–6 months with consistent use of Ayurvedic practices, diet, yoga, and meditation." 
            />
          </div>
        </section>

      </div>
    </div>
  );
}

// Simple internal component for Accordion/FAQ items
function FaqItem({ question, answer }: { question: string, answer: React.ReactNode }) {
  return (
    <details className="group border border-gray-200 rounded-xl bg-white overflow-hidden transition-all duration-300">
      <summary className="flex cursor-pointer items-center justify-between gap-4 p-4 font-semibold text-gray-900 marker:content-none hover:bg-gray-50">
        <span>{question}</span>
        <svg
          className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180 text-rose-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="p-4 pt-0 text-gray-700 leading-relaxed border-t border-gray-100">
        {answer}
      </div>
    </details>
  );
}
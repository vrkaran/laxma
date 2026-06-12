import React from 'react';

export default function Thyroid() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-16">
        
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Take Control of Your Thyroid Health</h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Nurture your thyroid with a holistic blend of modern science and Ayurvedic wisdom. 
            Address the root causes of imbalance, boost your energy, and support hormonal harmony 
            through personalized care, mindful nutrition, herbal support, and daily lifestyle practices 
            for lasting wellness.
          </p>
        </header>

        {/* Section: What is Thyroid? */}
        <section className="mb-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding Your Thyroid Gland</h2>
            <p className="mb-4 text-gray-700">
              The thyroid is a small, butterfly-shaped gland located at the base of your neck, in front of the windpipe. 
              

[Image of human thyroid gland location]

              It produces hormones (mainly T3 and T4) that regulate your metabolism, which affects how your body uses energy. 
              It also influences your heart rate, temperature, mood, and energy levels.
            </p>
            <p className="text-gray-700">
                Imbalances in these hormones can disrupt the feedback loop between the brain and the gland.
                

[Image of thyroid hormone feedback loop]

            </p>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://samsarawellness.in/wp-content/uploads/elementor/thumbs/photoviewer-2025-04-22t155227.427-r4ryxrigv5h06g5ifo58gyw82vgtlom377vuy4pubc.jpeg" 
              alt="Thyroid Anatomy" 
              className="rounded-2xl shadow-lg w-full h-auto object-cover" 
            />
          </div>
        </section>

        {/* Section: Common Conditions Cards */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Common Thyroid Conditions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Hypothyroidism */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition">
              <img src="https://samsarawellness.in/wp-content/uploads/elementor/thumbs/hypo-thyroid-r4rybwrjytkuxpwqju36sn6fg4uwjutj3a37aywtjo.png" alt="Hypothyroidism" className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Hypothyroidism</h3>
              <div className="text-sm text-gray-700 space-y-2">
                <p><span className="font-semibold text-rose-600">Western:</span> Underactive thyroid, fatigue, weight gain.</p>
                <p><span className="font-semibold text-rose-600">Ayurveda:</span> Kapha imbalance, slow Agni (digestive fire).</p>
              </div>
            </div>

            {/* Hyperthyroidism */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition">
              <img src="https://samsarawellness.in/wp-content/uploads/elementor/thumbs/hyper-1-r4rykqh04tnrxx390nf37f088dcytjusyylbihtr4k.png" alt="Hyperthyroidism" className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Hyperthyroidism</h3>
              <div className="text-sm text-gray-700 space-y-2">
                <p><span className="font-semibold text-rose-600">Western:</span> Overactive thyroid, anxiety, rapid heartbeat.</p>
                <p><span className="font-semibold text-rose-600">Ayurveda:</span> Pitta aggravation, excess heat.</p>
              </div>
            </div>

            {/* Goiter */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition">
              <img src="https://samsarawellness.in/wp-content/uploads/elementor/thumbs/thyroid-3-r4rxzj81zcmy2jvwthi0yrlxvhux7bore0v1tt9fh0.png" alt="Goiter" className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Thyroid Nodules/Goiter</h3>
              <div className="text-sm text-gray-700 space-y-2">
                <p><span className="font-semibold text-rose-600">Western:</span> Swelling or growths on the gland.</p>
                <p><span className="font-semibold text-rose-600">Ayurveda:</span> Vata-Kapha imbalance, tissue accumulation.</p>
              </div>
            </div>

          </div>
        </section>

        {/* Section: Symptoms Comparison */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Thyroid Symptoms</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Hypo List */}
            <div className="bg-rose-50 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-rose-800 mb-6 flex items-center gap-2">
                Hypothyroidism
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-rose-400 rounded-full"></span>Hair Loss</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-rose-400 rounded-full"></span>Fatigue</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-rose-400 rounded-full"></span>Sensitivity to cold</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-rose-400 rounded-full"></span>Constipation</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-rose-400 rounded-full"></span>Weight Gain</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-rose-400 rounded-full"></span>Dry Skin</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-rose-400 rounded-full"></span>Increased Cholesterol</li>
              </ul>
            </div>

            {/* Hyper List */}
            <div className="bg-orange-50 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-orange-800 mb-6 flex items-center gap-2">
                 Hyperthyroidism
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-orange-400 rounded-full"></span>Fine, Brittle Hair</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-orange-400 rounded-full"></span>Trouble Sleeping</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-orange-400 rounded-full"></span>Excessive Sweating</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-orange-400 rounded-full"></span>Weight Loss</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-orange-400 rounded-full"></span>High Blood Pressure</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-orange-400 rounded-full"></span>Anxiety</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-orange-400 rounded-full"></span>Moist Skin</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Section: Causes */}
        <section className="mb-16 grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
                 <img 
                  src="https://samsarawellness.in/wp-content/uploads/2025/05/whatsapp-image-2025-05-30-at-2.10.42-pm.jpeg" 
                  alt="Thyroid Causes" 
                  className="rounded-2xl shadow-lg w-full h-auto object-cover" 
                />
            </div>
            <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">What Causes Thyroid Imbalances?</h2>
                <ul className="list-disc pl-5 space-y-3 text-gray-700 text-lg">
                    <li>Autoimmune conditions (like Hashimoto’s or Graves’ disease)</li>
                    <li>Chronic stress and poor lifestyle habits</li>
                    <li>Iodine deficiency or overdose</li>
                    <li>Hormonal shifts (pregnancy, menopause)</li>
                    <li>Environmental toxins and processed food</li>
                    <li>Family history or genetics</li>
                </ul>
            </div>
        </section>

        {/* Section: Comparison Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Comparison of Conditions</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden min-w-[600px]">
              <thead className="bg-rose-50 text-rose-900">
                <tr>
                  <th className="py-4 px-6 text-left">Feature</th>
                  <th className="py-4 px-6 text-left">Hypothyroidism</th>
                  <th className="py-4 px-6 text-left">Hyperthyroidism</th>
                  <th className="py-4 px-6 text-left">Goiter</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 px-6 font-semibold">Definition</td>
                  <td className="py-4 px-6">Underactive gland</td>
                  <td className="py-4 px-6">Overactive gland</td>
                  <td className="py-4 px-6">Enlargement of gland</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold">Hormone Levels</td>
                  <td className="py-4 px-6">Low T3/T4, High TSH</td>
                  <td className="py-4 px-6">High T3/T4, Low TSH</td>
                  <td className="py-4 px-6">Normal or Abnormal</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold">Metabolism</td>
                  <td className="py-4 px-6">Slows Down</td>
                  <td className="py-4 px-6">Speeds Up</td>
                  <td className="py-4 px-6">Variable</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold">Symptoms</td>
                  <td className="py-4 px-6">Fatigue, Weight gain, Cold</td>
                  <td className="py-4 px-6">Anxiety, Weight loss, Heat</td>
                  <td className="py-4 px-6">Visible swelling, tightness</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold">Risks</td>
                  <td className="py-4 px-6">Heart disease, Depression</td>
                  <td className="py-4 px-6">Heart problems, Bone loss</td>
                  <td className="py-4 px-6">Swallowing/Breathing issues</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section: Corporate Impact */}
        <section className="mb-16 bg-gray-50 p-8 rounded-3xl border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How Thyroid Issues Affect the Corporate World</h2>
          <p className="mb-6 text-gray-700">
            Thyroid dysfunction is becoming a silent productivity killer in today’s workforce. Here's how it impacts professional life:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-xl shadow-sm">
                <h4 className="font-bold text-rose-600 mb-2">Chronic Fatigue</h4>
                <p className="text-sm text-gray-600">Leads to decreased concentration, missed deadlines, and burnout.</p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm">
                <h4 className="font-bold text-rose-600 mb-2">Mood Swings & Anxiety</h4>
                <p className="text-sm text-gray-600">Affects team dynamics and emotional intelligence at work.</p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm">
                <h4 className="font-bold text-rose-600 mb-2">Brain Fog</h4>
                <p className="text-sm text-gray-600">Poor memory and decision-making slow down high-pressure roles.</p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm">
                <h4 className="font-bold text-rose-600 mb-2">Confidence Impact</h4>
                <p className="text-sm text-gray-600">Weight changes and low self-esteem impact confidence in high-visibility roles.</p>
            </div>
             <div className="bg-white p-5 rounded-xl shadow-sm">
                <h4 className="font-bold text-rose-600 mb-2">Absenteeism</h4>
                <p className="text-sm text-gray-600">Menstrual irregularities contribute to work-life imbalance and absenteeism.</p>
            </div>
          </div>
        </section>

        {/* Section: FAQ / AyurGenX App */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AyurGenX Thyroid Support</h2>
          <div className="space-y-4">
            <FaqItem 
              question="What is AyurGenX about?" 
              answer="AyurGenX offers natural, Ayurveda-based care for managing thyroid imbalances (like hypothyroidism and hyperthyroidism). It combines herbal guidance, diet plans, yoga, meditation, and period tracking to support hormone balance, metabolism, and emotional well-being." 
            />
            <FaqItem 
              question="What thyroid conditions does the app support?" 
              answer={
                <ul className="list-disc pl-5 space-y-1">
                  <li>Hypothyroidism (underactive thyroid)</li>
                  <li>Hyperthyroidism (overactive thyroid)</li>
                  <li>Autoimmune thyroid issues (like Hashimoto’s)*</li>
                  <li>Subclinical or borderline thyroid dysfunction</li>
                  <li className="text-sm italic mt-2">*Note: Ayurveda supports overall well-being; please consult your physician for acute medical treatment.</li>
                </ul>
              }
            />
            <FaqItem 
              question="How does Ayurveda treat thyroid problems?" 
              answer={
                <div className="space-y-2">
                    <p>Ayurveda focuses on identifying your dosha imbalance and treating the root cause with:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Herbal formulations (e.g., Ashwagandha, Guggulu)</li>
                        <li>Digestive fire (Agni) balancing</li>
                        <li>Detox and lifestyle correction</li>
                        <li>Diet suited to your body type</li>
                        <li>Stress reduction through yoga and meditation</li>
                    </ul>
                </div>
              }
            />
             <FaqItem 
              question="What features are included in the app?" 
              answer={
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Ayurvedic consultations with certified BAMS doctors</li>
                    <li>Personalized herbal suggestions</li>
                    <li>Thyroid-specific yoga classes (live + on-demand)</li>
                    <li>Guided meditation for stress and hormone balance</li>
                    <li>Customized Ayurvedic diet plans</li>
                    <li>PCOS/thyroid-friendly period tracker</li>
                  </ul>
              } 
            />
            <FaqItem 
              question="Can I use modern medicine alongside AyurGenX?" 
              answer="Yes. Ayurveda complements allopathic treatment. Continue prescribed medications and use our app to support long-term hormonal balance, digestion, and stress management." 
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
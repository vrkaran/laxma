import constipationImg from '../../image/health/constipation.webp';
export default function Constipation() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900">Constipation</h1>
        <p className="mt-3 text-gray-700">Gut motility and fiber-focused routines.</p>
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
          <img src={constipationImg} alt="Constipation" className="w-full h-64 object-cover" />
        </div>
      </div>
    </div>
  );
}

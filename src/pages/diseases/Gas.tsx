import gasImg from '../../image/health/gas.webp';
export default function Gas() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900">Gas</h1>
        <p className="mt-3 text-gray-700">Bloating relief and digestion-friendly foods.</p>
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
          <img src={gasImg} alt="Gas" className="w-full h-64 object-cover" />
        </div>
      </div>
    </div>
  );
}

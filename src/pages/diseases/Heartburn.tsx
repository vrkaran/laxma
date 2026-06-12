import heartburnImg from '../../image/health/heartburn.webp';
export default function Heartburn() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900">Heartburn</h1>
        <p className="mt-3 text-gray-700">Acid control and soothing dietary choices.</p>
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
          <img src={heartburnImg} alt="Heartburn" className="w-full h-64 object-cover" />
        </div>
      </div>
    </div>
  );
}

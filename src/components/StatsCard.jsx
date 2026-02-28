function StatsCard({ title, count, color, icon }) {
  return (
    <div
      className={`rounded-xl p-4 text-white flex items-center justify-between ${color}`}
    >
      <div>
        <p className="text-sm opacity-80">
          {title}
        </p>

        <p className="text-2xl font-bold">
          {count}
        </p>
      </div>

      <div className="text-2xl">
        {icon}
      </div>
    </div>
  );
}

export default StatsCard;
interface Card {
    title: string;
    value: number;
    icon: React.ReactNode;
}

export default function StatsCard({ title, value, icon }: Card) {
  return (
    <div className="p-5 bg-gray-100 border rounded">
      <div className="flex items-center gap-2">
        <div className="flex-shrink-0">{icon}</div>
        <p className="whitespace-nowrap">{title}</p>
      </div>
      <p className="text-3xl">{value}</p>
    </div>
  );
}

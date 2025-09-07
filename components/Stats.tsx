import React from 'react';

interface StatItemProps {
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => (
  <div className="text-center">
    <p className="text-5xl md:text-7xl font-bold">{value}</p>
    <p className="text-lg md:text-xl mt-1 opacity-90">{label}</p>
  </div>
);

const CircleSeparator: React.FC<{ position: string }> = ({ position }) => (
    <div className={`absolute ${position} hidden lg:block`}>
        <div className="w-48 h-48 border-4 border-white/10 rounded-full"></div>
    </div>
);


const Stats: React.FC = () => {
  return (
    <section className="bg-[#005B6E] text-white py-20 relative overflow-hidden">
        <CircleSeparator position="-top-24 -right-24" />
        <CircleSeparator position="-bottom-20 -left-20" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatItem value="6" label="سال تجربه" />
          <StatItem value="84" label="تعداد مشتریان" />
          <StatItem value="5" label="نفر تیم" />
          <StatItem value="18" label="رضایت مشتری" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
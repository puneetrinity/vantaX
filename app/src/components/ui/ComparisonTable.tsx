import { motion } from 'framer-motion';

interface Row {
  dimension: string;
  hackathon: string;
  vantax: string;
}

export default function ComparisonTable({ data }: { data: Row[] }) {
  return (
    <motion.div
      className="overflow-x-auto rounded-xl border border-border"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-vanta-dark">
            <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-text-secondary">
              Dimension
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-text-secondary">
              Traditional Hackathon
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-gold-400">
              VantaX
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-t border-border">
              <td className="px-6 py-4 text-[15px] bg-card text-text-secondary font-medium">{row.dimension}</td>
              <td className="px-6 py-4 text-[15px] bg-card text-text-muted">{row.hackathon}</td>
              <td className="px-6 py-4 text-[15px] bg-card text-text-primary font-medium">{row.vantax}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}

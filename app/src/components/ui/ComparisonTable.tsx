import { motion } from 'framer-motion';

interface Row {
  dimension: string;
  hackathon: string;
  vantax: string;
}

export default function ComparisonTable({ data }: { data: Row[] }) {
  return (
    <motion.div
      className="overflow-x-auto border border-border"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-purple-500/5">
            <th className="px-5 py-3 text-left text-[12px] font-bold uppercase tracking-wider text-text-muted">
              Dimension
            </th>
            <th className="px-5 py-3 text-left text-[12px] font-bold uppercase tracking-wider text-text-muted">
              Hackathon
            </th>
            <th className="px-5 py-3 text-left text-[12px] font-bold uppercase tracking-wider text-gold-500">
              VantaX
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-t border-border hover:bg-card-hover transition-colors">
              <td className="px-5 py-3 text-[13px] text-text-secondary font-medium">{row.dimension}</td>
              <td className="px-5 py-3 text-[13px] text-text-muted">{row.hackathon}</td>
              <td className="px-5 py-3 text-[13px] text-text-primary font-medium">{row.vantax}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}

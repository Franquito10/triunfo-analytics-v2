import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { motion } from 'framer-motion';

const inversionData = [
  { name: 'Meta Ads', value: 4733153, color: '#3b82f6', porcentaje: 69 },
  { name: 'Google Ads', value: 2120641, color: '#10b981', porcentaje: 31 }
];

const performanceData = [
  { canal: 'Orgánico', leads: 5614, emisiones: 238, inversion: 0, cpl: 0, tasaEmision: 4.24 },
  { canal: 'Referidos', leads: 968, emisiones: 44, inversion: 0, cpl: 0, tasaEmision: 4.55 },
  { canal: 'Google Ads', leads: 2036, emisiones: 41, inversion: 2120641, cpl: 1041, tasaEmision: 2.01 },
  { canal: 'Meta Ads', leads: 551, emisiones: 2, inversion: 4733153, cpl: 1913, tasaEmision: 0.36 }
];

export default function ChannelComparison() {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('es-AR').format(value);
  };

  return (
    <div className="space-y-8">
      {/* Distribución de inversión */}
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">💰 Distribución de Inversión Publicitaria</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={inversionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, porcentaje }) => `${name}: ${porcentaje}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {inversionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => formatCurrency(value)} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-4">
            {inversionData.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 rounded-xl border-2"
                style={{ borderColor: item.color }}
              >
                <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-2xl font-bold mb-1" style={{ color: item.color }}>
                  {formatCurrency(item.value)}
                </p>
                <p className="text-sm text-gray-600">{item.porcentaje}% del presupuesto total</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
          <p className="text-sm text-gray-700">
            ⚠️ <strong>Meta Ads consume 69% del presupuesto</strong> pero genera solo el 6% de los leads y 0.4% de las emisiones.
          </p>
        </div>
      </div>

      {/* Performance por canal */}
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">📊 Performance por Canal</h2>
        
        {/* Gráfico de barras - Tasa de emisión */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Tasa de Emisión por Canal (%)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="canal" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="tasaEmision" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Tabla comparativa */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Canal</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">Inversión</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">Leads</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">Emisiones</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">CPL</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">Tasa</th>
              </tr>
            </thead>
            <tbody>
              {performanceData.map((row, index) => (
                <tr key={row.canal} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{row.canal}</td>
                  <td className="py-3 px-4 text-right text-gray-700">
                    {row.inversion > 0 ? formatCurrency(row.inversion) : '-'}
                  </td>
                  <td className="py-3 px-4 text-right font-semibold text-gray-900">{formatNumber(row.leads)}</td>
                  <td className="py-3 px-4 text-right font-semibold text-green-600">{row.emisiones}</td>
                  <td className="py-3 px-4 text-right text-gray-700">
                    {row.cpl > 0 ? formatCurrency(row.cpl) : '$0'}
                  </td>
                  <td className="py-3 px-4 text-right">
                    <span className={`font-bold ${
                      row.tasaEmision > 4 ? 'text-green-600' : 
                      row.tasaEmision > 2 ? 'text-orange-600' : 'text-red-600'
                    }`}>
                      {row.tasaEmision}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
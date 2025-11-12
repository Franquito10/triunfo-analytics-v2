import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, CheckCircle } from 'lucide-react';
import octubreData from '../data/octubreData';

const COLORS = ['#8b5cf6', '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#ec4899', '#6366f1', '#14b8a6'];

export default function FunnelChart() {
  const { funnelCompleto, resumen } = octubreData;

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('es-AR').format(value);
  };

  return (
    <div className="space-y-8">
      {/* Header con KPIs */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-3">🔍 Embudo de Conversión Backend</h2>
        <p className="text-purple-100 text-lg mb-6">
          Análisis del journey completo - Octubre 2025
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white bg-opacity-20 rounded-xl p-4">
            <p className="text-purple-100 text-sm">Solo Cotizó</p>
            <p className="text-3xl font-bold">{formatNumber(funnelCompleto[0].usuarios)}</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-xl p-4">
            <p className="text-purple-100 text-sm">Emisiones</p>
            <p className="text-3xl font-bold">{formatNumber(resumen.emisionesTotalesBackend)}</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-xl p-4">
            <p className="text-purple-100 text-sm">Conversión Global</p>
            <p className="text-3xl font-bold">{((resumen.emisionesTotalesBackend / funnelCompleto[0].usuarios) * 100).toFixed(2)}%</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-xl p-4">
            <p className="text-purple-100 text-sm">Mayor Abandono</p>
            <p className="text-3xl font-bold">{funnelCompleto[0].abandonoPct.toFixed(1)}%</p>
            <p className="text-purple-100 text-xs">Solo Cotizó → Eligió</p>
          </div>
        </div>
      </div>

      {/* Gráfico de barras */}
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Visualización del Embudo</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={funnelCompleto}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 150, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="nombre" type="category" width={140} />
            <Tooltip
              formatter={(value: number) => formatNumber(value)}
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '8px' }}
            />
            <Legend />
            <Bar dataKey="usuarios" name="Usuarios" radius={[0, 10, 10, 0]}>
              {funnelCompleto.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Tabla detallada */}
      <div className="bg-white rounded-2xl p-8 shadow-lg overflow-x-auto">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Detalle por Etapa</h3>
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="text-left p-3 font-semibold text-gray-700">Paso</th>
              <th className="text-left p-3 font-semibold text-gray-700">Etapa</th>
              <th className="text-right p-3 font-semibold text-gray-700">Usuarios</th>
              <th className="text-right p-3 font-semibold text-gray-700">% del Total</th>
              <th className="text-right p-3 font-semibold text-gray-700">Abandono</th>
            </tr>
          </thead>
          <tbody>
            {funnelCompleto.map((etapa, index) => (
              <tr key={etapa.paso} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="p-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white font-bold text-sm">
                    {etapa.paso}
                  </span>
                </td>
                <td className="p-3 font-medium text-gray-900">{etapa.nombre}</td>
                <td className="p-3 text-right font-bold text-gray-900">{formatNumber(etapa.usuarios)}</td>
                <td className="p-3 text-right">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                    {etapa.porcentajeDelTotal.toFixed(2)}%
                  </span>
                </td>
                <td className="p-3 text-right">
                  {etapa.abandonoPct > 0 && (
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      etapa.abandonoPct > 80 ? 'bg-red-100 text-red-700' :
                      etapa.abandonoPct > 50 ? 'bg-orange-100 text-orange-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {etapa.abandonoPct.toFixed(1)}%
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Alertas críticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
          <div className="flex items-start mb-3">
            <AlertTriangle className="w-6 h-6 text-red-600 mt-1 mr-3" />
            <div>
              <h4 className="font-bold text-red-900 text-lg">🚨 Abandono Crítico</h4>
              <p className="text-red-700 mt-2">
                <strong>{funnelCompleto[0].abandonoPct.toFixed(1)}%</strong> abandona después de "Solo Cotizó"
              </p>
              <p className="text-red-600 text-sm mt-2">
                Esto representa <strong>{(funnelCompleto[0].usuarios * (funnelCompleto[0].abandonoPct / 100)).toFixed(0)}</strong> leads perdidos
              </p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
          <div className="flex items-start mb-3">
            <CheckCircle className="w-6 h-6 text-green-600 mt-1 mr-3" />
            <div>
              <h4 className="font-bold text-green-900 text-lg">✅ Oportunidad</h4>
              <p className="text-green-700 mt-2">
                Reducir abandono un <strong>30%</strong> generaría
              </p>
              <p className="text-green-600 text-sm mt-2 font-bold">
                +{((funnelCompleto[0].usuarios * 0.3 * (resumen.emisionesTotalesBackend / funnelCompleto[0].usuarios))).toFixed(0)} emisiones adicionales/mes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
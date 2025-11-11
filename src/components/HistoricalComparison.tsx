import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import { TrendingDown, AlertTriangle, TrendingUp } from 'lucide-react';
import octubreData from '../data/octubreData';

export default function HistoricalComparison() {
  const { comparativaHistorica } = octubreData;
  
  const chartData = [
    {
      mes: 'Jul',
      soloCotizo: comparativaHistorica.julio.soloCotizo,
      avanzados: comparativaHistorica.julio.estadosAvanzados,
      emisiones: comparativaHistorica.julio.emisionesOnline,
      conversion: comparativaHistorica.julio.tasaConversion
    },
    {
      mes: 'Ago',
      soloCotizo: comparativaHistorica.agosto.soloCotizo,
      avanzados: comparativaHistorica.agosto.estadosAvanzados,
      emisiones: comparativaHistorica.agosto.emisionesOnline,
      conversion: comparativaHistorica.agosto.tasaConversion
    },
    {
      mes: 'Sep',
      soloCotizo: comparativaHistorica.septiembre.soloCotizo,
      avanzados: comparativaHistorica.septiembre.estadosAvanzados,
      emisiones: comparativaHistorica.septiembre.emisionesOnline,
      conversion: comparativaHistorica.septiembre.tasaConversion
    },
    {
      mes: 'Oct',
      soloCotizo: comparativaHistorica.octubre.soloCotizo,
      avanzados: comparativaHistorica.octubre.estadosAvanzados,
      emisiones: comparativaHistorica.octubre.emisionesOnline,
      conversion: comparativaHistorica.octubre.tasaConversion
    }
  ];

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('es-AR').format(value);
  };

  return (
    <div className="space-y-8">
      {/* Header alerta */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white">
        <div className="flex items-start space-x-4">
          <AlertTriangle className="w-12 h-12 flex-shrink-0" />
          <div>
            <h2 className="text-3xl font-bold mb-3">⚠️ Alerta Crítica: Conversión en Caída</h2>
            <p className="text-red-100 text-lg mb-4">
              La conversión cayó <strong>44.7%</strong> en 4 meses (Jul: 10.2% → Oct: 5.64%)
            </p>
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <p className="font-semibold mb-2">Diagnóstico:</p>
              <p className="text-red-100">{comparativaHistorica.tendencias.diagnostico}</p>
              <p className="text-red-100 mt-2">
                <strong>Causa:</strong> {comparativaHistorica.tendencias.causa}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gráfico evolución embudo */}
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">📊 Evolución del Embudo (Jul - Oct 2025)</h3>
        
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mes" />
            <YAxis />
            <Tooltip formatter={(value: number) => formatNumber(value)} />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="soloCotizo" 
              stroke="#8b5cf6" 
              strokeWidth={3}
              name="Solo Cotizó"
              dot={{ r: 6 }}
            />
            <Line 
              type="monotone" 
              dataKey="avanzados" 
              stroke="#3b82f6" 
              strokeWidth={3}
              name="Estados Avanzados"
              dot={{ r: 6 }}
            />
            <Line 
              type="monotone" 
              dataKey="emisiones" 
              stroke="#10b981" 
              strokeWidth={3}
              name="Emisiones"
              dot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Gráfico tasa conversión */}
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">📉 Tasa de Conversión (Tendencia Decreciente)</h3>
        
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mes" />
            <YAxis domain={[0, 12]} />
            <Tooltip formatter={(value: number) => `${value}%`} />
            <Line 
              type="monotone" 
              dataKey="conversion" 
              stroke="#ef4444" 
              strokeWidth={4}
              name="Tasa Conversión (%)"
              dot={{ r: 8, fill: '#ef4444' }}
            />
          </LineChart>
        </ResponsiveContainer>

        <div className="mt-6 p-4 bg-red-50 rounded-lg border-2 border-red-200">
          <p className="text-sm font-semibold text-red-700 mb-2">
            <TrendingDown className="w-5 h-5 inline mr-2" />
            Pérdida de eficiencia: -44.7% en 4 meses
          </p>
          <p className="text-sm text-gray-700">
            Esto significa que necesitamos <strong>casi el doble de tráfico</strong> para generar la misma cantidad de emisiones que en julio.
          </p>
        </div>
      </div>

      {/* Comparativa mes a mes */}
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">📅 Comparativa Mes a Mes</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Mes</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">Solo Cotizó</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">Avanzados</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">Emisiones</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">Conversión</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-700">Pérdida Post-Cot</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(comparativaHistorica).filter(([key]) => key !== 'tendencias').map(([key, data]: [string, any]) => (
                <tr key={key} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{data.mes}</td>
                  <td className="py-3 px-4 text-right">{formatNumber(data.soloCotizo)}</td>
                  <td className="py-3 px-4 text-right">{formatNumber(data.estadosAvanzados)}</td>
                  <td className="py-3 px-4 text-right font-bold text-green-600">{formatNumber(data.emisionesOnline)}</td>
                  <td className="py-3 px-4 text-right">
                    <span className={`font-bold ${
                      data.tasaConversion >= 10 ? 'text-green-600' :
                      data.tasaConversion >= 8 ? 'text-yellow-600' : 'text-red-600'
                    }`}>
                      {data.tasaConversion}%
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <span className="font-bold text-red-600">
                      {data.tasaPerdidaPostCotizacion}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Insights históricos */}
      <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 border-2 border-orange-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">🔍 Insights Clave</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <TrendingUp className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-gray-900">✅ Volumen creció +16.6%</p>
              <p className="text-gray-700 text-sm">Jul: 14,580 → Oct: 17,000 Solo Cotizó</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <TrendingDown className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-gray-900">❌ Conversión cayó -44.7%</p>
              <p className="text-gray-700 text-sm">Jul: 10.2% → Oct: 5.64%</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-gray-900">⚠️ Problema estructural</p>
              <p className="text-gray-700 text-sm">Pérdida post-cotización consistente ~71% durante 4 meses</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
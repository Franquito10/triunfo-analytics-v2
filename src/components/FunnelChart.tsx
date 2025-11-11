import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, CheckCircle } from 'lucide-react';
import octubreData from '../data/octubreData';

const COLORS = ['#8b5cf6', '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#ec4899', '#6366f1', '#14b8a6'];

export default function FunnelChart() {
  const { funnelCompleto } = octubreData;

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('es-AR').format(value);
  };

  return (
    <div className="space-y-8">
      {/* Header con KPIs */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-3">🔍 Embudo de Conversión Completo</h2>
        <p className="text-purple-100 text-lg mb-6">
          Análisis del journey completo desde landing hasta pago - Octubre 2025
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white bg-opacity-20 rounded-xl p-4">
            <p className="text-purple-100 text-sm">Visitantes Únicos</p>
            <p className="text-3xl font-bold">{formatNumber(86556)}</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-xl p-4">
            <p className="text-purple-100 text-sm">Emisiones</p>
            <p className="text-3xl font-bold">{formatNumber(517)}</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-xl p-4">
            <p className="text-purple-100 text-sm">Conversión Global</p>
            <p className="text-3xl font-bold">0.60%</p>
          </div>
          <div className="bg-white bg-opacity-20 rounded-xl p-4">
            <p className="text-purple-100 text-sm">Mayor Abandono</p>
            <p className="text-3xl font-bold">75.9%</p>
            <p className="text-purple-100 text-xs">Paso 1</p>
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
            margin={{ top: 5, right: 30, left: 120, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="nombre" type="category" width={150} />
            <Tooltip
              formatter={(value: number) => formatNumber(value)}
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
            />
            <Bar dataKey="usuarios" radius={[0, 8, 8, 0]}>
              {funnelCompleto.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Detalle paso a paso */}
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Análisis Detallado por Paso</h3>
        <div className="space-y-4">
          {funnelCompleto.map((step, index) => {
            const isHighAbandonment = step.abandonoPct > 50;
            const isMediumAbandonment = step.abandonoPct > 35 && step.abandonoPct <= 50;
            
            return (
              <motion.div
                key={step.paso}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`border-l-4 pl-6 pr-6 py-4 rounded-r-xl ${
                  isHighAbandonment 
                    ? 'bg-red-50 border-red-500'
                    : isMediumAbandonment
                    ? 'bg-orange-50 border-orange-500'
                    : 'bg-green-50 border-green-500'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-sm ${
                        isHighAbandonment ? 'bg-red-500' : isMediumAbandonment ? 'bg-orange-500' : 'bg-green-500'
                      }`}>
                        {step.paso}
                      </span>
                      <h4 className="font-bold text-gray-900 text-lg">{step.nombre}</h4>
                      {isHighAbandonment && <AlertTriangle className="w-5 h-5 text-red-600" />}
                      {!isHighAbandonment && !isMediumAbandonment && <CheckCircle className="w-5 h-5 text-green-600" />}
                    </div>
                    
                    <div className="mb-3">
                      <code className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded font-mono">
                        {step.url}
                      </code>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                      <div>
                        <p className="text-xs text-gray-500">Usuarios</p>
                        <p className="text-xl font-bold text-gray-900">{formatNumber(step.usuarios)}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">% del Total</p>
                        <p className="text-xl font-bold text-purple-600">{step.porcentajeDelTotal}%</p>
                      </div>
                      {index < funnelCompleto.length - 1 && (
                        <>
                          <div>
                            <p className="text-xs text-gray-500">Siguiente Paso</p>
                            <p className="text-xl font-bold text-green-600">{step.conversionAlSiguiente}%</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Abandono</p>
                            <p className={`text-xl font-bold ${
                              isHighAbandonment ? 'text-red-600' : isMediumAbandonment ? 'text-orange-600' : 'text-green-600'
                            }`}>
                              {step.abandonoPct}%
                            </p>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Insights por paso */}
                    {step.paso === 1 && (
                      <div className="mt-3 p-3 bg-white rounded-lg border-2 border-red-200">
                        <p className="text-sm font-semibold text-red-700 mb-1">⚠️ OPORTUNIDAD CRÍTICA #1</p>
                        <p className="text-sm text-gray-700">
                          El 75.9% abandona aquí. Simplificar el formulario inicial puede generar +13,500 cotizaciones/mes adicionales.
                        </p>
                      </div>
                    )}

                    {step.paso === 3 && (
                      <div className="mt-3 p-3 bg-white rounded-lg border-2 border-orange-200">
                        <p className="text-sm font-semibold text-orange-700 mb-1">💡 Insight</p>
                        <p className="text-sm text-gray-700">
                          47.4% abandona al ver los planes. Posible causa: precio percibido vs valor no claro.
                        </p>
                      </div>
                    )}

                    {step.paso === 8 && (
                      <div className="mt-3 p-3 bg-white rounded-lg border-2 border-green-200">
                        <p className="text-sm font-semibold text-green-700 mb-1">✅ Buen desempeño</p>
                        <p className="text-sm text-gray-700">
                          Los que llegan aquí tienen alta intención. El 61.2% del paso anterior completa el pago.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Resumen ejecutivo */}
      <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border-2 border-orange-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">📋 Resumen Ejecutivo</h3>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <TrendingDown className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-gray-900">Mayor pérdida: Landing → Datos Vehículo</p>
              <p className="text-gray-700">De 86,556 visitantes, solo 20,898 (24.1%) completan el primer formulario.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <p className="font-semibold text-gray-900">Mejor conversión: Datos Vehículo Final → Pago</p>
              <p className="text-gray-700">61.2% completa el pago una vez que llega al último paso.</p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-white rounded-lg">
            <p className="text-sm font-semibold text-gray-900 mb-2">💰 Impacto Potencial:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Reducir abandono paso 1 al 60% = <strong className="text-green-600">+13,529 cotizaciones/mes</strong></li>
              <li>• Optimizar paso 3 (Ver Planes) = <strong className="text-green-600">+1,693 cotizaciones/mes</strong></li>
              <li>• Total combinado potencial = <strong className="text-green-600">+155 emisiones adicionales/mes</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
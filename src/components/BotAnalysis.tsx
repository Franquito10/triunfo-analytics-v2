import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, DollarSign, TrendingDown } from 'lucide-react';
import octubreData from '../data/octubreData';

export default function BotAnalysis() {
  const { clarity, problemaBots } = octubreData;

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('es-AR').format(value);
  };

  // Data para pie chart
  const sesionesData = [
    { name: 'Sesiones Bot', value: clarity.sesionesBot, color: '#ef4444' },
    { name: 'Sesiones Humanas', value: clarity.sesionesHumanas, color: '#10b981' }
  ];

  // Data para tipos de bots (del clarity dashboard de octubre)
  const tiposBotData = [
    { tipo: 'Interacción Sospechosa', cantidad: 2100, pct: 33.5 },
    { tipo: 'Fraude PPC Ads', cantidad: 1890, pct: 30.1 },
    { tipo: 'Red Sospechosa', cantidad: 1420, pct: 22.6 },
    { tipo: 'Dispositivo Sospechoso', cantidad: 862, pct: 13.8 }
  ];

  const COLORS_TIPOS = ['#ef4444', '#f97316', '#f59e0b', '#eab308'];

  return (
    <div className="space-y-8">
      {/* Header crítico */}
      <div className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 rounded-2xl p-8 text-white">
        <div className="flex items-start space-x-4">
          <Shield className="w-16 h-16 flex-shrink-0" />
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-3">🤖 Problema Crítico: 67% del Tráfico son BOTS</h2>
            <p className="text-red-100 text-lg mb-4">
              De <strong>{formatNumber(clarity.sesionesTotales)}</strong> sesiones totales en Octubre 2025, 
              <strong> {formatNumber(clarity.sesionesBot)} ({clarity.porcentajeBotPct}%)</strong> son bots.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white bg-opacity-20 rounded-xl p-4">
                <p className="text-red-100 text-sm mb-1">Sesiones Bot</p>
                <p className="text-4xl font-bold">{formatNumber(clarity.sesionesBot)}</p>
                <p className="text-red-100 text-sm mt-1">{clarity.porcentajeBotPct}% del total</p>
              </div>
              
              <div className="bg-white bg-opacity-20 rounded-xl p-4">
                <p className="text-red-100 text-sm mb-1">Sesiones Reales</p>
                <p className="text-4xl font-bold">{formatNumber(clarity.sesionesHumanas)}</p>
                <p className="text-red-100 text-sm mt-1">{clarity.porcentajeHumanosPct}% del total</p>
              </div>
              
              <div className="bg-white bg-opacity-20 rounded-xl p-4">
                <p className="text-red-100 text-sm mb-1">Desperdicio</p>
                <p className="text-4xl font-bold">67¢</p>
                <p className="text-red-100 text-sm mt-1">por cada $1 invertido</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visualización principal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Pie chart */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">📊 Distribución de Sesiones</h3>
          
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={sesionesData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {sesionesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => formatNumber(value)} />
            </PieChart>
          </ResponsiveContainer>

          <div className="mt-6 space-y-3">
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-red-500 rounded"></div>
                <span className="font-semibold text-gray-900">Bots</span>
              </div>
              <span className="font-bold text-red-600">{formatNumber(clarity.sesionesBot)}</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span className="font-semibold text-gray-900">Humanos</span>
              </div>
              <span className="font-bold text-green-600">{formatNumber(clarity.sesionesHumanas)}</span>
            </div>
          </div>
        </div>

        {/* Tipos de bots */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">🔍 Tipos de Bots Detectados</h3>
          
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={tiposBotData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="tipo" type="category" width={150} />
              <Tooltip formatter={(value: number) => formatNumber(value)} />
              <Bar dataKey="cantidad" radius={[0, 8, 8, 0]}>
                {tiposBotData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS_TIPOS[index]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          <div className="mt-6 space-y-2">
            {tiposBotData.map((bot, index) => (
              <div key={bot.tipo} className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded`} style={{ backgroundColor: COLORS_TIPOS[index] }}></div>
                  <span className="text-gray-700">{bot.tipo}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-semibold text-gray-900">{formatNumber(bot.cantidad)}</span>
                  <span className="text-gray-500">({bot.pct}%)</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Impacto financiero */}
      <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-200">
        <div className="flex items-start space-x-4">
          <DollarSign className="w-12 h-12 text-red-600 flex-shrink-0" />
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">💸 Impacto Financiero del Problema</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-xl p-6">
                <p className="text-sm text-gray-600 mb-2">Por cada $1 invertido en publicidad</p>
                <div className="flex items-baseline space-x-2">
                  <p className="text-5xl font-bold text-red-600">$0.67</p>
                  <p className="text-gray-700">se va a bots</p>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <p className="text-sm text-gray-600">Solo llega a humanos reales:</p>
                  <p className="text-2xl font-bold text-green-600">$0.33</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6">
                <p className="text-sm text-gray-600 mb-2">CPL Real vs Aparente</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-500">CPL Aparente (con bots)</p>
                    <p className="text-2xl font-bold text-gray-900">$747.54</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingDown className="w-5 h-5 text-red-600" />
                    <p className="text-sm text-red-600 font-semibold">El CPL real es 3x mayor</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">CPL Real (sin bots)</p>
                    <p className="text-3xl font-bold text-red-600">~$2,265</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-3">📉 Métricas Infladas</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span><strong>Sesiones totales:</strong> Infladas 7.5% (6,476 bots de 86,556)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span><strong>Tasa de rebote:</strong> Distorsionada (bots inflan artificialmente)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span><strong>Tiempo en sitio:</strong> Datos no confiables</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-600 font-bold">•</span>
                  <span><strong>Páginas por sesión:</strong> Promedio alterado por bots</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Solución propuesta */}
      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border-2 border-green-200">
        <div className="flex items-start space-x-4">
          <Shield className="w-12 h-12 text-green-600 flex-shrink-0" />
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">✅ Plan de Acción Anti-Bot</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Implementar reCAPTCHA v3</h4>
                <p className="text-sm text-gray-700 mb-3">
                  Invisible para usuarios, detecta bots automáticamente
                </p>
                <div className="text-xs text-gray-600">
                  <p><strong>Timeframe:</strong> 1 semana</p>
                  <p><strong>Esfuerzo:</strong> Bajo</p>
                  <p><strong>Impacto:</strong> Bloquea ~60% bots</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Filtros en GA4 y Clarity</h4>
                <p className="text-sm text-gray-700 mb-3">
                  Excluir IPs conocidas de bots y tráfico sospechoso
                </p>
                <div className="text-xs text-gray-600">
                  <p><strong>Timeframe:</strong> 2-3 días</p>
                  <p><strong>Esfuerzo:</strong> Muy bajo</p>
                  <p><strong>Impacto:</strong> Limpia métricas</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Monitoreo Continuo</h4>
                <p className="text-sm text-gray-700 mb-3">
                  Dashboard semanal de detección de bots
                </p>
                <div className="text-xs text-gray-600">
                  <p><strong>Timeframe:</strong> Ongoing</p>
                  <p><strong>Esfuerzo:</strong> Bajo</p>
                  <p><strong>Impacto:</strong> Prevención</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-6 bg-white rounded-xl">
              <h4 className="font-bold text-gray-900 mb-3">🎯 Resultados Esperados</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Reducción de bots</p>
                  <p className="text-3xl font-bold text-green-600">-85%</p>
                  <p className="text-xs text-gray-500">De 67% a &lt;10%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Ahorro mensual</p>
                  <p className="text-3xl font-bold text-green-600">~65%</p>
                  <p className="text-xs text-gray-500">Del presupuesto actual</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Métricas confiables</p>
                  <p className="text-3xl font-bold text-green-600">100%</p>
                  <p className="text-xs text-gray-500">Datos limpios</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
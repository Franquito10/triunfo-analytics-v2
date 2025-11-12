import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, Users, DollarSign, Target, 
  CheckCircle, Zap, BarChart3, Activity,
  MousePointerClick, AlertTriangle, Eye,
  Smartphone, Monitor, Globe, ArrowRight,
  Shield  // ← AGREGAR ESTA
} from 'lucide-react';
import octubreData from '../data/octubreData';
import FunnelChart from './FunnelChart';
import ChannelComparison from './ChannelComparison';
import BotAnalysis from './BotAnalysis';
import HistoricalComparison from './HistoricalComparison';

interface MetricCardProps {
  title: string;
  value: string;
  subtitle?: string;
  trend?: number;
  icon: React.ElementType;
  colorClass: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, subtitle, trend, icon: Icon, colorClass }) => {
  const isPositive = trend && trend > 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl ${colorClass} bg-opacity-10`}>
          <Icon className={`w-6 h-6 ${colorClass.replace('bg-', 'text-')}`} />
        </div>
        {trend && (
          <div className={`flex items-center text-sm font-medium ${isPositive ? 'text-green-600' : 'text-orange-600'}`}>
            {isPositive ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingUp className="w-4 h-4 mr-1 rotate-180" />}
            {Math.abs(trend)}%
          </div>
        )}
      </div>
      <h3 className="text-gray-500 text-sm font-medium mb-2">{title}</h3>
      <p className="text-3xl font-bold text-gray-900 mb-1">{value}</p>
      {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
    </motion.div>
  );
};

const CircularProgress: React.FC<{ percentage: number; label: string; color: string }> = ({ percentage, label, color }) => {
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (percentage / 100) * circumference;
  
  return (
    <div className="flex flex-col items-center">
      <svg className="w-32 h-32 transform -rotate-90">
        <circle cx="64" cy="64" r="45" stroke="#e5e7eb" strokeWidth="10" fill="none" />
        <circle
          cx="64"
          cy="64"
          r="45"
          stroke={color}
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="text-center mt-2">
        <p className="text-2xl font-bold text-gray-900">{percentage.toFixed(1)}%</p>
        <p className="text-sm text-gray-600">{label}</p>
      </div>
    </div>
  );
};

export default function Dashboard() {
  const { resumen, clarity, oportunidades, dispositivos, funnelGA4 } = octubreData;
  const [activeTab, setActiveTab] = useState('overview');
  const [showMontos, setShowMontos] = useState(false); // ← AGREGAR ESTA LÍNEA

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

const tabs = [
  { id: 'overview', label: '📊 General', icon: Activity },
  { id: 'funnel', label: '🔍 Embudo', icon: BarChart3 },
  { id: 'bots', label: '🤖 Problema Bots', icon: Shield },
  { id: 'canales', label: '📢 Canales', icon: Globe },
  { id: 'historico', label: '📈 Histórico', icon: TrendingUp },
  { id: 'clarity', label: '🎨 UX & Clarity', icon: Eye },
  { id: 'oportunidades', label: '⚡ Oportunidades', icon: Zap }
];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold mb-2">Triunfo Analytics Pro</h1>
                <p className="text-purple-100 text-lg">Análisis Integral - Octubre 2025</p>
<p className="text-purple-200 text-sm mt-1">Periodo: 01/10/2025 - 31/10/2025 (31 días)</p>
              </div>
              <div className="text-right">
                <div className="bg-white bg-opacity-20 rounded-xl px-6 py-3 backdrop-blur-sm">
                  <p className="text-sm text-purple-100 mb-1">Emisiones</p>
                  <p className="text-4xl font-bold">{formatNumber(resumen.emisionesReales)}</p>
                  <p className="text-sm text-purple-100">Tasa: {resumen.tasaEmision}%</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navegación de pestañas */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-purple-600 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* TAB: BOTS */}
{activeTab === 'bots' && (
  <motion.div
    key="bots"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 20 }}
    transition={{ duration: 0.3 }}
  >
    <BotAnalysis />
  </motion.div>
)}

{/* TAB: HISTÓRICO */}
{activeTab === 'historico' && (
  <motion.div
    key="historico"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 20 }}
    transition={{ duration: 0.3 }}
  >
    <HistoricalComparison />
  </motion.div>
)}
        <AnimatePresence mode="wait">
          
          {/* TAB: OVERVIEW GENERAL */}
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Toggle para ver montos */}
              <div className="flex justify-end mb-4">
                <button
                  onClick={() => setShowMontos(!showMontos)}
                  className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all text-sm font-medium text-gray-700 hover:text-purple-600"
                >
                  <DollarSign className="w-4 h-4" />
                  <span>{showMontos ? 'Ver Porcentajes' : 'Ver Montos'}</span>
                </button>
              </div>

              {/* Métricas principales */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <MetricCard
                  title="Inversión Publicitaria"
                  value={showMontos ? formatCurrency(resumen.inversionTotal) : "100%"}
                  subtitle="Google 31% + Meta 69%"
                  icon={DollarSign}
                  colorClass="bg-blue-600"
                />
                <MetricCard
                  title="Leads Generados"
                  value={formatNumber(resumen.leadsReales)}
                  subtitle="Todos los canales"
                  trend={8}
                  icon={Users}
                  colorClass="bg-green-600"
                />
                <MetricCard
                  title="Emisiones Reales"
                  value={formatNumber(resumen.emisionesReales)}
                  subtitle={`Tasa: ${resumen.tasaEmision}%`}
                  icon={CheckCircle}
                  colorClass="bg-purple-600"
                />
                <MetricCard
                  title="Conversión Global"
                  value={`${resumen.tasaEmision}%`}
                  subtitle="Lead → Emisión"
                  icon={Target}
                  colorClass="bg-orange-600"
                />
              </div>

              {/* Comparativa por canal */}
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">🎯 Rendimiento por Canal</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Orgánico */}
                  <div className="border-2 border-green-200 rounded-xl p-6 bg-green-50">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">🌱 Orgánico</h3>
                      <span className="px-3 py-1 bg-green-600 text-white text-xs font-bold rounded-full">
                        MEJOR TASA
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Inversión:</span>
                        <span className="font-bold text-green-600">0%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Leads:</span>
                        <span className="font-bold">{resumen.leadsOrganicoPct}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Emisiones:</span>
                        <span className="font-bold text-green-600">{resumen.emisionesOrganicoPct}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tasa conversión:</span>
                        <span className="font-bold text-green-600">{resumen.tasaEmisionOrganico}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">ROI Relativo:</span>
                        <span className="font-bold text-green-600">{resumen.roiRelativoOrganico}/100</span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-white rounded-lg">
                      <p className="text-sm text-gray-700">
                        💡 <strong>Insight:</strong> 0% inversión genera 46% de emisiones. Canal más rentable.
                      </p>
                    </div>
                  </div>

                  {/* Google Ads */}
                  <div className="border-2 border-blue-200 rounded-xl p-6 bg-blue-50">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">🔍 Google Ads</h3>
                      <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                        MEDIO
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Inversión:</span>
                        <span className="font-bold">{resumen.inversionGoogleAdsPct}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Leads:</span>
                        <span className="font-bold">{resumen.leadsGoogleAdsPct}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Emisiones:</span>
                        <span className="font-bold">{resumen.emisionesGoogleAdsPct}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tasa conversión:</span>
                        <span className="font-bold">{resumen.tasaEmisionGoogleAds}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">ROI Relativo:</span>
                        <span className="font-bold text-blue-600">{resumen.roiRelativoGoogleAds}/100</span>
                      </div>
                    </div>
                    {showMontos && (
                      <div className="mt-3 pt-3 border-t border-blue-200">
                        <p className="text-xs text-gray-600">Monto: {formatCurrency(resumen.inversionGoogleAds)}</p>
                      </div>
                    )}
                  </div>

                  {/* Meta Ads */}
                  <div className="border-2 border-orange-200 rounded-xl p-6 bg-orange-50">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">📱 Meta Ads</h3>
                      <span className="px-3 py-1 bg-orange-600 text-white text-xs font-bold rounded-full">
                        ÁREA DE MEJORA
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Inversión:</span>
                        <span className="font-bold text-orange-600">{resumen.inversionMetaAdsPct}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Leads:</span>
                        <span className="font-bold">{resumen.leadsMetaAdsPct}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Emisiones:</span>
                        <span className="font-bold text-orange-600">{resumen.emisionesMetaAdsPct}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tasa conversión:</span>
                        <span className="font-bold">{resumen.tasaEmisionMetaAds}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">ROI Relativo:</span>
                        <span className="font-bold text-red-600">{resumen.roiRelativoMetaAds}/100</span>
                      </div>
                    </div>
                    {showMontos && (
                      <div className="mt-3 pt-3 border-t border-orange-200">
                        <p className="text-xs text-gray-600">Monto: {formatCurrency(resumen.inversionMetaAds)}</p>
                      </div>
                    )}
                    <div className="mt-4 p-3 bg-white rounded-lg">
                      <p className="text-sm text-gray-700">
                        🎯 <strong>Acción:</strong> 69% inversión → 0.4% emisiones. Reducir 70% y rebalancear.
                      </p>
                    </div>
                  </div>

                  {/* Referidos */}
                  <div className="border-2 border-purple-200 rounded-xl p-6 bg-purple-50">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">🤝 Referidos</h3>
                      <span className="px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-full">
                        TOP EMISIÓN
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Inversión:</span>
                        <span className="font-bold text-purple-600">0%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Leads:</span>
                        <span className="font-bold">{resumen.leadsReferidoPct}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Emisiones:</span>
                        <span className="font-bold text-purple-600">{resumen.emisionesReferidoPct}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Tasa conversión:</span>
                        <span className="font-bold text-purple-600">{resumen.tasaEmisionReferido}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">ROI Relativo:</span>
                        <span className="font-bold text-purple-600">{resumen.roiRelativoReferido}/100</span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-white rounded-lg">
                      <p className="text-sm text-gray-700">
                        🚀 <strong>Potencial:</strong> Mayor tasa de conversión (4.55%). Crear programa estructurado.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

                  {/* Dispositivos */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">📱 Distribución por Dispositivo</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <CircularProgress percentage={77.7} label="Mobile" color="#8b5cf6" />
                    <p className="mt-4 text-sm text-gray-600">{formatNumber(dispositivos.mobile.sesiones)} sesiones</p>
                    <p className="text-xs text-gray-500 mt-1">Conversión: {dispositivos.conversionMobilePct}%</p>
                  </div>
                  <div className="text-center">
                    <CircularProgress percentage={22.0} label="Desktop" color="#3b82f6" />
                    <p className="mt-4 text-sm text-gray-600">{formatNumber(dispositivos.desktop.sesiones)} sesiones</p>
                    <p className="text-xs text-gray-500 mt-1">Conversión: {dispositivos.conversionDesktopPct}%</p>
                  </div>
                  <div className="text-center">
                    <CircularProgress percentage={0.3} label="Tablet" color="#10b981" />
                    <p className="mt-4 text-sm text-gray-600">{formatNumber(dispositivos.tablet.sesiones)} sesiones</p>
                    <p className="text-xs text-gray-500 mt-1">Conversión: {dispositivos.conversionTabletPct}%</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    💡 <strong>Insight:</strong> 77.7% del tráfico es mobile, pero convierte 1.6pp menos que desktop. Priorizar optimizaciones mobile-first.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB: EMBUDO */}
          {activeTab === 'funnel' && (
            <motion.div
              key="funnel"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <FunnelChart />
            </motion.div>
          )}

          {/* TAB: CANALES */}
          {activeTab === 'canales' && (
            <motion.div
              key="canales"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <ChannelComparison />
            </motion.div>
          )}

          {/* TAB: CLARITY (continuamos en el siguiente mensaje) */}
          {activeTab === 'clarity' && (
            <motion.div
              key="clarity"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-8">
                {/* Métricas de Clarity */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">🎨 Microsoft Clarity - Experiencia de Usuario</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="text-center p-6 bg-blue-50 rounded-xl">
                      <Eye className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                      <p className="text-3xl font-bold text-gray-900">{formatNumber(clarity.sesionesTotales)}</p>
                      <p className="text-sm text-gray-600 mt-1">Sesiones Totales</p>
                    </div>
                    <div className="text-center p-6 bg-green-50 rounded-xl">
                      <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
                      <p className="text-3xl font-bold text-gray-900">{formatNumber(clarity.usuariosUnicos)}</p>
                      <p className="text-sm text-gray-600 mt-1">Usuarios Únicos</p>
                    </div>
                    <div className="text-center p-6 bg-purple-50 rounded-xl">
                      <Activity className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                      <p className="text-3xl font-bold text-gray-900">{clarity.scrollDepth}%</p>
                      <p className="text-sm text-gray-600 mt-1">Scroll Depth</p>
                    </div>
                    <div className="text-center p-6 bg-orange-50 rounded-xl">
                      <AlertTriangle className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                      <p className="text-3xl font-bold text-gray-900">{formatNumber(clarity.deadClicks)}</p>
                      <p className="text-sm text-gray-600 mt-1">Dead Clicks</p>
                    </div>
                  </div>

                  {/* Señales de fricción */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 border-2 border-red-200 rounded-xl bg-red-50">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-gray-900">🚨 Dead Clicks</h3>
                        <span className="text-red-600 font-bold">{clarity.tasaDeadClicksPct}%</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">
                        {formatNumber(clarity.deadClicks)} sesiones con clics que no responden
                      </p>
                      <div className="mt-3 p-2 bg-white rounded">
                        <p className="text-xs text-gray-600">
                          <strong>Impacto:</strong> Usuarios frustrados, alto abandono
                        </p>
                      </div>
                    </div>

                    <div className="p-6 border-2 border-yellow-200 rounded-xl bg-yellow-50">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-gray-900">⚡ Quick Backs</h3>
                        <span className="text-yellow-600 font-bold">{clarity.tasaQuickBacksPct.toFixed(2)}%</span>

                      </div>
                      <p className="text-sm text-gray-700 mb-2">
                        {formatNumber(clarity.quickBacks)} sesiones con regreso rápido
                      </p>
                      <div className="mt-3 p-2 bg-white rounded">
                        <p className="text-xs text-gray-600">
                          <strong>Causa:</strong> Expectativa no cumplida o confusión
                        </p>
                      </div>
                    </div>

                    <div className="p-6 border-2 border-green-200 rounded-xl bg-green-50">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-gray-900">✅ Rage Clicks</h3>
                        <span className="text-green-600 font-bold">0.42%</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">
                        {formatNumber(clarity.rageClicks)} sesiones (muy bajo)
                      </p>
                      <div className="mt-3 p-2 bg-white rounded">
                        <p className="text-xs text-gray-600">
                          <strong>Estado:</strong> Excelente, mantener
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Performance score */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">⚡ Core Web Vitals</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">LCP (Largest Contentful Paint)</p>
                        <p className="text-3xl font-bold text-orange-600">{clarity.lcp}s</p>
                        <p className="text-xs text-gray-500 mt-1">Necesita mejora (&lt;2.5s ideal)</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">INP (Interaction to Next Paint)</p>
                        <p className="text-3xl font-bold text-orange-600">{clarity.inp}ms</p>
                        <p className="text-xs text-gray-500 mt-1">Necesita mejora (&lt;200ms ideal)</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">CLS (Cumulative Layout Shift)</p>
                        <p className="text-3xl font-bold text-red-600">{clarity.cls}</p>
                        <p className="text-xs text-gray-500 mt-1">Requiere atención (&lt;0.1 ideal)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB: OPORTUNIDADES */}
          {activeTab === 'oportunidades' && (
            <motion.div
              key="oportunidades"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 mb-8 text-white">
                <h2 className="text-3xl font-bold mb-3">⚡ Áreas de Alto Impacto</h2>
                <p className="text-purple-100 text-lg">
                  Oportunidades identificadas para maximizar resultados en los próximos 90 días
                </p>
              </div>

              <div className="space-y-6">
                {oportunidades.map((oportunidad, index) => (
                  <motion.div
                    key={oportunidad.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="flex items-center justify-center w-8 h-8 bg-purple-600 text-white rounded-full font-bold text-sm">
                            {oportunidad.prioridad}
                          </span>
                          <h3 className="text-xl font-bold text-gray-900">{oportunidad.titulo}</h3>
                        </div>
                        <p className="text-gray-600 mb-4">{oportunidad.descripcion}</p>
                        
                        <div className="flex flex-wrap gap-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            oportunidad.impacto === 'Alto' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            Impacto: {oportunidad.impacto}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            oportunidad.esfuerzo === 'Bajo' 
                              ? 'bg-green-100 text-green-700' 
                              : oportunidad.esfuerzo === 'Medio'
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-orange-100 text-orange-700'
                          }`}>
                            Esfuerzo: {oportunidad.esfuerzo}
                          </span>
                          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-700">
                            {oportunidad.categoria}
                          </span>
                        </div>
                      </div>
                      
                      <div className="ml-6 text-right">
                        <p className="text-sm text-gray-500 mb-1">Impacto estimado</p>
                        <p className="text-2xl font-bold text-purple-600">{oportunidad.impactoEstimadoPct}</p>
                        <p className="text-sm text-gray-600 mt-2">{formatCurrency(oportunidad.ingresoEstimado)}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-end mt-4">
                      <button className="flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors">
                        Ver plan detallado
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Proyección */}
              <div className="mt-8 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border-2 border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">📈 Proyección con Optimizaciones</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6">
                    <p className="text-gray-600 text-sm mb-2">Emisiones proyectadas</p>
                    <p className="text-3xl font-bold text-gray-900 mb-1">735</p>
                    <p className="text-green-600 font-semibold">+42% vs actual</p>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <p className="text-gray-600 text-sm mb-2">Ahorro mensual</p>
                    <p className="text-3xl font-bold text-gray-900 mb-1">{formatCurrency(2800000)}</p>
                    <p className="text-green-600 font-semibold">Reduciendo Meta 50%</p>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <p className="text-gray-600 text-sm mb-2">Ingreso adicional</p>
                    <p className="text-3xl font-bold text-gray-900 mb-1">{formatCurrency(10900000)}</p>
                    <p className="text-green-600 font-semibold">+218 emisiones/mes</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
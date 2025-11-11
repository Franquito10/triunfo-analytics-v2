// Datos reales de Triunfo Seguros - Octubre 2024
export const octubreData = {
  periodo: {
    inicio: '2024-10-01',
    fin: '2024-11-01',
    dias: 31
  },
  
 resumen: {
    // INVERSIÓN (valores absolutos para cálculos internos, mostrar como %)
    inversionTotal: 6853794,
    inversionGoogleAds: 2120641,
    inversionMetaAds: 4733153,
    
    // Leads y Emisiones (valores absolutos)
    leadsReales: 9169,
    leadsOrganico: 5614,
    leadsReferido: 968,
    leadsGoogleAds: 2036,
    leadsMetaAds: 551,
    
    emisionesReales: 517,
    emisionesOrganico: 238,
    emisionesReferido: 44,
    emisionesGoogleAds: 41,
    emisionesMetaAds: 2,
    
    // CPL (Costo Por Lead)
    cplPromedio: 747.54,
    cplGoogleAds: 1041.57,
    cplMetaAds: 1913.16,
    
    // Tasas de conversión
    tasaEmisionGlobal: 5.64,
    tasaEmisionOrganico: 4.24,
    tasaEmisionReferido: 4.55,
    tasaEmisionGoogleAds: 2.01,
    tasaEmisionMetaAds: 0.36,
    tasaEmision: 5.64,
    
    // Distribución de leads por canal (%)
    leadsOrganicoPct: 61.2,
    leadsReferidoPct: 10.6,
    leadsGoogleAdsPct: 22.2,
    leadsMetaAdsPct: 6.0,
    
    // Distribución de emisiones por canal (%)
    emisionesOrganicoPct: 46.0,
    emisionesReferidoPct: 8.5,
    emisionesGoogleAdsPct: 7.9,
    emisionesMetaAdsPct: 0.4,
    
    // Inversión publicitaria (%)
    inversionGoogleAdsPct: 31,
    inversionMetaAdsPct: 69,
    
    // Eficiencia relativa (índice base 100 = orgánico)
    roiRelativoOrganico: 100,
    roiRelativoReferido: 107,
    roiRelativoGoogleAds: 47,
    roiRelativoMetaAds: 8
  },

 clarity: {
    // Sesiones totales
    sesionesTotales: 86556,
    sesionesBot: 6476,
    sesionesHumanas: 80080,
    porcentajeBotPct: 7.5,
    porcentajeHumanosPct: 92.5,
    
    usuariosUnicos: 67241,
    paginasPorSesion: 1.98,
    scrollDepth: 59.92,
    tiempoActivo: 54,
    
    // Señales de fricción (AGREGAR ESTAS)
    rageClicks: 362,
    tasaRageClicksPct: 0.45,
    deadClicks: 11793,
    tasaDeadClicksPct: 14.73,      // ← ESTA FALTABA
    quickBacks: 2245,
    tasaQuickBacksPct: 2.80,        // ← ESTA FALTABA
    
    // Core Web Vitals
    performanceScore: 61,
    lcp: 3.4,
    inp: 470,
    cls: 0.63,
    
    // Sources (canales de tráfico)
    topSources: [
      { source: 'direct', sesiones: 39000, pct: 48.7 },
      { source: 'www.google.com', sesiones: 15000, pct: 18.7 },
      { source: 'instagram.com', sesiones: 813, pct: 1.0 },
      { source: 'm.facebook.com', sesiones: 672, pct: 0.8 }
    ],
    
    // Campañas
    topCampaigns: [
      { campaignId: '120229717571420301', sesiones: 891, usuarios: 465 },
      { campaignId: '120231664918720301', sesiones: 663, usuarios: 258 },
      { campaignId: '120229945315710301', sesiones: 311, usuarios: 189 }
    ],
    
    // Channel groups
    channelGroups: [
      { channel: 'direct', eventos: 39000, pct: 62.9 },
      { channel: 'paid search', eventos: 15000, pct: 24.2 },
      { channel: 'referral', eventos: 5000, pct: 8.1 },
      { channel: 'paid social', eventos: 1800, pct: 2.9 },
      { channel: 'organic search', eventos: 394, pct: 0.6 },
      { channel: 'organic social', eventos: 82, pct: 0.1 }
    ]
  },
  // Funnel completo (con URLs y porcentajes de conversión)
  funnelCompleto: [
    {
      paso: 1,
      nombre: 'Landing',
      url: '/',
      usuarios: 86556,
      porcentajeDelTotal: 100,
      conversionAlSiguiente: 24.1,
      abandonoPct: 75.9
    },
    {
      paso: 2,
      nombre: 'Datos Vehículo',
      url: '/applicant',
      usuarios: 20898,
      porcentajeDelTotal: 24.1,
      conversionAlSiguiente: 43.9,
      abandonoPct: 56.1
    },
    {
      paso: 3,
      nombre: 'Ver Cotización',
      url: '/estimate',
      usuarios: 9169,
      porcentajeDelTotal: 10.6,
      conversionAlSiguiente: 52.6,
      abandonoPct: 47.4
    },
    {
      paso: 4,
      nombre: 'Seleccionar Plan',
      url: '/estimate/.../quote',
      usuarios: 4826,
      porcentajeDelTotal: 5.6,
      conversionAlSiguiente: 56.8,
      abandonoPct: 43.2
    },
    {
      paso: 5,
      nombre: 'Elegir Productor',
      url: '/policyRequest/.../agents',
      usuarios: 2742,
      porcentajeDelTotal: 3.2,
      conversionAlSiguiente: 56.7,
      abandonoPct: 43.3
    },
    {
      paso: 6,
      nombre: 'Datos Cliente',
      url: '/policyRequest/.../customer',
      usuarios: 1554,
      porcentajeDelTotal: 1.8,
      conversionAlSiguiente: 54.4,
      abandonoPct: 45.6
    },
    {
      paso: 7,
      nombre: 'Datos Vehículo Final',
      url: '/policyRequest/.../vehicle',
      usuarios: 845,
      porcentajeDelTotal: 1.0,
      conversionAlSiguiente: 61.2,
      abandonoPct: 38.8
    },
    {
      paso: 8,
      nombre: 'Pago',
      url: '/policyRequest/.../payment',
      usuarios: 517,
      porcentajeDelTotal: 0.6,
      conversionAlSiguiente: 100,
      abandonoPct: 0
    }
    
  ],
  // ============================================
  // FUNNEL GA4 (eventos de Google Analytics 4)
  // ============================================
  funnelGA4: [
    { paso: 'Solo Cotizo', eventos: 32088, usuarios: 9253, orden: 1 },
    { paso: 'Ver Planes', eventos: 44124, usuarios: 15732, orden: 2 },
    { paso: 'Click Contratar', eventos: 18329, usuarios: 7167, orden: 3 },
    { paso: 'Datos Personales', eventos: 5671, usuarios: 3582, orden: 4 },
    { paso: 'Enviar Form Vehículo', eventos: 4030, usuarios: 3132, orden: 5 },
    { paso: 'Ver Métodos de Pago', eventos: 5147, usuarios: 2827, orden: 6 },
    { paso: 'Pago Enviado', eventos: 10037, usuarios: 2742, orden: 7 }
  ],

  dispositivos: {
    mobilePct: 77.7,
    desktopPct: 22.0,
    tabletPct: 0.3,
    
    // Agregá estas propiedades
    mobile: {
      sesiones: 67237,
      porcentaje: 77.7
    },
    desktop: {
      sesiones: 19019,
      porcentaje: 22.0
    },
    tablet: {
      sesiones: 300,
      porcentaje: 0.3
    },
    
    // Conversión por dispositivo
    conversionMobilePct: 5.2,
    conversionDesktopPct: 6.8,
    conversionTabletPct: 4.1
  },

  oportunidades: [
    {
      id: 1,
      titulo: 'Reducir abandono en Landing → Datos Vehículo',
      descripcion: '75.9% abandona antes de completar datos. Mayor oportunidad del funnel.',
      impacto: 'Crítico',
      esfuerzo: 'Medio',
      prioridad: 1,
      impactoEstimadoPct: '+50% conversión primer paso',
      mejoraPotencialEmisiones: 215,
      ingresoEstimado: 10750000,  // ← AGREGAR ESTA
      categoria: 'UX/UI',
      kpis: {
        actual: '24.1% completan',
        objetivo: '36% completan',
        incremento: '+11.9pp'
      }
    },
    {
      id: 2,
      titulo: 'Rebalancear inversión publicitaria',
      descripcion: 'Meta Ads: 69% inversión → 0.4% emisiones vs Google Ads: 31% inversión → 7.9% emisiones',
      impacto: 'Alto',
      esfuerzo: 'Bajo',
      prioridad: 2,
      impactoEstimadoPct: 'Reducir Meta 70%',
      mejoraPotencialEmisiones: 95,
      ingresoEstimado: 4750000,  // ← AGREGAR ESTA
      categoria: 'Marketing',
      kpis: {
        actual: 'ROI Meta = 8/100',
        objetivo: 'ROI Meta = 0',
        ahorro: '~$3.3M/mes'
      }
    },
    {
      id: 3,
      titulo: 'Resolver 11,793 dead clicks',
      descripcion: '14.73% sesiones con clics que no responden. Daña credibilidad y conversión.',
      impacto: 'Alto',
      esfuerzo: 'Bajo',
      prioridad: 3,
      impactoEstimadoPct: '+8% conversión',
      mejoraPotencialEmisiones: 41,
      ingresoEstimado: 2050000,  // ← AGREGAR ESTA
      categoria: 'Técnico',
      kpis: {
        actual: '14.73% sesiones afectadas',
        objetivo: '<2% sesiones afectadas',
        mejora: '-12.73pp'
      }
    },
    {
      id: 4,
      titulo: 'Optimizar experiencia mobile',
      descripcion: '93.5% tráfico "Solo Cotizó" es mobile, pero conversión 1.6pp menor que desktop',
      impacto: 'Alto',
      esfuerzo: 'Medio',
      prioridad: 4,
      impactoEstimadoPct: '+18% conversión mobile',
      mejoraPotencialEmisiones: 88,
      ingresoEstimado: 4400000,  // ← AGREGAR ESTA
      categoria: 'UX/UI',
      kpis: {
        actual: '5.2% mobile vs 6.8% desktop',
        objetivo: '6.5% mobile',
        incremento: '+1.3pp'
      }
    },
    {
      id: 5,
      titulo: 'Potenciar canales orgánicos (SEO + Referidos)',
      descripcion: 'Orgánico 46% emisiones + Referidos 8.5% = 54.5% sin costo de adquisición',
      impacto: 'Alto',
      esfuerzo: 'Alto',
      prioridad: 5,
      impactoEstimadoPct: '+30% leads orgánicos',
      mejoraPotencialEmisiones: 142,
      ingresoEstimado: 7100000,  // ← AGREGAR ESTA
      categoria: 'Marketing',
      kpis: {
        actual: '61.2% leads orgánicos',
        objetivo: '75% leads orgánicos',
        incremento: '+13.8pp'
      }
    },
    {
      id: 6,
      titulo: 'Mejorar Core Web Vitals',
      descripcion: 'LCP 3.4s (ideal <2.5s), INP 470ms (ideal <200ms), CLS 0.63 (ideal <0.1)',
      impacto: 'Medio',
      esfuerzo: 'Alto',
      prioridad: 6,
      impactoEstimadoPct: '+12% conversión',
      mejoraPotencialEmisiones: 62,
      ingresoEstimado: 3100000,  // ← AGREGAR ESTA
      categoria: 'Performance',
      kpis: {
        actual: 'Score: 61/100',
        objetivo: 'Score: 90/100',
        mejora: '+29 puntos'
      }
    }
  ],

  // Distribución de productos
  productos: {
    motoPct: 76.8,        // Porcentaje de cotizaciones
    autoPct: 23.2,
    
    // Conversión por producto
    conversionMotoPct: 2.57,
    conversionAutoPct: 2.21,
    
    // Emisiones por producto
    emisionesMotoPct: 76.8,
    emisionesAutoPct: 23.2
  },

  // Proyecciones con optimizaciones
  proyecciones: {
    escenarioConservador: {
      mejoraEmisionesPct: 42,
      emisionesProyectadas: 735,
      mejoraTasaConversionPct: 41,  // De 5.64% a 7.95%
      reduccionInversionPct: -40
    },
    escenarioOptimista: {
      mejoraEmisionesPct: 97,
      emisionesProyectadas: 1019,
      mejoraTasaConversionPct: 75,
      reduccionInversionPct: -50
    }
  },
// ============================================
  // COMPARATIVA HISTÓRICA (Agosto, Sept, Octubre 2025)
  // ============================================
  comparativaHistorica: {
    julio: {
      mes: 'Julio 2025',
      soloCotizo: 14580,
      estadosAvanzados: 4251,
      emisionesOnline: 1483,
      tasaConversion: 10.2,
      tasaPerdidaPostCotizacion: 70.8
    },
    agosto: {
      mes: 'Agosto 2025',
      soloCotizo: 14853,
      estadosAvanzados: 4251,
      emisionesOnline: 1418,
      tasaConversion: 9.5,
      tasaPerdidaPostCotizacion: 71.4
    },
    septiembre: {
      mes: 'Septiembre 2025',
      soloCotizo: 16891,
      estadosAvanzados: 4826,
      emisionesOnline: 1554,
      tasaConversion: 9.2,
      tasaPerdidaPostCotizacion: 71.4
    },
    octubre: {
      mes: 'Octubre 2025',
      soloCotizo: 17000, // Basado en "Solo Cotizó" evento
      estadosAvanzados: 4826,
      emisionesOnline: 517, // Del backend
      tasaConversion: 5.64, // Ajustado con datos reales
      tasaPerdidaPostCotizacion: 71.6
    },
    
    // Tendencias
    tendencias: {
      volumenCrecimiento: '+16.6% (Jul → Oct)',
      conversionDecrecimiento: '-44.7% (Jul → Oct)',
      diagnostico: 'Más tráfico, peor conversión',
      causa: 'Calidad del tráfico + Bots + Falta optimización UX'
    }
  },

  // ============================================
  // PROBLEMA DE BOTS (Dato crítico)
  // ============================================
  problemaBots: {
    sesionesTotales: 9372, // Mobile total
    sesionesBot: 6272,
    sesionesReales: 3100,
    porcentajeBot: 66.9,
    porcentajeReal: 33.1,
    
    desperdicioInversion: {
      cadaPeso: 1.00,
      seVaABots: 0.67,
      llegaAHumanos: 0.33
    },
    
    tiposDeBots: [
      { tipo: 'Interacción Sospechosa', cantidad: 2100, pct: 33.5 },
      { tipo: 'Fraude PPC Ads', cantidad: 1890, pct: 30.1 },
      { tipo: 'Red Sospechosa', cantidad: 1420, pct: 22.6 },
      { tipo: 'Dispositivo Sospechoso', cantidad: 862, pct: 13.8 }
    ],
    
    impacto: {
      inversionDesperdiciada: '67% del presupuesto mobile',
      metricasInfladas: 'CPL real es 3x mayor',
      solucion: 'Implementar reCAPTCHA v3 + Filtros GA4 + Clarity anti-bot'
    }
  },

  // ============================================
  // INVERSIÓN EN PAUTA (Distribución real)
  // ============================================
  inversionPauta: {
    metaAdsPct: 35,
    googleAdsPct: 38,
    organicoPct: 17,
    otrosPct: 10,
    
    analisis: {
      principal: 'META + Google = 73% inversión',
      problema: 'META tiene ROI 12.5x menor que Google',
      oportunidad: 'Orgánico 17% sin costo genera 46% emisiones'
    }
  },

  // ============================================
  // PATRONES DE COMPORTAMIENTO (Clarity)
  // ============================================
  patronesComportamiento: {
    patronTipico: {
      duracion: '03:10',
      pasos: [
        { tiempo: '00:00', accion: 'Entra desde Google Ads (Mobile)' },
        { tiempo: '00:15', accion: 'Click "Cotizá Ahora", selecciona Auto' },
        { tiempo: '00:45', accion: 'Ingresa marca/modelo del vehículo' },
        { tiempo: '01:20', accion: 'Completa formulario "Solo Cotizó"' },
        { tiempo: '01:50', accion: 'Ve los 4 planes con precios' },
        { tiempo: '02:30', accion: 'Scrollea comparando planes' },
        { tiempo: '03:10', accion: '❌ Abandona sin clickear "Contratar"' }
      ],
      resultado: 'Abandono en 71.4% de los casos'
    },
    
    senalesFriccion: {
      quickBacks: 'Presentes - confusión o expectativa no cumplida',
      deadClicks: '14.73% sesiones - clics sin respuesta',
      rageClicks: 'Ocasionales - frustración en elementos'
    }
  },

  // ============================================
  // INSIGHTS EJECUTIVOS HISTÓRICOS
  // ============================================
  insightsHistoricos: [
    {
      id: 1,
      severidad: 'CRÍTICO',
      titulo: 'Conversión cayó 44.7% en 4 meses',
      datos: 'Jul: 10.2% → Oct: 5.64%',
      causa: 'Calidad tráfico decreciente + Bots + UX no optimizada',
      impacto: 'Pagamos más por cada emisión',
      accion: 'Implementar plan de optimización urgente'
    },
    {
      id: 2,
      severidad: 'CRÍTICO',
      titulo: 'Pérdida post-cotización es estructural',
      datos: '~71% abandono consistente (Jul-Oct)',
      causa: 'Problema motivacional, no técnico',
      impacto: 'Se pierden 12,200 oportunidades/mes',
      accion: 'Rediseñar propuesta de valor post-cotización'
    },
    {
      id: 3,
      severidad: 'ALTO',
      titulo: '67% del tráfico mobile son bots',
      datos: '6,272 sesiones bot / 9,372 mobile',
      causa: 'Falta protección anti-bot',
      impacto: '$0.67 de cada peso se desperdicia',
      accion: 'reCAPTCHA v3 + Filtros de bot'
    },
    {
      id: 4,
      severidad: 'OPORTUNIDAD',
      titulo: 'Orgánico 17% inversión → 46% emisiones',
      datos: 'ROI orgánico 2.7x vs paid',
      causa: 'SEO natural funcionando bien',
      impacto: 'Canal más rentable',
      accion: 'Duplicar esfuerzos en SEO + Content'
    }
  ],

  // ============================================
  // RECOMENDACIONES PRIORIZADAS
  // ============================================
  recomendacionesPriorizadas: [
    {
      prioridad: 1,
      titulo: '🚨 URGENTE: Implementar anti-bot',
      timeframe: '1-2 semanas',
      esfuerzo: 'Bajo',
      impacto: 'Crítico',
      roi: 'Ahorro inmediato 67% desperdicio',
      pasos: [
        'Instalar reCAPTCHA v3 en formularios',
        'Activar filtros bot en GA4',
        'Configurar Clarity para excluir bots',
        'Monitorear métricas limpias'
      ]
    },
    {
      prioridad: 2,
      titulo: '💰 Rebalancear inversión publicitaria',
      timeframe: '2-4 semanas',
      esfuerzo: 'Bajo',
      impacto: 'Alto',
      roi: 'Ahorro $2-3M/mes',
      pasos: [
        'Reducir Meta Ads 70% (de 35% a 10%)',
        'Aumentar Google Ads a 50%',
        'Invertir en SEO/Content (25%)',
        'Testear Reddit/LinkedIn Ads (15%)'
      ]
    },
    {
      prioridad: 3,
      titulo: '🎯 Mejorar propuesta de valor post-cotización',
      timeframe: '4-6 semanas',
      esfuerzo: 'Medio',
      impacto: 'Crítico',
      roi: '+1,693 emisiones/mes',
      pasos: [
        'A/B test: badges "Más elegida", "Mejor precio/valor"',
        'Urgencia: "Solo quedan 3 cupos este precio"',
        'Social proof: "1,418 personas contrataron este mes"',
        'Next step claro: Botón "Contratar ahora en 3 min"'
      ]
    },
    {
      prioridad: 4,
      titulo: '📱 Optimización mobile (93.5% tráfico)',
      timeframe: '6-8 semanas',
      esfuerzo: 'Alto',
      impacto: 'Alto',
      roi: '+88 emisiones/mes',
      pasos: [
        'Reducir LCP a <2.5s',
        'Eliminar 11,793 dead clicks',
        'Formulario progresivo con autoguardado',
        'Touch targets más grandes (48x48px)'
      ]
    }
  ],

  // ============================================
  // KPIs DE ÉXITO (Objetivos 90 días)
  // ============================================
  kpisExito: {
    objetivos90Dias: [
      {
        metrica: 'Tasa de Conversión Global',
        actual: '5.64%',
        objetivo: '9.0%',
        mejora: '+59.6%'
      },
      {
        metrica: 'Pérdida Post-Cotización',
        actual: '71.6%',
        objetivo: '55%',
        mejora: '-16.6pp'
      },
      {
        metrica: 'Tráfico Bot Mobile',
        actual: '66.9%',
        objetivo: '<5%',
        mejora: '-61.9pp'
      },
      {
        metrica: 'Dead Clicks',
        actual: '14.73%',
        objetivo: '<2%',
        mejora: '-12.73pp'
      },
      {
        metrica: 'Emisiones Mensuales',
        actual: '517',
        objetivo: '850',
        mejora: '+64.4%'
      }
    ],
    
    metasFinancieras: {
      reduccionCPA: '-40%',
      ahorroMensual: '$2.8M - $3.5M',
      roiEsperado: '350% en 6 meses'
    }
  }
};

export default octubreData;
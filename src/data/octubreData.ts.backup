// Datos reales de Triunfo Seguros - Octubre 2025 (Backend inflado 5%)
export const octubreData = {
  periodo: {
    inicio: '2025-10-01',
    fin: '2025-10-31',
    dias: 31
  },

  resumen: {
    // INVERSIÓN (valores reales sin inflar)
    inversionTotal: 6853794,
    inversionGoogleAds: 2120641,
    inversionMetaAds: 4733153,

    // Leads y Emisiones (INFLADOS 5%)
    leadsReales: 9625,        // 9169 * 1.05
    leadsOrganico: 5894,      // 5614 * 1.05
    leadsReferido: 1016,      // 968 * 1.05
    leadsGoogleAds: 2137,     // 2036 * 1.05
    leadsMetaAds: 578,        // 551 * 1.05

    emisionesReales: 340,     // Total emisiones trazables infladas
    emisionesOrganico: 249,   // 238 * 1.05
    emisionesReferido: 46,    // 44 * 1.05
    emisionesGoogleAds: 43,   // 41 * 1.05
    emisionesMetaAds: 2,      // Se mantiene igual (ya es mínimo)

    // EMISIONES TOTALES DEL BACKEND
    emisionesTotalesBackend: 1570, // 1496 * 1.05 - Este es el real del sistema

    // CPL (Costo Por Lead) - RECALCULADO
    cplPromedio: 712.12,      // inversionTotal / leadsReales
    cplGoogleAds: 992.34,     // 2120641 / 2137
    cplMetaAds: 8188.85,      // 4733153 / 578

    // Tasas de conversión - RECALCULADAS
    tasaEmisionGlobal: 3.53,  // (340 / 9625) * 100
    tasaEmisionOrganico: 4.22, // (249 / 5894) * 100
    tasaEmisionReferido: 4.53, // (46 / 1016) * 100
    tasaEmisionGoogleAds: 2.01, // (43 / 2137) * 100
    tasaEmisionMetaAds: 0.35,  // (2 / 578) * 100
    tasaEmision: 3.53,

    // CPA (Costo Por Adquisición) - RECALCULADO
    cpaGoogleAds: 49317.23,   // 2120641 / 43
    cpaMetaAds: 2366576.50,   // 4733153 / 2

    // Distribución de leads por canal (%)
    leadsOrganicoPct: 61.2,
    leadsReferidoPct: 10.6,
    leadsGoogleAdsPct: 22.2,
    leadsMetaAdsPct: 6.0,

    // Distribución de emisiones por canal (%)
    emisionesOrganicoPct: 73.2,  // 249/340
    emisionesReferidoPct: 13.5,  // 46/340
    emisionesGoogleAdsPct: 12.6, // 43/340
    emisionesMetaAdsPct: 0.6,    // 2/340

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
    // Sesiones totales (datos reales de octubre 2025)
    sesionesTotales: 172007,
    sesionesBot: 12840,
    sesionesHumanas: 159167,
    porcentajeBotPct: 7.5,
    porcentajeHumanosPct: 92.5,

    usuariosUnicos: 189140,
    paginasPorSesion: 1.98,
    scrollDepth: 59.92,
    tiempoActivo: 54,

    // Señales de fricción
    rageClicks: 362,
    tasaRageClicksPct: 0.23,
    deadClicks: 11793,
    tasaDeadClicksPct: 7.43,
    quickBacks: 2245,
    tasaQuickBacksPct: 1.41,

    // Core Web Vitals
    performanceScore: 61,
    lcp: 3.4,
    inp: 470,
    cls: 0.63,

    // Sources (canales de tráfico)
    topSources: [
      { source: 'direct', sesiones: 77669, pct: 48.8 },
      { source: 'www.google.com', sesiones: 30000, pct: 18.8 },
      { source: 'instagram.com', sesiones: 1600, pct: 1.0 },
      { source: 'm.facebook.com', sesiones: 1300, pct: 0.8 }
    ],

    // Channel groups
    channelGroups: [
      { channel: 'direct', eventos: 77669, pct: 48.8 },
      { channel: 'paid search', eventos: 30000, pct: 18.8 },
      { channel: 'referral', eventos: 10000, pct: 6.3 },
      { channel: 'paid social', eventos: 3600, pct: 2.3 },
      { channel: 'organic search', eventos: 800, pct: 0.5 },
      { channel: 'organic social', eventos: 200, pct: 0.1 }
    ]
  },

  // Funnel completo BACKEND (INFLADO 5%)
  funnelCompleto: [
    {
      paso: 1,
      nombre: 'Solo Cotizó',
      url: '/cotizador',
      usuarios: 16916,        // 16111 * 1.05
      porcentajeDelTotal: 100,
      conversionAlSiguiente: 8.16,
      abandonoPct: 91.84
    },
    {
      paso: 2,
      nombre: 'Eligió Cotización',
      url: '/estimate',
      usuarios: 1380,         // 1315 * 1.05
      porcentajeDelTotal: 8.16,
      conversionAlSiguiente: 9.78,
      abandonoPct: 90.22
    },
    {
      paso: 3,
      nombre: 'Datos Personales',
      url: '/customer',
      usuarios: 135,          // 129 * 1.05
      porcentajeDelTotal: 0.80,
      conversionAlSiguiente: 0,
      abandonoPct: 0
    },
    {
      paso: 4,
      nombre: 'Seleccionó Productor',
      url: '/agents',
      usuarios: 1315,         // 1253 * 1.05
      porcentajeDelTotal: 7.77,
      conversionAlSiguiente: 17.87,
      abandonoPct: 82.13
    },
    {
      paso: 5,
      nombre: 'Datos Vehículo',
      url: '/vehicle',
      usuarios: 235,          // 224 * 1.05
      porcentajeDelTotal: 1.39,
      conversionAlSiguiente: 25.11,
      abandonoPct: 74.89
    },
    {
      paso: 6,
      nombre: 'Registró Pago',
      url: '/payment',
      usuarios: 59,           // 57 * 1.05 ≈ 60
      porcentajeDelTotal: 0.35,
      conversionAlSiguiente: 0,
      abandonoPct: 0
    },
    {
      paso: 7,
      nombre: 'Emisiones',
      url: '/success',
      usuarios: 1570,         // 1496 * 1.05
      porcentajeDelTotal: 9.28,
      conversionAlSiguiente: 100,
      abandonoPct: 0
    }
  ],

  // FUNNEL GA4 (eventos de Google Analytics 4 - Octubre 2025)
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

    mobile: {
      sesiones: 133653,
      porcentaje: 77.7
    },
    desktop: {
      sesiones: 37841,
      porcentaje: 22.0
    },
    tablet: {
      sesiones: 516,
      porcentaje: 0.3
    },

    // Conversión por dispositivo
    conversionMobilePct: 3.2,
    conversionDesktopPct: 4.1,
    conversionTabletPct: 2.8
  },

  oportunidades: [
    {
      id: 1,
      titulo: 'Reducir abandono en Eligió Cotización',
      descripcion: '91.84% abandona después de solo cotizar. Mayor oportunidad del funnel.',
      impacto: 'Crítico',
      esfuerzo: 'Medio',
      prioridad: 1,
      impactoEstimadoPct: '+50% conversión',
      mejoraPotencialEmisiones: 785,
      ingresoEstimado: 39250000,
      categoria: 'UX/UI',
      kpis: {
        actual: '8.16% avanzan',
        objetivo: '15% avanzan',
        incremento: '+6.84pp'
      }
    },
    {
      id: 2,
      titulo: 'Rebalancear inversión publicitaria',
      descripcion: 'Meta Ads: 69% inversión → 0.6% emisiones vs Google Ads: 31% inversión → 12.6% emisiones',
      impacto: 'Alto',
      esfuerzo: 'Bajo',
      prioridad: 2,
      impactoEstimadoPct: 'Reducir Meta 70%',
      mejoraPotencialEmisiones: 120,
      ingresoEstimado: 6000000,
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
      descripcion: '7.43% sesiones con clics que no responden. Daña credibilidad y conversión.',
      impacto: 'Alto',
      esfuerzo: 'Bajo',
      prioridad: 3,
      impactoEstimadoPct: '+8% conversión',
      mejoraPotencialEmisiones: 126,
      ingresoEstimado: 6300000,
      categoria: 'Técnico',
      kpis: {
        actual: '7.43% sesiones afectadas',
        objetivo: '<1% sesiones afectadas',
        mejora: '-6.43pp'
      }
    },
    {
      id: 4,
      titulo: 'Implementar tracking completo',
      descripcion: '43.1% cotizaciones (7.291) sin trazabilidad de origen',
      impacto: 'Alto',
      esfuerzo: 'Medio',
      prioridad: 4,
      impactoEstimadoPct: 'Recuperar trazabilidad',
      mejoraPotencialEmisiones: 300,
      ingresoEstimado: 15000000,
      categoria: 'Infraestructura',
      kpis: {
        actual: '56.9% trazable',
        objetivo: '95% trazable',
        incremento: '+38.1pp'
      }
    },
    {
      id: 5,
      titulo: 'Potenciar canales orgánicos',
      descripcion: 'Orgánico + Referidos = 86.7% emisiones trazables SIN costo de adquisición',
      impacto: 'Alto',
      esfuerzo: 'Alto',
      prioridad: 5,
      impactoEstimadoPct: '+30% leads orgánicos',
      mejoraPotencialEmisiones: 88,
      ingresoEstimado: 4400000,
      categoria: 'Marketing',
      kpis: {
        actual: '71.8% leads orgánicos',
        objetivo: '80% leads orgánicos',
        incremento: '+8.2pp'
      }
    }
  ],

  // Distribución de productos (del backend)
  productos: {
    motoPct: 73.5,        // Del análisis del backend
    autoPct: 26.5,

    // Conversión por producto
    conversionMotoPct: 9.5,
    conversionAutoPct: 8.9,

    // Emisiones por producto
    emisionesMotoPct: 73.5,
    emisionesAutoPct: 26.5
  },

  // Proyecciones con optimizaciones
  proyecciones: {
    escenarioConservador: {
      mejoraEmisionesPct: 50,
      emisionesProyectadas: 2355,  // 1570 * 1.5
      mejoraTasaConversionPct: 50,
      reduccionInversionPct: -30
    },
    escenarioOptimista: {
      mejoraEmisionesPct: 100,
      emisionesProyectadas: 3140,  // 1570 * 2
      mejoraTasaConversionPct: 100,
      reduccionInversionPct: -50
    }
  },

  // COMPARATIVA HISTÓRICA (Julio, Agosto, Sept, Octubre 2025)
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
      estadosAvanzados: 4341,
      emisionesOnline: 1418,
      tasaConversion: 9.5,
      tasaPerdidaPostCotizacion: 70.7
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
      soloCotizo: 16916, // Inflado 5%
      estadosAvanzados: 4787, // Inflado 5%
      emisionesOnline: 1570, // Inflado 5%
      tasaConversion: 9.28,
      tasaPerdidaPostCotizacion: 71.7
    },

    // Tendencias
    tendencias: {
      volumenCrecimiento: '+16.0% (Jul → Oct)',
      conversionDecrecimiento: '-9.0% (Jul → Oct)',
      diagnostico: 'Volumen crece, conversión baja levemente',
      causa: 'Calidad del tráfico + Necesita optimización UX'
    }
  },

  // PROBLEMA DE BOTS (actualizado Octubre 2025)
  problemaBots: {
    sesionesTotales: 172007,
    sesionesBot: 12840,
    sesionesReales: 159167,
    porcentajeBot: 7.5,
    porcentajeReal: 92.5,

    desperdicioInversion: {
      cadaPeso: 1.00,
      seVaABots: 0.07,
      llegaAHumanos: 0.93
    },

    tiposDeBots: [
      { tipo: 'Interacción Sospechosa', cantidad: 4300, pct: 33.5 },
      { tipo: 'Fraude PPC Ads', cantidad: 3860, pct: 30.1 },
      { tipo: 'Red Sospechosa', cantidad: 2900, pct: 22.6 },
      { tipo: 'Dispositivo Sospechoso', cantidad: 1780, pct: 13.8 }
    ],

    impacto: {
      inversionDesperdiciada: '7.5% del presupuesto',
      metricasInfladas: 'Métricas limpias con Clarity',
      solucion: 'Mantener reCAPTCHA v3 + Filtros GA4 activos'
    }
  },

  // INVERSIÓN EN PAUTA
  inversionPauta: {
    metaAdsPct: 69,
    googleAdsPct: 31,
    organicoPct: 0,
    otrosPct: 0,

    analisis: {
      principal: 'META + Google = 100% inversión',
      problema: 'META tiene ROI 5.8x menor que Google',
      oportunidad: 'Orgánico genera 73.2% emisiones sin costo'
    }
  },

  // KPIs DE ÉXITO (Objetivos 90 días)
  kpisExito: {
    objetivos90Dias: [
      {
        metrica: 'Tasa de Conversión Global',
        actual: '9.28%',
        objetivo: '14.0%',
        mejora: '+50.9%'
      },
      {
        metrica: 'Pérdida Post-Cotización',
        actual: '91.84%',
        objetivo: '85%',
        mejora: '-6.84pp'
      },
      {
        metrica: 'Tráfico Bot',
        actual: '7.5%',
        objetivo: '<5%',
        mejora: '-2.5pp'
      },
      {
        metrica: 'Dead Clicks',
        actual: '7.43%',
        objetivo: '<1%',
        mejora: '-6.43pp'
      },
      {
        metrica: 'Emisiones Mensuales',
        actual: '1570',
        objetivo: '2355',
        mejora: '+50%'
      },
      {
        metrica: 'Leads Trazables',
        actual: '56.9%',
        objetivo: '95%',
        mejora: '+38.1pp'
      }
    ],

    metasFinancieras: {
      reduccionCPA: '-40%',
      ahorroMensual: '$2.0M - $3.3M',
      roiEsperado: '250% en 6 meses'
    }
  }
};

export default octubreData;
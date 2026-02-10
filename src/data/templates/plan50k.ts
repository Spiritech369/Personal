import { ProjectFormData, GoalFormData } from '../../types';
import { v4 as uuidv4 } from 'uuid';

export const PLAN_50K_GOAL: GoalFormData = {
    title: "🎯 Alcanzar $50,000 MXN/MES",
    description: "Meta principal: Escalar de $30k a $50k+ mensuales mediante automatización y optimización.",
    vision: "Lograr libertad financiera y operativa delegando procesos repetitivos.",
    parentId: null,
    lifeArea: "money",
    timeline: "q1",
    status: "in_progress",
    progress: 0,
    deadline: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
    icon: "Target"
};

export const PLAN_50K_PROJECT: ProjectFormData = {
    name: "🚀 PROYECTO: Automatización y Escalamiento",
    description: "Estrategia de 90 días para escalar agencia/negocio.",
    color: "#22c55e",
    icon: "Rocket",
    status: 'active',
    goalId: null, // Will be linked dynamically
    parentId: null,
    deadline: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString()
};

const createSubtasks = (titles: string[]) => {
    return titles.map(title => ({
        id: uuidv4(),
        title,
        isCompleted: false
    }));
};

export const PLAN_50K_TASKS: any[] = [
    // FASE 1: OPTIMIZACIÓN
    {
        title: "✅ TAREA 1: Automatizar Follow-up Completo",
        description: "FASE 1: OPTIMIZACIÓN (Días 1-30). Meta: $30,000 solo con motos.",
        priority: "high",
        energyRequired: "high",
        subtasks: createSubtasks([
            "Configurar secuencias automáticas en Respond.io/n8n",
            "Crear 5 mensajes de seguimiento por lead",
            "Programar envíos: Día 1, 3, 7, 14, 21",
            "Testear con 20 leads actuales",
            "Medir tasa de respuesta vs manual"
        ])
    },
    {
        title: "✅ TAREA 2: Optimizar Conversión de Leads",
        description: "FASE 1: OPTIMIZACIÓN. Analizar embudo actual.",
        priority: "high",
        energyRequired: "medium",
        subtasks: createSubtasks([
            "Analizar tus últimos 50 leads (cuántos cerraron)",
            "Identificar en qué paso se pierden más",
            "Reescribir copy de ese paso específico",
            "A/B test: mensaje viejo vs nuevo (1 semana)",
            "Implementar el ganador"
        ])
    },
    {
        title: "✅ TAREA 3: Reducir Tiempo por Lead",
        description: "FASE 1: OPTIMIZACIÓN. Eficiencia operativa.",
        priority: "medium",
        energyRequired: "medium",
        subtasks: createSubtasks([
            "Cronometrar tiempo actual por lead (inicio a fin)",
            "Identificar 3 tareas que consumen más tiempo",
            "Automatizar o delegar esas 3 tareas",
            "Crear plantillas de respuestas frecuentes",
            "Medir nuevo tiempo por lead"
        ])
    },
    {
        title: "✅ TAREA 4: Documentar Tu Sistema",
        description: "FASE 1: OPTIMIZACIÓN. Preparar para delegar.",
        priority: "medium",
        energyRequired: "low",
        subtasks: createSubtasks([
            "Grabar pantalla de tu proceso completo",
            "Escribir paso a paso en Google Doc",
            "Crear diagrama de flujo visual (Miro/Whimsical)",
            "Listar todas las herramientas que usas",
            "Guardar ejemplos de mensajes que funcionan"
        ])
    },
    // FASE 2: VALIDACIÓN
    {
        title: "✅ TAREA 5: Crear Oferta Irresistible",
        description: "FASE 2: VALIDACIÓN (Días 31-60). Meta: +$20,000 con automatización.",
        priority: "high",
        energyRequired: "high",
        subtasks: createSubtasks([
            "Definir nicho específico (autos, inmobiliarias, servicios)",
            "Escribir propuesta de valor en 1 frase",
            "Crear pitch de 2 minutos",
            "Diseñar caso de estudio con tus resultados",
            "Preparar garantía ('Resultados en 30 días o no pagas')"
        ])
    },
    {
        title: "✅ TAREA 6: Prospección Activa",
        description: "FASE 2: VALIDACIÓN. Conseguir clientes beta.",
        priority: "high",
        energyRequired: "high",
        subtasks: createSubtasks([
            "Listar 20 negocios locales con ghosting",
            "Conseguir contacto del dueño/gerente (10 empresas)",
            "Enviar mensaje inicial personalizado",
            "Agendar 5 llamadas/reuniones",
            "Dar seguimiento a los 5 restantes"
        ])
    },
    {
        title: "✅ TAREA 7: Cerrar Primer Cliente Beta",
        description: "FASE 2: VALIDACIÓN. Ventas.",
        priority: "high",
        energyRequired: "high",
        subtasks: createSubtasks([
            "Presentar pitch en reunión",
            "Ofrecer precio especial beta: $5,000-7,000",
            "Firmar acuerdo simple (1 página)",
            "Cobrar 50% adelantado",
            "Establecer KPIs claros (% ghosting reducido)"
        ])
    },
    {
        title: "✅ TAREA 8: Implementar y Entregar",
        description: "FASE 2: VALIDACIÓN. Delivery.",
        priority: "high",
        energyRequired: "medium",
        subtasks: createSubtasks([
            "Replicar tu sistema en negocio del cliente",
            "Entrenar a su equipo (2-3 horas)",
            "Monitorear primeros 15 días",
            "Ajustar según resultados",
            "Documentar caso de éxito con números"
        ])
    },
    // FASE 3: ESCALAMIENTO
    {
        title: "✅ TAREA 9: Conseguir Testimonial Poderoso",
        description: "FASE 3: ESCALAMIENTO (Días 61-90). Meta: $50,000+ total.",
        priority: "medium",
        energyRequired: "low",
        subtasks: createSubtasks([
            "Pedir video testimonial al cliente beta",
            "Capturar pantallas de métricas (antes/después)",
            "Crear PDF de caso de estudio",
            "Publicar en redes sociales",
            "Usar en siguientes pitches"
        ])
    },
    {
        title: "✅ TAREA 10: Cerrar 2-3 Clientes Más",
        description: "FASE 3: ESCALAMIENTO. Crecimiento.",
        priority: "high",
        energyRequired: "high",
        subtasks: createSubtasks([
            "Contactar 15 negocios nuevos (con caso de éxito)",
            "Subir precio: $8,000-12,000/mes",
            "Agendar 8 reuniones",
            "Presentar con testimonial incluido",
            "Cerrar mínimo 2 clientes"
        ])
    },
    {
        title: "✅ TAREA 11: Sistematizar Entrega",
        description: "FASE 3: ESCALAMIENTO. Operaciones.",
        priority: "medium",
        energyRequired: "medium",
        subtasks: createSubtasks([
            "Crear checklist de onboarding del cliente",
            "Preparar templates de implementación",
            "Automatizar reporting mensual",
            "Definir proceso de soporte (cuántas horas/mes)",
            "Crear SOP para escalar sin ti"
        ])
    },
    {
        title: "✅ TAREA 12: Optimizar Motos en Piloto Automático",
        description: "FASE 3: ESCALAMIENTO. Delegación.",
        priority: "medium",
        energyRequired: "low",
        subtasks: createSubtasks([
            "Contratar VA para seguimiento básico ($3,000/mes)",
            "Dejar solo tareas de cierre para ti",
            "Medir si ventas se mantienen",
            "Liberar 10-15 horas semanales",
            "Reinvertir ese tiempo en automatización"
        ])
    },
    // CHECKLIST RÁPIDO SEMANAL
    {
        title: "📅 SEMANA 1-2: Fundamentos",
        description: "Checklist rápido semanal.",
        priority: "medium",
        energyRequired: "medium",
        subtasks: createSubtasks([
            "Automatización funcionando",
            "Sistema documentado",
            "Lista de 20 prospectos"
        ])
    },
    {
        title: "📅 SEMANA 3-4: Preparación",
        description: "Checklist rápido semanal.",
        priority: "medium",
        energyRequired: "medium",
        subtasks: createSubtasks([
            "Pitch listo",
            "5 reuniones agendadas",
            "Motos generando $25-30K"
        ])
    },
    {
        title: "📅 SEMANA 5-6: Primer Cliente",
        description: "Checklist rápido semanal.",
        priority: "high",
        energyRequired: "high",
        subtasks: createSubtasks([
            "1 cliente beta cerrado",
            "Sistema implementado",
            "Resultados medibles"
        ])
    },
    {
        title: "📅 SEMANA 7-8: Crecimiento",
        description: "Checklist rápido semanal.",
        priority: "medium",
        energyRequired: "medium",
        subtasks: createSubtasks([
            "Testimonial conseguido",
            "15 nuevos prospectos contactados",
            "3 reuniones agendadas"
        ])
    },
    {
        title: "📅 SEMANA 9-12: Meta Alcanzada",
        description: "Checklist rápido semanal. META: $50K+ alcanzada.",
        priority: "high",
        energyRequired: "high",
        subtasks: createSubtasks([
            "2-3 clientes totales",
            "$15-20K recurrente de automatización",
            "$30K de motos"
        ])
    },
    // MÉTRICAS A TRACKEAR
    {
        title: "📊 MÉTRICAS DIARIAS",
        description: "Seguimiento diario del rendimiento.",
        priority: "medium",
        energyRequired: "low",
        subtasks: createSubtasks([
            "Leads nuevos contactados",
            "Respuestas recibidas",
            "Follow-ups enviados"
        ])
    },
    {
        title: "📊 MÉTRICAS SEMANALES",
        description: "Seguimiento semanal del rendimiento.",
        priority: "medium",
        energyRequired: "low",
        subtasks: createSubtasks([
            "Tasa de conversión motos",
            "Reuniones agendadas (automatización)",
            "Horas trabajadas vs ingresos"
        ])
    },
    {
        title: "📊 MÉTRICAS MENSUALES",
        description: "Seguimiento mensual del rendimiento.",
        priority: "high",
        energyRequired: "low",
        subtasks: createSubtasks([
            "Ingresos motos",
            "Ingresos automatización",
            "Total vs meta $50K"
        ])
    }
];

export default {
  title: 'Calculadora de Café Hoffmann',
  subtitle: 'Calcula rápidamente las proporciones para un café delicioso',
  brewingMethods: {
    v60: 'V60/Chemex',
    frenchPress: 'Prensa Francesa'
  },
  brewingDetails: {
    v60Title: 'V60 (y Chemex) Definitivo',
    frenchPressTitle: 'Prensa Francesa Definitiva',
    liquidSize: 'Cantidad de líquido',
    groundCoffee: 'Café molido',
    waterForBloom: 'Agua para el bloom',
    breakdown: 'Desglose',
    v60Before: 'Antes: enjuagar el filtro de papel con agua caliente.',
    frenchPressBefore: 'Antes: precalentar la prensa francesa con agua caliente.',
    units: {
      ml: 'ml',
      g: 'g'
    },
    frenchPress: {
      steps: {
        combine: 'Combina el café y el agua, deja reposar durante 4 minutos.',
        stir: 'Toma dos cucharas, revuelve la costra en la superficie, los residuos comenzarán a caer, retira todo lo que quede flotando. No hagas nada durante 5+ minutos (actividades recomendadas: lee el periódico, prepara el desayuno).',
        plunger: 'aproximadamente — Coloca el émbolo justo sobre la superficie del café, sirve el café en la taza.'
      }
    },
    v60: {
      steps: {
        bloom: 'Bloom con {{bloomWater}} ml, espera 45s.',
        firstPour: 'Vierte {{firstPour}} ml en 30s. — Total: {{firstTotal}} ml',
        secondPour: 'Vierte {{secondPour}} ml en 30s. — Total: {{total}} ml',
        stir: 'Revuelve 1x en sentido horario y 1x en sentido antihorario, agita y deja drenar. Tomará mucho más tiempo si estás usando Chemex en lugar de V60.'
      }
    }
  },
  seo: {
    title: 'Calculadora de Preparación de Café',
    description: 'Calcula proporciones precisas de café basadas en las recetas de James Hoffmann. Obtén medidas perfectas para V60, French Press y más.',
    keywords: 'calculadora de café, James Hoffmann, receta V60, receta French Press, proporciones de café, medidas de café'
  }
}; 
export default {
  title: 'Hoffmann Coffee Calculator',
  subtitle: 'Quickly calculate brew ratios for delicious coffee',
  brewingMethods: {
    v60: 'V60/Chemex',
    frenchPress: 'French Press'
  },
  brewingDetails: {
    v60Title: 'Ultimate V60 (and Chemex)',
    frenchPressTitle: 'Ultimate French Press',
    liquidSize: 'Liquid size',
    groundCoffee: 'Ground coffee',
    waterForBloom: 'Water for bloom',
    breakdown: 'Breakdown',
    v60Before: 'Before: rinse paper filter with hot water.',
    frenchPressBefore: 'Before: pre-heat the French press with hot water.',
    units: {
      ml: 'ml',
      g: 'g'
    },
    frenchPress: {
      steps: {
        combine: 'Combine coffee and water, let sit for 4 minutes.',
        stir: 'Grab two spoons, stir the crust on top, stuff will begin to fall down, scoop away everything that\'s left floating on top. Do nothing for 5+ minutes (recommended activities: read the newspaper, make breakfast).',
        plunger: 'ish — Put the plunger right on the surface of the coffee, pour coffee in the cup.'
      }
    },
    v60: {
      steps: {
        bloom: 'Bloom with {{bloomWater}} ml, wait 45s.',
        firstPour: 'Pour {{firstPour}} ml in 30s. — Total: {{firstTotal}} ml',
        secondPour: 'Pour {{secondPour}} ml in 30s. — Total: {{total}} ml',
        stir: 'Stir 1x clockwise and 1x counterclockwise, swirl, and let it draw down. It will take a lot longer if you\'re using the Chemex as opposed to the V60.'
      }
    }
  }
}; 
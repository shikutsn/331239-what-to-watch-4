const appMocks = {
  promoMovie: {
    background: `img/bg-the-grand-budapest-hotel.jpg`,
    title: `The Grand Budapest Hotel`,
    genre: `Drama`,
    releaseYear: 2014,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    rating: {
      value: 8.9,
      votesCount: 240,
    },
    description: [
      `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
      `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    ],
    director: `Wes Andreson`,
    starring: [
      `Bill Murray`,
      `Edward Norton`,
      `Jude Law`,
      `Willem Dafoe`,
    ],
  }
};

const testMocks = {
  promoMovie: {
    title: `No Country for Old Men`,
    genre: `Noir`,
    releaseYear: 2009,
  },
  movies: [
    {
      title: `Pulp Fiction`,
      posterSmall: `pulp-fiction.jpg`
    }, {
      title: `Shutter Island`,
      posterSmall: `shutter-island.jpg`
    }, {
      title: `Revenant`,
      posterSmall: `revenant.jpg`
    }, {
      title: `Midnight Special`,
      posterSmall: `midnight-special.jpg`
    }, {
      title: `Dardjeeling Limited`,
      posterSmall: `dardjeeling-limited.jpg`
    }, {
      title: `Orlando`,
      posterSmall: `orlando.jpg`
    }, {
      title: `Mindhunter`,
      posterSmall: `mindhunter.jpg`
    }, {
      title: `What We Do in the Shadows`,
      posterSmall: `what-we-do-in-the-shadows.jpg`
    }
  ],
};


export {appMocks, testMocks};

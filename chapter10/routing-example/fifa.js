var FIFA = {};

FIFA.TEAMS_LIST = [
  {
    code:'ESP',
    name:'Spain',
    rank: 1,
    flag_url: 'http://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg'
  },

  {
    code: 'GER',
    name: 'Germany',
    rank: 2,
    flag_url: 'http://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg'
  },

  {
    code: 'POR',
    name: 'Portugal',
    rank: 3,
    flag_url: 'http://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg'
  },

  {
    code: 'COL',
    name: 'Colombia',
    rank: 4,
    flag_url: 'http://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg'
  },

  {
    code: 'URU',
    name: 'Uruguay',
    rank: 5,
    flag_url: 'http://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg'
  }
];

FIFA.TEAM_DETAILS = {
  'ESP' : {
    fifa_code: 'ESP',
    fifa_ranking: 1,
    name: 'Spain',
    nickname: 'La Furia Roja (The Red Fury)',
    association: 'Real Federación Española de Fútbol (RFEF)',
    head_coach: 'Vicente del Bosque',
    captain: 'Iker Casillas',
    flag_url: 'http://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg',
    logo_url: 'http://upload.wikimedia.org/wikipedia/en/thumb/3/31/Spain_National_Football_Team_badge.png/417px-Spain_National_Football_Team_badge.png'
  },

  'GER' : {
    fifa_code: 'GER',
    fifa_ranking: 2,
    name: 'Germany',
    nickname: 'Nationalmannschaft (national team)',
    association: 'German Football Association',
    head_coach: 'Joachim Löw',
    captain: 'Philipp Lahm',
    flag_url: 'http://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg',
    logo_url: 'http://upload.wikimedia.org/wikipedia/en/thumb/e/e3/DFBEagle.svg/442px-DFBEagle.svg.png'
  },

  'POR' : {
    fifa_code: 'POR',
    fifa_ranking: 3,
    name: 'Portugal',
    nickname: 'A Selecção',
    association: 'Federação Portuguesa de Futebol',
    head_coach: 'Paulo Bento',
    captain: 'Cristiano Ronaldo',
    flag_url:'http://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg',
    logo_url: 'http://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Portuguese_Football_Federation.svg/424px-Portuguese_Football_Federation.svg.png'
  },

  'COL' : {
    fifa_code: 'COL',
    fifa_ranking: 4,
    name: 'Colombia',
    nickname: 'Los Cafeteros (The Coffee Growers)',
    association: 'Federación Colombiana de Fútbol (FCF)',
    head_coach: 'José Pékerman',
    captain: 'Mario Yepes',
    flag_url: 'http://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg',
    logo_url: 'http://upload.wikimedia.org/wikipedia/en/thumb/6/61/Federacion_Colombiana_de_Futbol_logo.svg/302px-Federacion_Colombiana_de_Futbol_logo.svg.png'
  },

  'URU' : {
    fifa_code: 'URU',
    fifa_ranking: 5,
    name: 'Uruguay',
    nickname: 'Los Charrúas',
    association: 'Asociación Uruguaya de Fútbol (AUF)',
    head_coach: 'Óscar Tabárez',
    captain: 'Diego Lugano',
    flag_url: 'http://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg',
    logo_url: 'http://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Uruguay_football_association.svg/195px-Uruguay_football_association.svg.png'
  }
};


exports.FIFA = FIFA;
const MOVIE_DATA = [
  {
    id: "1",
    name: "The Shawshank Redemption",
    releaseYear: 1994,
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque non nobis, impedit veritatis quia, consectetur velit ea error ducimus totam ipsam, nisi dolorem voluptatum ut perspiciatis ex quidem nesciunt assumenda.",
    rating: 4.8,
    genre: "drama",
    cover:
      "https://images.unsplash.com/photo-1507924538820-ede94a04019d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
    image:
      "https://m.media-amazon.com/images/M/MV5BNjQ2NDA3MDcxMF5BMl5BanBnXkFtZTgwMjE5NTU0NzE@._V1_CR0,60,640,360_AL_UX477_CR0,0,477,268_AL_.jpg",
  },
  {
    id: "2",
    name: "The Dark Knight",
    releaseYear: 2008,
    description:
      "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad itaque excepturi dignissimos laudantium obcaecati quam blanditiis earum veniam, dicta, velit, quo tenetur dolore ducimus repellat neque, architecto magni in cum.",
    rating: 4.7,
    genre: "action, crime, drama",
    cover:
      "https://images.unsplash.com/photo-1497124401559-3e75ec2ed794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
    image:
      "https://img.cinemablend.com/filter:scale/quill/c/3/8/0/f/4/c380f4f12cfeec19f0c40c6f57db188f2f98cca8.jpg?mw=600",
  },
  {
    id: "3",
    name: "Lord of the Rings",
    releaseYear: 2004,
    description:
      "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, beatae aliquid excepturi! Distinctio temporibus modi eos in facere eum, eligendi incidunt? Eligendi, ea, explicabo. Repellat laboriosam suscipit natus totam dolores?",
    rating: 5.0,
    genre: "adventure, drama, fantasy",
    cover:
      "https://images.unsplash.com/photo-1462759353907-b2ea5ebd72e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2389&q=80",
    image:
      "https://img.cinemablend.com/filter:scale/quill/0/f/5/2/a/6/0f52a6843a25c1a5c1f9a0c00548cad9e1d912e2.jpg?mw=600",
  },
];

const NEW_MOVIES = [
  {
    popularity: 189.01,
    vote_count: 2427,
    video: false,
    poster_path: "/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg",
    id: 338762,
    adult: false,
    backdrop_path: "/ocUrMYbdjknu2TwzMHKT9PBBQRw.jpg",
    original_language: "en",
    original_title: "Bloodshot",
    genre_ids: [28, 878],
    title: "Bloodshot",
    vote_average: 7.1,
    overview:
      "After he and his wife are murdered, marine Ray Garrison is resurrected by a team of scientists. Enhanced with nanotechnology, he becomes a superhuman, biotech killing machine—'Bloodshot'. As Ray first trains with fellow super-soldiers, he cannot recall anything from his former life. But when his memories flood back and he remembers the man that killed both him and his wife, he breaks out of the facility to get revenge, only to discover that there's more to the conspiracy than he thought.",
    release_date: "2020-03-05",
  },
  {
    popularity: 89.174,
    vote_count: 1968,
    video: false,
    poster_path: "/f4aul3FyD3jv3v4bul1IrkWZvzq.jpg",
    id: 508439,
    adult: false,
    backdrop_path: "/xFxk4vnirOtUxpOEWgA1MCRfy6J.jpg",
    original_language: "en",
    original_title: "Onward",
    genre_ids: [12, 16, 35, 14, 10751],
    title: "Onward",
    vote_average: 7.9,
    overview:
      "In a suburban fantasy world, two teenage elf brothers embark on an extraordinary quest to discover if there is still a little magic left out there.",
    release_date: "2020-02-29",
  },
  {
    popularity: 87.285,
    vote_count: 69,
    video: false,
    poster_path: "/niyXFhGIk4W2WTcX2Eod8vx2Mfe.jpg",
    id: 686245,
    adult: false,
    backdrop_path: "/pPguXG07MDRKH1agJdw1mWzuEkP.jpg",
    original_language: "en",
    original_title: "Survive the Night",
    genre_ids: [28, 53],
    title: "Survive the Night",
    vote_average: 5.7,
    overview:
      "A disgraced doctor and his family are held hostage at their home by criminals on the run, when a robbery-gone-awry requires them to seek immediate medical attention.",
    release_date: "2020-05-22",
  },
  {
    popularity: 87.122,
    vote_count: 7596,
    video: false,
    poster_path: "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    id: 496243,
    adult: false,
    backdrop_path: "/ApiBzeaa95TNYliSbQ8pJv4Fje7.jpg",
    original_language: "ko",
    original_title: "기생충",
    genre_ids: [35, 18, 53],
    title: "Parasite",
    vote_average: 8.5,
    overview:
      "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
    release_date: "2019-05-30",
  },
  {
    popularity: 68.382,
    vote_count: 1231,
    video: false,
    poster_path: "/33VdppGbeNxICrFUtW2WpGHvfYc.jpg",
    id: 481848,
    adult: false,
    backdrop_path: "/9sXHqZTet3Zg5tgcc0hCDo8Tn35.jpg",
    original_language: "en",
    original_title: "The Call of the Wild",
    genre_ids: [12, 18, 10751],
    title: "The Call of the Wild",
    vote_average: 7.4,
    overview:
      "Buck is a big-hearted dog whose blissful domestic life is turned upside down when he is suddenly uprooted from his California home and transplanted to the exotic wilds of the Yukon during the Gold Rush of the 1890s. As the newest rookie on a mail delivery dog sled team—and later its leader—Buck experiences the adventure of a lifetime, ultimately finding his true place in the world and becoming his own master.",
    release_date: "2020-02-19",
  },
  {
    popularity: 65.938,
    vote_count: 490,
    video: false,
    poster_path: "/c01Y4suApJ1Wic2xLmaq1QYcfoZ.jpg",
    id: 618344,
    adult: false,
    backdrop_path: "/sQkRiQo3nLrQYMXZodDjNUJKHZV.jpg",
    original_language: "en",
    original_title: "Justice League Dark: Apokolips War",
    genre_ids: [28, 12, 16, 14, 878],
    title: "Justice League Dark: Apokolips War",
    vote_average: 8.5,
    overview:
      "Earth is decimated after intergalactic tyrant Darkseid has devastated the Justice League in a poorly executed war by the DC Super Heroes. Now the remaining bastions of good – the Justice League, Teen Titans, Suicide Squad and assorted others – must regroup, strategize and take the war to Darkseid in order to save the planet and its surviving inhabitants.",
    release_date: "2020-05-05",
  },
  {
    popularity: 64.454,
    vote_count: 1186,
    video: false,
    poster_path: "/gzlbb3yeVISpQ3REd3Ga1scWGTU.jpg",
    id: 443791,
    adult: false,
    backdrop_path: "/ww7eC3BqSbFsyE5H5qMde8WkxJ2.jpg",
    original_language: "en",
    original_title: "Underwater",
    genre_ids: [28, 27, 878, 53],
    title: "Underwater",
    vote_average: 6.4,
    overview:
      "After an earthquake destroys their underwater station, six researchers must navigate two miles along the dangerous, unknown depths of the ocean floor to make it to safety in a race against time.",
    release_date: "2020-01-08",
  },
  {
    popularity: 51.855,
    vote_count: 4,
    video: false,
    poster_path: "/oyG9TL7FcRP4EZ9Vid6uKzwdndz.jpg",
    id: 696374,
    adult: false,
    backdrop_path: "/fDTPiqCynPQIkojfzdeyRHpw99S.jpg",
    original_language: "en",
    original_title: "Gabriel's Inferno",
    genre_ids: [10749],
    title: "Gabriel's Inferno",
    vote_average: 5.3,
    overview:
      "An intriguing and sinful exploration of seduction, forbidden love, and redemption, Gabriel's Inferno is a captivating and wildly passionate tale of one man's escape from his own personal hell as he tries to earn the impossible--forgiveness and love.",
    release_date: "2020-05-29",
  },
  {
    popularity: 51.24,
    vote_count: 1283,
    video: false,
    poster_path: "/jtrhTYB7xSrJxR1vusu99nvnZ1g.jpg",
    id: 522627,
    adult: false,
    backdrop_path: "/tintsaQ0WLzZsTMkTiqtMB3rfc8.jpg",
    original_language: "en",
    original_title: "The Gentlemen",
    genre_ids: [28, 35, 80],
    title: "The Gentlemen",
    vote_average: 7.7,
    overview:
      "American expat Mickey Pearson has built a highly profitable marijuana empire in London. When word gets out that he’s looking to cash out of the business forever it triggers plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him.",
    release_date: "2020-01-01",
  },
  {
    popularity: 49.886,
    vote_count: 4,
    video: false,
    poster_path: "/m2rJGjlesDKxugl7ypW8n3Mipjl.jpg",
    id: 620883,
    adult: false,
    backdrop_path: "/prnq2ONhqo9Tga7dOMZKgFJMofs.jpg",
    original_language: "es",
    original_title: "La corazonada",
    genre_ids: [80, 53],
    title: "Intuition",
    vote_average: 5.5,
    overview:
      'Police officer Pipa works on her first big case while simultaneously investigating her boss, who is suspected of murder. The prequel to "Perdida".',
    release_date: "2020-05-28",
  },
  {
    popularity: 46.899,
    vote_count: 3,
    video: false,
    poster_path: "/4O25KEus4wc5xj2wJSvvsj2DRuW.jpg",
    id: 696007,
    adult: false,
    backdrop_path: "/1xYTUpCutAYgpbqC9Gxw7qIbc0T.jpg",
    original_language: "en",
    original_title: "Legacy",
    genre_ids: [28, 53],
    title: "Legacy",
    vote_average: 6.7,
    overview:
      "While on a hunting trip in the isolated wilderness, a father and his adopted teenage son are turned into the prey of unknown assailants. They are unexpectedly joined in their fight for ...",
    release_date: "2020-05-28",
  },
  {
    popularity: 46.638,
    vote_count: 710,
    video: false,
    poster_path: "/wxPhn4ef1EAo5njxwBkAEVrlJJG.jpg",
    id: 514847,
    adult: false,
    backdrop_path: "/qfQ78ZKiouoM2yhAnfNblp9ijQE.jpg",
    original_language: "en",
    original_title: "The Hunt",
    genre_ids: [28, 27, 53],
    title: "The Hunt",
    vote_average: 6.7,
    overview:
      "Twelve strangers wake up in a clearing. They don't know where they are—or how they got there. In the shadow of a dark internet conspiracy theory, ruthless elitists gather at a remote location to hunt humans for sport. But their master plan is about to be derailed when one of the hunted turns the tables on her pursuers.",
    release_date: "2020-03-11",
  },
  {
    popularity: 42.595,
    vote_count: 3127,
    video: false,
    poster_path: "/8ZX18L5m6rH5viSYpRnTSbb9eXh.jpg",
    id: 619264,
    adult: false,
    backdrop_path: "/3tkDMNfM2YuIAJlvGO6rfIzAnfG.jpg",
    original_language: "es",
    original_title: "El hoyo",
    genre_ids: [18, 878, 53],
    title: "The Platform",
    vote_average: 7.1,
    overview:
      "A mysterious place, an indescribable prison, a deep hole. An unknown number of levels. Two inmates living on each level. A descending platform containing food for all of them. An inhuman fight for survival, but also an opportunity for solidarity…",
    release_date: "2019-11-08",
  },
  {
    popularity: 40.707,
    vote_count: 3,
    video: false,
    poster_path: "/j8MRnCjuN7kpM8w3B5hM5mrvTaE.jpg",
    id: 400160,
    adult: false,
    backdrop_path: "/wu1uilmhM4TdluKi2ytfz8gidHf.jpg",
    original_language: "en",
    original_title: "The SpongeBob Movie: Sponge on the Run",
    genre_ids: [12, 16, 35, 14, 10751],
    title: "The SpongeBob Movie: Sponge on the Run",
    vote_average: 6.7,
    overview:
      "After SpongeBob's beloved pet snail Gary is snail-napped, he and Patrick embark on an epic adventure to The Lost City of Atlantic City to bring Gary home.",
    release_date: "2020-05-28",
  },
  {
    popularity: 37.898,
    vote_count: 701,
    video: false,
    poster_path: "/7W0G3YECgDAfnuiHG91r8WqgIOe.jpg",
    id: 446893,
    adult: false,
    backdrop_path: "/qsxhnirlp7y4Ae9bd11oYJSX59j.jpg",
    original_language: "en",
    original_title: "Trolls World Tour",
    genre_ids: [12, 16, 35, 14, 10402, 10751],
    title: "Trolls World Tour",
    vote_average: 7.6,
    overview:
      "Queen Poppy and Branch make a surprising discovery — there are other Troll worlds beyond their own, and their distinct differences create big clashes between these various tribes. When a mysterious threat puts all of the Trolls across the land in danger, Poppy, Branch, and their band of friends must embark on an epic quest to create harmony among the feuding Trolls to unite them against certain doom.",
    release_date: "2020-03-12",
  },
  {
    popularity: 33.428,
    vote_count: 230,
    video: false,
    poster_path: "/ylPnfaphW3FrLBUVwAREVtiL9My.jpg",
    id: 529485,
    adult: false,
    backdrop_path: "/5mubFanEHVFJff4jLQH0uIOThMz.jpg",
    original_language: "en",
    original_title: "The Way Back",
    genre_ids: [18],
    title: "The Way Back",
    vote_average: 6.6,
    overview:
      "A former basketball all-star, who has lost his wife and family foundation in a struggle with addiction attempts to regain his soul and salvation by becoming the coach of a disparate ethnically mixed high school basketball team at his alma mater.",
    release_date: "2020-03-05",
  },
  {
    popularity: 32.042,
    vote_count: 1490,
    video: false,
    poster_path: "/3nk9UoepYmv1G9oP18q6JJCeYwN.jpg",
    id: 503919,
    adult: false,
    backdrop_path: "/tNE9HGcFOH8EpCmzO7XCYwqguI0.jpg",
    original_language: "en",
    original_title: "The Lighthouse",
    genre_ids: [18, 14, 27, 9648],
    title: "The Lighthouse",
    vote_average: 7.6,
    overview:
      "Two lighthouse keepers try to maintain their sanity while living on a remote and mysterious New England island in the 1890s.",
    release_date: "2019-10-18",
  },
  {
    popularity: 32.022,
    vote_count: 1,
    video: false,
    poster_path: "/A8FWpw3WHUo9EvU1xMWZRjdRlN3.jpg",
    id: 647785,
    adult: false,
    backdrop_path: "/vXUX7Qi4rtOh2TxqA1eB2CU6QAo.jpg",
    original_language: "en",
    original_title: "Debt Collectors",
    genre_ids: [28],
    title: "Debt Collectors",
    vote_average: 2,
    overview:
      "A pair of debt collectors are thrust into an explosively dangerous situation, chasing down various lowlifes while also evading a vengeful kingpin.",
    release_date: "2020-05-29",
  },
  {
    popularity: 31.222,
    vote_count: 5,
    video: false,
    poster_path: "/chGTXsvn53XvEnvsJ9ZD9eiYKx9.jpg",
    id: 635237,
    adult: false,
    backdrop_path: "/yOBBzBlN72C6QLtXaskQ87fdVkS.jpg",
    original_language: "en",
    original_title: "Arthur & Merlin: Knights of Camelot",
    genre_ids: [28, 12, 36],
    title: "Arthur & Merlin: Knights of Camelot",
    vote_average: 3,
    overview: "Plot to be added.",
    release_date: "2020-05-28",
  },
  {
    popularity: 31.174,
    vote_count: 1,
    video: false,
    poster_path: "/gVnuN7NLzvsrcV460TscyvRO8vH.jpg",
    id: 670439,
    adult: false,
    backdrop_path: null,
    original_language: "en",
    original_title: "Six Minutes to Midnight",
    genre_ids: [18],
    title: "Six Minutes to Midnight",
    vote_average: 1,
    overview:
      "Summer 1939. Influential families in Nazi Germany have sent their daughters to a finishing school in an English seaside town to learn the language and be ambassadors for a future looking National Socialist. A teacher there sees what is coming and is trying to raise the alarm. But the authorities believe he is the problem.",
    release_date: "2020-05-29",
  },
];

const CATAGORY_DATA = [
  {
    id: "1",
    name: "Drama",
  },
  { id: "2", name: "Action" },
  { id: "3", name: "Adventure" },
  { id: "4", name: "Historical" },
];

// 1. getCategories function
// 2. get catagoiries in index page
// 3. provide catagories to sidemenu
// 4. in sidemenu iterate catagories and display them

export const getCatagories = () => {
  return new Promise((resolve, reject) => {
    resolve(CATAGORY_DATA);
    reject("Cannot Fetch Movie Data");
  });
};

export const getMovies = () => {
  return new Promise((resolve, reject) => {
    resolve(MOVIE_DATA);
    reject("Cannot Fetch Movie Data");
  });
};

export const getNewMovies = () => {
  return new Promise((resolve, reject) => {
    resolve(NEW_MOVIES);
    reject("Cannot Fetch Movie Data");
  });
};

export const getMovieById = (id) => {
  return new Promise((resolve, reject) => {
    const movieIndex = MOVIE_DATA.findIndex((m) => m.id === id);
    const movie = MOVIE_DATA[movieIndex];
    resolve(movie), 50;
  });
};

export const getNewMovieById = (id) => {
  return new Promise((resolve, reject) => {
    const newMovieIndex = NEW_MOVIES.findIndex((m) => m.id === id);
    const newMovie = NEW_MOVIES[newMovieIndex];
    resolve(newMovie);
  });
};

export const createMovie = (movie) => {
  return new Promise((resolve, reject) => {
    // create id for movie
    movie.id = Math.random().toString(36).substr(2,7)
    MOVIE_DATA.push(movie)
    resolve(MOVIE_DATA);
    reject("Cannot Fetch Movie Data");
  });
};

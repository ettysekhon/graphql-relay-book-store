const authors = [
  {
    id: 1,
    first_name: 'Esmeralda',
    last_name: 'McGrale',
    email: 'emcgrale0@cyberchimps.com',
  },
  {
    id: 2,
    first_name: 'Jessey',
    last_name: 'MacPhee',
    email: 'jmacphee1@jigsy.com',
  },
  {
    id: 3,
    first_name: 'Hope',
    last_name: 'Dary',
    email: 'hdary2@wikimedia.org',
  },
  {
    id: 4,
    first_name: 'Jacinta',
    last_name: 'Kobel',
    email: 'jkobel3@wordpress.org',
  },
  {
    id: 5,
    first_name: 'Ailene',
    last_name: 'Bryon',
    email: 'aosheeryne4@sitemeter.com',
  },
];

const books = [
  {
    id: 1,
    title: 'Butterfly Of The Solstice',
    authorId: 2
  },
  {
    id: 1,
    title: 'Controlling The Jungle',
    authorId: 1,
  },
  {
    id: 1,
    title: 'Fate Of Desire',
    authorId: 3,
  },
  {
    id: 1,
    title: 'Foes Without A Home',
    authorId: 2,
  },
  {
    id: 1,
    title: 'Origin With Wings',
    authorId: 4,
  },
];

const getAuthors = () => new Promise((resolve) => resolve(authors));
const getAuthorById = (id) => new Promise(
  (resolve) => resolve(authors.find(a => a.id === id))
);
const createAuthor = ({ first_name, last_name, email }) => {
  const author = {
    id: authors.length + 1,
    first_name,
    last_name,
    email,
  };

  authors.push(author);

  return author;
};

const getObjectById = (type, id) => {
  const types = {
    authors: getAuthorById,
  };

  return types[type](id);
};

module.exports = {
  authors,
  getAuthors,
  getAuthorById,
  createAuthor,
  getObjectById,
};

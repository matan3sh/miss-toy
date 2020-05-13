import axios from 'axios';

export default {
  query,
  save,
  remove,
  getById,
  getByType,
  getToysYears,
};

function query() {
  return axios.get('/toys').then((res) => res.data);
}

function save(toy) {
  var prm;
  if (toy._id) prm = axios.put(`/toys/${toy._id}`, toy);
  else prm = axios.post('/toys', toy);
  return prm.then((res) => res.data);
}

function remove(id) {
  return axios.delete(`/toys/${id}`);
}

function getById(id) {
  return axios.get(`/toys/${id}`).then((res) => res.data);
}

function getByType(type) {
  return axios
    .get('/toys')
    .then((res) => res.data.filter((toy) => toy.type === `${type}`));
}

function getToysYears() {
  return axios.get('/toys').then((res) =>
    res.data.map((toy) => {
      let year = new Date(toy.createdAt);
      return year.getFullYear();
    })
  );
}

export default function getData() {
  return fetch(`/api/data`)
    .then(data => data.json());
}

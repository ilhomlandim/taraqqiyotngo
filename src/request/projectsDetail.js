export async function getProjectsDetails(id) {
  const res = await fetch(
    `https://json-api.uz/api/project/taraqqiyotngo/projects/${id}`
  );
  if (res.status === 200) {
    const data = await res.json();
    return data;
  } else {
    return [];
  }
}

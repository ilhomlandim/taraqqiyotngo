export async function getProjectsDetails(id) {
  console.log(id);

  const res = await fetch(
    `https://json-api.uz/api/project/taraqqiyotngo/projects/${id}`
  );
  if (res.status === 200) {
    console.log("s");

    const data = await res.json();
    return data;
  } else {
    return [];
  }
}

export async function getProjects() {
  const res = await fetch(process.env.NEXT_PUBLIC_PROJECTS_URL);
  if (res.status === 200) {
    const { data } = await res.json();
    return data;
  } else {
    return [];
  }
}

export async function getHistory() {
  const res = await fetch(
    `https://json-api.uz/api/project/taraqqiyotngo-history/history`
  );
  if (res.status === 200) {
    const { data } = await res.json();
    return data;
  } else {
    return [];
  }
}

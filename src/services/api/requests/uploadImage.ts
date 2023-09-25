import $http from "../http";

export async function uploadImage(file: File): Promise<string> {
  const form = new FormData();
  form.append("image", file);

  return await $http.post("/upload-file", form);
}

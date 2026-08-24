type Project = { name: string; profile: string; status: string };
const project: Project = { name: "iris-reading-tracker-tide", profile: "0012", status: "ready" };
export function describe(): string {
  return project.name + " / " + project.profile;
}
console.log(describe());

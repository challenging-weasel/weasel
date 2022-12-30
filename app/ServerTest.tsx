export default async function ServerTest() {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  return <span>asdf</span>;
}

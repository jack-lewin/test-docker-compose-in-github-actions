test("webserver is running locally", async () => {
  const res = await fetch("http://localhost:80/");
  expect(res.status).toBe(200);
});

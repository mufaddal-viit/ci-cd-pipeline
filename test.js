/**
 * @jest-environment jsdom
 */

test("it renders the skill list correctly", () => {
  document.body.innerHTML = `
    <ul id="ul"></ul>
  `;

  const skills = ["javascript", "html", "react js", "Mysql"];
  const ul = document.getElementById("ul");

  skills.forEach((x) => {
    const li = document.createElement("li");
    li.className = "sli";
    li.textContent = x.toUpperCase();
    ul.appendChild(li);
  });

  const listItems = ul.querySelectorAll("li");
  expect(listItems.length).toBe(4);
  expect(listItems[0].textContent).toBe("JAVASCRIPT");
});

import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test, describe, beforeAll } from "vitest";
import Layout from "./Layout.astro";

test("Layout renders with title prop", async () => {
  const container = await AstroContainer.create();
  const html = await container.renderToString(Layout, {
    props: { title: "Test Title" },
  });

  expect(html).toContain("<title>Test Title</title>");
});

describe("Layout component", () => {
  let container: AstroContainer;
  const testTitle = "Test Title";

  beforeAll(async () => {
    container = await AstroContainer.create();
  });

  test("renders with dynamic title prop", async () => {
    const html = await container.renderToString(Layout, {
      props: { title: testTitle },
    });
    // Check that <title> contains the dynamic title text
    expect(html).toMatch(new RegExp(`<title>\\s*${testTitle}\\s*</title>`));
  });

  test("renders header navigation links with aria-labels", async () => {
    const html = await container.renderToString(Layout, {
      props: { title: testTitle },
    });

    // Check there is at least one nav link with aria-label attribute
    const ariaLabelRegex = /<nav[^>]*>[\s\S]*?<a[^>]+aria-label="[^"]+"[^>]*>/;
    expect(html).toMatch(ariaLabelRegex);
  });

  test("renders footer element", async () => {
    const html = await container.renderToString(Layout, {
      props: { title: testTitle },
    });

    // Check that a footer tag exists
    expect(html).toContain("<footer");

    // Optionally check footer content loosely (without exact text)
    expect(html).toMatch(/<footer[^>]*>[\s\S]*<\/footer>/);
  });

  test("renders main container div", async () => {
    const html = await container.renderToString(Layout, {
      props: { title: testTitle },
    });

    // Look for main element with a child div that has 'container' class
    expect(html).toMatch(
      /<main[^>]*>[\s\S]*<div[^>]*class="[^"]*container[^"]*"[^>]*>/,
    );
  });
});

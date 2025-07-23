import { Page, PageTitle, PageDescription } from "kitter";

export const Welcome = () => {
  return (
    <Page id="welcome" center>
      <PageTitle title="Welcome" />
      <PageDescription>
        kitter.js is a minimal and expressive documentation framework for modern
        component libraries and design systems with React, Tailwind, and
        TypeScript.
        <br />
        <br />
        kitter.js was designed to make documenting design systems clean,
        expressive, and fun — without boilerplate. Whether you're building a
        design system from scratch or showcasing tokens in production, kitter
        gets out of your way. The current implementation of kitter includes
        color swatches and typography systems. However, our team is continuing
        to develop more design features into kitter as we seek to push the
        limits of what is possible with design token documentation.
      </PageDescription>
    </Page>
  );
};

"use client"

import { Documentation, Page, ColorSwatch, ColorGroup, PageTitle, ScrollToTop } from 'kitter'

export default function Home() {
  return (
      <Documentation>
          <ScrollToTop/>
        <Page center={true} id="toc">
            <PageTitle title="Create Next App" />
          <ColorGroup title="test">
              <ColorSwatch label="--text-blue-500" color="bg-blue-500" />
              <ColorSwatch label="--text-blue-500" color="bg-blue-500" />
              <ColorSwatch label="--text-blue-500" color="bg-blue-500" />
              <ColorSwatch label="--text-blue-500" color="bg-blue-500" />
          </ColorGroup>
        </Page>
      </Documentation>
  );
}

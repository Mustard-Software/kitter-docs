"use client"

import { Documentation, Page, ColorSwatch, ColorGroup, PageTitle, ScrollToTop } from 'kitter'

export default function Home() {
  return (
      <Documentation>
          <ScrollToTop/>
        <Page center={true} id="toc">
            <PageTitle title="Create Next App" className="text-xl" />
          <ColorGroup title="test">
              <ColorSwatch label="--text-blue-500" color="text-blue-500" />
          </ColorGroup>
        </Page>
      </Documentation>
  );
}

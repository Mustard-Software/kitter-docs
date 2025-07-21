import { Documentation, Page } from 'kitter'

export default function Home() {
  return (
      <Documentation>
        <Page center={true} id="toc">
          <h1>Test</h1>
          <div className="w-64 h-64 bg-pink-500" />
        </Page>
      </Documentation>
  );
}

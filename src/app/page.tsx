"use client";

import { Documentation, Page, ScrollToTop, DocumentContents } from "kitter";
import { Welcome } from "./_pages/Welcome";

export default function Home() {
  const contents = [{ label: "welcome", id: "welcome" }];

  return (
    <Documentation className="bg-purple-50">
      <ScrollToTop />
      <Page center={true} id="toc">
        <div className="flex flex-col w-full justify-center items-center gap-8">
          <img
            src="https://mtbgfwk74cfkxvwf.public.blob.vercel-storage.com/kitter/kitter-logo.png"
            className="w-[300px]"
          />
          <DocumentContents contents={contents} className="justify-center" />
        </div>
      </Page>
      <Welcome />
    </Documentation>
  );
}

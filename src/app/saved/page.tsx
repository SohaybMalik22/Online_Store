import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SavedList from "@/components/SavedList";

export const metadata: Metadata = {
  title: "My Shortlist",
  description:
    "The pieces you have saved. Bring the list with you when you visit the boutique.",
};

export default function SavedPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "My Shortlist" }]}
        eyebrow="Kept For You"
        title="My Shortlist"
        body="Saved on this device only. Show this list at the counter and we will pull the pieces out for you."
      />
      <SavedList />
    </>
  );
}

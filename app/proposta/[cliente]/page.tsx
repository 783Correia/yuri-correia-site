import { notFound } from "next/navigation";
import JeansDoBemp from "../jeans-do-bem/JeansDoBemp";

const proposals: Record<string, React.ComponentType> = {
  "jeans-do-bem": JeansDoBemp,
};

interface Props {
  params: Promise<{ cliente: string }>;
}

export function generateStaticParams() {
  return Object.keys(proposals).map((cliente) => ({ cliente }));
}

export async function generateMetadata({ params }: Props) {
  const { cliente } = await params;
  const titles: Record<string, string> = {
    "jeans-do-bem": "Proposta Jeans do Bem — E-commerce Dual Market · Yuri Correia",
  };
  return {
    title: titles[cliente] ?? "Proposta Comercial · Yuri Correia",
    robots: { index: false, follow: false },
  };
}

export default async function ProposalPage({ params }: Props) {
  const { cliente } = await params;
  const Proposal = proposals[cliente];
  if (!Proposal) notFound();
  return <Proposal />;
}

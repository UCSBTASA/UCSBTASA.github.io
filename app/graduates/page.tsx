import Head from "next/head";
import { getAlumniSheet } from "../../libs/sheets";

interface Alumni {
  name: string;
  year: string;
  bio: string;
  linkedin: string;
}
export default function IndexPage({ alumni }: { alumni: Alumni[] }) {
  return (
    <>
      <Head>
        <title>Title - FrasNym</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {alumni[0].name}
    </>
  );
}

export async function getStaticProps(context) {
  const alumni = await getAlumniSheet();
  return {
    props: {
      alumni: alumni.slice(1, alumni.length), // remove sheet header
    },
    revalidate: 1, // In seconds
  };
}

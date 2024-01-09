import Head from "next/head";
import { getGoogleSheetsData } from "@/server/gsheets";

interface Alumni {
  name: string;
  year: string;
  bio: string;
  linkedin: string;
}
export default async function IndexPage() {
  const alumniData = await getGoogleSheetsData("alumni");
  const alumni = alumniData
    ?.map(
      (alum: any[]) =>
        ({
          name: alum[0],
          year: alum[1],
          bio: alum[2],
          linkedin: alum[3],
        } as Alumni)
    )
    .slice(1, alumniData.length); // remove the header

  return (
    <>
      <div>
        {alumni?.map((post: Alumni) => (
          <div key={post.name}>
            <h1>{post.name}</h1>
            <p>{post.year}</p>
            <p>{post.bio}</p>
            <p>{post.linkedin}</p>
          </div>
        ))}
      </div>
    </>
  );
}

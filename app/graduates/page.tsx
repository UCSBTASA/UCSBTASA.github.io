import Head from "next/head";
import ScrollTransition from "@/components/scroll-transition";
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
      <div>
        <div className="items-center justify-center min-h-screen">
          <div className="px-4 py-8 text-center bg-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 uppercase">
              Meet the Alumni!
            </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mt-16 mx-16">
                  {alumni?.map((post: Alumni) => (
                    <div key={post.name} className="flex flex-col items-center justify-center">
                      <ScrollTransition>
                        <h1 className="text-black text-2xl mt-6 font-semibold">
                          {post.name}
                        </h1>
                        <p className="text-md text-[#00000080] mt-2 leading-16 max-w-lg">
                          <strong>Year: </strong>
                          {post.year}
                        </p>
                        <p className="text-md text-[#00000080] mt-2 leading-16 max-w-lg">
                          <strong>Bio: </strong>
                          {post.bio}
                        </p>
                        <p className="text-md text-[#00000080] mt-2 leading-16 max-w-lg">
                          <strong>LinkedIn: </strong>
                          {post.linkedin}
                        </p>
                      </ScrollTransition>
                  </div>
                  ))}                  
              </div>
          </div>
        </div>
      </div>
  );
}



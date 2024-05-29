"use client";

import Image from "next/image";
import Link from "next/link";

const SeniorProfile = (props: any) => {
  return (
    <div className="flex-row mb-8">
      
    <Link href={'/alumni/2024/' + props.slug}>
        <Image
          src={props.imageUrl}
          alt="Senior Profile Picture"
          width={400}
          height={600}
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="rounded-3xl "
        />
     </Link>

      <p className="text-black text-2xl mt-6 font-semibold justify-center">
        {props.name}
      </p>
      <p className="justify-center mb-2">{props.major}</p>
      <p className="justify-center">{props.position}</p>
    </div>
  );
};

export default SeniorProfile;

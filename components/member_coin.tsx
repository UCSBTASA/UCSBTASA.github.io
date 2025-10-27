import Image from "next/image";

const flipEnabled = false;

const MemberCoin = (props: any) => {
  return (
    <div className="group h-72 w-72 [perspective:1000px] mx-auto">
      <div
        className={flipEnabled ?? `relative h-full w-full rounded-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] ${"group-hover:[transform:rotateY(180deg)]"}`}
      >
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <Image
            src={props.imageUrl}
            alt={props.name}
            fill
            // width={250}
            // height={250}
            priority={props.priority}
            className="object-cover rounded-full max-h"
            //className="max-w-[400px] lg:max-w-[100%] w-auto mx-auto mb-2 rounded-full max-h-full"
          />
        </div>

        <div className="absolute inset-0 h-full w-full rounded-full bg-black/100 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <Image
            src={props.imageUrlBack}
            alt={props.name}
            width={250}
            height={250}
            priority={false}
            className="max-w-[400px] lg:max-w-[100%] w-auto mx-auto mb-2 rounded-full max-h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default MemberCoin;

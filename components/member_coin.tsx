import Image from "next/image";

// Feature flag: Flip animation for member coin
const FLIP_ENABLED = true;

const MemberCoin = (props: any) => {
    return(
        <div className="group mx-auto aspect-square w-72 max-w-full [perspective:1000px]">
            <div className={`relative h-full w-full rounded-full shadow-xl transition-transform duration-500 ${FLIP_ENABLED ? "[transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]" : ""}`}>
                <div className="absolute inset-0 [backface-visibility:hidden]">
                    <div className="relative h-full w-full overflow-hidden rounded-full">
                        <Image
                            src={props.imageUrl}
                            alt={props.name}
                            fill
                            sizes="288px"
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <div className="relative h-full w-full overflow-hidden rounded-full bg-black">
                        <Image
                            src={props.imageUrlBack}
                            alt={props.name}
                            fill
                            sizes="288px"
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MemberCoin;

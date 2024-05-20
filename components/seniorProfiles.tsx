import Image from "next/image";
import alumniPpl from "@/data/alumnidata";

const seniorProfiles = (props: any) => {
    return(
        <div>
            <div className="absolute inset-0 " >
                <Image
                    src={props.imageUrl}
                    alt={props.name}
                    width={250}
                    height={250}
                    className="max-w-[400px] lg:max-w-[100%] w-auto mx-auto mb-2 max-h-full"
                />
            </div>

        </div>
    );
};
export default seniorProfiles;
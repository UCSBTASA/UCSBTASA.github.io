import ScrollTransition from "@/components/scroll-transition";
import MemberCoin from "../../components/member_coin";
import staffMembers from "@/data/staffMembers";

const StaffPage = () => {
  return (
    <div>
      <div className="items-center justify-center min-h-screen">
        <div className="px-4 py-8 text-center bg-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 uppercase">
            Meet the Staff!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mt-16 mx-16">
            {staffMembers.map((staff) => (
                <div
                  key={staff.id}
                  className="flex flex-col items-center justify-center"
                >
                  <ScrollTransition>
                    <div className="">
                      <MemberCoin
                        imageUrl={staff.imageUrl}
                        imageUrlBack={staff.imageUrlBack}
                        name={staff.name}
                      />
                    </div>
                    <h2 className="text-black text-2xl mt-6 font-semibold">
                      {staff.name}
                    </h2>
                    <p className="text-md text-[#8888888] mt-3 font-bold leading-20">
                      {staff.position.toUpperCase()}
                    </p>
                    <p className="text-md text-[#00000080] mt-2 leading-16 max-w-lg">
                      <strong>Major: </strong>
                      {staff.major}
                    </p>
                    <p className="text-md text-[#00000080] leading-16">
                      <strong>Hometown: </strong>
                      {staff.hometown}
                    </p>
                    <p className="text-md text-[#00000080] leading-16">
                      <strong>Favorite Movie: </strong>
                      {staff.favMovie}
                    </p>
                    <p className="text-md text-[#00000080] leading-16">
                      <strong>Fun Fact: </strong>
                      {staff.funFact}
                    </p>
                  </ScrollTransition>
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffPage;

import Link from "next/link";
import Image from "next/image";
import ScrollTransition from "@/components/scroll-transition";

import seniorprofiles from "@/data/seniorprofiles";
const AndrewCho = () => {
  const AndrewChoData = [
    {
      title: "Andrew Cho 2",
      image: "/graduates2020_photos/AndrewCho2.jpg",         
    
      slug: "AndrewCho2",
    },
    {
      title: "Andrew Cho 3",
      image: "/graduates2020_photos/AndrewCho3.jpg",         
    
      slug: "AndrewCho3",
    },
    {
      title: "Andrew Cho 3",
      image: "/graduates2020_photos/AndrewCho3.jpg",         
    
      slug: "AndrewCho3",
    },
    {
      title: "Andrew Cho 4",
      image: "/graduates2020_photos/AndrewCho4.jpg",         
    
      slug: "AndrewCho4",
    },
    
  ];
return (
    <div>
        <div className="relative h-80 lg:h-[85vh] bg-green-100">
        <div className="items-center justify-center min-h-screen">
        <div className="px-1 py-8 text-center bg-green-100">
          <h2 className="text-5xl font-bold font-serif text-black-900 uppercase">
            Happy Graduation Andrew!
          </h2>
          
        </div>
        
        <div className="relative h-200 lg:h-[85vh]">
                <Image
                    src="/graduates2020_photos/background2.avif"
                    alt="background1"
                    fill
                    quality={100}
                    priority={true}
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />
                <div className="mx-4 lg:mx-16 pt-16">
        <div className="p-8 mb-8 flex flex-col md:flex-row">
          <div className="md:w-[60%] md:pr-4 bg-green-100">
            
            <ScrollTransition>
              <h2 className="text-4xl font-bold mb-4">Andrew Cho</h2>
              <p className="text-gray-700">
              Last words for TASA:
              </p>
              <br />
              <p className="text-gray-700">
                ​I am grateful for those I have met in TASA and those who I can drink with and talk about random stuff until late at night. The memories I have made outside of TASA (especially at Royal's apartment) have made me enjoy the last two years of college and if it wasn't for the TASA bois (RIP TFTI) and that fateful lunch at Denny's, I would not have had the same experience in TASA.
              </p>
              <br />
              
            </ScrollTransition>
            
          </div>
          <div className="flex flex-wrap justify-center items-center md:w-[50%] md:pl-4 mt-4">
            <ScrollTransition>
              <span className="table">
                
                  <Image
                    src="/graduates2020_photos/AndrewChoO.jpg"
                    alt="Andrew Cho"
                    width={400}
                    height={1000}
                  />
                  
                
              </span>
            </ScrollTransition>
          </div>
        </div>
    </div>
    </div>
    </div>
    </div>
    <div className="relative h-1000 lg:h-[85vh] bg-green-100">
        <div className="flex flex-wrap items-center justify-center min-h-screen bg-green-100">
        <div className="px-1 py-8 text-left ml-6 md:w-[40%]">
          <p className="text-1xl font-serif text-black-900 uppercase">
          Hello Andrew, 
         It’s been a wild year! Thank you for picking me up as a little but I really don’t appreciate you leaving so early...totally not cool. On the other hand, I really appreciate everything that you’ve shown me around campus and IV, but most importantly I thank you for teaching me to respect women! Your philosophy is straight and fosho one of the bests, keep on respecting women and shotgunning yerbs! Thanks for shotgunning a yerb with me, it was a great bonding activity but I would not recommend the crash that happens, uh, let’s do it again sometime but with two yerbs to up it.    
     Good luck in the real world, go be that dude that does everything. Thanks for teaching me how to become a real Gaucho, a true Gaucho that lives like a Gaucho. See you around! If you ever need anything, let me know and most importantly we should hang sometime when you come back and go get some Freebirds. I’m craving them nachos rn, I would die for one. 
Best, 
    Sam 
          </p>
          
        </div>
        <div className="px-1 py-8 text-left ml-6 md:w-[40%]">
          <p className="text-1xl font-serif text-black-900 uppercase">
          andrew! thank you for being tasa dad and always looking out for everyone that loses at gauchoball, especially me LOL. i also appreciate how you always make things fun at tasa events, it definitely wouldn’t be the same without you! 😊 -- Vanessa T
          </p>
          
        </div>
        <div className="px-1 py-8 text-left ml-6 md:w-[40%]">
          <p className="text-1xl font-serif text-black-900 uppercase">
          ANDREW

HOMIE

T5 LEADER
We only got to know each other for a short period of time but I’m super glad we did. Our T5 was never fully realized but we still got to share some amazing moments regardless. Thanks for showing us that super good ice cream place wtf. I still had so much to learn from you DDDD: TY 4 being such a chill bro. GL OUT THERE.
JASON X.          </p>
          
        </div>
        <div className="px-1 py-8 text-left ml-6 md:w-[40%]">
          <p className="text-1xl font-serif text-black-900 uppercase">
          Dear Andrew,
It's the party king himself. I knew you since fall quarter since you're Sam's big, but I was always a little intimidated by you just because you were a senior and TASA boys. That all changed in winter quarter when we more formally met after you had to drive Zane's car back for winter retreat. From then on, I talked to you a little more, and with TFTI, I really got to know you. You're super nice and easy-going, and I'm sad that we didn't get to hang out more spring quarter because I feel like it would've been super lit. Regardless, you're actually always in the area anyway so maybe I'll see you next year haha. Good luck with your endeavors after graduating! 
Sincerely, 
Wesley          </p>
          
        </div>
        <div className="px-1 py-8 text-left ml-6 md:w-[40%]">
          <p className="text-1xl font-serif text-black-900 uppercase">
          Hi party dad!!! ٩(^ᴗ^)۶
I really can’t express how grateful I am that we hung out this year. Every TASA party with you is so fun and every conversation with you is so entertaining. Thank you for being a super solid friend. You are truly a fun person to be around and your energy is so warm and welcoming. I’ll never forget our 4am conversation at retreat :)
I’m gonna miss you a ton next year.
TASA events really won’t be the same without you and Royal (Ｔ▽Ｔ)
Love,
Annie          </p>
          
        </div>
        <div className="px-1 py-8 text-left ml-6 md:w-[40%]">
          <p className="text-1xl font-serif text-black-900 uppercase">
          hi andrew,
Ty for being a late owl w/ me at tfti winter retreat+every event of tasa that ever required staying up late. You’re the #1 tasa boy
Emily Lou          </p>
          
        </div>
        <div className="px-1 py-8 text-left ml-6 md:w-[40%]">
          <p className="text-1xl font-serif text-black-900 uppercase">
          hi andrew,
          Dear Andrew,
Congrats on ur graduation! I know it sucks that you can’t have a normal graduation because of this pandemic, but despite that it is a time to celebrate because this is a huge achievement.
I am so glad we were paired as big and little. Thank you for the hangouts and the memories, and also for the help in gen chem labs. I might hit you up for help in ochem labs lol. I’m sorry we didn’t get to hangout as much this past year, rowing really took over my schedule sadly. 
When I first met you, you said you wanted to be a teacher. I hope in a few years when we meet again I can hear about the chaotic stories of your students in your science class. 
Anyways, when this whole pandemic-shelter-in-place thing is over, lets hangout and catch up. I’ll be in SB for the remainder of spring quarter and I’ll be back in early September. Hopefully by then this will all be over. 
Once again, congratulations to you and I’m proud to call you my big. 
Sincerely,
Pauline Yang         </p>
          
        </div>
        </div>
        <div className="flex flex-wrap items-center justify-center min-h-screen bg-green-100">
          <div className="md:pl-4 mt-4 md:w-[40%]">
          <Image
                    src="/graduates2020_photos/AndrewCho1.JPG"
                    alt="Pickup Photo 1"
                    width={400}
                    height={400}
                  />
          </div>
            <div className= "px-1 py-8 text-left ml-6 md:w-[40%]">
            <p className="text-1xl font-serif text-black-900 uppercase">
            Andrew Cho
My boi Andrew. First off, I’m so glad I met you at dumpling night. To be honest I thought you were going to be too cool to talk to me but then you started talking about kpop and anime. I’m grateful that you were put into my car for TFTI along with the other boys, even though we didn’t make it to LA, we ended up developing a valuable friendship. In these two years, I like to believe that hanging out with you changed me for the better. Hanging out with you has made me realize that it’s okay to be weird in front of people. You also got me to lower my shotgun time. I’ve always admired your energy and how you were always down to kick it back at my place. There was never a quiet moment when you were around (only because you would out sing everyone in the room). I will always remember every time I drove you and how you would take over aux to vibe to rap, country, kpop, or Disney music. If I hadn’t met you, I probably wouldn’t have been able to meet the people that I am close to now, “TASA boys” wouldn’t have existed, and 6652 Sueno would’ve been a quiet and boring apartment. Hope we stay close after graduation. Good luck with your school stuff. Peace bro.
​- Royal         </p>
            </div>
            <div className= "px-1 py-8 text-left ml-6 md:w-[40%]">
            <p className="text-2xl font-bold font-serif text-black-900 uppercase">
              Best Memory?
              </p>
            </div>
            <div className= "px-1 py-8 text-left ml-6 md:w-[40%]">
            <p className="text-2xl font-bold font-serif text-black-900 uppercase">
              One thing to tell your freshmen self
              </p>
            </div>
            <div className= "px-1 py-8 text-left ml-6 md:w-[40%]">
            <p className="text-1xl font-serif text-black-900 uppercase">
            Shotgunning beers with the Bois under Storke Tower

              </p>
            </div>
            <div className= "px-1 py-8 text-left ml-6 md:w-[40%]">
            <p className="text-1xl font-serif text-black-900 uppercase">
            Be more outgoing and join more organizations to meet new people.

              </p>
            </div>
            
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 bg-green-100">
        {AndrewChoData.map((photo) => (
                
                  <div className="group relative cursor-pointer">
                    <Image
                      src={photo.image}
                      alt={photo.title}
                      width={400}
                      height={400}
                      className="transition transform justify-center group-hover:scale-105"
                    />
                  </div>
               
              ))}
        </div>
        </div>
    </div>
);
};

export default AndrewCho;
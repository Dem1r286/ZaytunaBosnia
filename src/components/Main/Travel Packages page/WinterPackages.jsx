import React from "react";
import { Heart } from "lucide-react";
import PackageCard from "./PackageCard";
import { Link } from "react-router-dom";

const WinterPackages = () => {
  return (
    <div id="winter-packages" className="flex justify-center items-center">
      <div className="w-full flex flex-col gap-16">

        <div className="w-full flex flex-col items-start ml-10">
          <div className="flex items-center gap-4">
            <span className="bg-orange-500 rounded-2xl h-[5px] w-[50px]"></span>
            <p className="text-[#22c55e] font-semibold flex items-center gap-2">
              Perfect for Couples <Heart className="w-5 h-5 text-green-500" />
            </p>
          </div>
          <p className="font-semibold text-3xl mt-1">Winter Packages</p>
        </div>


        <div className="flex justify-center items-center flex-row gap-[5vw]">
          <Link
            to="/travel-package-details"
            state={{
              nights: 3,
              days: 4,
              price: 349,
              vipPrice: 499,
              currency: "€",
              activities: [
                "Day 1: Arrival and Accommodation",
                "Day 2: Sarajevo Discovery - Tunnel of Hope, City Charms, and Trebević Adventure",
                "Day 3: Herzegovina Delights - Mostar, Kravice Waterfalls, and Historic Treasures",
                "Day 4: Exploration of Travnik, Jajce, and Pliva's Natural Wonders"
              ],
              activitiesDetails: [
                "Upon arrival at SJJ Airport, you will receive a warm welcome and embark on a panoramic tour of Sarajevo. During this tour, you will be introduced to essential information about the country, the city itself, the weather, the local people, the currency, and the best dining establishments. Afterward, you will be transferred to your hotel for check-in, where our team will assist in arranging the timing and schedule for the next day's activities. Enjoy some leisure time to explore at your own pace and unwind in the vibrant city of Sarajevo. Rest comfortably overnight, preparing for the exciting adventures that lie ahead.",
                "After breakfast at the hotel, begin your day with a visit to the Sarajevo Tunnel of Hope, a key historical site from the 1993 siege. Next, enjoy the peaceful nature at Vrelo Bosne, a scenic park featuring the spring of the River Bosna. Continue to Sarajevo's Old Town and city center for a guided tour that highlights the city’s rich blend of Ottoman, Austro-Hungarian, and modern influences. Later, take a panoramic cable car ride up to Trebevic Mountain, where you can explore forest trails, visit Sunnyland amusement park, or relax in local mountain cafes. End the day with shopping and return to your hotel for an overnight stay.",
                "After breakfast, we head to Herzegovina, a region rich in nature and history. Our first stop is Mostar, famous for the iconic UNESCO-listed Old Bridge and its blend of cultures. Explore the charming old town and enjoy riverside cafés. We then visit the stunning Kravice Waterfalls, followed by the medieval village of Pocitelj, known for its stone architecture and hillside fortress. Next, we explore Blagaj, home to the Buna River spring and the peaceful Dervish House. On the way back to Sarajevo, we make a short stop in Konjic to see its historic Ottoman bridge. Enjoy your evening at leisure and rest overnight in Sarajevo.",
                "After breakfast, we begin our journey with a visit to Travnik, a former Ottoman capital rich in history. Explore the Sulejmania Mosque, Elci Ibrahim Pasha’s Madrassah, Nobel laureate Ivo Andric’s home, and the scenic Bluewater area, topped with views from the medieval fortress. Next, we head to Jajce, once the seat of Bosnian kings, known for its iconic 22-meter Pliva Waterfall. We continue to the Pliva Lakes, home to historic watermills from the 16th century. Before returning to Sarajevo, we stop at the Semesnica ethno village to enjoy traditional Bosnian cuisine in a peaceful, natural setting. End the day with free time and an overnight stay in Sarajevo.",
                "After savoring a delicious breakfast at the hotel, you'll have some free time to indulge in shopping or take a leisurely stroll through the charming town. Later, we will arrange your transfer to the airport. As your remarkable 5-day tour comes to an end, it's time for us to bid you farewell. We sincerely hope that you've relished every moment of your journey with our agency. Safe travels, and we look forward to welcoming you back in the future!",
              ]
            }}
          >
            <PackageCard
              nights={3}
              days={4}
              price={349}
              vipPrice={499}
              currency="€"
              bgColor={"#004aad"}
              buttonColor={"#ff6900"}
              packageType="regular"
              activities={[
                "1-day: Arrival and Accommodation",
                "2-day: Ordinary Car",
                "3-day: Travel Guide fluent in English or Arabic (depends on availability)",
                "4-day: All entrance fees for included attractions",
                "5-day: Driver (English or Arabic is not guaranteed, depending on availability)",
              ]}
              buttonText="Read More"
            />
          </Link>

          <Link
            to="/travel-package-details"
            state={{
              nights: 4,
              days: 5,
              price: 349,
              vipPrice: 499,
              currency: "€",
              activities: [
                "Day 1: Arrival and Accommodation",
                "Day 2: Sarajevo Discovery - Tunnel of Hope, City Charms, and Trebević Adventure",
                "Day 3: Herzegovina Delights - Mostar, Kravice Waterfalls, and Historic Treasures",
                "Day 4: Exploration of Travnik, Jajce, and Pliva's Natural Wonders",
                "Day 5: Departure",
              ],
              activitiesDetails: [
                "Upon arrival at SJJ Airport, you will receive a warm welcome and embark on a panoramic tour of Sarajevo. During this tour, you will be introduced to essential information about the country, the city itself, the weather, the local people, the currency, and the best dining establishments. Afterward, you will be transferred to your hotel for check-in, where our team will assist in arranging the timing and schedule for the next day's activities. Enjoy some leisure time to explore at your own pace and unwind in the vibrant city of Sarajevo. Rest comfortably overnight, preparing for the exciting adventures that lie ahead.",
                "After breakfast at the hotel, begin your day with a visit to the Sarajevo Tunnel of Hope, a key historical site from the 1993 siege. Next, enjoy the peaceful nature at Vrelo Bosne, a scenic park featuring the spring of the River Bosna. Continue to Sarajevo's Old Town and city center for a guided tour that highlights the city’s rich blend of Ottoman, Austro-Hungarian, and modern influences. Later, take a panoramic cable car ride up to Trebevic Mountain, where you can explore forest trails, visit Sunnyland amusement park, or relax in local mountain cafes. End the day with shopping and return to your hotel for an overnight stay.",
                "After breakfast, we head to Herzegovina, a region rich in nature and history. Our first stop is Mostar, famous for the iconic UNESCO-listed Old Bridge and its blend of cultures. Explore the charming old town and enjoy riverside cafés. We then visit the stunning Kravice Waterfalls, followed by the medieval village of Pocitelj, known for its stone architecture and hillside fortress. Next, we explore Blagaj, home to the Buna River spring and the peaceful Dervish House. On the way back to Sarajevo, we make a short stop in Konjic to see its historic Ottoman bridge. Enjoy your evening at leisure and rest overnight in Sarajevo.",
                "After breakfast, we begin our journey with a visit to Travnik, a former Ottoman capital rich in history. Explore the Sulejmania Mosque, Elci Ibrahim Pasha’s Madrassah, Nobel laureate Ivo Andric’s home, and the scenic Bluewater area, topped with views from the medieval fortress. Next, we head to Jajce, once the seat of Bosnian kings, known for its iconic 22-meter Pliva Waterfall. We continue to the Pliva Lakes, home to historic watermills from the 16th century. Before returning to Sarajevo, we stop at the Semesnica ethno village to enjoy traditional Bosnian cuisine in a peaceful, natural setting. End the day with free time and an overnight stay in Sarajevo.",
                "After savoring a delicious breakfast at the hotel, you'll have some free time to indulge in shopping or take a leisurely stroll through the charming town. Later, we will arrange your transfer to the airport. As your remarkable 5-day tour comes to an end, it's time for us to bid you farewell. We sincerely hope that you've relished every moment of your journey with our agency. Safe travels, and we look forward to welcoming you back in the future!",
              ]
            }}
          >
            <PackageCard
              nights={4}
              days={5}
              price={349}
              vipPrice={499}
              currency="€"
              bgColor={"#004aad"}
              buttonColor={"#ff6900"}
              packageType="regular"
              activities={[
                "1-day: Arrival and Accommodation",
                "2-day: Ordinary Car",
                "3-day: Travel Guide fluent in English or Arabic (depends on availability)",
                "4-day: All entrance fees for included attractions",
                "5-day: Driver (English or Arabic is not guaranteed, depending on availability)",
              ]}
              buttonText="Read More"
            />
          </Link>


           <Link
            to="/travel-package-details"
            state={{
              nights: 4,
              days: 5,
              price: 349,
              vipPrice: 499,
              currency: "€",
              activities: [
                "Day 1: Arrival and Accommodation",
                "Day 2: Sarajevo Discovery - Tunnel of Hope, City Charms, and Trebević Adventure",
                "Day 3: Herzegovina Delights - Mostar, Kravice Waterfalls, and Historic Treasures",
                "Day 4: Exploration of Travnik, Jajce, and Pliva's Natural Wonders",
                "Day 5: Departure",
              ],
              activitiesDetails: [
                "Upon arrival at SJJ Airport, you will receive a warm welcome and embark on a panoramic tour of Sarajevo. During this tour, you will be introduced to essential information about the country, the city itself, the weather, the local people, the currency, and the best dining establishments. Afterward, you will be transferred to your hotel for check-in, where our team will assist in arranging the timing and schedule for the next day's activities. Enjoy some leisure time to explore at your own pace and unwind in the vibrant city of Sarajevo. Rest comfortably overnight, preparing for the exciting adventures that lie ahead.",
                "After breakfast at the hotel, begin your day with a visit to the Sarajevo Tunnel of Hope, a key historical site from the 1993 siege. Next, enjoy the peaceful nature at Vrelo Bosne, a scenic park featuring the spring of the River Bosna. Continue to Sarajevo's Old Town and city center for a guided tour that highlights the city’s rich blend of Ottoman, Austro-Hungarian, and modern influences. Later, take a panoramic cable car ride up to Trebevic Mountain, where you can explore forest trails, visit Sunnyland amusement park, or relax in local mountain cafes. End the day with shopping and return to your hotel for an overnight stay.",
                "After breakfast, we head to Herzegovina, a region rich in nature and history. Our first stop is Mostar, famous for the iconic UNESCO-listed Old Bridge and its blend of cultures. Explore the charming old town and enjoy riverside cafés. We then visit the stunning Kravice Waterfalls, followed by the medieval village of Pocitelj, known for its stone architecture and hillside fortress. Next, we explore Blagaj, home to the Buna River spring and the peaceful Dervish House. On the way back to Sarajevo, we make a short stop in Konjic to see its historic Ottoman bridge. Enjoy your evening at leisure and rest overnight in Sarajevo.",
                "After breakfast, we begin our journey with a visit to Travnik, a former Ottoman capital rich in history. Explore the Sulejmania Mosque, Elci Ibrahim Pasha’s Madrassah, Nobel laureate Ivo Andric’s home, and the scenic Bluewater area, topped with views from the medieval fortress. Next, we head to Jajce, once the seat of Bosnian kings, known for its iconic 22-meter Pliva Waterfall. We continue to the Pliva Lakes, home to historic watermills from the 16th century. Before returning to Sarajevo, we stop at the Semesnica ethno village to enjoy traditional Bosnian cuisine in a peaceful, natural setting. End the day with free time and an overnight stay in Sarajevo.",
                "After savoring a delicious breakfast at the hotel, you'll have some free time to indulge in shopping or take a leisurely stroll through the charming town. Later, we will arrange your transfer to the airport. As your remarkable 5-day tour comes to an end, it's time for us to bid you farewell. We sincerely hope that you've relished every moment of your journey with our agency. Safe travels, and we look forward to welcoming you back in the future!",
              ]
            }}
          >
            <PackageCard
              nights={5}
              days={6}
              price={349}
              vipPrice={499}
              currency="€"
              bgColor={"#004aad"}
              buttonColor={"#ff6900"}
              packageType="regular"
              activities={[
                "Day 1: Arrival and Accommodation",
                "Day 2: Ordinary Car",
                "Day 3: Travel Guide fluent in English or Arabic (depends on availability)",
                "Day 4: All entrance fees for included attractions",
                "Day 5: Driver (English or Arabic is not guaranteed, depending on availability)",
              ]}
              buttonText="Read More"
            />
          </Link>

        </div>
      </div>
    </div>
  );
};

export default WinterPackages;

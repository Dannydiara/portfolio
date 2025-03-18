import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

const words = [
  "Performance",
  "Interactive",
  "Reliable",
  "Secure",
  "Accessible",
  "Usable",
  "Search Optimized",
  "Responsive",
  "Maintainable",
  "User Friendly",
  "Scalable",
  "Fast",
  "Modern",
  "Intuitive",
  "Engaging",
  "Innovative",
  "Dynamic",
  "Robust",
  "Efficient",
  "Effective",
  "Creative",
  "Attractive",
  "Modern",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="inline-block whitespace-nowrap py-3 pr-2 animate-marquee-left [animation-duration:50s]">
            {[...new Array(4)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div key={`${word}-${idx}`} className="inline-flex gap-4 items-center mx-4">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <StarIcon className="size-6 text-gray-900 -rotate-12 animate-spin duration-5000" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
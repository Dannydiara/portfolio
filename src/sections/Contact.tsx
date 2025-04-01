import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { ContactModal } from "@/components/ContactModal";

export const ContactSection = () => {
  return (
    <div id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div className="">
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something exceptional together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your vision to life? Let&apos;s connect and discuss
                how we can make it happen together!
              </p>
            </div>
            <div>
              <ContactModal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

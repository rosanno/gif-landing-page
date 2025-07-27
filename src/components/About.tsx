/* eslint-disable prefer-const */
import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import type { IconType } from "react-icons";
import { MdOutlineArrowOutward } from "react-icons/md";
import { BiGridAlt } from "react-icons/bi";
import { IoIosPlay } from "react-icons/io";
import { GoDatabase, GoInfinity } from "react-icons/go";
import { GrPowerCycle } from "react-icons/gr";
import { motion } from "framer-motion";

import HappyFace from "@/assets/happy-face.png";
import ProfileImg from "@/assets/profile.jpg";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const About = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isLargeScreen = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  useEffect(() => {
    if (isLargeScreen) return; // Disable auto-scroll on large screens

    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollSpeed = 0.5;
    let frameId: number;

    const loopScroll = () => {
      if (
        container.scrollLeft >=
        container.scrollWidth / 2
      ) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += scrollSpeed;
      }
      frameId = requestAnimationFrame(loopScroll);
    };

    frameId = requestAnimationFrame(loopScroll);

    // Pause/resume on hover
    const pause = () => cancelAnimationFrame(frameId);
    const resume = () =>
      (frameId = requestAnimationFrame(loopScroll));

    container.addEventListener("mouseenter", pause);
    container.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(frameId);
      container.removeEventListener("mouseenter", pause);
      container.removeEventListener("mouseleave", resume);
    };
  }, [isLargeScreen]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const cardList = [
    {
      type: "text",
      icon: GoDatabase,
      title: "Secure your child's future.",
      description:
        "Invest early, grow smart, and build a confident future for your child.",
    },
    {
      type: "profile",
    },
    {
      type: "badges",
      badges: [
        {
          icon: BiGridAlt,
          label: "customizable",
          align: "right",
        },
        {
          icon: GoInfinity,
          label: "flexible",
          align: "left",
        },
        {
          icon: GrPowerCycle,
          label: "full control",
          align: "right",
        },
      ],
    },
  ];

  const cardsToRender = isLargeScreen
    ? cardList
    : [...cardList, ...cardList];

  return (
    <section className="mt-7">
      <div className="max-w-xs mx-auto text-center">
        <h1 className="tracking-wider font-medium text-2xl">
          Your trusted world wide{" "}
          <span className="text-[#7478F8]">
            investment firm
          </span>
        </h1>
        <p className="text-sm text-gray-500 pt-2.5">
          G I F offers solutions across alternative assets
          real estate, private equity and infrastructure
          delivering deep expertise, rigorous research and
          disciplined execution worldwide.
        </p>
        <div className="flex items-center gap-x-2 pt-6">
          <Button className="rounded-full bg-[#7478F8]! text-xs pr-2 font-normal flex items-center gap-x-2">
            Start invest today
            <div className="bg-white rounded-full p-1.5">
              <MdOutlineArrowOutward className="size-4 text-[#7478F8]" />
            </div>
          </Button>
          <Button
            className="rounded-full text-xs text-black! border-black! font-normal pr-2 flex items-center gap-x-2"
            variant="outline"
          >
            View our story
            <div className="bg-white rounded-full p-1.5">
              <IoIosPlay className="size-4 text-[#7478F8]" />
            </div>
          </Button>
        </div>
      </div>

      <div
        className="pt-10 overflow-x-auto scrollbar"
        ref={scrollContainerRef}
      >
        <div className="flex gap-x-2 min-w-max px-4">
          {cardsToRender.map((card, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <Card
                shadow="none"
                className={`rounded-3xl! ${
                  card.type === "profile"
                    ? "w-[350px]!"
                    : "w-56! h-56!"
                } shrink-0`}
              >
                {card.type === "text" && card.icon && (
                  <div className="text-left px-2.5 py-3 h-full">
                    <div className="bg-gray-300/20 rounded-lg w-fit p-2.5">
                      <card.icon className="text-[#7478F8] size-4" />
                    </div>
                    <div className="pb-5">
                      <p className="text-xs font-medium pt-3">
                        {card.title}
                      </p>
                      <p className="text-xs text-gray-400 pt-2.5 leading-5">
                        {card.description}
                      </p>
                    </div>
                  </div>
                )}

                {card.type === "profile" && (
                  <div className="pt-2 px-2.5">
                    <div className="flex items-center justify-between">
                      <div className="size-12 rounded-full overflow-hidden">
                        <img
                          src={ProfileImg}
                          alt="My Profile"
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="text-xs bg-gray-200/40 rounded-full pl-3.5 pr-2 py-3.5">
                        Age 25{" "}
                        <span className="bg-[#7478F8] py-2 px-3 text-white rounded-full ml-1">
                          2044
                        </span>
                      </div>
                    </div>
                    <div className="text-left space-y-2.5 pb-5 pt-7">
                      <h2 className="text-4xl font-medium">
                        $299k
                      </h2>
                      <p className="text-xs text-gray-400">
                        Seed funding for your startup
                      </p>
                    </div>
                    <div className="flex items-center gap-x-3 pb-4">
                      <div className="bg-white shadow-sm rounded-full p-3">
                        <img
                          src={HappyFace}
                          alt="happy face"
                          className="size-5"
                        />
                      </div>
                      <div className="text-left pt-2.5">
                        <p className="text-sm leading-2">
                          Keep track of growth
                        </p>
                        <span className="text-xs text-gray-400">
                          Start investing today
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {card.type === "badges" && (
                  <div className="space-y-6 px-2.5 py-3">
                    {card?.badges?.map((badge, i) => (
                      <div
                        key={i}
                        className={`flex justify-${
                          badge.align === "left"
                            ? "start"
                            : "end"
                        }`}
                      >
                        <Badge
                          icon={badge.icon}
                          label={badge.label}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

const Badge = ({
  icon: Icon,
  label,
}: {
  icon: IconType;
  label: string;
}) => {
  return (
    <div className="flex items-center gap-x-1 bg-gray-400/10 w-fit py-2.5 px-3.5 rounded-lg">
      <Icon className="size-4 text-[#7478F8]" />
      <span className="text-left text-xs uppercase">{label}</span>
    </div>
  );
};

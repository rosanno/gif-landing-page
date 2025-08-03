import { CiBag1 } from "react-icons/ci";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { IoWalletOutline } from "react-icons/io5";
import { PiGitBranch } from "react-icons/pi";
import Card from "./ui/Card";

const investCardItem = [
  {
    label: "$209B",
    desc: "private equity",
    icon: CiBag1,
  },
  {
    label: "$254B",
    desc: "credit",
    icon: IoWalletOutline,
  },
  {
    label: "$83B",
    desc: "infrastructure",
    icon: PiGitBranch,
  },
  {
    label: "$81B",
    desc: "real estate",
    icon: HiOutlineBuildingOffice,
  },
];

const Approach = () => {
  return (
    <section className="bg-white pt-16">
      <div>
        <div className="max-w-xs md:max-w-2xl lg:max-w-3xl mx-auto text-center">
          <h2 className="tracking-wider font-medium text-xl md:text-5xl lg:text-6xl md:leading-14 lg:leading-16">
            Investing in People Companies and Communities
          </h2>
          <p className="text-sm text-gray-500 pt-2.5 md:w-xl lg:w-2xl mx-auto lg:mt-2">
            As of March 31, 2025, GIF Credit platform
            continues to demonstrate strong growth and and
            scale, with total Assets Under Management (AUM)
            reaching $284 billion, including liquid credit
            strategies.
          </p>
        </div>

        <div>
          <div className="flex overflow-x-auto gap-4 py-8 px-4 md:px-8 scrollbar">
            {investCardItem.map((item) => {
              const Icon = item.icon;

              return (
                <Card
                  key={item.desc}
                  className="flex-shrink-0 w-[200px]! h-44! bg-gray-200/40! rounded-4xl! py-5"
                  shadow="none"
                >
                  <div className="flex flex-col justify-between h-full">
                    <div className="bg-gray-300/20 rounded-lg w-fit p-2.5">
                      <Icon className="text-[#7478F8] size-4" />
                    </div>
                    <div>
                      <div className="text-2xl">
                        {item.label}
                      </div>
                      <div className="text-gray-600 uppercase text-xs pt-0.5">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;

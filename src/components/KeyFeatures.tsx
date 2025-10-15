import { FC } from "react";
import { GraduationCap, Clock, Users, PlayCircle } from "lucide-react";
import studyflowImage from "../assets/studyflow.jpg"; // ✅ Make sure this path is correct

interface Benefit {
  id: string;
  title: string;
  description: string;
  Icon: React.ElementType;
}

const benefits: Benefit[] = [
  {
    id: "degree",
    title: "Online Degrees",
    description:
      "Earn accredited degrees from the comfort of your home and expand your opportunities.",
    Icon: GraduationCap,
  },
  {
    id: "short",
    title: "Short Courses",
    description:
      "Boost your skills with concise, industry-tailored courses designed for fast results.",
    Icon: Clock,
  },
  {
    id: "experts",
    title: "Training From Experts",
    description:
      "Gain insights and practical knowledge directly from experienced professionals.",
    Icon: Users,
  },
  {
    id: "videos",
    title: "1.5k+ Video Courses",
    description:
      "Choose from a vast library of video courses covering all kinds of subjects.",
    Icon: PlayCircle,
  },
];

const KeyFeatures: FC = () => {
  return (
    <section className="py-16 bg-white px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <div className="flex justify-center">
          <img
            src={studyflowImage}
            alt="Students learning online"
            className="w-full max-w-md rounded-3xl shadow-lg object-cover"
          />
        </div>

        {/* Right: Text and Icons */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Benefits From Our Online Learning
          </h2>

          <div className="space-y-6">
            {benefits.map(({ id, title, description, Icon }) => (
              <div
                key={id}
                className="flex items-start gap-4 transition-transform duration-300 hover:translate-x-2"
              >
                {/* Icon container */}
                <div className="bg-blue-100 text-blue-600 w-10 h-10 flex items-center justify-center rounded-xl">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;

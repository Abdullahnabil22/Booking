import { questions } from "@/Static/Arrays";
import FAQItem from "../divs/FAQItem";
import SubHeading from "../Headings/SubHeading";

const TravelersAsking = () => {
  const leftQuestions = questions.slice(0, Math.ceil(questions.length / 2));
  const rightQuestions = questions.slice(Math.ceil(questions.length / 2));

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="mb-4">
        <SubHeading title="Travelers are asking" />
      </div>
      <div className="flex flex-wrap -mx-2 ">
        <div className="w-full md:w-2/3 px-2 ">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
              <div className="border rounded-lg overflow-hidden">
                {leftQuestions.map((question, index) => (
                  <FAQItem key={index} question={question} />
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 px-2">
              <div className="border rounded-lg overflow-hidden">
                {rightQuestions.map((question, index) => (
                  <FAQItem key={index} question={question} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full  md:w-1/3 px-2 mt-4 md:mt-0 ">
          <div className="border rounded-lg p-4 flex flex-col items-center justify-center h-full">
            <h3 className="text-xl font-bold mb-2">Still looking?</h3>
            <button className=" border border-blue-600 text-blue-600 px-3 py-2 rounded m-4 text-sm">
              Ask a question
            </button>
            <p className="text-sm text-black">
              We have an instant answer to most questions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelersAsking;

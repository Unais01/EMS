import CustomButton from "./CustomeButton";

const Card = ({ heading, desc, btnName, handleClick }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-lg transition-shadow flex flex-col items-start">
      <h3 className="text-2xl font-semibold mb-2">{heading}</h3>
      <p className="text-gray-700 mb-4">{desc}</p>
      <CustomButton
        onClick={handleClick}
        btnTitle={btnName}
        className="mt-auto bg-blue-500 hover:bg-blue-600"
      />
    </div>
  );
};

export default Card;

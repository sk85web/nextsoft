interface InputProps {
  type: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="bg-white px-5 py-3 text-[14px] text-text placeholder:text-placeholder border-placeholder font-regular md:w-[292px] outline-none"
    />
  );
};

export default Input;

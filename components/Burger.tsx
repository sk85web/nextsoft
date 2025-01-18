type BurgerProps = {
  onClick: () => void;
};

const Burger = ({ onClick }: BurgerProps) => {
  return (
    <div className="flex lg:hidden absolute right-7 top-1/2 transform -translate-y-1/2">
      <button
        onClick={onClick}
        className="relative bg-transparent w-[23px] h-[17px]"
      >
        {/* <span className="block w-full bg-text rounded h-0.5 absolute top-0"></span>
        <span className="block w-full bg-text rounded h-0.5 absolute top-[50%] -translate-y-[1px]"></span>
        <span className="block w-full bg-text rounded h-0.5 absolute bottom-0"></span> */}
        <div
          className="bg-text w-full h-0.5 absolute top-[8.5px] -mt-[1px] rounded
        before:content-[''] 
        before:w-full 
        before:h-0.5
         before:bg-text 
         before:absolute 
         before:-translate-x-[11.5px] 
         before:-translate-y-[8.5px]
         before:rounded
        after:content-[''] 
        after:w-full 
        after:h-0.5
         after:bg-text 
         after:absolute 
         after:-translate-x-[11.5px] 
         after:translate-y-[8.5px]
         after:rounded
         "
        ></div>
        {/* &#9776; */}
      </button>
    </div>
  );
};

export default Burger;

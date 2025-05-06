import { BsEmojiSmile } from "react-icons/bs";
import { MdOutlineAttachFile } from "react-icons/md";

const InputForm = () => {
  return (
    <form className="flex justify-center  gap-2 w-full  py-2">
      <div className=" border-2 rounded-xl py-2 px-3 cursor-pointer ">
        <label htmlFor="file">
          <MdOutlineAttachFile
            size={20}
            color=" gray"
            className="rotate-45 transition-transform duration-300"
          />
        </label>
        <input type="file" id="file" className="hidden" />
      </div>
      <div className="flex justify-center items-center gap-4  border-2 rounded-xl py-2 px-4 ">
        <input
          type="text"
          className="outline-none bg-inherit"
          placeholder="Write your message"
        />
        <BsEmojiSmile size={20} color="gray" />
      </div>
    </form>
  );
};
export default InputForm;

import { useRef } from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function List(props) {
  const { item, setList } = props;

  const handleDeleteList = () => {
    const data = JSON.parse(window.localStorage.getItem("todo-list"));

    if (data.length === 0) return;

    const filteredData = data.filter((list) => list.id !== item.id);
    console.log(filteredData);

    setList([...filteredData]);
  };

  const labelRef = useRef();
  const inputRef = useRef();

  const handleChange = () => {
    const checkBoxValue = inputRef.current.checked;

    if (checkBoxValue) {
      labelRef.current.style.textDecoration = "line-through";
    } else {
      labelRef.current.style.textDecoration = "none";
    }
  };

  return (
    <div className='w-full flex justify-between items-center gap-3 border-t-2 border-purple-200'>
      <label
        ref={labelRef}
        htmlFor={`task-${item.id}`}
        className='w-full p-4 flex items-center gap-3'>
        <input
          onChange={handleChange}
          ref={inputRef}
          type='checkbox'
          name='task'
          id={`task-${item.id}`}
        />
        <span>{item.todo}</span>
      </label>
      <div>
        <button
          onClick={handleDeleteList}
          type='button'
          className='w-6 h-6 mr-2 rounded-full overflow-hidden bg-gray-300 inline-flex justify-center items-center cursor-pointer'>
          <FaTrashAlt className='size-3' />
        </button>
      </div>
    </div>
  );
}

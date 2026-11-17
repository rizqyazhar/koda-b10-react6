import { FaTrashAlt } from "react-icons/fa";

export default function List(props) {
  const { id, todo } = props.item;

  const handleDeleteList = () => {
    console.log(id);
  };

  return (
    <div className='w-full flex justify-between items-center gap-3 border-t-2 border-purple-200'>
      <label htmlFor='task-1' className='w-full p-4 flex items-center gap-3'>
        <input type='checkbox' name='task' id='task-1' />
        <span>{todo}</span>
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

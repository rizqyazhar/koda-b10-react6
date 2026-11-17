export default function Form({ ...rest }) {
  return (
    <form {...rest} className='w-full flex items-center gap-3'>
      <label htmlFor='input' className='flex-1 w-fit h-fit'>
        <input
          type='text'
          name='input'
          id='input'
          placeholder='Create your task here...'
          className='w-full px-4 py-2 outline-none border-2 border-purple-200 rounded'
        />
      </label>
      <button
        className='px-6 py-2 bg-purple-900 rounded text-purple-50'
        type='submit'>
        Add
      </button>
    </form>
  );
}

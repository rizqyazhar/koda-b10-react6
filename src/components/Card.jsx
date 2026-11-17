export default function Card(props) {
  const { children } = props;

  return (
    <div className='max-w-md w-full h-120 p-5 rounded-lg bg-white flex flex-col gap-7 shadow-xs shadow-purple-50'>
      {children}
    </div>
  );
}

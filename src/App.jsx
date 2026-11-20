import useLocalStorage from "./hooks/useLocalStorage";
import Card from "./components/Card";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  const { data, setData } = useLocalStorage("todo-list");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const input = formData.get("input");

    const newId = Math.floor(Math.random() * Date.now());

    const collectList = {
      id: newId,
      todo: input,
    };

    setData((prev) => [...prev, collectList]);

    e.target.reset();
  };

  return (
    <div className='w-full min-h-dvh bg-purple-950 flex justify-center items-center'>
      <Card>
        <Form onSubmit={handleSubmit} />
        <div className='w-full h-full flex flex-col items-center overflow-y-auto scrollbar-thin'>
          {data.map((item, index) => {
            return (
              <List key={index} item={item} setData={setData} data={data} />
            );
          })}
        </div>
      </Card>
    </div>
  );
}

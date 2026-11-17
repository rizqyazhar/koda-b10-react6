import { useEffect, useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  const [list, setList] = useState(
    JSON.parse(window.localStorage.getItem("todo-list")) || [],
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const input = formData.get("input");
    const randomId = Math.floor(Math.random() * 100 + 1);

    const collectList = {
      id: randomId,
      todo: input,
    };

    setList((prev) => [...prev, collectList]);

    e.target.reset();
  };

  useEffect(() => {
    window.localStorage.setItem("todo-list", JSON.stringify(list));
  }, [list]);

  return (
    <div className='w-full min-h-dvh bg-purple-950 flex justify-center pt-20'>
      <Card>
        <Form onSubmit={handleSubmit} />
        <div className='w-full h-full flex flex-col items-center overflow-y-auto scrollbar-thin'>
          {list.map((item) => {
            return <List key={item.id} item={item} />;
          })}
        </div>
      </Card>
    </div>
  );
}

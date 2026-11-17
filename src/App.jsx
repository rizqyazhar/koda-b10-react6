import { useEffect, useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  const [list, setList] = useState(
    JSON.parse(window.localStorage.getItem("todo-list")) || [],
  );
  const [getId, setGetId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const input = formData.get("input");

    setGetId(getId + 1);

    const collectList = {
      id: getId,
      todo: input,
    };

    setList((prev) => [...prev, collectList]);

    e.target.reset();
  };

  useEffect(() => {
    window.localStorage.setItem("todo-list", JSON.stringify(list));
  }, [list]);

  return (
    <div className='w-full min-h-dvh bg-purple-950 flex justify-center items-center'>
      <Card>
        <Form onSubmit={handleSubmit} />
        <div className='w-full h-full flex flex-col items-center overflow-y-auto scrollbar-thin'>
          {list.map((item, index) => {
            return <List key={index} item={item} setList={setList} />;
          })}
        </div>
      </Card>
    </div>
  );
}

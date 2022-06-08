import '../App.css'
import Card from "./card";
import data from "./data,";
import Sidebar from './sidebar'

export default function Movies() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });        
  return (
    <div>
      <Sidebar />
       {cards}
    </div>
  );
}

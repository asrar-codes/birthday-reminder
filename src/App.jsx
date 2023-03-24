import { useState } from 'react';
import data from './data';

const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>Today is the birthday of {people.length - 1} people</h3>
        <List people={people} />
      </section>
      <button className="btn" onClick={() => setPeople([])}>
        clear list
      </button>
    </main>
  );
};
const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </>
  );
};
const Person = ({ name, age, image }) => {
  return (
    <>
      <article className="person">
        <img src={image} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>{age}years</p>
        </div>
      </article>
    </>
  );
};
export default App;

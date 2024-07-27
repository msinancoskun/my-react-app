import Card from "./Card";
import Button from "./Button/Button";
import Student from "./Student";
import UserGreeting from "./UserGreeting";

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={false} username="msinancoskun" />
      <Student name="Spongebob" age={30} isStudent={true} />
      <Card />
      <Button />
    </>
  );
}

export default App;


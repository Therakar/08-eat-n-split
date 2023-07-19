import FriendsList from "./FriendsList";
import FormAddFriends from "./FormAddFriend";
import FormSplitBill from "./FormSplitBill";
import Button from "./Button";

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <FormAddFriends />
        <Button>Add friend</Button>
      </div>

      <FormSplitBill />
    </div>
  );
}

import FriendsList from "./FriendsList";
import FormAddFriends from "./FormAddFriend";
import FormSplitBill from "./FormSplitBill";
import Button from "./Button";
import { useState } from "react";

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        {showAddFriend && <FormAddFriends />}
        <Button onClick={handleShowAddFriend}>
          {!showAddFriend ? "Add friend" : "Close"}
        </Button>
      </div>

      <FormSplitBill />
    </div>
  );
}

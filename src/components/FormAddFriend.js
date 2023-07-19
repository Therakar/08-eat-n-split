import Button from "./Button";

export default function FormAddFriends() {
  return (
    <form className="form-add-friend">
      <lable>👨🏻‍🤝‍👨🏾 Friend Name </lable>
      <input type="text" />

      <label>📷 Image URL</label>
      <input type="text" />

      <Button>Add</Button>
    </form>
  );
}

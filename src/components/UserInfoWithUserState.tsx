// user = {name = "Somthing", age = 20, hobbies = ["hobby1", "hobby2"] }

import { useState } from "react";

const UserInfoWithUserState = () => {
  const [user, setUser] = useState({ name: "", age: "0", hobbies: [] });

  return (
    <form>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Age"
        onChange={(e) =>
          setUser({ ...user, age: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Hobbies (comma separated)"
        onBlur={(e) =>
          setUser({ ...user, hobbies:[...user.hobbies, e.target.value] })
        }
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserInfoWithUserState;

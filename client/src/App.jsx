import styles from "./styles.module.css";
import sqlServer from "./assets/sql-server.png";
import { useState } from "react";

export default function App() {

  const [userPrompt, setUserPrompt] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(userPrompt);
  };

  return (
    <main className={styles.main}>
      <img src={sqlServer} className={styles.icon} alt="SQL server" />
      <h3>Generate SQL</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="query-description"
          placeholder="Describe your query"
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
        />
        <input type="submit" value="Generate query" />
      </form>
    </main>
  );
}

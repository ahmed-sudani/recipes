import Person from "../../components/Person";
import styles from "./styles.module.css";
export default function developers() {
  return (
    <div className={styles.developers}>
      <Person
        img="mosab.png"
        name="Musab Kamil"
        jobTitle="Front-End Developer"
        description="Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                  Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi, pretium ut lacinia in,
                  elementum id enim."
      ></Person>
      <Person
        img="ahmed.png"
        name="Musab Kamil"
        jobTitle="Front-End Developer"
        description="Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                  Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi, pretium ut lacinia in,
                  elementum id enim."
      ></Person>
    </div>
  );
}

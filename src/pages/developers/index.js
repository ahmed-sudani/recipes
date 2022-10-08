import { Head, Person } from '../../common/components'
import styles from './styles.module.css'
export default function Developers() {
  return (
    <>
      <Head title="Developers" description="Developers of recipes site" />
      <div className={styles.container}>
        <Person
          img="/mosab.png"
          name="Musab Kamil"
          jobTitle="Front-End Developer"
          description="Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                  Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi, pretium ut lacinia in,
                  elementum id enim."
        ></Person>
        <Person
          img="/ahmed.png"
          name="Ahmed Abdalla"
          jobTitle="Software Developer"
          description="Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                  Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi, pretium ut lacinia in,
                  elementum id enim."
        ></Person>
      </div>
    </>
  )
}

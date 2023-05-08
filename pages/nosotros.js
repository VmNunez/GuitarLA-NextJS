import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/nosotros.module.css";

export default function Nosotros() {
  return (
    <Layout
      title={"Nosotros"}
      description={"Sobre nosotros, guitarLA, tienda de música"}
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>

        <div className={styles.contenido}>
          <Image
            alt="imagen sobre nosotros"
            src="/img/nosotros.jpg"
            width={1000}
            height={800}
          />
          <div>
            <p>
              Pariatur irure veniam nostrud eu aute culpa quis. Culpa laborum
              officia culpa ut laboris occaecat deserunt. Laborum ullamco do
              officia tempor. Eu qui culpa cillum cupidatat commodo dolore
              commodo excepteur ipsum Lorem dolor.
            </p>
            <p>
              Enim exercitation pariatur minim pariatur eiusmod ullamco qui.
              Nulla labore consequat sunt officia aute ex nulla consequat
              incididunt non consequat nisi. Velit qui excepteur nulla ad veniam
              est in sunt labore ullamco aute.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

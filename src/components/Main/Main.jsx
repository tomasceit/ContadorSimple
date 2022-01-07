import "./Main.css";
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import SectionAboutUs from "./SectionAboutUs";
import SectionBlog from "./SectionBlog";
import SectionHome from "./SectionHome";
import SectionServices from "./SectionServices";
import { getFirestore } from "../../firebase";
import { useEffect, useState } from "react";

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [notas, setNotas] = useState([]);
  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const notasCollection = db.collection("notas");
    notasCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          console.error("No hay entradas al blog todavia");
        } else {
          setNotas(
            querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
        }
      })
      .catch((e) => console.log("ERROR: ", e))
      .finally(() => {
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <LoadingIcon />;
  } else {
    return (
      <main className="container">
        {/* Sección que ofrecemos */}
        <SectionHome />
        {/* Sección quienes somos */}
        <SectionAboutUs />
        {/* Sección servicios */}
        <SectionServices />
        {/* Sección nuestro Blog */}
        <SectionBlog notas={notas} />
      </main>
    );
  }
};

export default Main;
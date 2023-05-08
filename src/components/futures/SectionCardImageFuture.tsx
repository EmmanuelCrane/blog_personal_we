
import axios from 'axios';
import SectionArticleVertical from '../home/SectionArticleVertical';


async function axiosFetch() {
  const peticion = await axios('https://raw.githubusercontent.com/alexkuz/markdown-react-js/master/README.md');
  const respuesta = [await peticion.data];

  const stringResonse = respuesta.map((element: string) => {
    return {
      category: "technology",
      title: "The best laptop for Frontend engineers in 2022",
      date: "Feb 6th",
      author: {
        name: "Elsa Pito",
        avatar:
          "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
      },
      data:element
    }
  })
  
  return stringResonse
}


function SectionCardImageFuture() {

  return (
    <>
      {
        axiosFetch().then((response) => <SectionArticleVertical articles={response} />)
      }
    </>
  );
}

export default SectionCardImageFuture
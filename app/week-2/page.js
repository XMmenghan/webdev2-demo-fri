import Heading from "./heading";

export default function page(){
    let a = 5;
    let b = 10;
    
    return(
      <main>
        <Heading />
        <Heading />
        <p>These are the demos for Week2!</p>
        <p>The sum of a + b is {a + b}</p>
      </main>
    );
}
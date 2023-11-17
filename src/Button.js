import "./Style.css";
import { VscBug, VscDiscard, VscDiffRemoved, VscCreditCard } from "react-icons/vsc";


export function Button({ text, ready }) {
 // console.log(VscIcons.map((name)=>{return '?'}));
  return (
    <button className={text !== "" ? "bgBtnSuccess" : "bgBtnDanger"}>
      {text ? <VscCreditCard /> :<VscBug />} {text !== "" ? text : "Value NULL"}
    </button>
  );
}

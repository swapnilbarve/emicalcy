import { legacy_createStore as creatStore } from "redux";
import { emidatareducer } from "./reducer";

const store = creatStore(emidatareducer);
export{store};
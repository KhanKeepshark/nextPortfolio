import { makeAutoObservable } from "mobx";

class LanguageStore {
  lanEng = false;

  constructor() {
    makeAutoObservable(this);
  }

  changeLan = (eng: boolean) => {
    this.lanEng = eng;
  };
}

export default new LanguageStore();

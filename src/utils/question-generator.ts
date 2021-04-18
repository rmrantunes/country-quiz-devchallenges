import { Question } from "types/question";
import { Country, MappedCountry, Source } from "types/question-source";
import { getRandomArrayIndex } from "./app-utils";

export class QuestionGenerator {
  constructor(private source: Source) {}

  private selectFourCountries(): Country[] {
    const selectedCountries = [];
    const { countries } = this.source;
    for (let i = 0; i < 4; i++) {
      const countriesRandomIndex = getRandomArrayIndex(countries);
      selectedCountries.push(countries[countriesRandomIndex]);
    }
    return selectedCountries;
  }

  private selectCorrectCountry(countries: MappedCountry[]) {
    const countriesRandomIndex = getRandomArrayIndex(countries);
    return countries[countriesRandomIndex];
  }

  private selectLanguage() {
    const { languages } = this.source;
    const languagesRandomIndex = getRandomArrayIndex(languages);
    return languages[languagesRandomIndex];
  }

  capitalOf(): Question {
    const countries = this.selectFourCountries();
    const countriesCapitalAndName = countries.map(({ name, capital }) => ({
      name,
      capital,
    }));
    const correctCountry = this.selectCorrectCountry(countriesCapitalAndName);

    return {
      type: "capital-of",
      title: correctCountry.capital + " is the capital of",
      correctAnswer: correctCountry.name,
      possibleAnswers: countriesCapitalAndName.map(({ name }) => name),
    };
  }

  flag(): Question {
    const countries = this.selectFourCountries();
    const countriesNameAndCode = countries.map(({ name, code }) => ({
      name,
      code: code.toLowerCase(),
    }));

    const correctCountry = this.selectCorrectCountry(countriesNameAndCode);

    return {
      type: "flag",
      flagSrc: `https://www.countryflags.io/${correctCountry.code}/flat/64.png`,
      title: "Which country does this flag belongs to?",
      correctAnswer: correctCountry.name,
      possibleAnswers: countriesNameAndCode.map(({ name }) => name),
    };
  }

  language(): Question {
    return {
      type: "language",
    };
  }
}

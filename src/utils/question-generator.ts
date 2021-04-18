import { Question } from "types/question";
import { Country, MappedCountry } from "types/question-source";

export class QuestionGenerator {
  constructor(private countries: Country[]) {}

  private selectFourCountries(): Country[] {
    const selectedCountries = [];
    for (let i = 0; i < 4; i++) {
      const countriesRandomIndex = Math.floor(
        Math.random() * this.countries.length
      );
      selectedCountries.push(this.countries[countriesRandomIndex]);
    }
    return selectedCountries;
  }

  private selectCorrectCountry(countries: MappedCountry[]) {
    const countriesRandomIndex = Math.floor(Math.random() * countries.length);
    return countries[countriesRandomIndex];
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
}

/*
  1. Se om du kan hitta två stycken code smells i följande funktion och rätta till dem.
  Funktionen tar emot en lista med längshoppslängder och syftet med funktionen är att summera
  dessa hopplängder.
  */

  function sumJumpLengths(jumpings: number[]): number {
    return jumpings.reduce((sum, currentJump) => sum + currentJump, 0);
  }
  
  /*
    2. I detta exempel har vi fokuserat på if-statements. Se om du kan göra exemplet bättre!
    */
  
    class Student {
      constructor(
        public name: string,
        public handedInOnTime: boolean
      ) {}
    
      hasPassed(): boolean {
        return this.name === "Sebastian" && this.handedInOnTime;
      }
    }
    
    function getStudentStatus(student: Student): string {
      return student.hasPassed() ? "VG" : "IG";
    }
    
  /*
    3. Variabelnamn är viktiga. Kika igenom följande kod och gör om och rätt.
    Det finns flera code smells att identifiera här. Vissa är lurigare än andra.
    */
  
    class TemperatureRecord {
      constructor(public location: string, public date: Date, public temperature: number) {}
    }
    
    function averageWeeklyTemperature(records: TemperatureRecord[]): number {
      const oneWeekInMs = 7 * 24 * 60 * 60 * 1000;
      let totalTemperature = 0;
      let count = 0;
    
      for (const record of records) {
        if (record.location === "Stockholm" && record.date.getTime() > Date.now() - oneWeekInMs) {
          totalTemperature += record.temperature;
          count++;
        }
      }
    
      return count > 0 ? totalTemperature / count : 0;
    }
    
  
  /*
    4. Följande funktion kommer att presentera ett objekt i dom:en. 
    Se om du kan göra det bättre. Inte bara presentationen räknas, även strukturer.
    */
  
    interface Product {
      name: string;
      price: number;
      amount: number;
      description: string;
      image: string;
    }
    
    function createProductElement(product: Product): HTMLElement {
      const container = document.createElement("div");
      container.innerHTML = `
        <h4>${product.name}</h4>
        <img src="${product.image}" alt="${product.name}">
        <strong>${product.price} kr</strong>
        <p>${product.description}</p>
        <p>In stock: ${product.amount}</p>
      `;
      return container;
    }
    
    function showProduct(product: Product, parent: HTMLElement) {
      parent.appendChild(createProductElement(product));
    }
    
  
  /*
    5. Följande funktion kommer presentera studenter. Men det finns ett antal saker som 
    går att göra betydligt bättre. Gör om så många som du kan hitta!
    */
    function presentStudents(students: Student[]) {
      const passedList = document.querySelector("ul#passedstudents");
      const failedList = document.querySelector("ul#failedstudents");
    
      for (const student of students) {
        const container = document.createElement("div");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = student.handedInOnTime;
    
        container.appendChild(checkbox);
        (student.handedInOnTime ? passedList : failedList)?.appendChild(container);
      }
    }
    
  
  /*
    6. Skriv en funktion som skall slå ihop följande texter på ett bra sätt:
    Lorem, ipsum, dolor, sit, amet
    Exemplet under löser problemet, men inte speciellt bra. Hur kan man göra istället?
    */
    function concatenateStrings(): string {
      return ["Lorem", "ipsum", "dolor", "sit", "amet"].join(" ");
    }
    
  
  /* 
  7. Denna funktion skall kontrollera att en användare är över 20 år och göra någonting.
      Det finns dock problem med denna typ av funktion. Vad händer när kraven ändras och
      fler och fler parametrar behöver läggas till? T.ex. avatar eller adress. Hitta en bättre
      lösning som är hållbar och skalar bättre. 
  */
      interface User {
        name: string;
        birthday: Date;
        email: string;
        password: string;
      }
      
      function calculateAge(birthday: Date): number {
        const today = new Date();
        const age = today.getFullYear() - birthday.getFullYear();
        const hasHadBirthdayThisYear = today >= new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
        return hasHadBirthdayThisYear ? age : age - 1;
      }
      
      function createUser(user: User) {
        if (calculateAge(user.birthday) < 20) {
          return "Du är under 20 år";
        }
      
      }
    
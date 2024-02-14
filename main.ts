import {format, parse, differenceInDays, setYear} from "date-fns"
import {ru} from "date-fns/locale"
const firstDate = parse('20.12.2023', 'dd.MM.yyyy', new Date());
const secondDate = parse('13.02.2024', 'dd.MM.yyyy', new Date());
const daysDifference = differenceInDays(secondDate, firstDate);
console.log('Разница в днях =', daysDifference);
const dateTwo = parse('2024-02-01', 'yyyy-MM-dd', new Date());
const formattedDateTwo = format(dateTwo, 'dd MMMM', { locale: ru });
console.log(formattedDateTwo);
const dateThree = parse('2024-02-01T16:30:00', "yyyy-MM-dd'T'HH:mm:ss", new Date());
const formattedDateThree = format(dateThree, 'd MMMM HH:mm', { locale: ru });
console.log(formattedDateThree);
const randomMonth = Math.floor(Math.random() * 12) + 1; 
const dateFour = setYear(new Date(2023, randomMonth - 1, 25), 2023); 
const formattedDateFour = format(dateFour, 'd MMMM yyyy', { locale:ru});
console.log(formattedDateFour);
const MONTHS = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

const LOREAL_FAB_YEAR_CODES = {
  'W': 2022, 'X': 2023, 'Y': 2024, 'Z': 2025, 'A': 2026, 'B': 2027
};

const LOREAL_MONTH_CODES = {
  '1': 0, '2': 1, '3': 2, '4': 3, '5': 4, '6': 5, 
  '7': 6, '8': 7, '9': 8, 'O': 9, 'N': 10, 'D': 11
};

const getLocalDateFromJulianDay = (year, julianDay) => {
  if (julianDay < 1 || julianDay > 366) throw new Error("Día juliano inválido.");
  const targetDate = new Date(year, 0, julianDay);
  return targetDate;
};

const calculateBeiersdorf = (code, brand, isException) => {
  const cleanCode = code.replace(/[^0-9]/g, '');
  if (cleanCode.length < 3) throw new Error("Código muy corto.");

  const yearDigit = parseInt(cleanCode.substring(0, 1)); 
  const weekNumber = parseInt(cleanCode.substring(1, 3)); 

  if (isNaN(yearDigit) || isNaN(weekNumber) || weekNumber > 53) throw new Error("Formato inválido.");

  const fabYear = 2020 + yearDigit; 
  const days = weekNumber * 7;
  const fabDate = new Date(fabYear, 0, days);
  
  const shelfLife = (brand === 'Aquaphor' || isException) ? 30 : 36;
  
  const expDate = new Date(fabDate);
  expDate.setMonth(expDate.getMonth() + shelfLife);

  return { fabDate, expDate, shelfLife, format: "Semana/Año" };
};

const calculateIsdin = (code) => {
  const cleanCode = code.replace(/[^0-9]/g, '');
  if (cleanCode.length < 4) throw new Error("Código muy corto.");

  const yearDigit = parseInt(cleanCode.substring(0, 1)); 
  const dayOfYear = parseInt(cleanCode.substring(1, 4)); 

  const fabYear = 2020 + yearDigit;
  const fabDate = getLocalDateFromJulianDay(fabYear, dayOfYear);
  const shelfLife = 36; 

  const expDate = new Date(fabDate);
  expDate.setMonth(expDate.getMonth() + shelfLife);

  return { fabDate, expDate, shelfLife, format: "Día Juliano" };
};

const calculateLoreal = (code) => {
  const cleanCode = code.trim().toUpperCase();
  if (cleanCode.length < 4) throw new Error("Código muy corto.");

  const yearChar = cleanCode.charAt(2);
  const monthChar = cleanCode.charAt(3);
  const fabYear = LOREAL_FAB_YEAR_CODES[yearChar];
  
  if (!fabYear) throw new Error(`Letra de año '${yearChar}' no registrada en la guía v2026.`);

  let monthIndex = LOREAL_MONTH_CODES[monthChar] !== undefined ? LOREAL_MONTH_CODES[monthChar] : 0;

  const fabDate = new Date(fabYear, monthIndex, 1);
  const shelfLife = 36; 
  
  const expDate = new Date(fabDate);
  expDate.setMonth(expDate.getMonth() + shelfLife);

  return { fabDate, expDate, shelfLife, format: "Letra Fabricación" };
};

const calculateAvene = (code) => {
  const cleanCode = code.trim().toUpperCase();
  if (cleanCode.length < 2) throw new Error("Código muy corto.");

  const yearDigit = parseInt(cleanCode.substring(0, 1));
  const monthChar = cleanCode.charAt(1);

  if (isNaN(yearDigit)) throw new Error("Año de fabricación inválido.");

  const fabYear = 2020 + yearDigit;
  const monthIndex = monthChar.charCodeAt(0) - 65;

  if (monthIndex < 0 || monthIndex > 11) throw new Error(`Carácter de mes '${monthChar}' fuera de rango.`);

  const fabDate = new Date(fabYear, monthIndex, 1);
  const shelfLife = 36; 

  const expDate = new Date(fabDate);
  expDate.setMonth(expDate.getMonth() + shelfLife);

  return { fabDate, expDate, shelfLife, format: "Cronológico Interno" };
};

const calculateUriage = (code) => {
  const cleanCode = code.replace(/[^0-9]/g, '');
  if (cleanCode.length < 4) throw new Error("Código de barras o lote muy corto.");

  const yearDigit = parseInt(cleanCode.substring(0, 1));
  const dayOfYear = parseInt(cleanCode.substring(1, 4));

  const fabYear = 2020 + yearDigit;
  const fabDate = getLocalDateFromJulianDay(fabYear, dayOfYear);
  const shelfLife = 36; 

  const expDate = new Date(fabDate);
  expDate.setMonth(expDate.getMonth() + shelfLife);

  return { fabDate, expDate, shelfLife, format: "Día Juliano" };
};

// EXPORTACIÓN MÚLTIPLE DE RESPALDO ANTI-ERRORES WEBPACK
export const calculateBatch = (code, brand, isException = false) => {
  let result = null;
  const lorealBrands = ['Vichy', 'La Roche-Posay', 'CeraVe', 'Garnier', "L'Oréal"];
  const beiersdorfBrands = ['Eucerin', 'Nivea', 'Aquaphor'];

  if (beiersdorfBrands.includes(brand)) result = calculateBeiersdorf(code, brand, isException);
  else if (brand === 'ISDIN') result = calculateIsdin(code);
  else if (lorealBrands.includes(brand)) result = calculateLoreal(code);
  else if (brand === 'Avène' || brand === 'Avene' || brand === 'Ducray') result = calculateAvene(code);
  else if (brand === 'URIAGE' || brand === 'Uriage') result = calculateUriage(code);
  else throw new Error("Marca no soportada.");

  return {
    year: result.expDate.getFullYear(),
    month: MONTHS[result.expDate.getMonth()],
    fabYear: result.fabDate.getFullYear(),
    fabMonth: MONTHS[result.fabDate.getMonth()],
    shelfLife: result.shelfLife
  };
};

// Respaldo para importaciones por defecto
export default calculateBatch;
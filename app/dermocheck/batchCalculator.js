const MONTHS = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  
  // SEGÚN TU PDF "CALENDARIO VENCIMIENTO DERMO.PDF"
  // La letra indica el año de VENCIMIENTO directo.
  const LOREAL_EXPIRATION_CODES = {
    'W': 2025, 'X': 2026, 'Y': 2027, 'Z': 2028
  };
  
  const LOREAL_MONTH_CODES = {
    '1': 0, '2': 1, '3': 2, '4': 3, '5': 4, '6': 5, 
    '7': 6, '8': 7, '9': 8, 'O': 9, 'N': 10, 'D': 11
  };
  
  // Beiersdorf: 1er dígito = Año (4=2024), 2do/3ro = Semana
  const calculateBeiersdorf = (code, brand, isException) => {
    const cleanCode = code.replace(/[^0-9]/g, '');
    if (cleanCode.length < 3) throw new Error("Código muy corto.");
  
    const yearDigit = parseInt(cleanCode.substring(0, 1)); 
    const weekNumber = parseInt(cleanCode.substring(1, 3)); 
  
    if (isNaN(yearDigit) || isNaN(weekNumber) || weekNumber > 53) throw new Error("Formato inválido.");
  
    const fabYear = 2020 + yearDigit; 
    const days = weekNumber * 7;
    const fabDate = new Date(fabYear, 0, days);
    
    // Aquaphor/Baby 30 meses, resto 36.
    const shelfLife = (brand === 'Aquaphor' || isException) ? 30 : 36;
    
    const expDate = new Date(fabDate);
    expDate.setMonth(expDate.getMonth() + shelfLife);
  
    return { fabDate, expDate, shelfLife, format: "Semana/Año" };
  };
  
  // ISDIN: 1er dígito = Año, sig 3 = Día del año
  const calculateIsdin = (code) => {
    const cleanCode = code.replace(/[^0-9]/g, '');
    if (cleanCode.length < 4) throw new Error("Código muy corto.");
  
    const yearDigit = parseInt(cleanCode.substring(0, 1)); 
    const dayOfYear = parseInt(cleanCode.substring(1, 4)); 
  
    if (dayOfYear > 366) throw new Error("Día inválido.");
  
    const fabYear = 2020 + yearDigit;
    const fabDate = new Date(fabYear, 0, dayOfYear);
    const shelfLife = 36; 
  
    const expDate = new Date(fabDate);
    expDate.setMonth(expDate.getMonth() + shelfLife);
  
    return { fabDate, expDate, shelfLife, format: "Día Juliano" };
  };
  
  // L'Oréal: 3ra letra = Año Vencimiento
  const calculateLoreal = (code) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode.length < 4) throw new Error("Código muy corto.");
  
    const yearChar = cleanCode.charAt(2);
    const monthChar = cleanCode.charAt(3);
    const expYear = LOREAL_EXPIRATION_CODES[yearChar];
    
    if (!expYear) throw new Error(`Letra '${yearChar}' desconocida. Usa W, X, Y, Z.`);
  
    let monthIndex = LOREAL_MONTH_CODES[monthChar] !== undefined ? LOREAL_MONTH_CODES[monthChar] : 0;
  
    const expDate = new Date(expYear, monthIndex, 1);
    const shelfLife = 36;
    const fabDate = new Date(expDate);
    fabDate.setMonth(fabDate.getMonth() - shelfLife);
  
    return { fabDate, expDate, shelfLife, format: "Letra Vencimiento" };
  };
  
  export const calculateBatch = (code, brand, isException = false) => {
    let result = null;
    const lorealBrands = ['Vichy', 'La Roche-Posay', 'CeraVe', 'Garnier', "L'Oréal"];
    const beiersdorfBrands = ['Eucerin', 'Nivea', 'Aquaphor'];
  
    if (beiersdorfBrands.includes(brand)) result = calculateBeiersdorf(code, brand, isException);
    else if (brand === 'ISDIN') result = calculateIsdin(code);
    else if (lorealBrands.includes(brand)) result = calculateLoreal(code);
    else throw new Error("Marca no soportada.");
  
    return {
      year: result.expDate.getFullYear(),
      month: MONTHS[result.expDate.getMonth()],
      fabYear: result.fabDate.getFullYear(),
      fabMonth: MONTHS[result.fabDate.getMonth()],
      shelfLife: result.shelfLife
    };
  };
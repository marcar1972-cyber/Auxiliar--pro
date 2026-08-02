// lib/utils.js

export function validateRUT(rut) {
  // Limpiar RUT (quitar puntos y guión) y convertir a mayúsculas
  const cleanRUT = rut.replace(/\./g, '').replace('-', '').toUpperCase();
  
  // Validar formato básico
  if (cleanRUT.length < 8 || cleanRUT.length > 9) return false;
  
  // Separar cuerpo y dígito verificador
  const body = cleanRUT.slice(0, -1);
  const dv = cleanRUT.slice(-1);
  
  // Calcular dígito verificador
  let sum = 0;
  let multiplier = 2;
  
  for (let i = body.length - 1; i >= 0; i--) {
    sum += parseInt(body[i], 10) * multiplier;
    multiplier = multiplier === 7 ? 2 : multiplier + 1;
  }
  
  const calculatedDV = 11 - (sum % 11);
  let expectedDV = '';
  
  if (calculatedDV === 11) expectedDV = '0';
  else if (calculatedDV === 10) expectedDV = 'K';
  else expectedDV = calculatedDV.toString();
  
  return dv === expectedDV;
}

export function formatRUT(rut) {
  const cleanRUT = rut.replace(/\./g, '').replace('-', '');
  if (cleanRUT.length < 2) return rut;
  
  const body = cleanRUT.slice(0, -1);
  const dv = cleanRUT.slice(-1);
  
  // Formatear cuerpo con puntos
  const formattedBody = body.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  
  return `${formattedBody}-${dv}`;
}
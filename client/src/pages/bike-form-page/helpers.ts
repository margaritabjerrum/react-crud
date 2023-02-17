export const formatValues = (form: HTMLFormElement) => {
  const formData = new FormData(form);

  const brand = formData.get('brand');
  const model = formData.get('model');
  const engine = formData.get('engine');
  const power = formData.get('power');
  const seatHeight = formData.get('seatHeight');
  const weight = formData.get('weight');
  const price = formData.get('price');
  const year = formData.get('year');
  const images = formData.getAll('images');

  if (brand === null || brand instanceof File || brand.length < 2) throw new Error('incorrect Brand');
  if (model === null || model instanceof File || model.length < 2) throw new Error('incorrect Model');
  if (engine === null || engine instanceof File || engine.length < 2) throw new Error('incorrect Engine');
  if (power === null || power instanceof File || power.length < 2) throw new Error('incorrect Power');
  if (seatHeight === null || seatHeight instanceof File || seatHeight.length < 2) throw new Error('incorrect Seat Height');
  if (weight === null || weight instanceof File || weight.length < 2) throw new Error('incorrect Weight');
  if (price === null || price instanceof File || price.length < 1) throw new Error('incorrect Price');
  if (year === null || year instanceof File || year.length < 1) throw new Error('incorrect Year');
  images.forEach((img, i) => {
    if (img instanceof File || img.length < 2) throw new Error(`incorrect Image nr: ${i + 1}`);
  });

  return {
    brand,
    model,
    year: Number(year),
    price: Number(Number(price).toFixed(2)),
    stats: {
      engine,
      power: `${power} bhp`,
      seatHeight: `${seatHeight}mm`,
      weight: `${weight}kg`,
    },
    images: images as string[],
  };
};
